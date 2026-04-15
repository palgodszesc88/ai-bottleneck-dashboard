# AI Bottleneck Dashboard — Instrukcje Projektowe

## O projekcie
Dashboard inwestycyjny śledzący 87 spółek i aktywów crypto powiązanych z wąskimi gardłami AI infrastructure. System sygnałów oparty na Fair Value (FV) z momentum overlay. Język roboczy: **polski**.

Repo: `github.com/palgodszesc88/ai-bottleneck-dashboard` (public)
Właściciel: Michał (niezależny inwestor, trading income, baza Tajlandia/Polska)

## Struktura plików
```
dashboard/
  ai-bottleneck-dashboard-v2.jsx   # React dashboard (~830 linii, renderuje się w claude.ai artifacts)
  knowledge-base.md                # Baza wiedzy — macro, tezy, historia sesji
scripts/
  update_prices.py                 # v12 — ceny + momentum + macro alarms z Yahoo Finance (93 tickery)
  patch_dashboard.py               # Patcher: czyta JSONy → aktualizuje JSX (ceny, momentum, sygnały, macro, SIGNAL_HISTORY)
  news_scan.py                     # News scanner: yfinance news API → raport markdown
prompts/
  routine-price-update.md          # Prompt dla routine: codzienny price update
  routine-news-scan.md             # Prompt dla routine: 48h news scan
  routine-earnings-reaction.md     # Prompt dla routine: reakcja na earnings
data/
  prices_latest.json               # Ostatnie ceny (output z update_prices.py)
  momentum_latest.json             # Momentum ranking (output z update_prices.py)
  macro_alarms_latest.json         # Howell Macro Alarms (output z update_prices.py)
  news-scan-YYYY-MM-DD.md          # Codzienny raport newsowy
.github/workflows/
  daily-price-update.yml           # GitHub Action: 3x dziennie ceny + momentum + patch dashboard
  daily-news-scan.yml              # GitHub Action: 1x dziennie news scan
```

## Automatyzacja (GitHub Actions)

### Price Update — 3x dziennie (Pon-Pt)
Plik: `.github/workflows/daily-price-update.yml`
Schedule (czas tajski GMT+7):
- 06:00 → cron `0 23 * * 0-4` (23:00 UTC dzień wcześniej)
- 15:05 → cron `5 8 * * 1-5`
- 20:32 → cron `32 13 * * 1-5`

Pipeline: `update_prices.py --fast` → JSONy do `data/` → `patch_dashboard.py` → commit+push
Koszt: $0 (GitHub Free plan, ~330 min/mies z 2000 darmowych)

### News Scan — 1x dziennie
Plik: `.github/workflows/daily-news-scan.yml`
Schedule: 05:20 Thai (22:20 UTC) — przed pierwszym price update
Pipeline: `news_scan.py` → raport do `data/news-scan-YYYY-MM-DD.md` → commit+push
Uwaga: to prosty keyword scan z yfinance news API. Pełny AI scan z kontekstem robi Claude w chacie.

### Ręczny trigger
GitHub → Actions → wybierz workflow → "Run workflow" button

## System sygnałów (KRYTYCZNE)
Sygnały obliczane automatycznie z ceny vs Fair Value:
- 🟢 GREEN = cena < FV Low → label "Okazja"
- 🔵 BLUE = FV Low ≤ cena ≤ FV Mid (midpoint) → label "Fair Value"
- 🟡 YELLOW = FV Mid < cena ≤ FV High → label "Powyżej FV"
- 🔴 RED = cena > FV High → label "Przepłacone"

Wyjątki ręczne:
- KAP: zawsze YELLOW (bug GBp/GBP w Yahoo Finance)
- HYPE: zawsze BLUE jeśli cena = 0 (Yahoo nie zwraca ceny)

## patch_dashboard.py — znane pułapki
1. **Macro date regex**: MUSI być specyficzny `var MACRO_ALARMS = \{\s*updated: "[^"]+"` — NIE ogólny `updated: "[^"]+"` bo złapie też display string w React component i zniszczy JSX
2. **DOM nesting macro alarms**: Sekcja MacroAlarms ma strukturę:
   - Outer div (onClick, flex, space-between)
     - Left div (null): span "HOWELL..." + span "updated: " + MACRO_ALARMS.updated → ZAMKNIJ )
     - Right div (flex, gap 8): span overallStatus.label + span "▲"/"▼" → ZAMKNIJ )
   Jeśli ta struktura się zepsuje → "Unexpected token, expected ," na linii ~439
3. **Przecinki po price**: format MUSI być `price: 123, analyzed:` — brak przecinka = syntax error
4. **Ticker count**: walidacja sprawdza 87 tickerów. Jeśli mismatch → ostrzegaj ale zapisz

## Workflow: ładowanie dashboardu w chacie
Michał wkleja link:
```
https://raw.githubusercontent.com/palgodszesc88/ai-bottleneck-dashboard/main/dashboard/ai-bottleneck-dashboard-v2.jsx
```
Claude fetchuje przez web_fetch → zapisuje do /mnt/user-data/outputs/ → present_files → renderuje jako artifact.
UWAGA: nie używaj curl z bash (github.com nie jest na allowlist kontenera) — tylko web_fetch + bash zapis.

## Momentum system (3-factor academic)
- Factor 1: TS Momentum (12-1M return positive/negative)
- Factor 2: 10-month SMA (price above/below)
- Factor 3: Cross-sectional (quintile rank among all 87 tickers)
- Score 3/3 = ★, 2/3 = ✓, 1/3 = ~, 0/3 = ⚠
- Q1 = top 20%, Q5 = bottom 20%

## Konwencje kodu JSX
- Dashboard jest JEDNYM plikiem JSX (~830 linii)
- Nie importuj dodatkowych modułów poza `useState` i `recharts`
- Wszystkie dane inline (SECTORS, CATALYSTS, MACRO_ALARMS, MOMENTUM_DATA, SIGNAL_HISTORY)
- Polskie labelki w UI

## Knowledge Base
- Każda sesja dodaje nową sekcję (SESSION N UPDATE) na końcu KB
- Pending actions w sekcji 10 — aktualizuj po każdej sesji
- Claimy z news scanów wymagają weryfikacji przed integracją do FV
- FV changes dokumentuj w tabeli z powodem
- KB NIE jest na GitHub (prywatne notatki inwestycyjne) — wrzucaj jako upload do chatu

## Kluczowi analitycy w framework
Michael Howell, Luke Gromen, Darius Dale (42 Macro), Jordi Visser, Rick Rule, Larry McDonald, Tavi Costa, Raoul Pal

## Ważne zasady
- Ceny w walutach LOKALNYCH (KRW, EUR, PLN)
- FNV (Franco-Nevada) jest w skrypcie ale NIE w dashboard SECTORS — legacy
- Przy FV change: zaktualizuj ZARÓWNO JSX JAK I KB
- Catalyst calendar: usuwaj stare eventy, dodawaj nowe
- `update_prices.py` wymaga `pip install yfinance`
