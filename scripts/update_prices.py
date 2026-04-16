#!/usr/bin/env python3
"""
AI Bottleneck Dashboard — Price & Momentum Updater v12
======================================================
Ściąga aktualne ceny + oblicza 3 akademickie wskaźniki momentum:
  1. Cross-sectional momentum 12-1M (Jegadeesh & Titman 1993)
  2. Time-series momentum (Moskowitz, Ooi & Pedersen 2012)
  3. 10-month SMA / 200-day SMA circuit breaker (Faber 2007)

v11 NEW: Howell Macro Liquidity Alarms (MOVE, VIX, DXY, 10Y, HY OAS, SOFR)
  Framework: Michael Howell (CrossBorder Capital) debt-liquidity cycle
  Sources: Howell (MOVE/DXY), Rule (HY OAS), Gromen (10Y), Dale (ro-ro)

v12 NEW: +8 tickerów (AG, DELL, ENR.DE, FN, HAG.DE, HL, MOD, VICR)
  Dashboard coverage: 87 spółek + FNV (legacy) + 6 crypto

Ceny w walutach LOKALNYCH (bez konwersji FX).

v10: DOMYŚLNIE pobiera pre/post-market ceny (per-ticker, ~2-3 min).
     --fast: batch download (szybkie ~10s, ale tylko regular session close)
v11: + Howell Macro Liquidity Alarms (6 indicators, auto-patch dashboard)
     + FRED API integration for HY OAS & SOFR
     --no-macro: skip macro alarms
v13: --fast flag DEPRECATED — premarket is ALWAYS ON (user preference)

Instalacja: pip install yfinance
Użycie:
    python update_prices.py                # ceny PRE/POST + momentum + macro alarms
    python update_prices.py --fast         # ceny TYLKO regular close (szybkie)
    python update_prices.py --prices-only  # tylko ceny (bez momentum i macro)
    python update_prices.py --no-macro     # bez macro alarms
    python update_prices.py --csv          # dodatkowy CSV z momentum
    python update_prices.py --dashboard ai-bottleneck-dashboard-v2.jsx
                                           # auto-patch MOMENTUM_DATA + MACRO_ALARMS

FRED API (optional, for HY OAS & SOFR):
    export FRED_API_KEY=your_key_here
    (Get free key: https://fred.stlouisfed.org/docs/api/api_key.html)
"""

import json
import csv
import sys
import os
import urllib.request
from datetime import datetime, timedelta

try:
    import yfinance as yf
except ImportError:
    print("❌ Brak yfinance. Zainstaluj: pip install yfinance")
    exit(1)


# ============================================================
# CONFIGURATION
# ============================================================

RISK_FREE_RATE = 0.043  # ~4.3% annualized T-bill rate

# ============================================================
# HOWELL MACRO LIQUIDITY ALARMS CONFIG
# Framework: Michael Howell (CrossBorder Capital) debt-liquidity cycle
# Thresholds: Howell (MOVE, DXY), Rule (HY OAS), Gromen (10Y), Dale (ro-ro)
# ============================================================
MACRO_TICKERS = {
    "move":  {"yahoo": "^MOVE",    "name": "MOVE Index",      "threshold_yellow": 100, "threshold_red": 120, "unit": "",  "desc": "Bond volatility (Howell)"},
    "vix":   {"yahoo": "^VIX",     "name": "VIX",             "threshold_yellow": 30,  "threshold_red": 40,  "unit": "",  "desc": "Equity volatility"},
    "dxy":   {"yahoo": "DX-Y.NYB", "name": "DXY Dollar",      "threshold_yellow": 105, "threshold_red": 110, "unit": "",  "desc": "Dollar strength (Howell: +10%=-10% liquidity)"},
    "us10y": {"yahoo": "^TNX",     "name": "US 10Y Yield",    "threshold_yellow": 4.60,"threshold_red": 5.00,"unit": "%", "desc": "Treasury yield (Gromen 4.4% line)"},
    "us02y": {"yahoo": "^IRX",     "name": "US 3M T-Bill",    "threshold_yellow": 5.00,"threshold_red": 5.50,"unit": "%", "desc": "Short rate / SOFR proxy"},
}
# HY OAS requires FRED API — add key below or set env FRED_API_KEY
FRED_API_KEY = os.environ.get("FRED_API_KEY", "")
FRED_SERIES = {
    "hy_oas": {"series": "BAMLH0A0HYM2", "name": "HY Credit Spreads", "threshold_yellow": 500, "threshold_red": 600, "unit": "bps", "transform_bps": True},
    "sofr":   {"series": "SOFR",          "name": "SOFR Rate",         "threshold_yellow": 4.80,"threshold_red": 5.20,"unit": "%",   "transform_bps": False},
}

