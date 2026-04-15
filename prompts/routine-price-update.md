# Routine: Codzienny Price Update
# Trigger: Schedule — codziennie o 19:30 CET (po zamknięciu EU + w trakcie US session)
# Repo: ai-bottleneck-dashboard
# Connectors: brak wymaganych

## Prompt

Wykonaj codzienny price update dashboardu AI Bottleneck:

### Krok 1: Pobierz ceny
```bash
cd scripts && python update_prices.py --fast
```
Jeśli yfinance nie jest zainstalowany, uruchom najpierw `pip install yfinance`.

### Krok 2: Wczytaj dane
Wczytaj trzy pliki z katalogu `data/`:
- `prices_latest.json` — aktualne ceny 
- `momentum_latest.json` — momentum ranking
- `macro_alarms_latest.json` — Howell Macro Alarms

### Krok 3: Zaktualizuj dashboard JSX
W pliku `dashboard/ai-bottleneck-dashboard-v2.jsx`:

**Ceny:** Dla każdego tickera z prices JSON, znajdź odpowiedni wpis w SECTORS i zaktualizuj pole `price`. Format: `price: NOWA_CENA, analyzed:` — ZACHOWAJ PRZECINEK po cenie.

Pomiń tickery z ceną 0 lub null (HYPE jest znany bug Yahoo).

**Momentum:** Zastąp cały blok `const MOMENTUM_DATA = { ... };` nowym blokiem wygenerowanym z momentum JSON. Sortuj tickery alfabetycznie. Format wpisu:
```
"TICKER":{ret12minus1:WARTOŚĆ,tsPositive:true/false,aboveSMA:true/false}
```

**Macro Alarms:** Zaktualizuj wartości `value` dla id: move, vix, dxy, us10y w bloku `MACRO_ALARMS`. Zaktualizuj pole `updated` na dzisiejszą datę.

### Krok 4: Przelicz sygnały
Dla KAŻDEGO z 87 tickerów oblicz nowy sygnał:
- `fvMid = (fairValueLow + fairValueHigh) / 2`
- `price < fairValueLow` → signal = "green"
- `price <= fvMid` → signal = "blue"  
- `price <= fairValueHigh` → signal = "yellow"
- `price > fairValueHigh` → signal = "red"
- Wyjątki: KAP → zawsze "yellow", HYPE przy price=0 → "blue"

Zaktualizuj pole `signal` w każdym stock entry.

### Krok 5: SIGNAL_HISTORY
Policz finalne sygnały (green/blue/yellow/red) i zaktualizuj lub dodaj nowy wpis w `SIGNAL_HISTORY` z dzisiejszą datą w formacie "DD.M" (np. "15.IV").

Jeśli wpis z dzisiejszą datą już istnieje — nadpisz go. Jeśli nie — dodaj nowy na końcu tablicy.

### Krok 6: Commit
```bash
git add dashboard/ai-bottleneck-dashboard-v2.jsx data/
git commit -m "price update $(date +%Y-%m-%d) — [GREEN] [BLUE] [YELLOW] [RED]"
```
Wstaw rzeczywiste liczby sygnałów w commit message.

### Walidacja przed commitem
- Sprawdź czy brackets `[]` i braces `{}` się zgadzają
- Sprawdź czy nie ma `price: LICZBA analyzed` (bez przecinka) — to krytyczny bug
- Sprawdź czy łączna liczba sygnałów = 87
