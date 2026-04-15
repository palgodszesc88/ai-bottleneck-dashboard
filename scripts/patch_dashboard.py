#!/usr/bin/env python3
"""
patch_dashboard.py — Patches ai-bottleneck-dashboard-v2.jsx from JSON data files.

Reads:
  data/prices_latest.json
  data/momentum_latest.json
  data/macro_alarms_latest.json

Updates in dashboard JSX:
  1. Stock prices (price: XXX, analyzed:)
  2. MOMENTUM_DATA block
  3. MACRO_ALARMS values + date
  4. Recalculates signals (green/blue/yellow/red) based on FV Low/Mid/High
  5. Updates SIGNAL_HISTORY with new entry
"""

import json
import re
import os
import sys
from datetime import datetime

# Paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(SCRIPT_DIR)
DASHBOARD_PATH = os.path.join(REPO_ROOT, "dashboard", "ai-bottleneck-dashboard-v2.jsx")
PRICES_PATH = os.path.join(REPO_ROOT, "data", "prices_latest.json")
MOMENTUM_PATH = os.path.join(REPO_ROOT, "data", "momentum_latest.json")
MACRO_PATH = os.path.join(REPO_ROOT, "data", "macro_alarms_latest.json")

# Signal exceptions
SIGNAL_OVERRIDES = {
    "KAP": "yellow",   # GBp/GBP Yahoo bug
}
ZERO_PRICE_TICKERS = {"HYPE"}  # Yahoo returns 0, keep as blue


def load_json(path):
    if not os.path.exists(path):
        print(f"  ⚠️  File not found: {path}")
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def update_prices(jsx, prices_data):
    """Update price field in each stock entry."""
    prices = prices_data.get("prices", {})
    updated = 0
    skipped = []

    for ticker, price in prices.items():
        if price is None or price == 0:
            skipped.append(ticker)
            continue

        # Escape dots for regex
        esc = ticker.replace(".", r"\.")
        pattern = rf'(ticker: "{esc}", name: "[^"]+", price: )(\d+)'
        new_jsx = re.sub(pattern, rf"\g<1>{price}", jsx)

        if new_jsx != jsx:
            updated += 1
            jsx = new_jsx

    print(f"  💰 Prices updated: {updated} | Skipped: {len(skipped)} ({', '.join(skipped[:5])}{'...' if len(skipped) > 5 else ''})")
    return jsx


def update_momentum(jsx, momentum_data):
    """Replace entire MOMENTUM_DATA block."""
    companies = momentum_data.get("companies", [])
    if not companies:
        print("  ⚠️  No momentum data")
        return jsx

    # Build new MOMENTUM_DATA
    entries = {}
    for c in companies:
        entries[c["ticker"]] = {
            "ret12minus1": round(c["ret12minus1"], 1),
            "tsPositive": c["tsPositive"],
            "aboveSMA": c["aboveSMA"],
        }

    lines = []
    for k in sorted(entries.keys()):
        v = entries[k]
        ts = "true" if v["tsPositive"] else "false"
        sma = "true" if v["aboveSMA"] else "false"
        lines.append(f'  "{k}":{{ret12minus1:{v["ret12minus1"]},tsPositive:{ts},aboveSMA:{sma}}}')

    new_block = "const MOMENTUM_DATA = {\n" + ",\n".join(lines) + "\n};"

    # Replace in JSX
    start = jsx.find("const MOMENTUM_DATA = {")
    if start == -1:
        print("  ⚠️  MOMENTUM_DATA block not found")
        return jsx

    end = jsx.find("};", start) + 2
    jsx = jsx[:start] + new_block + jsx[end:]
    print(f"  📊 Momentum updated: {len(entries)} entries")
    return jsx


def update_macro(jsx, macro_data):
    """Update MACRO_ALARMS values and date."""
    alarms = macro_data.get("alarms", {})
    date_str = macro_data.get("date", "")[:10]
    changes = 0

    # Map JSON keys to JSX ids
    id_map = {
        "move": "move",
        "vix": "vix",
        "dxy": "dxy",
        "us10y": "us10y",
    }

    for json_id, jsx_id in id_map.items():
        alarm = alarms.get(json_id, {})
        value = alarm.get("value")
        if value is not None:
            pattern = rf'(id: "{jsx_id}"[^}}]*?value: )([\d.-]+)'
            new_jsx = re.sub(pattern, rf"\g<1>{value}", jsx)
            if new_jsx != jsx:
                changes += 1
                jsx = new_jsx

    # Update date
    jsx = re.sub(
        r'(updated: ")[^"]+(")',
        rf"\g<1>{date_str}\2",
        jsx
    )

    print(f"  🚨 Macro alarms updated: {changes} values, date={date_str}")
    return jsx


