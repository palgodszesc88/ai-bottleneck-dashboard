# Routine: Earnings Reaction
# Trigger: API — POST z tickerem i kluczowymi danymi earnings
# Repo: ai-bottleneck-dashboard
# Connectors: web search (wymagane)

## Prompt

Spółka z dashboardu AI Bottleneck właśnie opublikowała wyniki kwartalne. Przeanalizuj i zaproponuj zmiany.

### Input (z API trigger body):
Ticker i kluczowe metryki zostaną przekazane w tekście triggera, np.:
"ASML Q1: rev €8.8B (beat), EPS $8.12 (beat), bookings €5.2B, China 19%, GM 53%"

### Krok 1: Wczytaj kontekst
- Z `dashboard/ai-bottleneck-dashboard-v2.jsx` — znajdź wpis tickera: aktualne FV Low/High, cenę, signal, conviction, notatkę
- Z `dashboard/knowledge-base.md` — znajdź sekcję o tej spółce (szukaj tickera)

### Krok 2: Wyszukaj reakcję rynku
Użyj web search żeby znaleźć:
- Ruch cenowy po earnings (pre-market / after-hours)
- Analyst reaction — nowe PT, upgrades/downgrades
- Key quotes z earnings call
- Guidance na następny kwartał

### Krok 3: Analiza FV
Na podstawie wyników i reakcji rynku oceń czy FV wymaga zmiany:

**Podnieś FV gdy:** beat na revenue + guidance raise + analyst upgrades + structural improvement
**Obniż FV gdy:** miss na revenue + guidance cut + downgrades + structural deterioration
**Bez zmian gdy:** in-line results, mixed signals

Jeśli proponujesz zmianę FV, podaj:
- Stare FV Low — FV High
- Nowe FV Low — FV High (z uzasadnieniem)
- Nowy expensive level
- Nowy analyst target (konsensus PT)

### Krok 4: Zapisz raport
Zapisz analizę do `data/earnings/TICKER-QXFY26.md`:

```markdown
# [TICKER] [Q] FY26 Earnings Analysis

## Wyniki vs consensus
| Metryka | Wynik | Consensus | Beat/Miss |

## Reakcja rynku
- Cena: [ruch %]
- Analyst actions: [upgrades/downgrades z PT]

## FV Assessment
- Aktualne FV: $X — $Y
- Proponowane FV: $A — $B (lub BEZ ZMIAN)
- Uzasadnienie: [2-3 zdania]

## Catalyst update
[Czy wyniki zmieniają coś w catalyst calendar?]

## Key quotes
[1-2 najważniejsze cytaty z earnings call]
```

### Krok 5: Opcjonalnie zaktualizuj dashboard
**TYLKO jeśli zmiana FV jest oczywista** (beat/miss >15%, analyst consensus shift):
- Zaktualizuj fairValueLow, fairValueHigh, expensive, analystTarget w JSX
- Zaktualizuj note z nowymi danymi
- Przelicz sygnał
- Zaktualizuj SIGNAL_HISTORY

Jeśli wyniki są mixed — NIE zmieniaj JSX. Zostaw decyzję człowiekowi.

### Commit:
```bash
git add data/earnings/ dashboard/
git commit -m "earnings: [TICKER] [Q] — [beat/miss/inline] | FV [unchanged/raised/lowered]"
```

## Przykład API call:
```bash
curl -X POST https://api.claude.ai/routines/YOUR_ROUTINE_ID/fire \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"text": "TSM Q1 FY26: rev $35.8B (beat $35.2B cons), EPS $3.42 (beat $3.29), GM 59.2%, 2nm yield on track, CoWoS +40% capacity, Arizona fab 1 producing. Guide Q2 $37-38B."}'
```
