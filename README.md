# AI Bottleneck Dashboard — Repo & Routines

Dashboard inwestycyjny śledzący 87 spółek i aktywów crypto powiązanych z wąskimi gardłami infrastruktury AI. Automatyzacja przez Claude Code Routines.

## Quick Start

```bash
# 1. Sklonuj repo
git clone https://github.com/YOUR_USER/ai-bottleneck-dashboard.git
cd ai-bottleneck-dashboard

# 2. Zainstaluj zależności
pip install yfinance

# 3. Opcjonalnie: FRED API key (dla HY OAS i SOFR)
export FRED_API_KEY=your_key_here

# 4. Ręczny price update
cd scripts && python update_prices.py --fast

# 5. Dashboard renderuje się w claude.ai → wrzuć JSX jako artifact
```

## Struktura repo

```
├── CLAUDE.md                          # Instrukcje dla Claude Code (czytane automatycznie)
├── README.md                          # Ten plik
├── dashboard/
│   ├── ai-bottleneck-dashboard-v2.jsx # React dashboard (~830 linii)
│   └── knowledge-base.md             # Baza wiedzy — macro, tezy, sesje
├── scripts/
│   └── update_prices.py              # v12 — 93 tickery + macro alarms
├── prompts/
│   ├── routine-price-update.md       # Prompt: codzienny price update
│   ├── routine-news-scan.md          # Prompt: 48h news scan
│   └── routine-earnings-reaction.md  # Prompt: reakcja na earnings
└── data/
    ├── prices_latest.json            # Output: ceny
    ├── momentum_latest.json          # Output: momentum ranking
    ├── macro_alarms_latest.json      # Output: Howell Alarms
    └── earnings/                     # Raporty earnings per spółka
```

## Claude Code Routines — Setup

### Wymagania
- Claude Pro, Max, Team lub Enterprise plan
- Claude Code z web access enabled
- Repo na GitHubie (public lub private)

### Routine 1: Codzienny Price Update
1. Otwórz [claude.ai/code/routines](https://claude.ai/code/routines)
2. Kliknij **New Routine**
3. Repo: `ai-bottleneck-dashboard`
4. Prompt: skopiuj zawartość `prompts/routine-price-update.md`
5. Trigger: **Schedule → Daily, 19:30 CET** (po zamknięciu EU, w trakcie US session)
6. Connectors: brak wymaganych

Alternatywnie z CLI:
```bash
/schedule daily price update at 19:30 CET
```

### Routine 2: News Scan
1. New Routine → Repo: `ai-bottleneck-dashboard`
2. Prompt: skopiuj `prompts/routine-news-scan.md`
3. Trigger: **Schedule → Daily, 08:00 CET** (przed otwarciem EU)
4. Connectors: **web search** (wymagane!)

### Routine 3: Earnings Reaction
1. New Routine → Repo: `ai-bottleneck-dashboard`
2. Prompt: skopiuj `prompts/routine-earnings-reaction.md`
3. Trigger: **API** → skopiuj endpoint URL i token
4. Connectors: **web search** (wymagane!)

Użycie:
```bash
# Po earnings ASML:
curl -X POST https://api.claude.ai/routines/ROUTINE_ID/fire \
  -H "Authorization: Bearer TOKEN" \
  -d '{"text": "ASML Q1: rev €8.8B, EPS $8.12, bookings €5.2B, China 19%"}'
```

## System sygnałów

| Signal | Warunek | Label UI |
|--------|---------|----------|
| 🟢 GREEN | cena < FV Low | Okazja |
| 🔵 BLUE | FV Low ≤ cena ≤ FV Mid | Fair Value |
| 🟡 YELLOW | FV Mid < cena ≤ FV High | Powyżej FV |
| 🔴 RED | cena > FV High | Przepłacone |

FV Mid = (FV Low + FV High) / 2

## Limity Routines

| Plan | Routines/dzień | Nasz usage |
|------|---------------|------------|
| Pro | 5 | 2-3 (price + news) |
| Max | 15 | 2-3 + earnings on demand |
| Team | 25 | full automation |

## Ręczny workflow (bez routines)

Jeśli nie masz Claude Code:
1. Uruchom `python scripts/update_prices.py --fast` lokalnie
2. Wrzuć 3 pliki JSON do konwersacji na claude.ai
3. Claude zaktualizuje dashboard w artifacts
4. Pobierz zaktualizowany JSX

## License

Prywatne narzędzie analityczne. Nie stanowi rekomendacji inwestycyjnej.
