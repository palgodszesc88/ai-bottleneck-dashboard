# AI Bottleneck Dashboard — Instrukcje Projektowe

## O projekcie
Dashboard inwestycyjny śledzący 87 spółek i aktywów crypto powiązanych z wąskimi gardłami AI infrastructure. System sygnałów oparty na Fair Value (FV) z momentum overlay. Język roboczy: **polski**.

## Struktura plików
```
dashboard/
  ai-bottleneck-dashboard-v2.jsx   # React dashboard (renderuje się w claude.ai artifacts)
  knowledge-base.md                # Baza wiedzy — macro, tezy, historia sesji
scripts/
  update_prices.py                 # v12 — ceny + momentum + macro alarms z Yahoo Finance
prompts/
  routine-price-update.md          # Prompt dla routine: codzienny price update
  routine-news-scan.md             # Prompt dla routine: 48h news scan
  routine-earnings-reaction.md     # Prompt dla routine: reakcja na earnings
data/
  prices_latest.json               # Ostatnie ceny (output z update_prices.py)
  momentum_latest.json             # Momentum ranking (output z update_prices.py)
  macro_alarms_latest.json         # Howell Macro Alarms (output z update_prices.py)
```

## System sygnałów (KRYTYCZNE)
Sygnały obliczane automatycznie z ceny vs Fair Value:
- 🟢 GREEN = cena < FV Low
- 🔵 BLUE = FV Low ≤ cena ≤ FV Mid (midpoint = (FV Low + FV High) / 2)
- 🟡 YELLOW = FV Mid < cena ≤ FV High
- 🔴 RED = cena > FV High

Wyjątki ręczne:
- KAP: zawsze YELLOW (bug GBp/GBP w Yahoo Finance)
- HYPE: zawsze BLUE jeśli cena = 0 (Yahoo nie zwraca ceny)

## Price update workflow
1. Uruchom `python scripts/update_prices.py --fast`
2. Wczytaj `data/prices_latest.json` i `data/momentum_latest.json` i `data/macro_alarms_latest.json`
3. W `dashboard/ai-bottleneck-dashboard-v2.jsx`:
   a. Zaktualizuj cenę w każdym stock entry: `price: NOWA_CENA, analyzed:`
   b. Zaktualizuj `MOMENTUM_DATA` z nowego JSON
   c. Zaktualizuj `MACRO_ALARMS` (wartości VIX, DXY, MOVE, 10Y, updated date)
   d. Przelicz sygnał KAŻDEGO tickera wg reguł FV Low/Mid/High
   e. Zaktualizuj SIGNAL_HISTORY — dodaj nowy wpis z datą i liczbami sygnałów
4. **NIGDY nie usuwaj przecinków** po wartościach price (format: `price: 123, analyzed:`)

## Konwencje kodu JSX
- Dashboard jest JEDNYM plikiem JSX (~830 linii)
- Nie importuj dodatkowych modułów poza `useState` i `recharts`
- Wszystkie dane inline (SECTORS, CATALYSTS, MACRO_ALARMS, MOMENTUM_DATA, SIGNAL_HISTORY)
- Polskie labelki w UI: "Okazja", "Fair Value", "Powyżej FV", "Przepłacone"

## Knowledge Base
- Każda sesja dodaje nową sekcję (SESSION N UPDATE) na końcu KB
- Pending actions w sekcji 10 — aktualizuj po każdej sesji
- Claimy z news scanów wymagają weryfikacji przed integracją do FV
- FV changes dokumentuj w tabeli z powodem

## Ważne zasady
- Ceny w walutach LOKALNYCH (KRW dla koreańskich, EUR dla europejskich, PLN dla KGH.WA)
- FNV (Franco-Nevada) jest w skrypcie ale NIE w dashboard SECTORS — to legacy, nie dodawaj
- Przy FV change: zaktualizuj ZARÓWNO JSX (fairValueLow/fairValueHigh) JAK I KB (tabela FV changes)
- Catalyst calendar: usuwaj eventy starsze niż 3 dni, dodawaj nowe z news scanów
- `update_prices.py` wymaga `pip install yfinance`. Opcjonalnie FRED_API_KEY dla HY OAS/SOFR