def recalculate_signals(jsx):
    """Recalculate signal for every ticker based on price vs FV Low/Mid/High."""
    pattern = r'ticker: "([^"]+)"[^}]*?price: ([\d.]+), analyzed[^}]*?fairValueLow: ([\d.]+), fairValueHigh: ([\d.]+)'
    changes = 0
    counts = {"green": 0, "blue": 0, "yellow": 0, "red": 0}

    for match in re.finditer(pattern, jsx):
        ticker = match.group(1)
        price = float(match.group(2))
        fv_low = float(match.group(3))
        fv_high = float(match.group(4))
        fv_mid = (fv_low + fv_high) / 2

        # Determine new signal
        if ticker in SIGNAL_OVERRIDES:
            new_sig = SIGNAL_OVERRIDES[ticker]
        elif ticker in ZERO_PRICE_TICKERS and price == 0:
            new_sig = "blue"
        elif price < fv_low:
            new_sig = "green"
        elif price <= fv_mid:
            new_sig = "blue"
        elif price <= fv_high:
            new_sig = "yellow"
        else:
            new_sig = "red"

        counts[new_sig] += 1

        # Find and replace signal in this entry
        entry_end = jsx.find("}", match.start()) + 1
        entry = jsx[match.start():entry_end]
        sig_match = re.search(r'signal: "(green|blue|yellow|red)"', entry)

        if sig_match and sig_match.group(1) != new_sig:
            old_entry = entry
            new_entry = entry[:sig_match.start(1)] + new_sig + entry[sig_match.end(1):]
            jsx = jsx[:match.start()] + new_entry + jsx[entry_end:]
            changes += 1

    total = sum(counts.values())
    print(f"  🚦 Signals: 🟢{counts['green']} 🔵{counts['blue']} 🟡{counts['yellow']} 🔴{counts['red']} = {total} | Changed: {changes}")
    return jsx, counts


def update_signal_history(jsx, counts):
    """Add or update today's entry in SIGNAL_HISTORY."""
    # Format date as DD.M (Roman numerals)
    roman = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI",
             7: "VII", 8: "VIII", 9: "IX", 10: "X", 11: "XI", 12: "XII"}
    now = datetime.now()
    date_label = f"{now.day}.{roman[now.month]}"

    new_entry = (
        f'  {{ date: "{date_label}", green: {counts["green"]}, '
        f'blue: {counts["blue"]}, yellow: {counts["yellow"]}, red: {counts["red"]} }}'
    )

    # Check if today's entry already exists
    if f'date: "{date_label}"' in jsx:
        # Replace existing entry
        pattern = rf'\{{ date: "{re.escape(date_label)}"[^}}]+\}}'
        jsx = re.sub(pattern, new_entry.strip(), jsx)
        print(f"  📈 SIGNAL_HISTORY: updated {date_label}")
    else:
        # Add new entry before closing ];
        jsx = re.sub(
            r'(\{ date: "[^"]+", green: \d+, blue: \d+, yellow: \d+, red: \d+ \})\s*\n\];',
            rf'\1,\n{new_entry}\n];',
            jsx
        )
        print(f"  📈 SIGNAL_HISTORY: added {date_label}")

    return jsx


def validate(jsx):
    """Basic syntax validation."""
    errors = []

    # Check brackets
    if jsx.count("[") != jsx.count("]"):
        errors.append(f"Bracket mismatch: [ = {jsx.count('[')}, ] = {jsx.count(']')}")
    if jsx.count("{") != jsx.count("}"):
        errors.append(f"Brace mismatch: {{ = {jsx.count('{')}, }} = {jsx.count('}')}")

    # Check for missing commas after price
    bad = re.findall(r"price: \d+ [a-z]", jsx)
    if bad:
        errors.append(f"Missing commas after price: {len(bad)} found")

    # Check ticker count
    tickers = re.findall(r'ticker: "', jsx)
    if len(tickers) != 87:
        errors.append(f"Ticker count: {len(tickers)} (expected 87)")

    if errors:
        for e in errors:
            print(f"  ❌ {e}")
        return False

    print("  ✅ Validation passed")
    return True


def main():
    print("=" * 50)
    print("  patch_dashboard.py — Dashboard Patcher")
    print("=" * 50)

    # Load data
    prices_data = load_json(PRICES_PATH)
    momentum_data = load_json(MOMENTUM_PATH)
    macro_data = load_json(MACRO_PATH)

    if not os.path.exists(DASHBOARD_PATH):
        print(f"  ❌ Dashboard not found: {DASHBOARD_PATH}")
        sys.exit(1)

    with open(DASHBOARD_PATH, "r", encoding="utf-8") as f:
        jsx = f.read()

    print(f"  📄 Dashboard loaded: {len(jsx)} chars")

    # Apply updates
    if prices_data:
        jsx = update_prices(jsx, prices_data)

    if momentum_data:
        jsx = update_momentum(jsx, momentum_data)

    if macro_data:
        jsx = update_macro(jsx, macro_data)

    # Recalculate signals
    jsx, counts = recalculate_signals(jsx)

    # Update signal history
    jsx = update_signal_history(jsx, counts)

    # Validate
    if not validate(jsx):
        print("  ⚠️  Validation failed — saving anyway but check manually")

    # Save
    with open(DASHBOARD_PATH, "w", encoding="utf-8") as f:
        f.write(jsx)

    print(f"\n  ✅ Dashboard saved: {DASHBOARD_PATH}")
    print("=" * 50)


if __name__ == "__main__":
    main()