# ============================================================
# TICKER MAP: dashboard_ticker -> { yahoo, name, sector, ccy }
# Rozszerzony o signal/conviction z dashboardu + crypto
# ============================================================
TICKERS = {
    # ⚡ Energia / zasilanie (USD)
    "CEG":   {"yahoo": "CEG",   "name": "Constellation Energy",  "sector": "Energia",           "ccy": "USD", "signal": "blue",   "conviction": "HIGH"},
    "ETN":   {"yahoo": "ETN",   "name": "Eaton Corporation",     "sector": "Energia",           "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "NEE":   {"yahoo": "NEE",   "name": "NextEra Energy",        "sector": "Energia",           "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "POWL":  {"yahoo": "POWL",  "name": "Powell Industries",     "sector": "Energia",           "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "GEV":   {"yahoo": "GEV",   "name": "GE Vernova",            "sector": "Energia",           "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "PWR":   {"yahoo": "PWR",   "name": "Quanta Services",       "sector": "Energia",           "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "BE":    {"yahoo": "BE",    "name": "Bloom Energy",           "sector": "Energia",           "ccy": "USD", "signal": "green",  "conviction": "HIGH"},
    "LNG":   {"yahoo": "LNG",   "name": "Cheniere Energy",        "sector": "Energia",           "ccy": "USD", "signal": "blue",   "conviction": "HIGH"},

    # 🧠 Pamięć / HBM
    "MU":         {"yahoo": "MU",         "name": "Micron Technology",     "sector": "Pamięć / HBM",  "ccy": "USD", "signal": "blue",   "conviction": "HIGH"},
    "000660.KS":  {"yahoo": "000660.KS",  "name": "SK Hynix (KRW)",       "sector": "Pamięć / HBM",  "ccy": "KRW", "signal": "blue",   "conviction": "HIGH"},
    "005930.KS":  {"yahoo": "005930.KS",  "name": "Samsung (KRW)",        "sector": "Pamięć / HBM",  "ccy": "KRW", "signal": "blue",   "conviction": "MEDIUM"},
    "WDC":        {"yahoo": "WDC",        "name": "Western Digital",      "sector": "Pamięć / HBM",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "SNDK":       {"yahoo": "SNDK",       "name": "Sandisk",              "sector": "Pamięć / HBM",  "ccy": "USD", "signal": "blue",   "conviction": "LOW"},

    # 🔗 Sieć / łączność (USD)
    "CRDO":  {"yahoo": "CRDO",  "name": "Credo Technology",  "sector": "Sieć",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "LITE":  {"yahoo": "LITE",  "name": "Lumentum",          "sector": "Sieć",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "COHR":  {"yahoo": "COHR",  "name": "Coherent",          "sector": "Sieć",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "GLW":   {"yahoo": "GLW",   "name": "Corning",           "sector": "Sieć",  "ccy": "USD", "signal": "blue",   "conviction": "HIGH"},
    "ANET":  {"yahoo": "ANET",  "name": "Arista Networks",   "sector": "Sieć",  "ccy": "USD", "signal": "blue",   "conviction": "HIGH"},
    "FN":    {"yahoo": "FN",    "name": "Fabrinet",          "sector": "Sieć",  "ccy": "USD", "signal": "yellow", "conviction": "MEDIUM"},

    # ❄️ Chłodzenie / infrastruktura
    "TT":       {"yahoo": "TT",        "name": "Trane Technologies",       "sector": "Chłodzenie",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "VRT":      {"yahoo": "VRT",       "name": "Vertiv Holdings",          "sector": "Chłodzenie",  "ccy": "USD", "signal": "blue",   "conviction": "HIGH"},
    "SCHN.PA":  {"yahoo": "SU.PA",     "name": "Schneider Electric (EUR)", "sector": "Chłodzenie",  "ccy": "EUR", "signal": "blue",   "conviction": "HIGH"},
    "CLS":      {"yahoo": "CLS",       "name": "Celestica",                "sector": "Chłodzenie",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "VICR":     {"yahoo": "VICR",      "name": "Vicor Corporation",        "sector": "Chłodzenie",  "ccy": "USD", "signal": "yellow", "conviction": "MEDIUM"},
    "ENR.DE":   {"yahoo": "ENR.DE",    "name": "Siemens Energy (EUR)",     "sector": "Chłodzenie",  "ccy": "EUR", "signal": "yellow", "conviction": "MEDIUM"},
    "MOD":      {"yahoo": "MOD",       "name": "Modine Manufacturing",     "sector": "Chłodzenie",  "ccy": "USD", "signal": "yellow", "conviction": "MEDIUM"},
    "DELL":     {"yahoo": "DELL",      "name": "Dell Technologies",        "sector": "Chłodzenie",  "ccy": "USD", "signal": "yellow", "conviction": "MEDIUM"},

    # ⚙️ Packaging / sprzęt semicon
    "TSM":   {"yahoo": "TSM",     "name": "TSMC",               "sector": "Packaging / Semicon",  "ccy": "USD", "signal": "blue",   "conviction": "HIGH"},
    "LRCX":  {"yahoo": "LRCX",    "name": "Lam Research",       "sector": "Packaging / Semicon",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "AMAT":  {"yahoo": "AMAT",    "name": "Applied Materials",  "sector": "Packaging / Semicon",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "ASM":   {"yahoo": "ASM.AS",  "name": "ASM Intl (EUR)",     "sector": "Packaging / Semicon",  "ccy": "EUR", "signal": "blue",   "conviction": "MEDIUM"},
    "TER":   {"yahoo": "TER",     "name": "Teradyne",           "sector": "Packaging / Semicon",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "AMKR":  {"yahoo": "AMKR",    "name": "Amkor Technology",   "sector": "Packaging / Semicon",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "ASML":  {"yahoo": "ASML.AS", "name": "ASML (EUR)",         "sector": "Packaging / Semicon",  "ccy": "EUR", "signal": "blue",   "conviction": "HIGH"},
    "KLAC":  {"yahoo": "KLAC",    "name": "KLA Corporation",    "sector": "Packaging / Semicon",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "ARM":   {"yahoo": "ARM",     "name": "Arm Holdings",       "sector": "Packaging / Semicon",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},

    # 💎 Semiconductors (USD)
    "QCOM":  {"yahoo": "QCOM",  "name": "Qualcomm",            "sector": "Semiconductors",  "ccy": "USD", "signal": "green",  "conviction": "HIGH"},
    "NVDA":  {"yahoo": "NVDA",  "name": "Nvidia",              "sector": "Semiconductors",  "ccy": "USD", "signal": "blue",   "conviction": "HIGH"},
    "AMD":   {"yahoo": "AMD",   "name": "AMD",                 "sector": "Semiconductors",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "AVGO":  {"yahoo": "AVGO",  "name": "Broadcom",            "sector": "Semiconductors",  "ccy": "USD", "signal": "blue",   "conviction": "HIGH"},
    "MRVL":  {"yahoo": "MRVL",  "name": "Marvell Technology",  "sector": "Semiconductors",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},

    # ☀️ Solar (USD)
    "ARRY":  {"yahoo": "ARRY",  "name": "Array Technologies",  "sector": "Solar",  "ccy": "USD", "signal": "blue",   "conviction": "LOW"},
    "FSLR":  {"yahoo": "FSLR",  "name": "First Solar",         "sector": "Solar",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "NXT":   {"yahoo": "NXT",   "name": "Nextracker",          "sector": "Solar",  "ccy": "USD", "signal": "blue",   "conviction": "LOW"},

    # ⛏️ Mining / surowce
    "SCCO":    {"yahoo": "SCCO",    "name": "Southern Copper",    "sector": "Mining",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "KGH.WA":  {"yahoo": "KGH.WA", "name": "KGHM (PLN)",        "sector": "Mining",  "ccy": "PLN", "signal": "blue",   "conviction": "MEDIUM"},
    "FCX":     {"yahoo": "FCX",     "name": "Freeport-McMoRan",  "sector": "Mining",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "ALB":     {"yahoo": "ALB",     "name": "Albemarle",         "sector": "Mining",  "ccy": "USD", "signal": "blue",   "conviction": "LOW"},
    "MP":      {"yahoo": "MP",      "name": "MP Materials",      "sector": "Mining",  "ccy": "USD", "signal": "blue",   "conviction": "LOW"},
    "NEM":     {"yahoo": "NEM",     "name": "Newmont",           "sector": "Mining",  "ccy": "USD", "signal": "green",  "conviction": "HIGH"},
    "B":       {"yahoo": "GOLD",    "name": "Barrick Gold",      "sector": "Mining",  "ccy": "USD", "signal": "green",  "conviction": "HIGH"},
    "WPM":     {"yahoo": "WPM",     "name": "Wheaton Precious",  "sector": "Mining",  "ccy": "USD", "signal": "green",  "conviction": "HIGH"},
    "PAAS":    {"yahoo": "PAAS",    "name": "Pan American Silver","sector": "Mining",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "HL":      {"yahoo": "HL",      "name": "Hecla Mining",      "sector": "Mining",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "AG":      {"yahoo": "AG",      "name": "First Majestic Silver","sector": "Mining","ccy": "USD", "signal": "blue",   "conviction": "LOW"},
    "SII":     {"yahoo": "SII",     "name": "Sprott Inc",        "sector": "Mining",  "ccy": "USD", "signal": "yellow", "conviction": "HIGH"},
    "FNV":     {"yahoo": "FNV",     "name": "Franco-Nevada",     "sector": "Mining",  "ccy": "USD", "signal": "blue",   "conviction": "HIGH"},

    # ☢️ Uranium
    "KAP":  {"yahoo": "KAP.L",  "name": "Kazatomprom (GDR)",    "sector": "Uranium",  "ccy": "GBp", "signal": "blue",   "conviction": "MEDIUM"},
    "CCJ":  {"yahoo": "CCJ",    "name": "Cameco",               "sector": "Uranium",  "ccy": "USD", "signal": "yellow", "conviction": "MEDIUM"},
    "UEC":  {"yahoo": "UEC",    "name": "Uranium Energy Corp",  "sector": "Uranium",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "NXE":  {"yahoo": "NXE",    "name": "NexGen Energy",        "sector": "Uranium",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},

    # 🌿 Fertilizer
    "CF":   {"yahoo": "CF",     "name": "CF Industries",        "sector": "Fertilizer", "ccy": "USD", "signal": "yellow", "conviction": "HIGH"},

    # ☁️ Hyperscalers (USD)
    "GOOGL":  {"yahoo": "GOOGL",  "name": "Alphabet",       "sector": "Hyperscalers",  "ccy": "USD", "signal": "green",  "conviction": "HIGH"},
    "META":   {"yahoo": "META",   "name": "Meta Platforms",  "sector": "Hyperscalers",  "ccy": "USD", "signal": "green",  "conviction": "HIGH"},
    "AMZN":   {"yahoo": "AMZN",   "name": "Amazon",          "sector": "Hyperscalers",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "AAPL":   {"yahoo": "AAPL",   "name": "Apple",           "sector": "Hyperscalers",  "ccy": "USD", "signal": "blue",   "conviction": "LOW"},
    "MSFT":   {"yahoo": "MSFT",   "name": "Microsoft",       "sector": "Hyperscalers",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},

    # ☁️ AI Cloud Infrastructure (USD)
    "CRWV":  {"yahoo": "CRWV",    "name": "CoreWeave",           "sector": "AI Cloud",       "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},

    # ⚡ Power Semiconductors (EUR)
    "IFX.DE": {"yahoo": "IFX.DE", "name": "Infineon (EUR)",      "sector": "Power Semicon",  "ccy": "EUR", "signal": "blue",   "conviction": "MEDIUM"},

    # ⚡ BTC Mining (USD)
    "IREN":  {"yahoo": "IREN",  "name": "Iris Energy",       "sector": "BTC Mining",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "MARA":  {"yahoo": "MARA",  "name": "Marathon Digital",  "sector": "BTC Mining",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "CLSK":  {"yahoo": "CLSK",  "name": "CleanSpark",        "sector": "BTC Mining",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},

    # 🤖 AI Software / Defense (USD)
    "PLTR":  {"yahoo": "PLTR",  "name": "Palantir",  "sector": "AI Software",  "ccy": "USD", "signal": "red",    "conviction": "LOW"},

    # 🛡️ Defense
    "LMT":     {"yahoo": "LMT",    "name": "Lockheed Martin",  "sector": "Defense",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "RTX":     {"yahoo": "RTX",    "name": "RTX Corp",         "sector": "Defense",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "RHM.DE":  {"yahoo": "RHM.DE", "name": "Rheinmetall (EUR)","sector": "Defense",  "ccy": "EUR", "signal": "yellow", "conviction": "HIGH"},
    "HAG.DE":  {"yahoo": "HAG.DE", "name": "Hensoldt (EUR)",  "sector": "Defense",  "ccy": "EUR", "signal": "yellow", "conviction": "MEDIUM"},

    # 🧬 Digital Biology / MedTech (USD)
    "TMO":   {"yahoo": "TMO",   "name": "Thermo Fisher",       "sector": "Digital Biology",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "ISRG":  {"yahoo": "ISRG",  "name": "Intuitive Surgical",  "sector": "MedTech",          "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "LLY":   {"yahoo": "LLY",   "name": "Eli Lilly",           "sector": "MedTech",          "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "DHR":   {"yahoo": "DHR",   "name": "Danaher",             "sector": "Digital Biology",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},

    # 🤖 Physical AI (USD)
    "TSLA":  {"yahoo": "TSLA",  "name": "Tesla",  "sector": "Physical AI",  "ccy": "USD", "signal": "blue",   "conviction": "LOW"},

    # 🪙 Crypto L1 (USD)
    "BTC":   {"yahoo": "BTC-USD",  "name": "Bitcoin",        "sector": "Crypto L1",  "ccy": "USD", "signal": "blue",   "conviction": "HIGH"},
    "ETH":   {"yahoo": "ETH-USD",  "name": "Ethereum",       "sector": "Crypto L1",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "SOL":   {"yahoo": "SOL-USD",  "name": "Solana",         "sector": "Crypto L1",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "BNB":   {"yahoo": "BNB-USD",  "name": "BNB (Binance)",  "sector": "Crypto L1",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
    "XRP":   {"yahoo": "XRP-USD",  "name": "XRP",            "sector": "Crypto L1",  "ccy": "USD", "signal": "blue",   "conviction": "LOW"},
    "HYPE":  {"yahoo": "HYPE-USD", "name": "Hyperliquid",    "sector": "Crypto L1",  "ccy": "USD", "signal": "blue",   "conviction": "MEDIUM"},
}

CCY_SYMBOLS = {"USD": "$", "KRW": "₩", "EUR": "€", "PLN": "zł", "GBp": "p"}


# ============================================================
# PRICE FETCHING (from v8)
# ============================================================

def fetch_current_prices(premarket=False):
    """Ściąga aktualne ceny z Yahoo Finance.
    
    premarket=False: batch download (szybkie, tylko regular close)
    premarket=True:  per-ticker Ticker.info (wolniejsze, ale daje pre/post-market)
    """
    if premarket:
        return _fetch_premarket_prices()
    
    print("📡 Ściągam aktualne ceny z Yahoo Finance (regular close)...\n")

    yahoo_tickers = list({t["yahoo"] for t in TICKERS.values()})
    yahoo_to_dash = {}
    for dash, info in TICKERS.items():
        yahoo_to_dash.setdefault(info["yahoo"], []).append(dash)

    data = yf.download(yahoo_tickers, period="5d", auto_adjust=True, progress=False)

    results = {}
    errors = []

    for yahoo_ticker, dash_tickers in yahoo_to_dash.items():
        for dash_ticker in dash_tickers:
            info = TICKERS[dash_ticker]
            try:
                if hasattr(data["Close"], "columns"):
                    close_series = data["Close"][yahoo_ticker]
                else:
                    close_series = data["Close"]

                last_price = float(close_series.dropna().iloc[-1])
                ccy = info["ccy"]

                if ccy == "KRW":
                    price_rounded = int(round(last_price, -2))
                elif ccy == "GBp":
                    price_rounded = int(round(last_price))
                else:
                    price_rounded = round(last_price)

                results[dash_ticker] = {
                    "name":          info["name"],
                    "sector":        info["sector"],
                    "ccy":           ccy,
                    "price":         round(last_price, 2),
                    "price_rounded": price_rounded,
                }

                sym = CCY_SYMBOLS.get(ccy, "")
                print(f"  ✅ {dash_ticker:12s} {sym}{price_rounded:>10,}  {ccy:4s}  ({info['name']})")

            except Exception as e:
                errors.append(dash_ticker)
                print(f"  ❌ {dash_ticker:12s} ERROR: {e}")

    return results, errors


def _fetch_premarket_prices():
    """Ściąga ceny pre/post-market z yf.Ticker().info (per ticker, wolniejsze).
    
    Priorytet: preMarketPrice > postMarketPrice > regularMarketPrice > batch fallback.
    Crypto (24/7): zawsze regularMarketPrice = aktualna cena.
    """
    print("📡 Ściągam ceny z PRE/POST-MARKET (per ticker, wolniejsze)...\n")

    results = {}
    errors = []
    stats = {"premarket": 0, "postmarket": 0, "regular": 0, "fallback": 0}

    for dash_ticker, info in TICKERS.items():
        yf_ticker = info["yahoo"]
        ccy = info["ccy"]
        is_crypto = yf_ticker.endswith("-USD")

        try:
            ticker_obj = yf.Ticker(yf_ticker)
            
            # fast_info is lighter but may not have premarket
            # info is heavier but has preMarketPrice/postMarketPrice
            try:
                ticker_info = ticker_obj.info
            except Exception:
                ticker_info = {}

            pre_price = ticker_info.get("preMarketPrice")
            post_price = ticker_info.get("postMarketPrice")
            reg_price = ticker_info.get("regularMarketPrice") or ticker_info.get("currentPrice")
            prev_close = ticker_info.get("regularMarketPreviousClose") or ticker_info.get("previousClose")

            # Wybierz najaktualniejszą cenę
            if pre_price and not is_crypto:
                chosen_price = pre_price
                source = "PRE"
                stats["premarket"] += 1
            elif post_price and not is_crypto:
                chosen_price = post_price
                source = "POST"
                stats["postmarket"] += 1
            elif reg_price:
                chosen_price = reg_price
                source = "LIVE" if is_crypto else "CLOSE"
                stats["regular"] += 1
            else:
                # Fallback: batch download
                try:
                    fb = yf.download(yf_ticker, period="5d", auto_adjust=True, progress=False)
                    if hasattr(fb.columns, 'levels') and len(fb.columns.levels) > 1:
                        chosen_price = float(fb["Close"].iloc[:, 0].dropna().iloc[-1])
                    else:
                        chosen_price = float(fb["Close"].dropna().iloc[-1])
                    source = "FB"
                    stats["fallback"] += 1
                except Exception:
                    raise ValueError("brak danych z Yahoo")

            last_price = float(chosen_price)

            # Zaokrąglenie
            if ccy == "KRW":
                price_rounded = int(round(last_price, -2))
            elif ccy == "GBp":
                price_rounded = int(round(last_price))
            else:
                price_rounded = round(last_price)

            # Delta vs previous close
            delta_str = ""
            if prev_close and prev_close > 0 and source in ("PRE", "POST"):
                delta_pct = ((last_price - prev_close) / prev_close) * 100
                arrow = "▲" if delta_pct >= 0 else "▼"
                delta_str = f"  {arrow}{abs(delta_pct):+.1f}%".replace("+-", "-")
                delta_str = f"  {arrow} {abs(delta_pct):.1f}%"

            results[dash_ticker] = {
                "name":          info["name"],
                "sector":        info["sector"],
                "ccy":           ccy,
                "price":         round(last_price, 2),
                "price_rounded": price_rounded,
                "source":        source,
            }

            sym = CCY_SYMBOLS.get(ccy, "")
            print(f"  ✅ {dash_ticker:12s} {sym}{price_rounded:>10,}  {ccy:4s}  [{source:5s}]{delta_str}  ({info['name']})")

        except Exception as e:
            errors.append(dash_ticker)
            print(f"  ❌ {dash_ticker:12s} ERROR: {e}")

    print(f"\n  📊 Źródła cen: PRE={stats['premarket']}, POST={stats['postmarket']}, "
          f"REGULAR={stats['regular']}, FALLBACK={stats['fallback']}")

    return results, errors


# ============================================================
# MOMENTUM DATA FETCHING (new in v9)
# ============================================================

def fetch_momentum_data():
    """Pobiera dane historyczne do kalkulacji momentum (monthly + daily SMA)."""
    print("\n📊 Pobieram dane historyczne do momentum...\n")

    results = {}
    errors = []

    for dash_ticker, info in TICKERS.items():
        yf_ticker = info["yahoo"]
        try:
            # --- Monthly data (14 months back for 12-1M calculation) ---
            end_date = datetime.now()
            start_date = end_date - timedelta(days=14 * 31)

            monthly = yf.download(
                yf_ticker,
                start=start_date.strftime("%Y-%m-%d"),
                end=end_date.strftime("%Y-%m-%d"),
                interval="1mo",
                progress=False,
                auto_adjust=True,
            )

            if monthly.empty or len(monthly) < 2:
                errors.append(dash_ticker)
                print(f"  ❌ {dash_ticker:12s} brak danych monthly")
                continue

            # Handle multi-level columns
            if hasattr(monthly.columns, 'levels') and len(monthly.columns.levels) > 1:
                closes = monthly["Close"].iloc[:, 0]
            else:
                closes = monthly["Close"]
            closes = closes.dropna()

            if len(closes) < 2:
                errors.append(dash_ticker)
                continue

            price_now = float(closes.iloc[-1])
            price_1m = float(closes.iloc[-2])

            # Find price ~12 months ago
            target_12m = end_date - timedelta(days=365)
            price_12m = None
            for idx in closes.index:
                ts = idx.to_pydatetime() if hasattr(idx, 'to_pydatetime') else idx
                if hasattr(ts, 'tz') and ts.tz:
                    ts = ts.replace(tzinfo=None)
                if ts <= target_12m:
                    price_12m = float(closes.loc[idx])
            if price_12m is None:
                price_12m = float(closes.iloc[0])

            # 10-month SMA from monthly
            sma_window = min(10, len(closes))
            sma_10m = float(closes.iloc[-sma_window:].mean())

            # --- Daily data for more precise 200-day SMA + RSI ---
            rsi_val = None
            try:
                daily = yf.download(
                    yf_ticker,
                    start=(end_date - timedelta(days=300)).strftime("%Y-%m-%d"),
                    end=end_date.strftime("%Y-%m-%d"),
                    interval="1d",
                    progress=False,
                    auto_adjust=True,
                )
                if not daily.empty and len(daily) >= 50:
                    if hasattr(daily.columns, 'levels') and len(daily.columns.levels) > 1:
                        d_closes = daily["Close"].iloc[:, 0]
                    else:
                        d_closes = daily["Close"]
                    d_closes = d_closes.dropna()
                    sma_window_d = min(200, len(d_closes))
                    sma_200d = float(d_closes.iloc[-sma_window_d:].mean())
                    sma_10m = sma_200d  # Override with more precise daily SMA
                    rsi_val = calculate_rsi(d_closes)
            except Exception:
                pass  # Fall back to monthly SMA

            results[dash_ticker] = {
                "price": round(price_now, 4),
                "price1mAgo": round(price_1m, 4),
                "price12mAgo": round(price_12m, 4),
                "sma10m": round(sma_10m, 4),
                "rsi": rsi_val,
            }

            print(f"  ✅ {dash_ticker:12s} now={price_now:>10.2f}  12m={price_12m:>10.2f}  sma={sma_10m:>10.2f}")

        except Exception as e:
            errors.append(dash_ticker)
            print(f"  ❌ {dash_ticker:12s} ERROR: {e}")

    return results, errors


# ============================================================
# RSI CALCULATION
# ============================================================

def calculate_rsi(closes, period=14):
    """Calculate RSI(14) from daily close prices."""
    if len(closes) < period + 1:
        return None
    deltas = closes.diff().dropna()
    gains = deltas.where(deltas > 0, 0.0)
    losses = (-deltas).where(deltas < 0, 0.0)
    avg_gain = gains.iloc[:period].mean()
    avg_loss = losses.iloc[:period].mean()
    if avg_loss == 0:
        return 100.0
    for i in range(period, len(deltas)):
        avg_gain = (avg_gain * (period - 1) + gains.iloc[i]) / period
        avg_loss = (avg_loss * (period - 1) + losses.iloc[i]) / period
    if avg_loss == 0:
        return 100.0
    rs = avg_gain / avg_loss
    return round(100 - (100 / (1 + rs)), 1)


def save_rsi_json(rsi_data, filename):
    """Save RSI data to JSON."""
    output = {
        "date": datetime.now().strftime("%Y-%m-%dT%H:%M"),
        "period": 14,
        "count": len(rsi_data),
        "rsi": rsi_data,
    }
    with open(filename, "w") as f:
        json.dump(output, f, indent=2)
    print(f"  💾 {filename} saved ({len(rsi_data)} tickers)")


# ============================================================
# MOMENTUM CALCULATIONS
# ============================================================

def calculate_momentum(dash_ticker, prices):
    """Oblicz 3 akademickie wskaźniki momentum."""
    info = TICKERS[dash_ticker]
    p = prices

    ret_12m = ((p["price"] - p["price12mAgo"]) / p["price12mAgo"]) * 100
    ret_1m = ((p["price"] - p["price1mAgo"]) / p["price1mAgo"]) * 100
    ret_12minus1 = ((p["price1mAgo"] - p["price12mAgo"]) / p["price12mAgo"]) * 100

    excess_return = ret_12m - (RISK_FREE_RATE * 100)
    ts_positive = excess_return > 0
    above_sma = p["price"] >= p["sma10m"]
    tech_score = (1 if ts_positive else 0) + (1 if above_sma else 0)
    quad_score = tech_score + (1 if info["conviction"] == "HIGH" else 0)

    return {
        "ticker": dash_ticker,
        "name": info["name"],
        "sector": info["sector"],
        "ccy": info["ccy"],
        "signal": info["signal"],
        "conviction": info["conviction"],
        "price": p["price"],
        "price12mAgo": p["price12mAgo"],
        "price1mAgo": p["price1mAgo"],
        "sma10m": p["sma10m"],
        "ret12m": round(ret_12m, 2),
        "ret1m": round(ret_1m, 2),
        "ret12minus1": round(ret_12minus1, 2),
        "excessReturn12m": round(excess_return, 2),
        "tsPositive": ts_positive,
        "aboveSMA": above_sma,
        "technicalScore": tech_score,
        "quadScore": quad_score,
    }


# ============================================================
# OUTPUT — PRICES (from v8)
# ============================================================

def save_prices_csv(results, filename):
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["ticker", "name", "sector", "ccy", "price", "price_rounded", "date"])
        date_str = datetime.now().strftime("%Y-%m-%d")
        for ticker in sorted(results.keys()):
            r = results[ticker]
            writer.writerow([ticker, r["name"], r["sector"], r["ccy"], r["price"], r["price_rounded"], date_str])
    print(f"\n📄 Ceny CSV: {filename}")


def save_prices_json(results, filename):
    price_map = {t: r["price_rounded"] for t, r in results.items()}
    output = {
        "date":       datetime.now().strftime("%Y-%m-%d %H:%M"),
        "source":     "Yahoo Finance (yfinance)",
        "count":      len(price_map),
        "prices":     price_map,
        "currencies": {t: r["ccy"] for t, r in results.items()},
    }
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    print(f"📄 Ceny JSON: {filename}")


# ============================================================
# OUTPUT — MOMENTUM (new in v9)
# ============================================================

def print_momentum_table(momentum_results):
    """Drukuj tabelę momentum w terminalu."""
    results = sorted(momentum_results, key=lambda x: x["ret12minus1"], reverse=True)

    quintile_size = max(1, len(results) // 5)
    top_q = {r["ticker"] for r in results[:quintile_size]}
    bottom_q = {r["ticker"] for r in results[-quintile_size:]}

    sig_map = {"green": "🟢", "blue": "🔵", "yellow": "🟡", "red": "🔴"}

    print("\n" + "=" * 140)
    print("  ACADEMIC MOMENTUM RANKING")
    print(f"  {datetime.now().strftime('%Y-%m-%d %H:%M')} | Risk-free: {RISK_FREE_RATE*100:.1f}%")
    print(f"  Jegadeesh & Titman (12-1M) | Moskowitz, Ooi & Pedersen (TS) | Faber (10M SMA)")
    print("=" * 140)

    print(f"\n{'#':>3} {'TICKER':<12} {'SECTOR':<18} {'PRICE':>10} {'12-1M%':>8} {'12M%':>8} {'1M%':>7} {'TS':>3} {'SMA':>4} {'SIG':>3} {'CONV':>6} {'QNTL':>8} {'STATUS':<18}")
    print("-" * 140)

    for i, r in enumerate(results, 1):
        is_top = r["ticker"] in top_q
        is_bottom = r["ticker"] in bottom_q
        is_quad = r["quadScore"] == 3 and is_top
        is_caution = r["technicalScore"] == 0

        if is_quad:                                        status = "★ QUAD+TOP"
        elif r["quadScore"] == 3:                          status = "★ QUAD"
        elif is_top and r["aboveSMA"] and r["tsPositive"]: status = "TOP Q + TECH ✓"
        elif is_top:                                       status = "TOP QUINTILE"
        elif is_caution and is_bottom:                     status = "⚠ BOTTOM+WARN"
        elif is_caution:                                   status = "⚠ CAUTION"
        elif is_bottom:                                    status = "↓ BOTTOM Q"
        elif r["aboveSMA"] and r["tsPositive"]:            status = "TECH ✓"
        elif not r["aboveSMA"] and not r["tsPositive"]:    status = "TECH ✗✗"
        else:                                              status = "MIXED"

        ts = "+" if r["tsPositive"] else "−"
        sma = "▲" if r["aboveSMA"] else "▼"
        sig = sig_map.get(r["signal"], "⚪")
        qntl = "TOP 20%" if is_top else ("BOT 20%" if is_bottom else "MID")
        p_str = f"{r['price']:,.2f}" if r["price"] < 10000 else f"{r['price']:,.0f}"

        print(
            f"{i:>3} {r['ticker']:<12} {r['sector']:<18} {p_str:>10} "
            f"{r['ret12minus1']:>+7.1f}% {r['ret12m']:>+7.1f}% {r['ret1m']:>+6.1f}% "
            f" {ts:>1}   {sma:>1}  {sig:>2} {r['conviction']:>6} {qntl:>8} {status:<18}"
        )

    # Summary
    above = sum(1 for r in results if r["aboveSMA"])
    ts_pos = sum(1 for r in results if r["tsPositive"])
    quads = sum(1 for r in results if r["quadScore"] == 3)
    cautions = sum(1 for r in results if r["technicalScore"] == 0)

    print("-" * 140)
    print(f"\n  📊 PODSUMOWANIE: {len(results)} spółek")
    print(f"     Above 10M SMA: {above}/{len(results)} ({above/len(results)*100:.0f}%)")
    print(f"     TS Momentum +:  {ts_pos}/{len(results)} ({ts_pos/len(results)*100:.0f}%)")
    print(f"     ★ Quadruple:   {quads}")
    print(f"     ⚠ Caution:     {cautions}")

    # Conflict alerts
    conflicts = [r for r in results if r["conviction"] == "HIGH" and r["technicalScore"] == 0]
    if conflicts:
        print(f"\n  ⚠ KONFLIKTY (HIGH conviction + oba technicals negatywne):")
        for r in conflicts:
            print(f"     {r['ticker']:<10} {sig_map.get(r['signal'], '')} {r['conviction']}  →  TS:− SMA:▼  →  ZMNIEJSZ pozycję, czekaj na SMA reclaim")

    print()


def save_momentum_json(momentum_results, filename):
    """Zapisz momentum jako JSON."""
    results = sorted(momentum_results, key=lambda x: x["ret12minus1"], reverse=True)
    output = {
        "generated": datetime.now().isoformat(),
        "risk_free_rate": RISK_FREE_RATE,
        "methodology": {
            "cross_sectional": "12-minus-1 month returns (Jegadeesh & Titman 1993)",
            "time_series": "12-month excess return vs risk-free (Moskowitz, Ooi & Pedersen 2012)",
            "sma_circuit_breaker": "Price vs 200-day SMA (Faber 2007, Brock et al. 1992)",
        },
        "companies": results,
        "summary": {
            "total": len(results),
            "above_sma": sum(1 for r in results if r["aboveSMA"]),
            "ts_positive": sum(1 for r in results if r["tsPositive"]),
            "quadruple_confirm": sum(1 for r in results if r["quadScore"] == 3),
            "double_caution": sum(1 for r in results if r["technicalScore"] == 0),
        },
    }
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    print(f"📄 Momentum JSON: {filename}")


def save_momentum_csv(momentum_results, filename):
    """Zapisz momentum jako CSV."""
    results = sorted(momentum_results, key=lambda x: x["ret12minus1"], reverse=True)
    fieldnames = [
        "ticker", "name", "sector", "ccy", "price", "price12mAgo", "price1mAgo",
        "sma10m", "ret12minus1", "ret12m", "ret1m", "excessReturn12m",
        "tsPositive", "aboveSMA", "technicalScore", "quadScore",
        "signal", "conviction",
    ]
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for r in results:
            writer.writerow({k: r.get(k, "") for k in fieldnames})
    print(f"📄 Momentum CSV: {filename}")


def save_momentum_js(momentum_results, filename):
    """Zapisz jako JS const do wklejenia w React dashboard."""
    results = sorted(momentum_results, key=lambda x: x["ret12minus1"], reverse=True)
    with open(filename, "w", encoding="utf-8") as f:
        f.write("// Auto-generated by update_prices.py v9\n")
        f.write(f"// Generated: {datetime.now().isoformat()}\n")
        f.write(f"// Risk-free rate: {RISK_FREE_RATE}\n\n")
        f.write("const companies = ")
        f.write(json.dumps(results, indent=2))
        f.write(";\n")
    print(f"📄 Momentum JS: {filename} (wklej do momentum-ranking.jsx)")


def patch_dashboard(momentum_results, dashboard_path):
    """Auto-patch MOMENTUM_DATA w pliku dashboardu JSX."""
    import re

    if not os.path.exists(dashboard_path):
        print(f"  ⚠ Dashboard nie znaleziony: {dashboard_path}")
        return False

    with open(dashboard_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "MOMENTUM_DATA" not in content:
        print(f"  ⚠ Brak MOMENTUM_DATA w {dashboard_path} — pomiń patch")
        return False

    # Build compact MOMENTUM_DATA object
    lines = []
    for r in sorted(momentum_results, key=lambda x: x["ticker"]):
        t = r["ticker"]
        ts = "true" if r["tsPositive"] else "false"
        sma = "true" if r["aboveSMA"] else "false"
        ret = r["ret12minus1"]
        lines.append(f'  "{t}"' + ':{' + f'ret12minus1:{ret},tsPositive:{ts},aboveSMA:{sma}' + '}')

    new_data = "const MOMENTUM_DATA = {\n" + ",\n".join(lines) + ",\n};"

    # Replace MOMENTUM_DATA block using regex
    pattern = r'const MOMENTUM_DATA = \{[^;]*\};'
    match = re.search(pattern, content, re.DOTALL)

    if not match:
        print(f"  ⚠ Nie udało się znaleźć MOMENTUM_DATA block w {dashboard_path}")
        return False

    new_content = content[:match.start()] + new_data + content[match.end():]

    # Backup
    backup_path = dashboard_path + ".bak"
    with open(backup_path, "w", encoding="utf-8") as f:
        f.write(content)

    # Write patched file
    with open(dashboard_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    count = len(momentum_results)
    print(f"  ✅ Dashboard PATCHED: {count} tickerów w MOMENTUM_DATA ({dashboard_path})")
    print(f"     Backup: {backup_path}")
    return True


# ============================================================
# HOWELL MACRO LIQUIDITY ALARMS
# ============================================================

def fetch_macro_alarms():
    """Fetch macro liquidity alarm indicators via yfinance + FRED."""
    print("\n🚨 HOWELL MACRO LIQUIDITY ALARMS")
    print("-" * 50)

    results = {}

    # --- yfinance macro tickers ---
    for alarm_id, cfg in MACRO_TICKERS.items():
        try:
            t = yf.Ticker(cfg["yahoo"])
            hist = t.history(period="5d")
            if len(hist) > 0:
                value = round(float(hist['Close'].iloc[-1]), 2)
                results[alarm_id] = value
            else:
                print(f"  ❌ {cfg['name']}: no data")
        except Exception as e:
            print(f"  ❌ {cfg['name']}: {str(e)[:50]}")

    # --- FRED API (HY OAS, SOFR) ---
    if FRED_API_KEY:
        for alarm_id, cfg in FRED_SERIES.items():
            try:
                end_d = datetime.now().strftime("%Y-%m-%d")
                start_d = (datetime.now() - timedelta(days=14)).strftime("%Y-%m-%d")
                url = (f"https://api.stlouisfed.org/fred/series/observations"
                       f"?series_id={cfg['series']}&api_key={FRED_API_KEY}"
                       f"&file_type=json&observation_start={start_d}"
                       f"&observation_end={end_d}&sort_order=desc&limit=5")
                req = urllib.request.Request(url)
                with urllib.request.urlopen(req, timeout=10) as resp:
                    data = json.loads(resp.read().decode())
                for obs in data.get("observations", []):
                    if obs["value"] != ".":
                        val = float(obs["value"])
                        if cfg.get("transform_bps"):
                            val = int(val * 100)
                        results[alarm_id] = val
                        break
            except Exception as e:
                print(f"  ❌ FRED {cfg['series']}: {str(e)[:50]}")
    else:
        print("  ⚠️  FRED_API_KEY not set — HY OAS & SOFR skipped")
        print("     Get free key: https://fred.stlouisfed.org/docs/api/api_key.html")

    # --- Display alarm status ---
    all_configs = {}
    for k, v in MACRO_TICKERS.items():
        all_configs[k] = v
    for k, v in FRED_SERIES.items():
        all_configs[k] = v

    active_alarms = 0
    for alarm_id, value in results.items():
        cfg = all_configs.get(alarm_id, {})
        name = cfg.get("name", alarm_id)
        unit = cfg.get("unit", "")
        ty = cfg.get("threshold_yellow", 999)
        tr = cfg.get("threshold_red", 999)

        if value >= tr:
            status = "🔴 ALARM"
            active_alarms += 1
        elif value >= ty:
            status = "🟡 WATCH"
            active_alarms += 1
        else:
            status = "🟢 OK   "

        print(f"  {status}  {name:20s}  {value}{unit:4s}  (⚠️{ty} 🔴{tr})")

    if active_alarms == 0:
        print("\n  ✅ ALL CLEAR — stock-specific drivers dominate")
    elif active_alarms <= 2:
        print(f"\n  🟡 WATCH — {active_alarms} indicator(s) elevated")
    else:
        print(f"\n  🔴 DANGER — {active_alarms} alarms! Global liquidity overrides stock-picking!")

    # --- Save JSON ---
    output = {"date": datetime.now().strftime("%Y-%m-%d %H:%M"), "alarms": {}}
    for alarm_id in list(MACRO_TICKERS.keys()) + list(FRED_SERIES.keys()):
        cfg = all_configs.get(alarm_id, {})
        val = results.get(alarm_id)
        output["alarms"][alarm_id] = {
            "name": cfg.get("name", alarm_id),
            "value": val,
            "threshold_yellow": cfg.get("threshold_yellow"),
            "threshold_red": cfg.get("threshold_red"),
            "unit": cfg.get("unit", ""),
            "status": "ALARM" if val and val >= cfg.get("threshold_red", 999)
                     else "WATCH" if val and val >= cfg.get("threshold_yellow", 999)
                     else "OK" if val else "NO_DATA"
        }

    with open("macro_alarms_latest.json", "w") as f:
        json.dump(output, f, indent=2)
    print(f"  💾 macro_alarms_latest.json saved")

    return output


def patch_dashboard_alarms(alarms_data, dashboard_path):
    """Auto-update MACRO_ALARMS values in dashboard JSX."""
    import re

    if not os.path.exists(dashboard_path):
        return False

    with open(dashboard_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if "MACRO_ALARMS" not in content:
        print("  ⚠️  MACRO_ALARMS section not found in dashboard")
        return False

    alarms = alarms_data.get("alarms", {})
    changes = 0
    for alarm_id, data in alarms.items():
        if data["value"] is None:
            continue
        pattern = rf'(id: "{alarm_id}", name: "[^"]+", value: )([\d.]+)'
        match = re.search(pattern, content)
        if match:
            old_val = match.group(2)
            new_val = str(data["value"])
            if old_val != new_val:
                content = content[:match.start(2)] + new_val + content[match.end(2):]
                changes += 1

    # Update date
    date_str = alarms_data.get("date", "")[:10]
    content = re.sub(
        r'(var MACRO_ALARMS = \{\s*updated: ")[^"]+(")',
        rf'\g<1>{date_str}\2',
        content
    )

    with open(dashboard_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  📊 Dashboard alarms updated: {changes} values changed")
    return changes > 0


# ============================================================
# MAIN
# ============================================================

def main():
    prices_only = "--prices-only" in sys.argv
    save_csv_flag = "--csv" in sys.argv
    # --fast flag DEPRECATED — premarket is ALWAYS ON (user preference)
    fast_mode = False
    premarket = True
    if "--fast" in sys.argv:
        print("  ⚠️  --fast flag ignored (premarket zawsze ON)")

    # Dashboard path: auto-detect or use --dashboard flag
    dashboard_path = None
    for i, arg in enumerate(sys.argv):
        if arg == "--dashboard" and i + 1 < len(sys.argv):
            dashboard_path = sys.argv[i + 1]
    if dashboard_path is None:
        # Auto-detect: look for dashboard file in common locations
        candidates = [
            "ai-bottleneck-dashboard-v2.jsx",
            "../ai-bottleneck-dashboard-v2.jsx",
            os.path.expanduser("~/Downloads/ai-bottleneck-dashboard-v2.jsx"),
            os.path.expanduser("~/Desktop/ai-bottleneck-dashboard-v2.jsx"),
        ]
        for c in candidates:
            if os.path.exists(c):
                dashboard_path = c
                break

    date_str = datetime.now().strftime("%Y%m%d")

    print("=" * 60)
    print("  AI Bottleneck Dashboard — Price & Momentum Updater v12")
    print(f"  Data: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"  Tickery: {len(TICKERS)}")
    if prices_only:
        print("  Tryb: TYLKO CENY (--prices-only)")
    elif fast_mode:
        print("  Tryb: CENY REGULAR CLOSE + MOMENTUM (--fast)")
    else:
        print("  Tryb: CENY PRE/POST-MARKET + MOMENTUM (domyślne)")
    if premarket:
        print("  ⚡ Pre/post-market: TAK (per-ticker, ~2-3 min)")
    else:
        print("  ⚡ Batch mode: szybkie (~10s), tylko regular close")
    if dashboard_path:
        print(f"  Dashboard: {dashboard_path}")
    print("=" * 60)

    # ── KROK 1: Aktualne ceny ──
    price_results, price_errors = fetch_current_prices(premarket=premarket)

    save_prices_csv(price_results, f"prices_{date_str}.csv")
    save_prices_json(price_results, "prices_latest.json")

    print(f"\n  ✅ Ceny pobrane: {len(price_results)}/{len(TICKERS)}")
    if price_errors:
        print(f"  ❌ Błędy cen: {', '.join(price_errors)}")

    if prices_only:
        print("\n💡 Wrzuć prices_latest.json do Claude i powiedz:")
        print('   "Zaktualizuj ceny w dashboardzie na podstawie tego pliku"')
        return

    # ── KROK 2: Dane historyczne do momentum ──
    mom_prices, mom_errors = fetch_momentum_data()

    # ── KROK 3: Oblicz momentum ──
    momentum_results = []
    for dash_ticker, prices in mom_prices.items():
        metrics = calculate_momentum(dash_ticker, prices)
        momentum_results.append(metrics)

    # ── KROK 4: Wyświetl i zapisz ──
    print_momentum_table(momentum_results)

    save_momentum_json(momentum_results, "momentum_latest.json")
    save_momentum_js(momentum_results, "momentum_companies.js")

    # ── KROK 3b: RSI(14) ──
    rsi_data = {}
    for dash_ticker, prices in mom_prices.items():
        if prices.get("rsi") is not None:
            rsi_data[dash_ticker] = prices["rsi"]
    save_rsi_json(rsi_data, "rsi_latest.json")

    if save_csv_flag:
        save_momentum_csv(momentum_results, f"momentum_{date_str}.csv")

    # ── KROK 5: Auto-patch dashboard ──
    patched = False
    if dashboard_path:
        print(f"\n🔧 Auto-patch dashboardu...")
        patched = patch_dashboard(momentum_results, dashboard_path)

    # ── KROK 6: Howell Macro Liquidity Alarms ──
    macro_patched = False
    if "--no-macro" not in sys.argv:
        alarms_data = fetch_macro_alarms()
        if dashboard_path:
            macro_patched = patch_dashboard_alarms(alarms_data, dashboard_path)
    else:
        print("\n  ⏭️  Macro alarms skipped (--no-macro)")

    # ── Podsumowanie końcowe ──
    print("=" * 60)
    print("  📁 PLIKI WYGENEROWANE:")
    print(f"     prices_{date_str}.csv     — ceny (CSV)")
    print(f"     prices_latest.json        — ceny (JSON dla Claude)")
    print(f"     momentum_latest.json      — momentum ranking (JSON)")
    print(f"     momentum_companies.js     — dane JS (dla React)")
    if save_csv_flag:
        print(f"     momentum_{date_str}.csv   — momentum (CSV/Excel)")
    if "--no-macro" not in sys.argv:
        print(f"     macro_alarms_latest.json  — 🚨 Howell liquidity alarms")
    if patched:
        print(f"     {dashboard_path} — ✅ MOMENTUM_DATA zaktualizowane!")
    if macro_patched:
        print(f"     {dashboard_path} — ✅ MACRO_ALARMS zaktualizowane!")
    print("=" * 60)
    if not patched and not dashboard_path:
        print("\n💡 Aby auto-aktualizować dashboard, dodaj flagę --dashboard:")
        print(f"   python update_prices.py --dashboard ai-bottleneck-dashboard-v2.jsx")
    print(f"\n  Gotowe! {len(price_results)} cen + {len(momentum_results)} momentum + macro alarms.\n")


if __name__ == "__main__":
    main()
