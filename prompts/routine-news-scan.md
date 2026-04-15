# Routine: 48h News Scan
# Trigger: Schedule — codziennie o 08:00 CET (przed otwarciem EU)
# Repo: ai-bottleneck-dashboard
# Connectors: web search (wymagane)

## Prompt

Przeskanuj wiadomości z ostatnich 48 godzin dla 87 spółek i aktywów z dashboardu AI Bottleneck. Wczytaj listę tickerów z `dashboard/ai-bottleneck-dashboard-v2.jsx` (blok SECTORS) i kontekst makro z `dashboard/knowledge-base.md` (ostatnia sekcja SESSION UPDATE).

### Dla KAŻDEGO znalezionego sygnału podaj:
1. **Ticker** + krótki opis newsa (1-2 zdania)
2. **Źródło** (Bloomberg, Reuters, SEC filing, etc.)
3. **Wpływ na FV** → ↑ podnieść / ↓ obniżyć / ↔ neutralny / ❓ wymaga analizy
4. **Urgency**: 🔴 IMMEDIATE / 🟡 MONITOR / 🟢 BACKGROUND

### Sektory do przeskanowania:
Wyciągnij sektory i tickery z JSX (zmienna SECTORS). Dla każdego sektora szukaj:
- Earnings results i guidance
- Nowe kontrakty, partnerstwa, M&A
- Analyst upgrades/downgrades z PT
- Regulatory changes (Section 232, CLARITY Act, MATCH Act)
- Insider buying/selling
- Product launches, production milestones

### Kontekst makro do uwzględnienia:
Wczytaj z KB sekcje: Howell Alarms, Geopolityka (Hormuz), AI Capex, Crypto Framework. Szukaj zmian w tych tematach.

### Format output — zapisz jako `data/news-scan-YYYY-MM-DD.md`:

```markdown
# News Scan [DATA]

## 🔴 IMMEDIATE ACTION
| Ticker | News | Źródło | Wpływ | Sugerowana akcja |

## 🟡 MONITOR
| Ticker | News | Źródło | Wpływ |

## 🟢 BACKGROUND
| Ticker | News | Źródło |

## Macro Update
- Howell Alarms: [czy coś się zmieniło?]
- Hormuz: [status]
- Nowe catalysts: [daty, eventy]

## Missing Signals
[Tickery bez newsów ale z zbliżającymi się earnings]
```

### Commit:
```bash
git add data/news-scan-*.md
git commit -m "news scan $(date +%Y-%m-%d) — [N] immediate, [N] monitor, [N] background"
```

### Ważne:
- NIE zmieniaj FV ani sygnałów — to robi człowiek po review
- NIE halucynuj newsów — jeśli nie znajdziesz nic dla tickera, napisz "brak"
- Priorytetyzuj spółki z earnings w najbliższych 7 dniach
- Szukaj w źródłach anglojęzycznych, raport pisz po polsku
