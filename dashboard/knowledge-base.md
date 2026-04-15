# AI BOTTLENECK DASHBOARD — BAZA WIEDZY
## Wersja: 13 kwietnia 2026 | 85 tickerów | Ceny: 11.IV 09:05

---

# 1. ARCHITEKTURA SYSTEMU

## Pliki
- `ai-bottleneck-dashboard-v2.jsx` — React dashboard, 85 tickerów
- `update_prices.py` v11 — ceny + momentum + Howell macro alarms
- `daily-news-scan-prompt.md` — prompt do skanowania newsów
- `insights-reference.md` — pełne strengths/risks/verdicts
- `prompt-dr-stocks.md` — template Deep Research dla spółek (7 sekcji)
- `prompt-dr-crypto-l1.md` — template DR dla crypto L1

## Workflow
1. Ceny: `python update_prices.py` → JSON → wklej do JSX MOMENTUM_DATA
2. Macro: automatyczne Howell Alarms (MOVE, VIX, DXY, 10Y, HY OAS, SOFR-IORB)
3. Deep Research: Gemini DR → raport po polsku (7 sekcji) → kalibracja FV w dashboardzie
4. News scan: daily prompt z 85 tickerami → sygnały do integracji
5. Briefing: po każdej sesji → transfer document do nowej konwersacji

## Signal System
- 🟢 GREEN = poniżej FV Low (okazja)
- 🔵 BLUE = FV Low → FV Mid (fair value, dolna połowa)
- 🟡 YELLOW = FV Mid → FV High (drożeje, górna połowa)
- 🔴 RED = powyżej FV High (przepłacone)
- Conviction: HIGH / MEDIUM / LOW
- Momentum: Jegadeesh-Titman 12-1M, Time Series (TS), Faber 10M SMA

---
# 2. HOWELL MACRO LIQUIDITY ALARMS

Framework: Michael Howell (CrossBorder Capital) + Rule + Gromen + Dale

| Wskaźnik | Wartość 11.IV | Yellow | Red | Źródło |
|---|---|---|---|---|
| MOVE Index | 74.01 🟢 | >100 | >120 | Howell: bond vol disrupts collateral |
| VIX | 19.52 🟢 | >30 | >40 | Equity volatility |
| DXY Dollar | 98.97 🟢 | >105 | >110 | Howell: +10% DXY = -10% liquidity |
| US 10Y Yield | 4.29% 🟢 | >4.60% | >5.00% | Gromen 4.4% line |
| US 3M T-Bill | 3.59% 🟢 | >5.00% | >5.50% | SOFR proxy |
| HY Credit Spreads | 294 bps 🟢 | >500 | >600 | Rule: ETF cascade |
| SOFR-IORB | -3 bps 🟢 | >15 | >30 | Repo stress |

**ALL GREEN = stock-picking mode.** Kiedy KTÓRYKOLWIEK alarm żółty/czerwony → Howell staje się PRIMARY driver, correlation → 1.0.

Trzy strumienie płynności: (1) AI capex → nasze spółki, (2) Fed liquidity → BTC/gold, (3) Global liquidity → SPY (nie my).
Dashboard łapie pieniądze OPUSZCZAJĄCE SPY i płynące DO naszych tickerów.

---
# 3. MACRO FRAMEWORKS

## MACRO FRAMEWORK — EWOLUCJA W SESJI 6

### Dale (42 Macro, 9.IV):
- "Yes, US and global economies worthy of reinvesting into"
- Paradigm C productivity boom + source of funds
- Sticky inflation ≥4% PCE (3M annualized) = problem
- Jobless recovery: corporate profits dramatycznie outperformują employment
- "Ignore brinksmanship headlines, work backward from positive earnings flow Q2-Q4"

### Jordi Visser (11.IV):
- **Hardware/semis/commodities LONG, software/private credit SHORT**
- "No recession coming. AI demand is massive"
- Headline CPI → 5-6% (najwyżej od lat 90.)
- "Nobody using AI agentically" — first inning. Odds favor hardware longs
- BTC breaking correlation with software THIS WEEK
- "Every single software name getting hit, even Palantir"
- Anthropic $30B ARR ale "revenues ≠ profits"

### Hayes (Arthur):
- WTI front-back spread = jedyny wskaźnik Hormuz
- "Deflation in what you want, inflation in what you need"
- Fed irrelevant — will print regardless of who sits in chair
- 90% net worth BTC, but "would not put new fiat into BTC right now"
- Portfolio: BTC + gold + Zcash + HYPE. Zero tradfi equities
- HYPE: $3B WTI volume/day, 29.7% perp market share

### Faber/Johnson (Zero Hedge debate):
- Faber: Warsh "brilliant intellectual, will have to print money"
- Johnson: stablecoins "as transformative as leaving gold standard"
- Both: own gold, energy, real assets. Minimize losses, not maximize gains
- Johnson: "fall of republic, rise of empire" — US power stays but form changes

## GEOPOLITYKA — SESJA 6 UPDATES

### Iran Ceasefire (dzień 2-3)
- Rozejm "w zasadzie trzyma się" ale Hormuz **efektywnie zamknięty** — ~7-11 statków/dzień vs norma 100-120
- Iran toll mechanism: $1/baryłka (~$2M/supertankowiec), płatność BTC/CNY
- 600+ statków (325 tankowców) zablokowanych w Zatoce
- VP Vance w Islamabadzie 11-12.IV na rozmowy pokojowe
- Izrael zbombardował Bejrut (303 ofiary) — podważa ceasefire
- **Rozejm wygasa ~22.IV**

### Nowe źródła geopolityczne (Sesja 6):
| Źródło | Framework | Key Take |
|---|---|---|
| **Geopolitical Cousins (Marco/Jacob)** | BCA Research, shipping data | Marco: toll mechanism works, 65% Brent $70, 35% $200. Iran leverage wyczerpie się w 2-3 tyg. Capex na pipelines (18 mcy) > flotilla (6 mcy) |
| **Faber/Brent Johnson** | Dollar Milkshake, Goldfinger | Johnson: Goldfinger strategy (deny Hormuz to everyone). US energy independence = relative winner. Faber: "complete disaster for US." Obaj: own gold, energy, real assets |
| **Rieder (BlackRock)** | Fixed income, credit | Credit "amazingly resilient." HY OAS tight. AI debt issuance absorbowana. Employment > inflation jako problem Fed |

### Kluczowe frameworki geopolityczne:
- **Marco (BCA):** WTI math — 5M Yanbu + 5M reserves + floating storage = 10M covered z 20M. 2 VLCCs wystarczy short-term
- **Brent Johnson:** "Goldfinger" — US nie musi kontrolować ropy, wystarczy deny access. North America = resource fortress
- **Gromen:** "Tick tick BOOM" — 2-3 tygodnie do fizycznych zerwań supply chain. 50%+ cash, czeka na whoosh down Q2 2026
- **Hayes:** WTI front-back spread = jedyny wskaźnik. Backend contained = akomodacja działa

## AI CAPEX — KLUCZOWE DANE Z SESJI 6

### Anthropic $30B ARR (BOMBSHELL z All-In Podcast)
- $1B (koniec 2024) → $4B (mid-2025) → $9B (koniec 2025) → **$30B (kwiecień 2026)**
- Potrojenie w 3 miesiące
- 1000+ enterprise klientów >$1M/rok
- 2500 pracowników (vs Google 120K przy podobnym revenue threshold)
- Gerstner (Altimeter): "could exit year at $80-100B revenue"
- Gross margins "exploding higher" — stałe koszty compute, rosnący revenue
- **ALE Jordi Visser: "revenues ≠ profits, costs growing too"**

### Hyperscaler CapEx 2026:
| Company | CapEx | Notable |
|---|---|---|
| Amazon | $200B | AWS AI $15B run-rate, Trainium $20B+/yr |
| Google | $175-185B | TPU deals z Anthropic (inferior to NVDA but only option) |
| Meta | $115-135B | Muse Spark launch, $21B CoreWeave deal |
| Microsoft | ~$120B+ | -22% YTD (najsłabszy Mag 7) |
| Oracle | $50B | Pimco-BofA $14B DC deal |
| **TOTAL** | **$660-690B** | Dell'Oro: total DC capex >$1T w 2026 |

### TSMC Q1 Revenue (10.IV):
- **Q1: NT$1.134T ($35.7B) +35.1% r/r** — REKORD, powyżej konsensusu
- Marzec: **+45.2% r/r** — akceleracja, nie spowolnienie
- Goldman PT $550. SemiAnalysis: GM >65%
- **Full earnings 16.IV** = marże i guidance

### MU Guidance BOMB:
- Q3: **$32.8-34.3B vs konsensus $22.4B** (+47% beat!)
- GM 81%. HBM wyprzedane do końca 2026 non-cancellable
- Susquehanna PT $525, Mizuho $530

### LITE CEO (10.IV Bloomberg):
- "Sold out to 2028. 25-30% za popytem."
- 12x wzrost mocy laserów InP i nadal nie nadążają
- JPM PT $565→$950

## CRYPTO FRAMEWORK — EWOLUCJA W SESJI 6

### Trójwarstwowy crypto infrastructure model:

**Warstwa 1 — Settlement/Back-Office (Canton Network, permissioned):**
- DTCC, Goldman, Euroclear, BNP Paribas, Citadel Securities
- $350B daily US Treasury repo
- LayerZero integration (8.IV) → 165+ public chains
- SEC no-action letter. Chainlink Data Streams live
- NIE w dashboardzie (utility token, nie investable)

**Warstwa 2 — Institutional/DeFi Settlement (ETH):**
- BlackRock ETHB ETF (stakuje 70-95%), central banks (BdF, SocGen, UBS)
- RWA tokenization >$20B. Cumulative US ETH ETF inflows $11.6B
- Deep liquidity, Lindy effect (od 2015), regulatory acceptance
- **Revenue model:** gas fees, staking yield, ETH burn = mierzalny P/E
- Conviction: powinien być HIGH (infrastructure-revenue play, nie speculation)

**Warstwa 3 — Agent/Retail Execution (SOL):**
- Fee revenue: $13M (2022-23) → $2.85B (2024-25 cycle)
- Mastercard, Worldpay, Western Union na Solana Developer Platform
- R3 Corda yield vault na Solanie (H1 2026)
- Solana Agent Skills (kwiecień 2026), STRIDE security program
- 400ms finality, $0.00025/tx, 65K TPS
- Conviction: powinien być HIGH gdy TS recovers

**ETH/SOL ≠ BTC:** ETH i SOL to infrastructure plays z mierzalnym revenue (jak TSM, ANET). BTC to monetary asset z zero yield (jak gold). Różne tezy, różny conviction.

### Canton → ETH/SOL pipeline:
Canton POTRZEBUJE public chains do distribution/liquidity:
1. Tokenizowany Treasury na Canton → collateral na Aave (ETH)
2. Retail access do institutional products → Solana (speed/cost)
3. Market making / price discovery → public chain liquidity
4. DeFi composability → Uniswap, Pendle, Hyperliquid

### BTC-Software correlation BROKE (Jordi, tydzień 7-11.IV):
- Największy tydzień BTC outperformance vs software w historii
- BTC przestaje tradować jako "software" → traduje jako "scarcity/neutral"
- Jordi watch levels: BTC >$76K + ETH >$2,400 = sustainable move
- Negative real yields za ~miesiąc (headline CPI > 3M rate) = historical catalyst

### Developer exodus do AI:
- Crypto weekly commits -75%, active devs -56%
- ETH: 31,869 → ~2,800 weekly active (-34%)
- SOL: 17,708 → ~942 weekly active (-40%)
- ALE: core devs (2+ lat) +27% r/r, 70% commitów. Consolidation, nie collapse
- CZ: "AI agents will make 1M times more payments than humans, and they will use crypto"

### DeFi darwinizm (AI security):
- Duże protocols (AAVE, Hyperliquid) WZMOCNIONE przez AI auditing
- Małe protocols BEZ budżetu na AI security = wyginięcie
- Power law consolidation — AI nie zabija DeFi, zabija SŁABE DeFi

---
# 4. KLUCZOWE TEZY INWESTYCYJNE

## KEY FRAMEWORKS DEVELOPED IN SESSION 6

### 1. Trójwarstwowy crypto infrastructure model:
Canton (permissioned back-office) → ETH (institutional settlement) → SOL (agent execution). LayerZero bridges all three. Canton NEEDS public chains for distribution/liquidity.

### 2. ETH/SOL as AI infrastructure (not speculation):
ETH i SOL generują mierzalny revenue (gas fees, staking, protocol fees). Analogiczne do TSM/ANET w AI stack. BTC = monetary asset (analogiczne do gold). Różne tezy, różny conviction level.

### 3. Software DCF death ACCELERATED:
Anthropic $30B ARR, Mythos cyber capabilities, IGV -30% YTD. Jordi: "AI disrupts everything built on code." Dashboard correctly has ZERO pure software exposure. PLTR fell to FV (blue) — competitive displacement risk real but priced in.

### 4. BTC-software correlation break:
Biggest week of BTC outperformance vs software in history. BTC transitioning from "software proxy" to "scarcity/neutral asset." Negative real yields imminent (headline CPI > 3M rate in ~1 month).

### 5. Tokenization inflection point:
DTCC + Canton + LayerZero + Chainlink + GENIUS Act + CLARITY Act = full stack exists for first time. $100T+ in tokenizable assets. ETH/SOL = distribution/liquidity layer. Revenue growth will follow tokenization adoption.

### 6. "Hormuz closed but nobody panicking":
Market trades narrative (ceasefire), not physics (strait closed). Marco: toll works short-term. Gromen: 2-3 weeks to physical supply chain breaks. Dashboard positioned correctly: zero FV changes for ceasefire, 70-80% invested, 20-30% cash insurance.


### 7. CPI 0.9% MoM (Jordi, sesja 7, 13.IV):
Najwyższy miesięczny odczyt od szczytu VI.2022. Core PCE 3 miesiące >0.3% = jedyny raz w 25 lat poza boomem inflacyjnym. Ceny gazu: największy 40-dniowy ruch od 22 lat. Fed funds vs CPI crossover imminent → negative real yields → BTC quadrant z historycznie najwyższymi zwrotami.

### 11. Silver Miners Sweet Spot (sesja 7, 14.IV):
Silver spot $75/oz vs Wall Street assumptions $35-50 = 50-100% Rule gap (biggest gap across all metals). PAAS AISC $15/oz = 79% margin. HL AISC $11 = 85%. WPM streaming $5 = 93%. 5th year structural deficit (230M oz/yr). China export licenses on refined silver. US Critical Mineral designation. Silver = dual narrative (monetary debasement + AI/solar industrial demand). Gold/copper ratio falling BUT silver miners have lowest P/E (17x) vs copper (23-25x) and gold (12-15x). Added HL (#86) and AG (#87) to dashboard.

### Forward Guidance data points (Quinn/Felix/Tyler, 9.IV.2026):
- **$330B+ software/tech debt maturity wall do 2028** ($50B w 2026, rośnie). HY leverage loan + BDC linked. "If there's credit problems, this is where landmines are." Wzmacnia Goodwin/Jordi private credit thesis z konkretną cyfrą.
- **CTA buy pressure $45B/tydzień** (Goldman, Colin). Systematic community still short $37B US equities. Mechaniczny short squeeze, nie fundamentalny bull. Potwierdza Jordi "pendulum not trend."
- **Europa rationing fuel** — UK, Ireland, większość krajów dostaje ostatnie shipments LNG/oil, następne najwcześniej koniec maja. Fizyczny impact Hormuz materializuje się w Europie. Potwierdza Gromen "2-3 weeks to physical breaks."
- Felix trade construction: long backend oil (Dec26/Mar27) at $70, target $90 convergence (+25%). Front month $110-120 = demand destruction zone.
- China = new bond safe haven (najniższy wzrost 30Y yields). Iran toll w foreign currency = structural USD hegemony hit. Dollar weakness mimo oil spike = telling signal.
- Retail capitulation (Citadel): net selling first week since Nov 2025.

### 8. Mythos Emergency (Jordi, sesja 7):
Treasury Secretary Bessant zwołała emergency meeting z CEO banków po zobaczeniu Mythos. Project Glasswing (AWS+Anthropic+Apple+Google+JPM). Model złamał software uważany za bezpieczny od 27 lat. IGV new lows bez bounce. PLTR oddał 25% outperformance w tydzień.

### 10. DC Infrastructure Bottleneck (Moonshots, kwiecień 2026):
50% US data centers delayed (braki sprzętu elektrycznego z Chin), tylko 33% budowanych planowo. Jurisdictions blokują DC → compute do orbity (SpaceX). Enterprise w panic buy mode — cały compute przechodzi z consumer do enterprise (Sora shutdown = $1M/day loss). Wzmacnia conviction: ETN (DC orders +200%), POWL (switchgear), PWR ($44B backlog), GEV (transformatory). Intel Terafab (1 TW, 50x global) = long-term capacity unlock ale 3-5 lat horizon.

### 9. Anthropic 500+ enterprise klientów (Jordi, sesja 7):
Z 12 klientów >$1M do 500+ w 2 lata. 8/10 Fortune = klienci Claude. Claude Code 4x. 30+ produktów w styczniu. Compute shortage potwierdzone — Anthropic ekspanduje na Google/Broadcom TPU.

---
# 5. ŹRÓDŁA I WYWIADY (20+ voices)

### TSM optyki — produkuje transceivery dla calej branzy (Customer-agnostic: zarabia niezaleznie kto wygra (LITE vs COHR vs AAOI))
Thailand manufacturing = cost advantage + geopolitical diversification od Chin

### Customer concentration risk (top 3 customers = duzy % rev) (Optyka cykliczna — inventory corrections mozliwe)
Brak DR — potrzebna pelna analiza

### Pure-play liquid cooling for AI DC — niche ktorej nie mamy (GPU power density rosnie (H100 700W → Blackwell 1200W) = liquid cooling KONIECZNE)
Mix shift z legacy auto/industrial do high-margin DC cooling

### Small cap ~$12B = higher vol (Konkurencja: VRT, Schneider, Vertiv wchodza w liquid cooling)
Brak DR — potrzebna pelna analiza

### POWL (LNG)
CEG

### BTC (ETH)
SOL

### GEV (VRT)
TSLA

### GOOGL (MSFT)
META

### BTC (B)
NEM

### Jensen Huang (GTC 2026 + Lex Fridman Podcast)
Disaggregated inference, $50B AI factory, Physical AI $50T TAM, Vera Rubin 200 pods/week, CUDA install base = #1 moat, $3T rev target, AGI is now, $1000/M tokens coming

### Dylan Patel (SemiAnalysis)
ASML ultimate bottleneck, memory crunch, 200 GW by decade end, 3.5 EUV = 1 GW

### Jordi Visser (Tygodniówka (30.03) + Pompliano (4.IV) + Weekly + Blockworks DAS (kwiecien 2026))
REGIME SHIFT: srodowisko od 2007 skonczone. Long scarcity, short abundance = +17% model portfolio YTD. FIZYCZNY SPOT OIL $141 vs futures $111 = paper/physical disconnect (3 zrodla)! Oil-stocks correlation BROKE = rynek zaadaptowal sie do Hormuz. Fed NIE MOZE podniesc stop — fiscal dominance = bullish BTC/scarcity. Private credit PONZI: Blue Owl 22%/40% redemptions = credit cycle ACCELERATING. Flatbed rates 'strongest in history' = nominal GDP strong. 2022 template — choppy sideways do CPI peak (May/June). CPI >4% YoY w 2 mcy = nie longuj S&P. Stagflation signal: ISM prices >75 + employment <50 = historycznie S&P -30-48%. TIMING CALL: 'recession pendulum shift = best buying opportunity, will be there in next 6 weeks' (~mid-maj 2026). AGENTIC > GPU: compute demand 1000x, 'trillions of agents eating compute 24/7'. MU = biggest position, 'below 4x PE'. MAG7 SPLIT: 3 hardware (TSLA/AAPL/NVDA = winners) vs 4 software (GOOGL best, MSFT 'disaster'). SOFTWARE DCF DEATH: 'by end of this year you can no longer do DCF on ANY software company' — 3yr visibility = zero = P/E compression CALY sektor. BTC = 'endgame growth asset', ETH = 'hedge funds WILL get comfortable because you CAN do DCF on ETH' (institutional bridge). GOV CONTROL RISK: 'government will eventually want CONTROL of AI → what happens to these companies?' = multiple compression driver #2. HUMANOIDS: 'humans no longer top of food chain — not strongest, not fastest, not smartest.' Silver > gold > BTC > semis. Edge AI = bear case for cloud capex. Lily Pod (Eli Lilly) = first enterprise Blackwell DC

### Tavi Costa (Aurora Capital (marzec 2026))
1970s without Fed that can raise rates. Supply-side mining cycle: capex at ATL = cycle NOT over. Mining 1% global equities vs 13-15% historical. $200B US gov critical mineral reserves > cala branza. Sprzedal energie, kupil zloto. Orla Mining + Aura Minerals. Treasury long jako contrarian hedge

### Larry McDonald (Bear Traps Report)
Companies that control assets > software companies. S&P rotation: materials+industrials+energy 14%→30% (1968-81 bylo 49%). Hyperscalers: cash cows→cash burning (Meta FCF $60-70B→$5B). Private credit crisis. Bitcoin/Gold ratio trade. UK sovereign crisis wildcard

### Rick Rule (50 lat mining + VRIC Uranium Panel (marzec 2026))
Buy hate, sell love. ZLOTO: miners wycenione na $3,200-3,300 ale sprzedaja po $4,500. Streaming = ZERO kosztow operacyjnych. URAN: SPUT = 82M lbs = 40% 'dostepnej' podazy zablokowane. Spot market illiquid, SPUT 3x wolumen spotu. Hormuz → przyspieszenie japońskich restartow nuklearnych. Pozycje: #1 SPUT/Sprott, #2 Cameco (Westinghouse vindicated), #3 NexGen Arrow, #4 Paladin. Sprzedal Yellow Cake. 10-bagger median = 5.5 lat z -50% drawdown po drodze

### Justin Huhn (Uranium Insider / VRIC Panel (marzec 2026))
Supply = najslabsze ogniwo modelu. Francja: blanket approval 52 reaktorow do 50 lat = 250M lbs demand = pochłania cale Arrow. Term market: Cameco chce floor + ceiling 100% wyzej, kontrakty floor+no ceiling w 1-2 lat. Supply surprises 100% right-tail. Flywheel: ETF→SPUT→physical uranium→price up→repeat. Speculative fervor w small/mid-cap uran JESZCZE nie nastapil. Bullish $120-200/lb

### Campbell Cascade (campbellramble.ai)
Hormuz to NIE oil story — kaskada: LNG→fertilizer→food→helium→semiconductors→aluminum→copper. 200 kontenerow helium venting 6-16 IV. 49% global urea exports transit Hormuz. Base case (closed thru June): CPI +4.4% USA, +7.4% EU. WSJ: Trump willing to end war WITHOUT reopening Hormuz

### Darius Dale (42 Macro (3-4 kwiecien 2026))
$1.5T DEFENSE BUDGET FY2027 VERIFIED (NPR/WaPo/CNN/PBS): $1.15T base (bipartisan, 30-40%) + $350B reconciliation (GOP, 60-70%). F-15E zestrzelony. '5-7 years → 5-7 MONTHS to total war.' Jobless recovery but no recession. Liquidity cycle + Treasury supply: NATO splintering → Europa wydaje wiecej na obrone → mniej kapitalu do US Treasuries → yields rosna NIEZALEZNIE od Fed. Iran/Hormuz 3. scenariusz: barrels flowing at higher price = end of risk-off ale inflacja utrzymana. KISS: NIE gonic rajdu w risk-off regime

### Eric Schmidt (Abundance Summit 2026)
92 GW deficyt USA (Kongres), 1 GW = $50B, scaling laws not done, Jevons Paradox, China robotics threat

### Ed Yardeni & Nick Gra (Earning Scout / Macro Brief (3.IV.2026))
REVERSE ALLIGATOR JAW: forward earnings estimates ROSNA mimo spadku cen. W 35 LATACH DANYCH nigdy nie trwalo >1 kwartalu. 14 early reporters Q1: 79% beat, 64% raised next-quarter estimates (NAJWYZEJ w 3 lata). Forward PE compressed do 18.9x. 'Market's going to skyrocket when Iran resolves.' Yardeni 2026 target: S&P 7000

### Chamath/Freeberg/Sacks (All-In Podcast (4.IV.2026))
Chamath EXPLICITE uzywa 'HALO' framework (McDonald validation). SpaceX IPO $1.75T. FERTILIZER CRISIS (Freeberg): urea $350→$700+, Qatar 3-5 lat repair, Chiny zamknely eksport, swiat <30 dni kalorii. Helium shortage STRUKTURALNY 3-5 lat. Chamath: tech PE converges to non-tech PE. Middle East capital withdrawal = nowy liquidity risk. QUANTUM THREAT: BTC vulnerable w 5-7 lat (Satoshi ~1M coins na P2PK exposed). Ranking quantum readiness: ETH > SOL > BTC

### Ed Finley Richardson (Misadventures in Shipping / Monetary Matters (kwiecien 2026))
FEEDING FRENZY THESIS: reopening Hormuz = congestion = rates WYZSZE nie nizsze! Storage tanks w Arabii/Iraku/Kuwejcie PELNE → wszystkie tankowce rzuca sie po ladunki jednoczesnie = traffic jams. Aramco 40 tankow zacharterowanych, moze ladowac 3-4 naraz. SINAORE: koreanczyk-miliarder corneruje VLCC market (~150 statkow, 20% floty, 30-35% atrakcyjnych). Kupil ~50 VLCC przez Swieta 2025 z 20% premium. MR tanker rates 10x ($30K→$300K/dzien). US Gulf→Japonia voyages = 'nie powinno sie zdarzac.' 3 SCENARIUSZE: (1) szybkie otwarcie = feeding frenzy + congestion = bullish, stocks dip = buyable (2) messy toll booth = okay (3) prolonged closure = DISASTER (demand destruction). Material constraints: Chiny = jedyny klient Iran hydrocarbons, funding 1/3 budzetu + drony = China MUSI wymusic otwarcie. Dark fleet = 15% gas carriers. Spolki: FRO (Frontline = 'Exxon of shipping'), DHT (top 3 governance), INSW (MR fleet 70% w zachodnim basenie), TRMD (Torm = best-in-class commercial), STNG (Scorpio), ECO (Okeanis = 16Q outperformance vs FRO). Peter Lynch: cyclicals cheapest at the top. Buy low dividends, sell high dividends

### Andreas Steno (Real Vision / Nowcast IQ (3.IV.2026))
KONTRARIAN HORMUZ: 'oil math is better than alarmists say.' Odzyskano ~13-14M bpd (65% pre-war). Brakuje 'tylko' 5-6M bpd = 5-6 dodatkowych tankowcow/dzien. Hormuz = 'subscription fee, not blockade' — Iran leverage DECAYS, market adapts w 3-4 tygodnie. 42% pre-war traffic w 'Sovereign Indemnity' (Chiny/Indie state-backed insurance). Bilateral energy deals not involving the US = 'probably without historical precedent.' Counternarrative do Campbell/Johnston/Richardson — jedyne genuinely contrarian zrodlo na Hormuz

### Kieran Goodwin (Saba Capital / Capital Allocators (kwiecien 2026))
30 lat credit markets, partner Boaz Weinstein. MECHANIZM: asset-liability mismatch → liquidity crunch → credit crunch (krok po kroku). $450B w BDC/interval funds z mismatchem. Redemptions z 2.1% → 4.3%. Blue Owl: 22%/40% potwierdza Jordiego. Software/SaaS = EPICENTER default cycle: 'ARR loans = venture lending without warrants.' Marking variance 4-6% NAV miedzy BDCs. Bear case: banki tna linie → forced selling → feedback loop → insurance annuity surrenders. 'Credit means to believe. When you lose belief, it happens really quickly.' Saba targetuje Blue Owl OBDC2 z dyskontem do NAV

### Tabela źródeł (briefing v7):
## SOURCE PANEL — UPDATED (20+ voices)

| Źródło | Framework | Key Signal Session 6 |
|---|---|---|
| Darius Dale (42 Macro) | KISS, paradigm C | "Reinvest. Ignore brinksmanship. Sticky inflation ≥4%" |
| Jordi Visser (22V) | Software DCF death, scarcity | "Hardware long, software short. BTC broke software correlation. CPI→5-6%" |
| Luke Gromen (FFTT) | Fiscal dominance | "Tick tick BOOM. 2-3 weeks to supply chain breaks. 50%+ cash" |
| Arthur Hayes (Maelstrom) | WTI spread, deflation/inflation | "Deflation wants, inflation needs. Fed prints regardless. 90% BTC" |
| Marc Faber (Gloom Boom Doom) | Macro bear | "Warsh brilliant but will print. Bonds not bad. Minimize losses" |
| Brent Johnson (Santiago) | Dollar Milkshake, Goldfinger | "Goldfinger strategy. US hurts less than rest. Stablecoins transformative" |
| Rick Rieder (BlackRock) | Fixed income, credit | "Credit amazingly resilient. Employment > inflation. Equity > debt in tech" |
| Brad Gerstner (Altimeter) | AI venture, Anthropic investor | "Anthropic $30B ARR. Revenue explosion unprecedented. TAM = intelligence" |
| Chamath Palihapitiya | Enterprise AI reality check | "Enterprise AI coding still shit for 99% tech debt. 5% penetration" |
| David Sachs | AI policy, regulation | "Coding tokens could be monopolized. Anthropic 50-60% share. Flywheel" |
| Tom Farley (Bullish, ex-NYSE) | Institutional crypto | "Tokenization = 25-30yr trend. Liquidity as a service. Agents = infinite TAM" |
| Raoul Pal (Real Vision) | Exponential age, agents | "Agent treasury management. Millennium rebuilt by agents. TAM = infinity" |
| Geopolitical Cousins (Marco) | BCA, Hormuz shipping | "Toll mechanism works. 65/35 oil probability. Iran leverage 2 more weeks" |
| Geopolitical Cousins (Jacob) | Stratfor school | "Ceasefire very tenuous. Spoilers (Israel, UAE). KMT visiting China = TSM risk" |
| Michael Howell | Debt-liquidity cycle | Framework intact. All 7 alarms GREEN |
| Real Vision | Fed net liquidity | Shadow QE continues |
| Haynes/Beachpoint | Private credit insider | "Plumbing for secondary doesn't exist yet" |

---

### Peter Diamandis / Alex Wezner-Gross / Dave Blitz (Moonshots Podcast, kwiecień 2026)
- SpaceX IPO: $2T target, $75B raise. 2025 rev $16B, profit $8B (50% margin). 75-80% wartości = Starlink. Road show czerwiec. P/E 109x, P/Rev 56x
- **50% US data centers DELAYED** — braki sprzętu elektrycznego z Chin. Tylko 33% budowanych planowo. 17% uncertain (financing/regulations). Jurisdictions making DC illegal → pchanie compute do orbity
- Google dominuje AI chips globalnie (TPU + H100). Larry Page widział potrzebę 2016 → budował TPU. Google serwisuje Anthropic z chipami (14% shareholder)
- Intel + Elon Terafab: 1 terawat/rok AI compute (50x global output). Intel 18A (1.8nm). Pilot $25B. Intel stock +40%
- Alex WG: "Mythos marks an upward discontinuity of productivity we've never seen. 400x better than human at long-horizon AI research tasks"
- Alex WG: orbital DC demand = klucz do SpaceX IPO timing. Municipal/state opory wobec naziemnych DC → compute do LEO
- Dave: "Enterprise woke up — every corporate boardroom in panic buy mode. Compute going to enterprise, not consumer. Sora shut down ($1M/day loss) — redirecting to enterprise"
- Medv: one-person unicorn $1.8B valuation, $401M ARR (GLP-1 drugs). Average AI unicorn founder age: 40→29 since 2020
- IPO wars: SpaceX ($2T) + OpenAI (~$1T) + Anthropic → limited capital supply. Middle East funding may slow (Iran war). "Would not want to be #3"
- Deepseek V4: trillion params, 37B active/token, 10-50x cheaper. Alex: "nie spodziewam się market shock — overhang exhausted"

# 6. HISTORIA SYGNAŁÓW

| Data | GREEN | BLUE | YELLOW | RED | Komentarz |
|---|---|---|---|---|---|
| 9.IV (sesja 5) | 15 | 43 | 18 | 9 | Pre-rajd, więcej okazji |
| 11.IV (sesja 6) | 3 | 67 | 3 | 12 | Rynek sprężył się, FV pricing |

TS_LOST (11.IV): BNB, RHM.DE, DHR, MSFT, ISRG, QCOM, BTC, XRP, MARA, SOL

---
# 7. CATALYST TIMELINE

## CATALYST TIMELINE (next 45 days)

| Date | Event | Impact |
|---|---|---|
| **12.IV (sob)** | Islamabad talks Vance-Iran | HIGH |
| **14.IV** | Section 232 Phase 2 deadline — semiconductor tariffs | CRITICAL |
| **14-20.IV** | CLARITY Act markup (crypto legislation) | MEDIUM |
| **15.IV** | ASML Q1 earnings + tax selling deadline (BTC) | HIGH |
| **16.IV** | **TSM Q1 full earnings** + Warsh Senate hearing | CRITICAL |
| **21.IV** | RTX Q1 + ASM Q1 + VICR Q1 + ISRG Q1 | HIGH |
| **22.IV** | GEV Q1 + VRT Q1 + TSLA Q1 | HIGH |
| **~22.IV** | **Rozejm Iran wygasa** | CRITICAL |
| **23.IV** | NEM Q1 + SCCO Q1 + LMT Q1 + TMO Q1 | HIGH |
| **28-29.IV** | **FOMC** (98% hold) + GOOGL + MSFT + META earnings | CRITICAL |
| **30.IV** | TT Q1 + MP Q1 + MU/WDC/SNDK earnings | HIGH |
| **7.V** | CEG Q1 + LNG Q1 + WPM Q1 + RHM.DE Q1 | MEDIUM |
| **13.V** | KGH.WA Q1 earnings | MEDIUM |
| **14-15.V** | **Trump-Xi summit Beijing** | HIGH |
| **15.V** | **Powell odchodzi Fed → Warsh** | HIGH |
| **~VI** | Warsh first FOMC → likely CUT 25bps | HIGH |

---
# 8. SPÓŁKI — PEŁNE DANE (85 tickerów)

## BE — Bloom Energy
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 167 | **FV:** 120-180 | **Entry:** 100
**P/E:** ~95x fwd (FY26E EPS $1.33-1.48). Drogo ale high-growth
**Revenue Growth:** +37% FY25 ($2.02B rekord). FY26E $3.1-3.3B (+57%). Backlog $20B (z $6B = 3.3x!) = 10 lat widocznosci
**Moat:** SOFC fuel cells 60-65% sprawnosc (vs PEM 40-50%). 800V DC output = eliminuje inwertery w AI DC (-10% strat). 90 dni time-to-power. Behind-the-meter. Installed base >1.5GW
**Note:** DEEP RESEARCH: W strefie FV. Dylan Patel: 'very positive on Bloom for 1.5 years.' FY25 $2B rev (+37%). ⚠️ BACKLOG $20B (z $6B = 3.3x skok!). 800V DC power dla AI DC = unikalna fosa. FY26E $3.1-3.3B (+57%). Nowy CFO Simon Edwards od 13.IV.2026.
**Strengths:**
  + FY25 $2.02B rev (+37%), beat guidance $1.65-1.85B o 9%.
  + DYLAN PATEL wymienil BE z nazwy: 'very positive on Bloom for 1.5 years, capability to...
  + 800V DC POWER bezposrednio do szaf GPU = eliminuje inwertery, -10% strat energii.
  + Backlog $6B (+140% r/r) = 3 lata widocznosci przy obecnym revenue.
**Risks:**
  ! GAAP STRATA nadal (non-GAAP profitable ale GAAP net loss).
  ! Insider selling $60M+ w 3 mcy: CEO Sridhar $13M, EVP Soderberg $23.1M. UBS -66% pozycji
  ! SKAND (scandium) = krytyczny surowiec dla SOFC ceramiki.
  ! Debt-to-Capital 66% = wysokie zadluzenie. Przy wyzszych stopach = ciezar odsetkowy
**Verdict:** SIGNAL UPGRADE red->yellow.

## LNG — Cheniere Energy
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 266 | **FV:** 245-320 | **Entry:** 220
**P/E:** Trailing 12.3x (GAAP EPS $24.13 — inflated by MTM). Forward ~18.7x (FY26E EPS $14.62). EV/EBITDA 7.53x. DCF run-rate ~$30/akcje do ~2030 (175M shares)
**Revenue Growth:** +27% FY25 ($19.98B rekord). FY26E $22.95B (+15%). Q4 $5.45B (+23%). EBITDA $6.94B (+13%). Stage 3 dodaje >10 MTPA w 2026. 90%+ wolumenow pod dlugoterminowe kontrakty SPA
**Moat:** #2 LNG producer globalnie (#1 USA, ~50% mocy eksportowych). ~52 MTPA operacyjnych. 90%+ contracted volumes (20+ lat SPA). Brownfield expansion $800-1200/t (vs greenfield $1500-2500). Bechtel = all projects on-time. FOB contracts z destination flexibility. Henry Hub indexation = strukturalnie tanszy niz Brent-indexed. BBB+ rating (upgrade XI 2025). CEO Fusco 10 lat bezblednego track recordu. Sabine Pass (6 trains) + Corpus Christi (Stage 3 = 7 trains). Buyback $10B+ (target 175M shares z ~210M). DCF yield ~10% run-rate
**Note:** LEKKO DROGO (+5% vs FV mid). #2 LNG producer globalnie, #1 w USA (~50% mocy eksportowych).
**Strengths:**
  + FY25 $19.98B rev (+27%), EBITDA $6.94B (+13%), NI $5.33B (+64%). Beat 5/6Q na EPS.
  + US LNG NIE PLYNIE PRZEZ HORMUZ = bezposredni hedge na kryzys Bliskiego Wschodu.
  + RAS LAFFAN USZKODZONY 3-5 LAT (12.8 MTPA offline = 17% Kataru).
  + STAGE 3 COMPLETION: >10 MTPA nowych mocy w 2026 (pociagi 1-5 operacyjne, 6-7 do konca...
**Risks:**
  ! FORWARD P/E 18.7x NA KONSENSUSOWYM EPS $14.62 = wyzsze niz trailing 12.3x.
  ! GEOPOLITICAL PREMIUM ~16% w kursie ($297 vs ~$255 pre-crisis).
  ! NADPODAZ 2027-2030: ~220 MTPA nowych mocy globalnie.
  ! NET DEBT $25.35B (2.37x EBITDA). Manageable dla infrastructure ale znaczacy.
**Verdict:** NOWA SPOLKA #64. Cheniere = #2 globalny producent LNG i KLUCZOWY ELEMENT naszego TSMC energy security thesis.

## NEE — NextEra Energy
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 94 | **FV:** 80-110 | **Entry:** 72
**P/E:** ~21.3x fwd. Premium za growth utility status
**Revenue Growth:** +11% FY25 ($27.4B). FPL ~68% rev (regulowane). NEER ~30% (OZE+AI). Op margin 30.2%, net margin 24.9% = best-in-class utility
**Moat:** Najwiekszy operator czystej energii na swiecie: 76 GW capacity, 37.5 GW renewable. FPL: 6M+ klientow, regulowany monopol Floryda, ROE 10.95%. NEER: platforma 49 stanow + 4 prowincje Kanady. Backlog 30 GW OZE. Pipeline AI: 20 GW interest (9 GW advanced). 40 Energy Hubs target. GEV 4 GW turbin zabezpieczone. Duane Arnold nuclear restart (Google PPA). Meta 2.5 GW deal. Dividend Aristocrat 30+ lat
**Note:** DEEP RESEARCH: W strefie FV. Najwiekszy operator czystej energii na swiecie. FY25 $27.4B (+11%). Adj EPS $3.71 (+8.2%). 76 GW capacity. Pipeline AI 20 GW (9 GW advanced). ALE: dlug $89.5B, FCF -$19.1B w 2026, insider selling $35.3M.
**Strengths:**
  + FY25 $27.4B rev (+11%), adj EPS $3.71 (+8.2%). Beat expectations 16/18 kwartalow.
  + PIPELINE AI 20 GW INTEREST (9 GW advanced).
  + FPL MONOPOL FLORYDA: 6M+ klientow, +90K nowych kont w Q4. Regulowany ROE 10.95%.
  + BACKLOG 30 GW OZE (4. rok rekordow z rzedu).
**Risks:**
  ! DLUG $89.56B (z $72.4B rok wczesniej!). Debt-to-Equity 1.64.
  ! INSIDER SELLING $35.3M w 90 dni / ZERO zakupow.
  ! EMISJA AKCJI $2.3B w marcu 2026 + kolejne planowane.
  ! Stopy procentowe: kazde +50bps bezposrednio uderza w rentownosc nowych projektow NEER.
**Verdict:** NextEra = najwiekszy operator czystej energii na swiecie z unikalnym dwusilnikowym modelem (FPL regulowany monopol + NEER platforma OZE/AI).

## CEG — Constellation Energy
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 287 | **FV:** 275-400 | **Entry:** 245
**P/E:** ~32.5x fwd (FY26E EPS $11.65). ~26x na FY27E $13.64. Premium za nuclear monopol
**Revenue Growth:** +13% FY25 (est $25.5B). Q3 $6.57B (+7.2%). Post-Calpine FY26E $31B+. EPS CAGR >13% target do 2030
**Moat:** NAJWIEKSZA FLOTA NUKLEARNA USA: 22 GW, 21 reaktorow, 15 lokalizacji. Capacity factor 94.7% = baseload 24/7 (jedyny czysty baseload). Po Calpine: 55 GW total (atom+gaz+geotermia). MSFT 835MW PPA (Crane restart, 20 lat). Meta 1121MW PPA. 3/4 Fortune 100 = klienci. Crane restart 2027 = symbol nuclear renaissance. DOE $1B loan. IRA PTC credits
**Note:** W strefie FV. Najwieksza flota nuklearna USA (22 GW, 21 reaktorow).
**Strengths:**
  + 22 GW NUKLEARNA FLOTA = NAJWIEKSZA W USA. 21 reaktorow, 15 lokalizacji.
  + CALPINE ACQUISITION $26.6B: +28 GW gaz + geotermia = 55 GW total.
  + MICROSOFT 835 MW PPA (Crane restart, 20 lat) + META 1121 MW PPA = hyperscaler validation.
  + EPS TRAJECTORY: FY24 $8.67, FY25E $8.90-9.60, FY26E $11.65, FY27E $13.64.
**Risks:**
  ! INSIDER SELLING $90.13M w 6 mcy / ZERO zakupow = NAJWYZSZY w calym 68-spolkowym...
  ! P/E 41x trailing = DROGO w bezwzglednych liczbach. Forward 32.5x tez premium.
  ! FERC RYZYKO: negatywna opinia ws co-location (bezposrednie podlaczenie DC do...
  ! NUCLEAR INCIDENT RISK: jeden incydent w DOWOLNYM reaktorze w USA = regulacyjny fallout...
**Verdict:** TMI RESTART OPOZNIONY DO 2030+ (FERC filing, bottleneck transmisyjny).

## GEV — GE Vernova
**Signal:** YELLOW | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 994 | **FV:** 700-1000 | **Entry:** 600
**P/E:** ~35x fwd (FY26E). Premium za backlog visibility i energy supercycle
**Revenue Growth:** +12% FY25 ($38.5B). FY26E $44-45B. FY28E $56B (po Prolec GE). Power orders +78% QoQ w Q4
**Moat:** 25-30% globalny udzial w ciezkich turbinach gazowych. Backlog $150B (4 lata rev). Prolec GE = monopol transformatorow USA (2-letnie lead times). GridOS software. Baza zainstalowana = 65%+ serwis rev w Power. SMR BWRX-300 z Hitachi ($40B partnership)
**Note:** DEEP RESEARCH: W strefie FV. Architekt transformacji energetycznej. Backlog $150B rekord. FY25 $38.5B rev. Power margin 16.9%. Electrification +28%. Prolec GE = transformator monopol USA. $24B FCF do 2028. SMR BWRX-300.
**Strengths:**
  + Backlog $150B REKORD = 4 lata widocznosci przych. Power orders +78% QoQ w Q4 2025.
  + POWER SEGMENT: $19.8B rev (+9%), EBITDA margin 16.9% (z 11% 8Q temu).
  + ELECTRIFICATION EKSPLOZJA: $9.6B rev (+28%), margin 14.9% (z 6.7% 8Q temu).
  + FY28 TARGET: $56B rev, 20% EBITDA margin, $24B skumulowany FCF.
**Risks:**
  ! CENA $924 vs FV $700-1000 = gorna strefa FV.
  ! WIND SEGMENT STRATA: -9.6% EBITDA margin w Q4 2025 (rezerwy offshore).
  ! INSIDER SELLING: Koziner $17.6M, Gray $9M, Strazik $7M. Lacznie >$33M.
  ! RARE EARTH DEPENDENCY: Chiny 90% przetwarzania REE.
**Verdict:** GE Vernova = architekt energetycznej transformacji dla AI ery.

## ETN — Eaton Corporation
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 404 | **FV:** 340-430 | **Entry:** 300
**P/E:** ~28x fwd (FY26E adj EPS $13.25). Fair premium za AI infra + aerospace
**Revenue Growth:** +10% FY25 ($27.5B). Electrical Americas +21% Q4. DC orders +200% r/r. FY26E organic growth 7-9%. Adj EPS +10%
**Moat:** 63% rev z Ameryki Polnocnej = dominacja USA. Electrical Americas margin 30% (best-in-class). Boyd Thermal $9.5B = liquid cooling. Nvidia Beam Rubin DSX partner. Brightlayer software platform. Backlog ~$15B EA. 94% institutional ownership
**Note:** DEEP RESEARCH: W strefie FV. Intelligent Power Management. DC orders +200% r/r. FY25 $27.5B (+10%). Electrical Americas margin 30%. Boyd Thermal $9.5B = liquid cooling play. Nvidia Beam Rubin DSX partner. Mobility spin-off Q1 2027.
**Strengths:**
  + DC orders +200% r/r w Q4 2025. Electrical Americas: $3.5B/Q rev (+21%), margin 30%.
  + BOYD THERMAL $9.5B = transformative acquisition.
  + NVIDIA PARTNERSHIP: Beam Rubin DSX = modulowa fabryka AI 'od sieci do chipa'.
  + FY25 adj EPS $12.07 (+12%), upper end of guidance. FY26E $13.00-13.50 (+10%).
**Risks:**
  ! P/E ~28x fwd = premium ale nie extreme.
  ! Vehicle SEGMENT SLABNIE: -9% Q4 rev. eMobility strata operacyjna.
  ! EMEA i APAC wolniejsze: Americas dominuje (+21%) ale Electrical Global (+10%) i reszta...
  ! Boyd Thermal INTEGRATION RISK: $9.5B to ogromne przejecie.
**Verdict:** Eaton = 'strażnik energii' od grid do chip. DC orders +200% = demand bezprecedensowy.

## PWR — Quanta Services
**Signal:** YELLOW | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 587 | **FV:** 450-600 | **Entry:** 400
**P/E:** ~43x fwd adj (FY26E EPS $13.00). Trailing adj 53x. GAAP 84x. Premium za backlog + transformer moat
**Revenue Growth:** +20% FY25 ($28.5B). Q4 $7.84B (+20%). FY26E $33.25-33.75B (+18%). Adj EPS +18-24%. Organic growth 16.5% w Q4
**Moat:** NAJWIEKSZY wykonawca infra elektrycznej na swiecie ($28.5B, 2x EMCOR). Backlog $44B rekord (+27% r/r). Self-perform 80-85% = kontrola kosztow. FABRYKA TRANSFORMATOROW $500-700M (jedyny wykonawca z produkcja wlasna 345-765 kV). AEP sojusz ~$72B program transmisyjny. 8 akwizycji w 2025 (Cupertino Electric = DC, Tri-City = electrical). Northwest Lineman College = pipeline pracownikow. Peconic Partners 57.4% portfela w PWR
**Note:** DEEP RESEARCH: Lekko drogo. Najwiekszy wykonawca infra elektrycznej na swiecie. FY25 $28.5B (+20%). Backlog $44B rekord. Beat 7/8Q. Fabryka transformatorow $500-700M = unikalny moat. ALE: P/E 43x vs EMCOR 21.6x, op margin tylko 5.7%.
**Strengths:**
  + FY25 $28.5B rev (+20.3%). Adj EPS $10.75 (+19.8%).
  + BACKLOG $44B REKORD (+27% r/r). RPO $23.76B.
  + BEAT 7/8 KWARTALOW. Q4 2024 beat +11.4%, Q1 2025 +6.6%, Q4 2025 +6%.
  + FABRYKA TRANSFORMATOROW $500-700M = UNIKALNY MOAT.
**Risks:**
  ! P/E 43x fwd adj = NAJDROZSZA spolka infrastrukturalna w dashboardzie.
  ! OP MARGIN TYLKO 5.7% = niska jak na wycene. Konstrukcja = niskomar zowy biznes.
  ! GAAP P/E 84x = odstrasza value investorow.
  ! Insider selling $14.3M / $0 buy w 6 mcy.
**Verdict:** Quanta = #1 wykonawca infra elektrycznej globalnie. $28.5B rev, $44B backlog, 9 lat rekordowego EPS, fabryka transformatorow = unikalny moat.

## POWL — Powell Industries
**Signal:** RED | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 232 | **FV:** 143-193 | **Entry:** 127
**P/E:** ~33x fwd (FY26E EPS $5.57 post-split). Trailing 36.4x. Premium za zero-debt + DC exposure
**Revenue Growth:** +9% FY25 ($1.10B). Q4 $298M, GM 31.4% rekord. FY26E $1.23-1.25B (+11-13%). Backlog $1.6B = 18 mcy widocznosci
**Moat:** Custom switchgear lider USA (medium voltage). ZERO DLUGU + $501M net cash = najczystszy bilans w energy sektorze. Integracja pionowa (7 fabryk USA + 1 Kanada + 1 UK). Jacintoport expansion +62% capacity H2 2026. Remsdaq SCADA/RTU = recurring revenue pivot. DC mega order $75M + total DC >$100M w Q4. Utility +35% r/r. Konkurenci: ETN (16-18% share), Hubbell, Schneider. ROE 30.6% = best-in-class. Book-to-bill 1.7
**Note:** POWYZEJ FV High $193 (POST-SPLIT 3:1 od 6.IV.2026). +25% vs mid $168.
**Strengths:**
  + ZERO DLUGU + $476M NET CASH = najczystszy bilans w calym energy sektorze (vs NEE...
  + EPS BEAT 5/5 KWARTALOW: Q1 2026 $3.40 vs $2.85 est (+19.3%).
  + BACKLOG $1.6B REKORD z $933M do realizacji w 12 mcy. Book-to-bill 1.7 w Q1 2026.
  + MARGIN TRAJECTORY: GM z 16% (2021) do 31.4% (Q4 2025) = PODWOJENIE w 4 lata.
**Risks:**
  ! WS TARGET ~$142 POST-SPLIT (pre-split $427) = PONIZEJ CENY $188.
  ! P/E 33-36x = PREMIUM. Przy EPS miss stock moze spasc -15-20%. Margines bledu minimalny
  ! Thomas Powell (byly Chairman, 19% udzialow) sprzedal 49,778 akcji za $25M w marcu 2026...
  ! SMALL CAP ($6B mkt cap). Zaleznosc od kilku mega-projektow.
**Verdict:** DEEP RESEARCH UPGRADE + SPLIT 3:1 (6.IV.2026).

## MU — Micron Technology
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 420 | **FV:** 380-520 | **Entry:** 340
**P/E:** ~8x trailing FY26E EPS ~$52. Forward ~7-8x na FY27
**Revenue Growth:** +196% FQ2-26 ($23.9B rekord!). FQ3 guide $33.5B (+40% QoQ!). FY26E >$100B
**Moat:** Jedyny US producer DRAM+NAND. HBM3E/HBM4 energooszczednosc 20-30% lepsza. 1-gamma DRAM lider. 122TB eSSD. Pierwszy 5-letni SCA w historii. CHIPS Act beneficjent
**Note:** DEEP RESEARCH: PONIZEJ FV Low. ⚠️ NEWS 27.03: 5 dni spadkow — Google TurboQuant (6x kompresja KV cache) = rynek boi sie peak HBM demand. ALE: FQ2-26 REKORD $23.9B (+196%), GM 75%, FQ3 guide $33.5B GM 81%. MS broni, 38 Buy vs 2 Sell, PT ~$515.
**Strengths:**
  + FQ2-26 $23.9B rev (+196% r/r, +75% QoQ) REKORD. DRAM $18.8B (+207%).
  + FQ3-26 GUIDE: $33.5B rev (+40% QoQ!), GM 81%. To sa marze SOFTWARE'owe, nie hardware.
  + HBM4 36GB 12H mass production 2026: 2.8 TB/s bandwidth, 11 Gb/s piny.
  + Jedyny US memory producer = CHIPS Act + de-risking od Azji.
**Risks:**
  ! INSIDER SELLING MASOWY: 103 sprzedaze vs 3 zakupy w 6 mcy.
  ! Cyklicznosc pamięci: jesli Samsung+SK Hynix agresywnie zwieksza capacity w 2027, ASP...
  ! UBS Asset Management zlikwidowal 77% pozycji (30M akcji, ~$8.5B). D.E.
  ! CapEx >$25B/rok = ogromne zobowiazania stalych kosztow. W downturn FCF moze byc ujemny
**Verdict:** Micron przeszedl metamorfoze z cyklicznego producenta pamieci w AI infrastructure cornerstone.

## 000660.KS — SK Hynix (KRW)
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 1027000 | **FV:** 900000-1400000 | **Entry:** 780000
**P/E:** ~5x fwd (2026E EPS ~107K KRW). Bull case P/E 3.7x
**Revenue Growth:** +66% Q4 2025 (32.8T KRW rekord). +34% QoQ. FY25 97.1T KRW. 2026E consensus 166T KRW (+71%)
**Moat:** HBM #1 globalnie (55-60% share). MR-MUF packaging tech (lepsza od Samsung TC-NCF). Nvidia/TSMC 'AI Alliance'. First HBM4 mass production (wrzesien 2025). Solidigm eSSD dominacja. 1b-nm DRAM lider
**Note:** W strefie FV. US IPO FILED (poufny wniosek, do $14B — re-rating z 5x na 12-15x P/E).
**Strengths:**
  + Q4 2025 REKORD — 32.8T KRW rev (+66% r/r), OP 19.2T KRW, marza 58.4% > TSMC! EBITDA...
  + HBM KING: 55-60% udzial globalny. HBM = 40% sprzedazy DRAM.
  + MR-MUF packaging = przewaga technologiczna nad Samsungiem (TC-NCF).
  + NVIDIA/TSMC 'AI ALLIANCE': symbioza — SK Hynix DRAM layers + TSMC base die + Nvidia GPU.
**Risks:**
  ! TSMC BASE DIE DEPENDENCY: HBM4 wymaga base die z TSMC 5nm.
  ! Samsung CATCHING UP: Samsung Total AI Solution (in-house base die 2nm) moze podwazyc...
  ! CYKLICZNOSC: jesli Samsung+MU agresywnie zwieksza capacity w 2027, ceny HBM koryguja...
  ! Chiny FABRYKI RISK: Wuxi (DRAM) + Dalian (NAND) = ~30% DRAM + 40% NAND podazy.
**Verdict:** SK Hynix = HBM KING i najwazniejszy partner Nvidii w pamieci. Q4 marza 58.4% > TSMC.

## 005930.KS — Samsung (KRW)
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 206000 | **FV:** 185000-250000 | **Entry:** 160000
**P/E:** ~10x trailing, ~5.8-10x fwd. Najtanszy AI play na swiecie
**Revenue Growth:** +11% FY25 (333T KRW). Q4 93.8T KRW rekord (+24% r/r). DS segment +33% QoQ
**Moat:** Jedyna firma = HBM + DRAM + NAND + Foundry 2nm GAA + Display OLED + Smartfony. 36% udzial DRAM (#1). Integracja pionowa HBM4 (memory+logic in-house)
**Note:** Ponizej FV. Q1 2026 REKORD: zysk op.
**Strengths:**
  + Q4 2025 REKORD — 93.8T KRW rev (+24% r/r), OP 20.1T KRW (marza 21.4%).
  + TOTAL AI SOLUTION: jedyna firma ktora moze zrobic HBM4 base-die + memory stack...
  + DRAM #1 odzyskany: 36% udzial (vs SK Hynix 32.1%). ASP DRAM +40% QoQ w Q4.
  + HBM4 mass production H1 2026 — cel >50% wolumenu HBM Samsunga do konca roku.
**Risks:**
  ! SK Hynix WYPRZEDZIL Samsunga w rocznym OP w 2025 dzieki wczesniejszej certyfikacji...
  ! Foundry 7.1% share vs TSMC 70.4% — przepasc. Uzyski 2nm poprawiaja sie ale nadal za TSMC
  ! HELIUM CRISIS: Samsung importuje 65% helu z Kataru. HeRS recykluje tylko 19%.
  ! DX segment SLABY: marza 2.9% w Q4. Chipflacja +9% koszty AP.
**Verdict:** Samsung = najtanszy sposob na ekspozycje AI infrastructure. P/E 5.8-10x vs TSMC 20x, SK Hynix 15x, Nvidia 24x.

## WDC — Western Digital
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 344 | **FV:** 260-370 | **Entry:** 230
**P/E:** ~17x fwd (FY26E EPS ~$8.20)
**Revenue Growth:** +28% Q2 FY26 ($3.02B). Q3 guide $3.2B (+40% r/r). Cloud 89% rev. 215 EB shipped = rekord
**Moat:** Duopol HDD (62.8% Nearline share vs Seagate 37.2%). Build-to-order z 7 hyperscalerami. UltraSMR 32TB lider. 7-16x tanszy niz SSD/GB. REE recycling z Microsoft. Nasdaq-100 member
**Note:** DEEP RESEARCH: W strefie FV. Pure-play HDD po SanDisk spin-off. Cloud 89% rev. Q2 FY26 $3.02B (+28%). GM 46.1% rekord. Build-to-order model = zero inventory risk. 62.8% Nearline share. 7-16x tansze storage niz SSD.
**Strengths:**
  + Q2 FY26 $3.02B rev (+28% r/r), beat +4.1%. EPS $2.13 non-GAAP beat.
  + PURE-PLAY HDD po SanDisk spin-off (luty 2025). Cloud = 89% rev.
  + BUILD-TO-ORDER model: wiazace zamowienia od 7 hyperscalerow pokrywaja CALA produkcje...
  + 62.8% udzial w Nearline HDD (vs Seagate 37.2%).
**Risks:**
  ! SEAGATE HAMR: jesli Seagate Mozaic 3+ HAMR okaže sie lepszy w 44TB+, WDC traci...
  ! CYKLICZNOSC: hyperscalerzy moga oglosic pause w zakupach storage po agresywnym...
  ! SSD cenowy przelom: jesli QLC SSD stanie sie konkurencyjny cenowo dla 'cieplych'...
  ! INSIDER SELLING: CEO Tan $3.67M, COO Gubbi $5.47M. Zero zakupow.
**Verdict:** WDC = pure-play AI storage infrastructure po SanDisk spin-off. 62.8% Nearline share w duopolu.

## SNDK — Sandisk
**Signal:** RED | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 856 | **FV:** 500-750 | **Entry:** 420
**P/E:** ~12x trailing annualized (~$24 EPS run-rate). Forward zalezy od cyklicznosci NAND
**Revenue Growth:** +61% Q2 FY26 ($3.03B vs $2.55B guide). DC segment +64% QoQ. ASP +35% QoQ. Best-performing S&P 500 stock 2025
**Moat:** Pure-play NAND #3 globalnie (~12% share). BiCS8 218-layer (2Tb QLC die = najwyzsza gestosc). Kioxia JV (dzielone R&D). HBF (High-Bandwidth Flash) = game changer dla AI inference. LTA kontrakty z hyperscalerami
**Note:** DEEP RESEARCH: Gorna strefa FV. Pure-play NAND spinoff z WDC (luty 2025). Q2 FY26 $3.03B rev (+61%). GM 51.1% REKORD. EPS $6.20 vs $3.40 guide = +82% beat! BiCS8 + HBF tech. Ale: +132% YTD = momentum overextended.
**Strengths:**
  + Q2 FY26 $3.03B rev (+61% r/r), beat guide o 15%. EPS $6.20 vs $3.40 guide (+82% beat!).
  + BEAT-AND-RAISE MASZYNKA: Q4 FY25 EPS beat +867% ($0.29 vs $0.03). Q1 FY26 beat +36%.
  + BiCS8 218-layer = najwyzsza gestosc matrycy na rynku (2Tb QLC die).
  + HIGH-BANDWIDTH FLASH (HBF) = nowa kategoria: przepustowosc jak HBM ale koszt NAND.
**Risks:**
  ! WYCENA STRETCHED: +132% YTD. Przy $702 w gornej strefie FV $500-750.
  ! CYKLICZNOSC NAND: jesli AI investment pause -> nadpodaz NAND -> ASP -20-30% QoQ.
  ! GAAP STRATA nadal mimo rekordowych non-GAAP wynikow.
  ! Samsung + SK Hynix >300 warstw moga zepchnac BiCS8 do statusu 'legacy'.
**Verdict:** SIGNAL UPGRADE red->yellow. SanDisk to phoenix — z niedowartosciowanej jednostki WDC do best-performing S&P 500 stock.

## CRDO — Credo Technology
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 120 | **FV:** 90-140 | **Entry:** 78
**P/E:** ~25x fwd (FY27E). High-growth premium uzasadniony +201% rev growth
**Revenue Growth:** +201% Q3 FY26 ($407M). +52% QoQ. FY26E $1.33B. FY27E >$2B. Z $61M (Q4 FY24) do $407M w 8Q = 6.7x
**Moat:** AEC (Active Electrical Cables) 73% global share. 50% mniej energii niz optyka. 224G SerDes na 3nm (ahead of MRVL/AVGO). ZeroFlap Optics. Cardinal 1.6T DSP family. $1.32B cash, zero dlugu
**Note:** DEEP RESEARCH: W strefie FV. AEC KING — 73% udzial. Q3 FY26 $407M rev (+201%!). GM 68.6%. 88% rev od 3 klientow. Cardinal 1.6T DSP = next catalyst. 50% mniej energii niz optyka.
**Strengths:**
  + Q3 FY26 $407M rev (+201% r/r, +52% QoQ). GM 68.6% (z 66.1% 8Q temu).
  + AEC DOMINACJA: 73% globalnego rynku.
  + Beat-and-raise: Q3 guide $335-345M -> wynik $407M (+20% beat).
  + 224G SerDes na 3nm TSMC = 6-12 mcy przewagi nad MRVL i AVGO w standardzie 1.6T.
**Risks:**
  ! KONCENTRACJA EKSTREMALNA: 3 klientow = 88% rev. Utrata jednego = -30-40% rev natychmiast
  ! INSIDER SELLING: COO sprzedal $55M (370K akcji), CTO $9.6M, CEO $7.7M.
  ! MRVL i AVGO WCHODZA w AEC: Marvell deep research potwierdza — kontratakuja retimerem...
  ! CPO/LPO technology risk: Co-Packaged Optics moze uczynic AEC niepotrzebnym przy 1.6T.
**Verdict:** Credo = AEC King z 73% share i najszybszym wzrostem w dashboardzie (+201% r/r).

## LITE — Lumentum
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 895 | **FV:** 750-1000 | **Entry:** 600
**P/E:** ~45x fwd
**Revenue Growth:** +65% Q2 r/r, Q3 guide $780-830M
**Moat:** Lasery EML i VCSEL dla AI DC, Nvidia $2B strategic deal, S&P 500 inclusion
**Note:** FV RAISE $750-1000 (z $480-560). Nvidia $2B investment. CEO: 'sold out to 2028, 25-30% za popytem.' JPM PT $950, Mizuho $930. CPO penetracja 4%→30% do 2029 (CAGR 153%). S&P 500. Q3 guide $780-830M (+89% r/r). Transformacja z commodity optyki na strategic Nvidia partner.
**Strengths:**
  + Q2 FY26 rekord $665M rev (+65%), non-GAAP EPS $1.67, GM 42.5%
  + Nvidia $2B inwestycja w Series A Preferred + multi-year purchase commitments
  + , 
**Risks:**
  ! , 
  ! , 
  ! , 

## COHR — Coherent
**Signal:** RED | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 309 | **FV:** 165-270 | **Entry:** 145
**P/E:** Fwd ~41x (FY26E non-GAAP EPS $5.45). FY27E $7.47 → fwd ~30x. Trailing GAAP P/E 248x (znieksztalcony). EV/EBITDA trailing 46.6x, fwd ~30x. DROGI vs historical ~20x ale book-to-bill >4x uzasadnia premium
**Revenue Growth:** FY25 $5.81B (+23.4%). Q2 FY26 $1.686B (+17.5% r/r). 8 kwartalow wzrostu z rzedu. FY26E $7.07B (+21.6%). FY27E $8.74B (+23.7%). D&C z 63% do 72% rev w 4 kwartaly. Guide Q3 FY26 $1.70-1.84B (above consensus). Long-term: 800G→1.6T→CPO migration
**Moat:** JEDYNA SPOLKA Z TOP-5 POZYCJA WE WSZYSTKICH SEGMENTACH: transceivery (#3), VCSEL (#2, ~37%), 1.6T readiness (#1 breadth — triple-tech SiPh+EML+VCSEL), CPO (NVIDIA partnership), SiC (#4, 13.9%). INTEGRACJA PIONOWA: wlasna produkcja InP (Sherman TX + Jarfalla Szwecja, 6-calowe wafle = pierwsze na swiecie), SiC (Easton/Saxonburg PA, DENSO/Mitsubishi $1B JV), GaAs/VCSEL (6-calowe fabryki). NVIDIA $2B investment + purchase commitment. Book-to-bill >4x DC = widocznosc CY2028. D&C 72% rev (+33.5%). OCS revenue ramp (10+ klientow). S&P 500 inclusion. 60 zakladow w 14 krajach. CHIPS Act: $33M InP + $79M SiC
**Note:** LEKKO DROGO. NVIDIA $2B investment + wielomiliardowy purchase commitment = walidacja strategiczna.
**Strengths:**
  + NVIDIA $2B INVESTMENT + wielomiliardowy purchase commitment = NAJSILNIEJSZA walidacja...
  + BOOK-TO-BILL >4x W DC = NADZWYCZAJNA WIDOCZNOSC.
  + BEAT 5/5 KWARTALOW (avg EPS beat +14%). Q1 FY26 EPS beat nawet GORNA granice guidance.
  + TRIPLE-TECH 1.6T = JEDYNY TAKI GRACZ: SiPh + EML + VCSEL w jednej firmie.
**Risks:**
  ! FWD P/E ~41x vs HISTORICAL ~20x = PODWOJNA PREMIA.
  ! FCF UJEMNY (-$104M TTM) z powodu masywnego capex ($501M).
  ! INSIDER SELLING $1.1B / ZERO ZAKUPOW. Bain Capital COMPLETE EXIT ($1.075B, 7.5M akcji).
  ! GALLIUM BAN RISK = BINARNY 27.XI.2026. Chiny produkuja >90% globalnego galu.
**Verdict:** Conviction LOW→MEDIUM.

## FN — Fabrinet
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ❌ stub
**Price:** 610 | **FV:** 400-650 | **Entry:** 350
**P/E:** ~28x trailing. Stabilny margin expansion
**Revenue Growth:** ~+20% r/r napedzany AI optical transceiver demand
**Moat:** Contract manufacturer #1 dla optical transceivers. Precision manufacturing (Thailand). Produkuje dla LITE, COHR, Lumentum legacy, AAOI. Customer diversification = moat. Niezalezny od winnera w optyce
**Note:** STUB #84. Brak DR.
**Strengths:**
  + TSM optyki — produkuje transceivery dla calej branzy
  + Customer-agnostic: zarabia niezaleznie kto wygra (LITE vs COHR vs AAOI)
  + Thailand manufacturing = cost advantage + geopolitical diversification od Chin
**Risks:**
  ! Customer concentration risk (top 3 customers = duzy % rev)
  ! Optyka cykliczna — inventory corrections mozliwe
  ! Brak DR — potrzebna pelna analiza
**Verdict:** Stub #84. Fabrinet = picks-and-shovels dla optyki. Unikalna pozycja contract manufacturer. Potrzebna DR.

## GLW — Corning
**Signal:** RED | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 171 | **FV:** 100-140 | **Entry:** 85
**P/E:** Fwd ~40x core (FY26E $3.10). Trailing ~55x core. FY27E $3.87 → fwd ~33x. GAAP fwd ~40x. PEG 1.38. DROGI vs historical avg ~19x fwd P/E ale premium za AI infrastructure moat. Porownanie: ANET 34x (comparable growth), AVGO 30x (wyzsze marze)
**Revenue Growth:** +19.1% FY25 GAAP ($15.63B), +13% core ($16.41B). Q4 $4.22B (+14%). Optical Comms $6.27B (+35% r/r), enterprise AI +61%! Springboard: $4B delivered, target $5.75B (high-conf) / $6.5B (internal) do konca 2026, $11B do 2028. FY26E $18.5-18.9B (+18-21%). Solar ramp-up: Hemlock +33% r/r
**Moat:** WYNALAZCA SWIATŁOWODU (1970). Jedyna firma na swiecie od kompozycji szkla do gotowych systemow connectivity = UNIKALNA INTEGRACJA PIONOWA. Tłumienie 0.15 dB/km (vs 0.17-0.20 konkurencja). Opatentowany fusion draw process. Multicore fiber (4x gestosc), konektory MMC (50% mniejsze niz MPO), co-packaged optics dla chipow AI. META $6B wieloletni deal + 'kilka podobnych w pipeline'. Apple $2.5B. Lumen Technologies 10% globalnej pojemnosci. R&D ~$1B/yr (6.1% rev) = wielokrotnie wiecej niz Prysmian (1.3%) czy AGC (2.8%). Optical Comms 5x wieksze niz najblizszy konkurent (Prysmian $1.3B vs GLW $6.3B). Springboard $11B do 2028. FCF $1.72B. Display glass #1 (89% rynku z AGC i NEG). Gorilla Glass monopol smartphone
**Note:** LEKKO DROGO. 'NERVOUS SYSTEM OF AI' — dominujacy dostawca swiatłowodów dla DC.
**Strengths:**
  + BEAT 8/8 KWARTALOW = BEZBLEDNY TRACK RECORD. Core EPS at/above high end KAZDY kwartal.
  + OPTICAL COMMUNICATIONS $6.27B (+35% r/r) = STAR SEGMENT.
  + META $6B DEAL = GAME CHANGER (27.I.2026). Wieloletnie dostawy swiatłowodów.
  + SPRINGBOARD $11B DO 2028 = BEZPRECEDENSOWY ORGANIC GROWTH.
**Risks:**
  ! FWD P/E ~40x = 2x HISTORICAL AVERAGE (~19x).
  ! INSIDER SELLING $56M / ZERO ZAKUPOW.
  ! CHINA EXPOSURE 15-20% PRZYCHODOW.
  ! DISPLAY TECHNOLOGIES -5% r/r = SCHODZACY SEGMENT. Life Sciences -2%.
**Verdict:** Conviction LOW→MEDIUM. Stary FV $100-130 przesuniety do $100-140 (Springboard $11B + Meta $6B + pipeline).

## ANET — Arista Networks
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 148 | **FV:** 108-155 | **Entry:** 95
**P/E:** Fwd 33.7x (FY26E EPS $3.58). Trailing 43-47x. FY27E $4.32 → fwd 28x. PEG 1.85. Premium za jakość ale nizszy niz CRDO (~25x na high-growth) i znaczaco nizszy niz PLTR (113x)
**Revenue Growth:** +28.6% FY25 ($9.006B). Q4 $2.488B (+25.3%). FY26 guide $11.25B (+25%), konsensus $11.60B (+29%). AI networking: $1.5B (2025) → $3.25B target (2026). Cloud titans 48%, enterprise 32%, neocloud 20% (najszybszy wzrost — CoreWeave, Oracle). Campus $750-800M → $1.25B target
**Moat:** #1 PRZELACZNIKI DC (21.3% share, wyprzedzil Cisco). JEDEN system operacyjny EOS (vs Cisco multi-OS = complexity). 800G Etherlink leadership (R4 platform, HyperPort 3.2Tbps). AI networking $3.25B target 2026. CloudVision + AI Analyzer = software moat. $10.74B cash, ZERO dlugu ($8.53/akcje net cash). Non-GAAP op margin 48.2% = NAJWYZSZA w networking. ROIC 183-192%(!). FCF $4.25B. Gartner Leader z najwyzsza Ability to Execute. CEO Ullal 17.5 lat = wizjonerka. Bechtolsheim (Sun Microsystems co-founder) = 15% akcji, Chief Architect
**Note:** W strefie FV. NOWA SPOLKA #65.
**Strengths:**
  + BEAT 8/8 KWARTALOW NA REVENUE + 43/49 NA EPS = BEZPRECEDENSOWY track record.
  + AI NETWORKING $1.5B (2025) → $3.25B TARGET (2026) = PODWOJENIE. Z niemal zera w 2022.
  + #1 DC SWITCHING (21.3% share Q1 2025): wyprzedzil Cisco ktory mial monopol dekadami.
  + NON-GAAP OP MARGIN 48.2% = NAJWYZSZA w networking industry (vs Cisco 34.3%,...
**Risks:**
  ! 100% BROADCOM SILICON DEPENDENCY = EGZYSTENCJALNE RYZYKO.
  ! 100% TSMC POSREDNIA DEPENDENCY: Broadcom = fabless, produkuje w TSMC (Tomahawk 5 na...
  ! NVIDIA SPECTRUM-X = NOWY KONKURENT: z niemal zera do 15.2% udzialu DC w Q4 2025 ($1.5B...
  ! INSIDER SELLING $46.6M+ / ZERO ZAKUPOW.
**Verdict:** NOWA SPOLKA #65. Arista = LIDER przelacznikow DC i AI networking z najsilniejszym track recordem w dashboardzie (beat 8/8Q revenue).

## TT — Trane Technologies
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 466 | **FV:** 380-500 | **Entry:** 350
**P/E:** Fwd 27.5x (FY26E EPS $14.75). Trailing 31x. FY27E konsensus $17.32 → fwd 23.7x. PEG 2.32 = premium ale justified przez secular growth + 6/6 beat record
**Revenue Growth:** +7.5% FY25 ($21.32B). FY26 guide $23.1-23.4B (+8.5-9.5% reported, +6-7% organic). Americas 80.5% rev. Commercial HVAC orders +35% r/r Q4. Applied (DC cooling) bookings +120% Q4, book-to-bill 200%. Services ~1/3 rev z low-teens CAGR
**Moat:** Globalny lider HVAC (100% climate focus — jedyny pure-play wsrod top 4). Backlog $7.8B rekord = 4+ mcy visibility. Applied solutions book-to-bill 200% = bezprecedensowy demand na DC cooling. NVIDIA partnership: Reference Design #501 dla Vera Rubin AI factories. LiquidStack (direct-to-chip + immersion cooling) + Stellar Energy (modularny DC cooling) = kompletny AI cooling stack. BrainBox AI = autonomiczne sterowanie HVAC. Thermo King = transport refrigeration #1. 14 wertykalow komercyjnych = dywersyfikacja. EBITDA margin 20.1% = best-in-class HVAC. FCF conversion 98%. ROIC 25.95%. ROE 37%. CEO Regnery 5/5 wiarygodnosc. Refrigerant transition R-454B = mega-cykl replacement (commercial deadline 2028)
**Note:** W strefie FV. HVAC lider z eksplodujacym DC cooling pipeline.
**Strengths:**
  + BEAT 6/6 KWARTALOW, avg +3.8%.
  + APPLIED BOOKINGS +120% r/r W Q4 2025, BOOK-TO-BILL 200% = bezprecedensowy leading...
  + NVIDIA PARTNERSHIP: Reference Design #501 dla Vera Rubin AI factories (I.2026).
  + LIQUID COOLING M&A SPRINT: LiquidStack (direct-to-chip + immersion, zamkniete...
**Risks:**
  ! INSIDER SELLING $20.78M / ZERO ZAKUPOW w 6 mcy.
  ! FWD P/E 27.5x = PREMIUM.
  ! DC COOLING NADAL NIEJAWNY % BIZNESU — Trane NIE raportuje osobno revenue z data center...
  ! RESIDENTIAL HVAC SLABY: spadek mid-single digits przez wiekszosc 2025 z powodu...
**Verdict:** Trane = najsilniej rosnacy quality compounder w HVAC z eksplodujacym DC cooling pipeline.

## VRT — Vertiv Holdings
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 296 | **FV:** 250-350 | **Entry:** 210
**P/E:** ~46x fwd (FY26E EPS $6.02). Premium za AI infra pure-play
**Revenue Growth:** +28% FY25 ($10.3B). Q4 $2.88B (+19%). FY26E $13.25-13.75B (+28%). Organic orders +252% w Q4
**Moat:** 80% rev z data center = najczystsza ekspozycja na AI infra. Backlog $15B (book-to-bill 2.9x). Liebert = synonim niezawodnosci w UPS/cooling. 23 fabryki + 310 centrow serwisowych globalnie. OneCore prefab moduly. 800V DC partner Nvidia
**Note:** DEEP RESEARCH: W strefie FV. Grid-to-chip infrastructure king. Backlog $15B (+252% orders). 80% rev z DC. Q4 margin 23.2% (z 15.2% 8Q temu). S&P 500 inclusion marzec 2026. FY26E $13.5B (+28%).
**Strengths:**
  + Backlog $15B rekord. Book-to-bill 2.9x w Q4.
  + MARGIN TRAJECTORY: adj op margin z 15.2% (Q1 2024) do 23.2% (Q4 2025) = +800bps w 8...
  + 80% REV Z DATA CENTER = najczystsza AI infra ekspozycja w dashboardzie.
  + FY26 GUIDE: $13.25-13.75B rev (+28%), EPS $5.97-6.07 (+43%).
**Risks:**
  ! P/E ~46x fwd = DROGO w bezwzglednych liczbach.
  ! EMEA SPADEK: -14% r/r w Q4. APAC -9%.
  ! Taryfy celne: 20% Chiny, 25% Meksyk. Wymuszaja reorganizacje supply chain.
  ! Schneider Electric przejal Motivair = liquid cooling competition rosnie.
**Verdict:** Vertiv = najczystsza AI infrastructure pure-play w dashboardzie (80% DC rev). Backlog $15B z book-to-bill 2.9x = demand bezprecedensowy.

## VICR — Vicor Corporation
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 180 | **FV:** 130-200 | **Entry:** 110
**P/E:** Trailing ~69x ($2.61 EPS). Fwd ~67x (FY26E $2.69). FY27E $4.73 → ~38x. EV/EBITDA ~70-75x. P/S ~18x. DROGO na kazdej metryce — wycena oparta na NADZIEI na Rubin VPD ramp, nie na obecnych earnings
**Revenue Growth:** +26.1% FY25 ($452.7M) ale $45M jednorazowa ugoda = organic ~$408M (+12-15%). FY26E konsensus $548M (+21%). Advanced Products +26% (61% rev). Royalties run-rate ~$90M z celem >$200M w 2 lata
**Moat:** PIONIER VPD (Vertical Power Delivery) — moduly zasilania bezposrednio pod procesorem. Opatentowana architektura FPA (Factored Power Architecture). Gen 5 sub-3mm (vs 5mm konkurencja). ITC nakaz wykluczenia importu naruszen patentow NBM. $402.8M cash, zero dlugu. Single-site Andover MA (320K sqft). CEO/zalozyciel Dr. Vinciarelli 40+ lat, ~20% udzialow. BCM6135 800V-to-48V = Nvidia 800V sidecar architecture ready
**Note:** LEKKO DROGO (+9% vs mid $165). CHIP-LEVEL POWER DELIVERY pioneer — 48V-to-1V VPD bezposrednio przy GPU.
**Strengths:**
  + UNIKALNA TECHNOLOGIA VPD — jedyny producent power-on-package dla ekstremalnych pradow...
  + BACKLOG REKORD $176.9M, book-to-bill >1.2 w Q4.
  + ZERO DLUGU + $402.8M CASH = FORTRESS. FCF $117-123M w FY25 (+175% r/r).
  + IP MONETIZATION = NOWY STRUMIEN: ugoda $45M w Q2 25, royalties run-rate $90M/yr z...
**Risks:**
  ! INSIDER SELLING $126.4M / 183 TRANSAKCJI / ZERO ZAKUPOW = ABSOLUTNIE NAJGORSZY INSIDER...
  ! WYCENA EKSTREMALNA: P/E ~69x trailing, ~67x fwd, EV/EBITDA ~70-75x, P/S ~18x.
  ! NIEZWERYFIKOWANY NVIDIA DESIGN-WIN.
  ! KONKURENCJA INTENSYFIKUJE SIE: Infineon+Delta quad-phase VPD modules (2.0A/mm²).
**Verdict:** SPOLKA #83. Vicor = pioneer chip-level VPD z unikalna technologia i fortress balance sheet (zero dlugu, $403M cash).

## SCHN.PA — Schneider Electric (EUR)
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 260 | **FV:** 260-340 | **Entry:** 220
**P/E:** Fwd 22.7x (FY26E EPS 9.75 EUR). Trailing 32.2x. Tanszy niz ETN (28x) i ABB (24x electrification). Premium uzasadniony backlogiem i software moatem
**Revenue Growth:** +9% FY25 organic (40.22B EUR). FY26 guide +7-10% organic. Long-term CAGR 2026-2030: 7-10%. Q4 2025 rekord 11.1B EUR (+10.7%). Adj EBITA +12.3% organic. North America +15% organic = najszybszy region
**Moat:** Grid-to-Chip = JEDYNA firma oferujaca kompletny stos od rozdzielnicy SN po chlodzenie Direct-to-Chip. 25-28% udzial DC UPS (#1). EcoStruxure software platform = switching costs + recurring revenue (Digital Flywheel 62% rev = 25B EUR). Motivair MCDU-70 = 2.5MW liquid cooling dla klastrow AI 10MW+ (standard dla NVIDIA Blackwell). AVEVA = industrial software (Digital Twin). Backlog 25.4B EUR (+18%). 90% produkcji lokalna (multi-hub). Glencore copper partnership. FCF conversion 111%. Net Debt/EBITDA 0.7x = czysty bilans
**Note:** PONIZEJ FV! Grid-to-Chip lider = najbardziej zintegrowany stos technologiczny w AI power+cooling. FY25 40.2B EUR (+9% organic), FCF 4.64B EUR (111% conversion!), Net Debt/EBITDA 0.7x.
**Strengths:**
  + FY25 40.22B EUR rev (+9% organic) = REKORD. Adj EBITA 7.52B EUR (+12.3% organic).
  + MOTIVAIR MCDU-70 = DE FACTO STANDARD chlodzenia cieczą dla klastrow GPU >100kW/rack.
  + BACKLOG 25.4B EUR (+18% r/r) = ponad 7 miesiecy pokrycia przychodow.
  + DIGITAL FLYWHEEL = 62% przychodow (25B EUR) z produktow skomunikowanych + software +...
**Risks:**
  ! CHINA 13% REVENUE + REE DEPENDENCY: Chiny kontroluja 91% rafinacji metali ziem rzadkich.
  ! MIEDZ = KRYTYCZNY SUROWIEC: Schneider jeden z najwiekszych konsumentow miedzi.
  ! GOES (STAL ELEKTROTECHNICZNA) DEFICYT: lead times transformatorow >100 tygodni.
  ! MARGIN PRESSURE: Systems mix shift = marza brutto -40bps organicznie w 2025.
**Verdict:** SIGNAL CHANGE blue->green. Schneider Electric = Grid-to-Chip lider z NAJBARDZIEJ ZINTEGROWANYM stosem technologicznym w AI power+cooling infra.

## ENR.DE — Siemens Energy (EUR)
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ❌ stub
**Price:** 150 | **FV:** 110-170 | **Entry:** 95
**P/E:** TTM ~70x (Gamesa distortion). Fwd ~36x (FY26E EPS €4.11). EV/Sales 2.67x. EBITDA margin 9% → FY26E 14.3%
**Revenue Growth:** TTM ~€39B. FY26E €44B (+13%). EBITDA FY26E €6.3B (+61%!). Net profit FY26E €3.5B (+86%). Grid Technologies ~20% r/r. Gas Services stable. Gamesa = drag ale zmniejszajacy sie
**Moat:** GRID TECHNOLOGIES = TRANSFORMATORY + HVDC + ROZDZIELNICE HV. Kazdy nowy AI DC potrzebuje transformatora (kolejka 3-4 lata = pricing power). Kazda farma wiatrowa/solarna potrzebuje polaczenia do sieci = Siemens Energy. HVDC przesyl na duze odleglosci = monopol 3 firm (Siemens, Hitachi, ABB). Gas Services = turbiny gazowe (baseload power dla DC gdy OZE nie wystarczaja). European energy independence thesis = grid modernization. 103,000 pracownikow. Laczy 3 thesis: AI DC power (transformatory), European energy independence (grid), Hormuz cascade (gas turbines = backup power)
**Note:** STUB #73. Brak DR.
**Strengths:**
  + Grid Technologies = TRANSFORMATORY = bottleneck #1 w calym AI infra lancuchu.
  + BACKLOG REKORD €146B (+34% r/r), zamowienia +34%.
  + Laczy 3 thesis jednoczesnie: AI DC buildout + European energy independence + Hormuz...
  + Top 3 producent transformatorow globalnie (obok Hitachi Energy i ABB).
**Risks:**
  ! Gamesa (wind) = rak: miliardowe odpisy, defekty lopat, restrukturyzacja trwa od 2023.
  ! Rally +2,600% od dna (€6.40→€172 ATH) = momentum play, nie value play.
  ! P/E fwd ~36x = premium.
  ! Beta 1.62 = najwyzsza w calym dashboardzie.
**Verdict:** Stub entry #73. Czekam na DR.

## CLS — Celestica
**Signal:** RED | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 353 | **FV:** 200-300 | **Entry:** 175
**P/E:** ~22x fwd
**Revenue Growth:** +20% FY25E ($10B+)
**Moat:** AI server/rack assembly dla hyperscalerow. HPS segment (DC) = 65%+ rev. Dell competitor w AI hardware. 400G/800G switch assembly
**Note:** Brak DR. AI server manufacturer/integrator. Buduje raki dla hyperscalerow. Jensen: 200 pods/week = Celestica builds them. HPS segment +50%.
**Strengths:**
  + AI server assembly = picks-and-shovels na hardware layer
  + HPS segment (data center) = 65%+ revenue i rosnacy +50%
  + Jensen: 200 pods/week, 1.3M components per rack = Celestica assembles
  + Revenue $10B+, margin expanding
**Risks:**
  ! Low margins (~5-7% op margin) — contract manufacturing
  ! Concentration risk: top 3 clients = 60%+ rev
  ! Competition: Flex, Jabil, Foxconn
  ! Cyclicality tied to hyperscaler CapEx
**Verdict:** Brak deep research. Stub entry. Buduje fizyczne raki AI — Jensen's 200 pods/week vision.

## MOD — Modine Manufacturing
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ❌ stub
**Price:** 235 | **FV:** 150-280 | **Entry:** 130
**P/E:** ~25x trailing. Margin expansion z AI cooling mix shift
**Revenue Growth:** ~+15-20% r/r napedzany AI DC liquid cooling demand
**Moat:** Liquid cooling expertise: direct-to-chip, rear door heat exchangers, CDUs. AI GPU density (Blackwell 1200W per chip) wymaga liquid cooling = air cooling nie wystarczy. VRT robi broader infra, MOD = focused liquid cooling pure-play
**Note:** STUB #85. Brak DR. LIQUID COOLING specialist dla high-density AI racks. Inny wektor niz VRT (broader HVAC) i TT (commercial). Skoncentrowany na thermal management for AI DC specifically. Revenue ~$2.5B, mkt cap ~$12B. Russell 2000 AI Bottleneck play.
**Strengths:**
  + Pure-play liquid cooling for AI DC — niche ktorej nie mamy
  + GPU power density rosnie (H100 700W → Blackwell 1200W) = liquid cooling KONIECZNE
  + Mix shift z legacy auto/industrial do high-margin DC cooling
**Risks:**
  ! Small cap ~$12B = higher vol
  ! Konkurencja: VRT, Schneider, Vertiv wchodza w liquid cooling
  ! Brak DR — potrzebna pelna analiza
**Verdict:** Stub #85. Modine = liquid cooling specialist. GPU power density wymusza liquid cooling. Potrzebna DR.

## DELL — Dell Technologies
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 172 | **FV:** 140-200 | **Entry:** 115
**P/E:** Fwd 13.3x non-GAAP (FY27 guide $12.90). Trailing 16.7x. FY28E ~$13.15. PEG 0.74 = atrakcyjny. EV/EBITDA 10.7-13.5x
**Revenue Growth:** +19% FY2026 ($113.5B). Q4 $33.4B (+39.4% r/r!) = rekord. AI serwery FY2026: $24.7B (+166%). FY2027 guide: $138-142B (+23%). AI serwery docelowo $50B (+103%). Zamowienia AI FY2026: $64B+. ISG z 41.5% do 58.7% rev w 8Q
**Moat:** #1 AI SERVER OEM globalnie (IDC 10.0% share, przed SMCI 9.5%). BACKLOG AI $43B = bezprecedensowy. 4,000+ klientow enterprise AI. PowerEdge XE z NVIDIA Blackwell (GB200, GB300 NVL72) = ekosystem NVIDIA. ISG $19.6B w Q4 (AI-Optimized $9.0B +342% r/r). Michael Dell 40.5% kontroli glosow = alignment. Direct sales model = najsilniejszy kanal enterprise w branzy. Storage #1 (IDC). Dell Technologies World 18-21.V.2026. SMCI DOJ crisis = $47B demand redirect potential. 'One Dell Way' reorg start 3.V.2026 = +100-150bps margin improvement. Buyback $10B (+5% shares reduction r/r). Total shareholder yield 6.45% (1.47% div + 5.02% buyback)
**Note:** W strefie FV (+1% vs mid). #1 AI SERVER OEM NA SWIECIE (10% global server share, $43B AI backlog!).
**Strengths:**
  + FY2026 $113.5B rev (+19%), GAAP EPS $8.68 (+36%), non-GAAP $10.30 (+27%).
  + BACKLOG AI $43B = BEZPRECEDENSOWY.
  + SMCI CRISIS = DELL OPPORTUNITY: DOJ postawil zarzuty powiazanym z SMCI za nielegaly...
  + #1 SERVER OEM GLOBALNIE (IDC Q4 2025: Dell 10.0% vs SMCI 9.5%, HPE 3.1%).
**Risks:**
  ! MARZA BRUTTO KOMPRESJA: GM spadla z 22.2% (FY2025) do 20.0% (FY2026).
  ! INSIDER SELLING $1.4B+ / ZERO ZAKUPOW. Michael Dell sprzedal $1.0B (pazdziernik 2025).
  ! DLUG $31.5B + UJEMNY KAPITAL WLASNY (-$2.47B). Dlug/EBITDA 3.64x.
  ! PRESJA CENOWA DRAM = NAJOSTRZEJSZE RYZYKO: ceny DRAM +50% w 2025, kolejne +30-50%...
**Verdict:** SPOLKA #70. Dell = #1 AI server OEM na swiecie z $43B backlogu i FY2027 guide $140B (+23%).

## TSM — TSMC
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 371 | **FV:** 320-420 | **Entry:** 280
**P/E:** ~22x fwd (CY26E). Fair premium za monopol foundry
**Revenue Growth:** +36% FY25 ($122.4B / 3.81T NTD). Q4 $33.7B (+26%). FY26E +30%. N3 = 28% rev (z 9% 8Q temu)
**Moat:** 72% pure-play foundry share (90%+ w advanced nodes). N2/N3/N5 monopol. CoWoS packaging (NVDA 60% zarezerwowane). 77% rev z zaawansowanych wezlow. Klienci: Apple #1, NVDA #2, AMD, AVGO, QCOM = caly nasz dashboard. ASML largest installed base
**Note:** Q1 revenue $35.7B (+35.1% r/r) REKORD, marzec +45.2%. Goldman PT $550. Full earnings 16.IV. Section 232 14.IV risk. Arizona $165B buildout.
**Strengths:**
  + FY25 $122.4B rev (+36%). Q4 $33.7B beat guidance o $300M+.
  + 72% PURE-PLAY FOUNDRY SHARE. 90%+ w advanced nodes.
  + N3 z 9% do 28% rev w 8 kwartalow = najszybsza adopcja w historii. N2 HVM started Q4 2025.
  + HPC = 55% rev i rosnacy. AI structural demand, nie cykliczny.
**Risks:**
  ! TAIWAN GEOPOLITICAL RISK: jedyne PRAWDZIWE ryzyko egzystencjalne.
  ! Arizona/zagraniczne fabryki: margin dilution 2-4%.
  ! Koncentracja klientow: Apple + NVDA + AMD = ~60% rev. Utrata jednego = material impact
  ! ASML EUV DEPENDENCY: High-NA opoznienia = opoznienia A16 (1.6nm). Bottleneck w bottleneck
**Verdict:** TSMC = CENTRALNY UKLAD NERWOWY globalnej cywilizacji technicznej.

## LRCX — Lam Research
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 264 | **FV:** 200-280 | **Entry:** 175
**P/E:** ~22x fwd (CY26E EPS ~$5.80). Fair dla structural growth
**Revenue Growth:** +22% Q2 FY26 ($5.34B). CY25 >$20B (+30%). Q3 guide $5.7B. 10 kwartalow wzrostu z rzedu
**Moat:** 45% global etch share (#1). Trawienie HAR (High-Aspect-Ratio) = monopol na 3D NAND i HBM TSV. Kriogeniczne trawienie Cryo 3.0. ALD #2 globalnie. Silfex (wlasnosc LRCX) = pionowa integracja krzemowa. CSBG $2B/Q serwis. 100K+ zainstalowanych komor
**Note:** DEEP RESEARCH: W strefie FV. Lider trawienia (45% share) i osadzania. CY25 >$20B rev (+30%). GM 49.7%. GAA = +20% etch steps per wafer. HBM4 TSV = LRCX dominacja. 10/10 kwartalow wzrostu z rzedu.
**Strengths:**
  + CY25 >$20B rev (+30%). Q2 FY26 $5.34B beat guidance.
  + 45% ETCH SHARE globalnie (#1). Applied Materials 25%, Tokyo Electron 20%.
  + GAA (Gate-All-Around) = +20% wiecej etapow trawienia per wafer vs FinFET.
  + HBM4 16/24-layer = ekstremalnie glebokie trawienie przelotek TSV. LRCX dominuje.
**Risks:**
  ! CHINA 35% REV i spadajacy. '50% affiliate rule' = $600M utraconych przychodow w 2026.
  ! Rare earth z Chin (60% wydobycia, 80-90% przetwarzania).
  ! INSIDER SELLING masowy: CEO $26.8M, CFO $6M, Board $7.9M, SVP $7.3M.
  ! P/E ~22x fwd: fair ale nie tanio.
**Verdict:** Lam Research = 'cyfrowy kowal' ery AI. 45% etch share, dominacja w HBM TSV i GAA trawienia.

## AMAT — Applied Materials
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 401 | **FV:** 310-420 | **Entry:** 270
**P/E:** ~37x fwd (FY26E EPS ~$11.11). Premium za szerokosc portfolio
**Revenue Growth:** +4% FY25 ($28.4B). Q1 FY26 $7.01B beat $6.85B. DRAM 34% miksu (rekord). FY26 equipment biz +20% guide
**Moat:** ~19% WFE share = najszersze portfolio (deposition+etch+metrology+modification). Molibden ALD (Spectral) = jedyny dostawca dla 2nm interconnects. Viva system = GAA nanosheet surface prep. EPIC Center (co-development z klientami). AGS 2/3 subskrypcja. 100K+ systemow zainstalowanych. CFE e-beam = atak na KLA monopol metrologii
**Note:** DEEP RESEARCH: W strefie FV. Najszersze portfolio WFE (~19% share). Q1 FY26 $7.01B beat. DRAM rekord 34% miksu (HBM!). Molibden ALD = 'straznik bramy' 2nm. AGS 2/3 subskrypcja. 16/18 kwartalow beat.
**Strengths:**
  + Q1 FY26 $7.01B beat $6.85B guide. EPS $2.38 beat $2.18 (+8.2%).
  + NAJSZERSZE PORTFOLIO WFE: ~19% calego rynku.
  + DRAM REKORD 34% miksu Semi Systems (z 23% rok temu). HBM demand = structural shift.
  + MOLIBDEN ALD (Spectral) = przelamanie bariery 2nm.
**Risks:**
  ! CHINA 30% REV i spadajacy (z 37% w FY24). $252.2M kary za naruszenia eksportowe.
  ! P/E ~37x fwd = premium. Bear case $220-295 jesli China ban eskaluje + WFE cycle slowdown.
  ! Insider selling: CEO Dickerson $33M, CFO Hill $7.2M.
  ! LRCX dominuje etch (45% vs AMAT ~25%). W segmencie 3D NAND Lam jest silniejszy.
**Verdict:** Applied Materials = 'inzynier materialowy' ery AI. Najszersze portfolio WFE (19% share), obecny na KAZDYM etapie produkcji chipa.

## ASM — ASM Intl (EUR)
**Signal:** RED | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 758 | **FV:** 480-560 | **Entry:** 480
**P/E:** ~35x fwd
**Revenue Growth:** +20% rev 2026E
**Moat:** Monopol ALD (atomic layer deposition) \u2014 kluczowy dla 2nm i advanced packaging
**Note:** ~5% powy\u017cej FV. ALD technology leader. Kluczowy dla 2nm i HBM. Amsterdam listed.
**Strengths:**
  + , 
  + , 
  + , 
**Risks:**
  ! , 
  ! , 
  ! , 

## TER — Teradyne
**Signal:** RED | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 368 | **FV:** 220-340 | **Entry:** 190
**P/E:** Fwd ~44x (FY26E non-GAAP EPS $6.24). Trailing 85-88x GAAP. FY27E $7.20-7.50 → fwd ~37x. Long-term model EPS $9.50-11.00 przy $6B rev. DROGI ale AI transformation uzasadnia premium vs historical 20-25x
**Revenue Growth:** +13.1% FY25 ($3.19B). Q4 $1.083B (+43.8% r/r, +40.8% QoQ!). FY26E $4.18B (+31%). FY27E $5.0B (+20%). Guide Q1 2026 $1.15-1.25B (+75% r/r). Compute SoC z 10% (2023) do 50% (2025) = 90% r/r growth. Memory test Q4 rekord $206M. Sezonowosc 2026: ~60% H1 / ~40% H2
**Moat:** #2 ATE GLOBALNIE (~25-30% share). Duopol Advantest-Teradyne = ~80% rynku testerow. ATE TAM 2025 ~$9.3B → $9.8B 2026 → $12-14B long-term. COMPUTE EXPLOSION: AI >60% rev (Q4), >70% (Q1 guide). HBM test intensity 10x DRAM = structural TAM expansion. Custom ASIC testing ~45% share. PHOTON 100 = nowa platforma silicon photonics/CPO (przejecie Quantifi Photonics). Universal Robots = #1 cobot = Physical AI optionality (Jensen $50T TAM). Net cash $159M. Beat 6/6Q. Management 4.5/5
**Note:** W strefie FV. AI ZMIENILO DNA SPOLKI TESTOWEJ — z cyklicznego ATE na >60% AI revenue.
**Strengths:**
  + BEAT 6/6 KWARTALOW ze srednim EPS surprise +15.2%(!).
  + AI TRANSFORMATION BEZPRECEDENSOWA: Compute z 10% SoC revenue (2023) do 50% (2025) =...
  + HBM TEST INTENSITY 10x KONWENCJONALNEGO DRAM = structural TAM expansion.
  + Q1 2026 GUIDE $1.15-1.25B = +75% r/r = REKORDOWY KWARTAL. AI >70% revenue.
**Risks:**
  ! FWD P/E ~44x = DROGI. +247% w 12 mcy.
  ! #2 ZA ADVANTEST = STRUKTURALNA SLABOSZ.
  ! ATE HISTORYCZNIE CYKLICZNY: boom 2021 → bust 2022-2023 → boom 2025. Pattern sie powtorzy.
  ! GPU KWALIFIKACJA = BINARNY KATALIZATOR: jesli major merchant GPU (prawdopodobnie...
**Verdict:** TER = picks-and-shovels na KAZDY chip AI z bezprecedensowa transformacja (AI z 10% do >70% rev w 3 lata).

## AMKR — Amkor Technology
**Signal:** RED | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 58 | **FV:** 35-50 | **Entry:** 32
**P/E:** ~18x fwd
**Revenue Growth:** +6% FY25 ($6.7B)
**Moat:** #2 OSAT, NVDA partner, $7B Arizona, advanced packaging
**Note:** W strefie FV. NVDA packaging partner. $7B Arizona fab. Q4 beat 57%.
**Strengths:**
  + NVDA strategic partner advanced packaging
  + $7B Arizona facility CHIPS Act
  + Q4 EPS beat +57%
  + Advanced packaging structural AI growth
**Risks:**
  ! Low margins ~14% GM
  ! ASE JCET TSMC konkurencja
  ! Kim family insider selling
  ! Mega-client dependency
**Verdict:** Tani picks-and-shovels packaging. NVDA + Arizona = catalysty. Przy ~$45 w strefie FV. Wejście z MoS $30-32.

## ASML — ASML (EUR)
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 1270 | **FV:** 1050-1400 | **Entry:** 900
**P/E:** ~37x trailing / ~30x fwd (FY26E). Premium za monopol
**Revenue Growth:** +16% FY25 (32.7B EUR). Q4 bookings 13.2B EUR rekord (+86% QoQ). FY26E 34-39B EUR. FY30 target 44-60B EUR
**Moat:** 100% MONOPOL na EUV litografie. Jedyny dostawca na swiecie. 94% rynku litografii ogolnie. 30 lat + 9B USD R&D = bariera wejscia nieosiagalna. Zeiss optics (24.9% udzialow), Trumpf lasery, Cymer zrodla swiatla = unikalny supply chain. Backlog 38.8B EUR
**Note:** DEEP RESEARCH: W strefie FV. ABSOLUTNY MONOPOL na EUV. 100% udzial. FY25 32.7B EUR (+16%). Q4 bookings 13.2B EUR rekord. Backlog 38.8B EUR. High-NA EXE:5200 = 350M EUR/szt. Dylan Patel: 'ASML = ultimate bottleneck do 2030.'
**Strengths:**
  + 100% MONOPOL na EUV. Zadna inna firma na swiecie nie produkuje tych maszyn.
  + FY25 32.7B EUR rev (+16%). Q4 bookings 13.2B EUR REKORD (+86% QoQ).
  + BACKLOG 38.8B EUR = pelne pokrycie FY26 prognoz (34-39B EUR).
  + HIGH-NA EXE:5200: 350-380M EUR/szt. Drukuje cechy 8nm.
**Risks:**
  ! MATCH ACT (kwiecien 2026): dwupartyjny projekt ustawy zakazujacy sprzedazy i serwisu...
  ! CHINA RISK: 33% rev z Chin w FY25 (spadek do ~20% w FY26).
  ! P/E ~37x trailing = premium.
  ! Zeiss SINGLE SOURCE: jedyny dostawca optyki EUV na swiecie.
**Verdict:** ASML = JEDYNY dostawca EUV na swiecie. 100% monopol.

## KLAC — KLA Corporation
**Signal:** RED | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 1744 | **FV:** 1200-1600 | **Entry:** 1050
**P/E:** ~25x fwd
**Revenue Growth:** +15% FY25E
**Moat:** 54% share inspekcja/metrologia wafli. Monopol w defect inspection. Wysokie marze 62% GM
**Note:** Brak DR. 54% share wafer inspection/metrology. Pojawia sie w AMAT DR jako dominujacy rywal. Zamyka WFE coverage.
**Strengths:**
  + 54% udzial w inspekcji/metrologii wafli — dominacja
  + GM 62% = najwyzsza w WFE sektorze
  + Kazdy chip AI przechodzi przez inspekcje KLA
  + Strukturalny wzrost: wiecej layerow = wiecej inspekcji
**Risks:**
  ! China exposure ~30% rev
  ! Cyklicznosc WFE
  ! AMAT CFE e-beam atakuje monopol KLA
  ! P/E ~25x = fair ale nie tanio
**Verdict:** Brak deep research. Stub entry. Zamyka WFE coverage obok ASML, LRCX, AMAT.

## ARM — Arm Holdings
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 149 | **FV:** 115-170 | **Entry:** 100
**P/E:** ~65-82x fwd NTM (FY26E EPS $1.76). ~66x FY27E ($2.17). Trailing GAAP ~200x. Premium za 97.5% GM + platform monopol
**Revenue Growth:** +24% FY25 ($4.01B rekord). FY26E $4.96B (+23.7%). FY27E $5.98B (+20.6%). Q4 FY25 = pierwszy kwartał >$1B. Royalty +17-27% r/r kazdy kwartał. Data center Neoverse +100% r/r
**Moat:** 99% smartfonow, 94% automotive OEMs, 21-25% serwerow (IDC). Architektura ARM w KAZDYM chipie AI: NVDA Grace/Vera, AWS Graviton5, MSFT Cobalt, Google Axion, QCOM Snapdragon. Armv9 = 2x royalty vs Armv8. CSS = >10% ASP chipa. 22M+ deweloperow (80% globalnej bazy). Net cash $3.08B. AGI CPU = potencjalnie jedyna firma kontrolujaca ZAROWNO IP jak i chip (jak Apple Silicon ale dla calego rynku). TAM $415B (FY26) -> $1.5T (FY31). CEO target $25B rev do 2031
**Note:** DEEP RESEARCH + UPDATE 4.IV: W strefie FV. Monopol IP procesorowego (99% mobile, 21-25% DC).
**Strengths:**
  + GM 97.5% = NAJWYZSZA MARZA W CALYM 67-SPOLKOWYM DASHBOARDZIE.
  + BEAT 9/9 KWARTALOW OD IPO. Sredni EPS beat ok.
  + AGI CPU LAUNCH 24.03.2026: 136 rdzeni Neoverse V3, TSMC 3nm, 300W TDP.
  + DATA CENTER NEOVERSE +100% r/r w Q3 FY26. Ponad 1 mld rdzeni wdrozonych.
**Risks:**
  ! NVIDIA SPRZEDALA CALA POZYCJE (1.96M akcji, luty 2026).
  ! QUALCOMM ANTITRUST: Qualcomm wygral proces Nuvia (wrzesien 2025) + zlozyl skargi na...
  ! SOFTBANK 90.6% OWNERSHIP + $8.5B MARGIN LOAN zabezpieczony akcjami ARM.
  ! AGI CPU = CONFLICT OF INTEREST: wejscie w produkcje chipow antagonizuje...
**Verdict:** DEEP RESEARCH UPGRADE + AGENTIC CPU UPDATE 4.IV. ARM = monopol IP procesorowego z najwyzsza marza brutto w dashboardzie (97.5%).

## QCOM — Qualcomm
**Signal:** GREEN | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 128 | **FV:** 150-210 | **Entry:** 130
**P/E:** ~12-14x fwd (FY26E EPS ~$11.50). Najtanszy quality semicon w dashboardzie
**Revenue Growth:** +14% FY25 ($44.3B rekord). Q1 FY26 $12.3B rekord. Q2 guide $10.2-11.0B (RAMageddon impact)
**Moat:** Snapdragon 8 Elite (lider mobile AI), QTL licensing 70%+ EBT margin (patent royalties nawet bez chipow), Automotive pipeline $45B (z $13B w 2021), AI PC Snapdragon X2 (45 TOPS NPU), 5G-Advanced IP
**Note:** PONIZEJ FV! ⚠️ NEWS 27.03: Bernstein downgrade do 'market perform' PT $140 (20/32 analitykow hold lub gorszy). ALE: zarzad odpowiada buybackiem $20B (15% mkt cap!) + dywidenda z $0.89 na $0.92/Q. P/E ~12x = nadal najtanszy quality semicon.
**Strengths:**
  + FY25 $44.3B rekord (+14%). Q1 FY26 $12.3B beat gornej granicy. Non-GAAP EPS $12.03 (+18%)
  + P/E 12-14x = ABSURDALNIE TANIE dla quality semicon. NVDA 24x, AVGO 28x, AMD 25x.
  + QTL LICENSING = patent fortress. 70%+ EBT margin.
  + AUTOMOTIVE PIPELINE: $13B (2021) -> $45B (2024).
**Risks:**
  ! RAMageddon: producenci DRAM priorytetyzuja HBM dla AI DC kosztem DDR5 dla smartfonow.
  ! Q2 FY26 GUIDE MISS: $10.2-11.0B vs consensus $11.15B. Handsets guide $6.0B (z $7.8B).
  ! APPLE ODEJSCIE: modem C1 w iPhone 16e. Kontrakt do marca 2027.
  ! Insider selling: CEO Amon $24.8M, CFO/COO 29 transakcji $5.7M.
**Verdict:** QCOM to NAJWIEKSZA VALUE PLAY w 68-spolkowym dashboardzie.

## NVDA — Nvidia
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 188 | **FV:** 170-230 | **Entry:** 150
**P/E:** ~24x fwd (FY27E EPS ~$8.75), ~20x na CY27
**Revenue Growth:** +65% FY26 ($215.9B). Q4 $68.1B (+75% DC r/r). FQ1-27 guide $78B. FY27E >$380B
**Moat:** 85-90% AI accelerator share. CUDA 4M devs (20 lat moat). NVLink/InfiniBand = zamkniety ekosystem. 60% globalnego CoWoS w TSMC. Roczny cykl produktowy (Blackwell->Rubin->Feynman)
**Note:** W strefie FV. ⚠️ NEWS 27.03: -4.16% na risk-off.
**Strengths:**
  + FY26 $215.9B rev (+65%). Q4 DC $62.3B (+75% r/r).
  + 85-90% UDZIAL w rynku AI accelerators. AMD 5-8%, Intel <2%.
  + MARGIN FORTRESS: GM 75.2% non-GAAP na systemach Blackwell. Target FY27 ~75%.
  + Vera Rubin H2 2026 = disaggregated compute + CPU Vera. Potem Rubin Ultra (HBM4) H2 2027.
**Risks:**
  ! CUSTOM ASIC THREAT: Broadcom ASIC rev +140% ($20B FY25), target $90B do 2027.
  ! TSMC SINGLE POINT OF FAILURE: 100% produkcji w TSMC. Taiwan conflict = existential risk.
  ! INSIDER SELLING: Jensen, Kress, Puri — lacznie >$40M netto w 90 dni.
  ! P/E ~24x fwd na FY27 = nie tanio.
**Verdict:** Nvidia to NAJWAZNIEJSZA FIRMA TECH NA SWIECIE. FY26 $215.9B (+65%) z GM 75% na HARDWARE to bezprecedensowe w historii.

## AMD — AMD
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 246 | **FV:** 190-280 | **Entry:** 170
**P/E:** ~35x fwd (FY26E EPS ~$5.80). PEG 0.70 = tanio vs growth
**Revenue Growth:** +34% FY25 ($34.6B). DC +39% ($5.4B/Q rekord). Client +34%. Q1 FY26 guide $9.8B. DC target +60% CAGR
**Moat:** x86 server revenue share >41% (rekord, z 28% 2 lata temu). EPYC Turin = TCO leader. MI325X 288GB HBM3e (vs H100 141GB). ROCm open ecosystem. Zen 6 (2nm) + MI450 Helios. $50B+ Embedded design wins
**Note:** DEEP RESEARCH: W strefie FV. FY25 $34.6B (+34%). DC $5.4B/Q rekord (+39% r/r). x86 server share >41% rekord. MI325X = Nvidia alternative. PEG 0.70 = 44% discount vs sector. Lisa Su delivers.
**Strengths:**
  + FY25 $34.6B rev (+34%). Q4 $10.27B beat konsensus o $600M.
  + x86 SERVER DOMINACJA: revenue share >41% (z ~28% dwa lata temu).
  + DESKTOP SHARE 36.4% (+9.5pp r/r) = rekord.
  + MI325X: 288GB HBM3e vs H100 141GB = 1.3x wydajnosc inference.
**Risks:**
  ! NVDA 86% AI share vs AMD ~5-8%. CUDA moat = deweloperzy wolą NVDA.
  ! CoWoS BOTTLENECK: AMD ma tylko ~11% alokacji TSMC CoWoS vs NVDA 60%.
  ! Insider selling: Lisa Su $63.8M (350K akcji), CTO Papermaster $13.5M, CFO Hu + EVP...
  ! Gaming SPADEK: Q4 $843M vs Q3 $1.3B (-35% QoQ). Konsolowy cykl dojrzaly.
**Verdict:** AMD = 'druga sila' w AI po NVDA + dominacja x86 (>41% server share).

## AVGO — Broadcom
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 372 | **FV:** 290-400 | **Entry:** 260
**P/E:** ~28x fwd (FY27E EPS ~$14.40). PEG 0.44 = niedowartosciowany vs growth
**Revenue Growth:** +29% Q1 FY26 ($19.3B). AI rev +106% ($8.4B). Q2 guide $22B (+47% r/r). FY27E cel $100B AI rev
**Moat:** Custom ASIC #1 (60% share): Google TPU, Meta, OpenAI Titan, Anthropic $11B. Tomahawk 6 Ethernet 102.4Tbps. VMware 93% GM (subskrypcja). 15 lat wzrostu dywidendy. EBITDA margin 68%
**Note:** DEEP RESEARCH: W strefie FV. Architekt zaplecza AI. Q1 FY26 $19.3B (+29%), AI rev $8.4B (+106%). VMware $6.8B rev (93% GM!). Custom ASIC lider (Google TPU, Meta, OpenAI). Cel $100B AI rev do 2027.
**Strengths:**
  + Q1 FY26 $19.3B rev (+29%), beat guidance. AI rev $8.4B (+106% r/r) = 67% segmentu Semi
  + CUSTOM ASIC DOMINACJA: >60% rynku.
  + VMware = SOFTWARE FORTRESS: $6.8B rev, 93% GM, bookings $9.2B, ARR +19%.
  + Q2 FY26 guide $22B (+47% r/r). AI guide $10.7B (+27% QoQ).
**Risks:**
  ! INSIDER SELLING MASOWY: Hock Tan >$100M w 6 mcy ($58.87M grudzien-styczen).
  ! Dlug >$50B (Debt/Equity 78-83%) po przejęciu VMware $69B.
  ! Apple RISK: lwia czesc Wireless revenue.
  ! Google DIVERSIFICATION: dekada relacji ale Google szuka second source (Marvell) na ASIC.
**Verdict:** Broadcom = 'architekt zaplecza AI' + VMware software fortress.

## MRVL — Marvell Technology
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 129 | **FV:** 105-145 | **Entry:** 90
**P/E:** ~23x fwd (FY27E EPS ~$3.80), ~17x FY28E ($5+)
**Revenue Growth:** +42% FY26 ($8.2B rekord), Q4 $2.22B. FY27E ~$11B (+34%), FY28E ~$15B
**Moat:** 1.6T/3.2T optyczne DSP (lider), Custom ASIC (AWS Trainium/Inferentia), Celestial AI (photonic fabric), UALink standard architect, 74% rev z Data Center
**Note:** FV RAISE $105-145 (z $88-115). Nvidia $2B investment + NVLink Fusion integration. Barclays OW PT $150. DC rev $6.1B (+46.5%), 74% total. Optyczne porty 2x w 2026, 2x w 2027. Custom ASIC (AMZN, GOOGL). 36 Buy / 0 Sell.
**Strengths:**
  + FY26 $8.2B rev (+42%), EPS $2.84 (+81%). DC = 74% rev ($5.84B). Q4 $2.22B rekord
  + Guidance WIELOKROTNIE podnoszony: FY27 $9.5B->$10B->~$11B.
  + PHOTONIC FABRIC (Celestial AI) = przelomowa tech laczenia GPU z HBM swiatlem.
  + Custom ASIC: AWS Trainium/Inferentia ($1.5B FY26). Drugi gracz po AVGO.
**Risks:**
  ! KONCENTRACJA: AWS ~18% rev (Custom ASIC). Utrata Trainium 3 kontraktu = potezny cios
  ! CoWoS bottleneck: Nvidia zabezpieczyla 60% mocy TSMC CoWoS.
  ! Broadcom ($9.2B/Q, 67% EBITDA margin) ma 4x wieksza skale. Credo atakuje od dolu w AEC
  ! Insider selling: CEO sprzedal $5.7M w lutym 2026 przy $90-100. UBS zlikwidowal 78% pozycji
**Verdict:** Marvell = system nerwowy AI DC. Nie CPU/GPU ale WSZYSTKO co je laczy: optyka 1.6T/3.2T, switching, custom silicon.

## NXT — Nextpower (ex-Nextracker)
**Signal:** RED | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 119 | **FV:** 100-110 | **Entry:** 95
**P/E:** ~27x fwd
**Revenue Growth:** +34% r/r Q3
**Moat:** Najwi\u0119kszy solar tracker globalnie, platforma eBOS+software
**Note:** ~8% powy\u017cej FV. Lider solar tracker\u00f3w, zero debt, $953M cash. Beta 2.41!
**Strengths:**
  + , 
  + , 
  + , 
**Risks:**
  ! , 
  ! , 
  ! , 

## ARRY — Array Technologies
**Signal:** GREEN | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 7 | **FV:** 8-12 | **Entry:** 6
**P/E:** ~10x fwd (FY26E EPS $0.65-0.75)
**Revenue Growth:** +40% FY25 ($1.28B). FY26E $1.4-1.5B (+10-17%). Backlog $2.2B = 18 mcy widocznosci
**Moat:** Solar tracker #2 globalnie (15-20% share), DuraTrack centralny naped (nizsze O&M), 100% US manufacturing = IRA domestic content bonus, OmniTrack terrain-following
**Note:** DEEP RESEARCH: Ponizej FV. Solar tracker #2 globalnie. FY25 $1.28B (+40%). Backlog $2.2B. 100% US content = IRA play. AI DC power demand.
**Strengths:**
  + FY25 $1.28B rev (+40%), beat gornej granicy guidance o $130M.
  + Backlog REKORD $2.2B = 18 miesiecy widocznosci przychodow.
  + 100% US CONTENT = kluczowa przewaga w erze IRA. Klienci uzyskuja pelne bonusy podatkowe.
  + AI DATA CENTER power demand = nowy katalizator.
**Risks:**
  ! MARGIN RISK: Q4 2025 GM spadla do 8.6% (odpis $29.5M na stare zapasy STI H250).
  ! Konkurencja: NXT ma 26% share vs ARRY 15-20%, wyzsze marze (35-40% vs 27-34%), lepszy...
  ! STAL = lwia czesc kosztow.
  ! IRA POLITICAL RISK: zmiana administracji lub reinterpretacja ulg 45X moze drastycznie...
**Verdict:** ARRY to asymetryczny bet na US solar + AI DC power demand. Przy $7 i FV $8-12 = 15-70% upside.

## FSLR — First Solar
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 204 | **FV:** 150-380 | **Entry:** 130
**P/E:** ~7.7x fwd (FY26E EPS $25.10). Historycznie najnizszy. Trailing 13.6x
**Revenue Growth:** +24% FY25 ($5.2B rekord). 17.5 GW shipped. FY26E $4.9-5.2B (flat — rozczarowalo rynek). Q4 $1.68B beat consensus
**Moat:** JEDYNY duzy producent CdTe na swiecie. Jedyny znaczacy US solar manufacturer. 25-30% udzial USA utility-scale. 5 fabryk USA (~14 GW) + SC 2027 (17.7 GW). Zero China supply chain dla modulow. Section 45X credits $2.1B/yr. Backlog 50.1 GW do 2030+. Net cash $2.4B. Oxford PV perovskite tandem licencja
**Note:** DEEP RESEARCH: Ponizej FV Mid. Jedyny US solar manufacturer. FY25 $5.2B (+24%), EPS $14.21. Backlog 50.1 GW ($15B). Net cash $2.4B. Fwd P/E 7.7x = historycznie niski. ALE: 45X credits = 80% EBITDA, tellurium z Chin, 2026 guide flat.
**Strengths:**
  + FY25 $5.2B rev (+24%), EPS $14.21, 17.5 GW shipped = ALL-TIME HIGHS.
  + FORWARD P/E 7.7x (FY26E EPS $25.10) = HISTORYCZNIE NAJNIZSZY. Trailing 13.6x.
  + BACKLOG 50.1 GW ($15B wartosci) rozciagajacy sie do 2030+. ASP $0.364/W z CURE adjusters.
  + NET CASH $2.4B = forteca bilansowa. ZERO dlugu.
**Risks:**
  ! SECTION 45X = 80% GUIDED EBITDA. Underlying GM ex-45X = ZALEDWIE 7%.
  ! 2026 GUIDANCE FLAT: $4.9-5.2B vs $5.2B actual 2025 = ZERO GROWTH. Rynek rozczarowany.
  ! TELLURIUM Z CHIN: 67-76% globalnej rafinacji.
  ! DEBOOKINGS: 8.3 GW w 2025 (w tym BP). Klienci moga renegocjowac lub wycofywac zamowienia.
**Verdict:** First Solar = jedyny US solar manufacturer z CdTe technologia. FY25 rekord $5.2B, backlog 50.1 GW, net cash $2.4B.

## SCCO — Southern Copper
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 192 | **FV:** 145-220 | **Entry:** 125
**P/E:** ~22x fwd. Premium za lowest cost + largest reserves
**Revenue Growth:** +17% FY25 ($13.4B rekord). Q4 $3.87B (+39% r/r). Srebro +15%, cynk +36%. FY26 miedz -4.7% ale ceny rekompensuja
**Moat:** NAJNIZSZY cash cost na swiecie: $0.58/lb (Q4 $0.52!). vs FCX $2.22/lb. EBITDA margin 58% = nieosiagalne dla konkurencji. Najwieksze rezerwy miedzi globalnie. Integracja pionowa z Grupo Mexico (kolej, energia MGE 516MW). Srebro 24M oz + molibden + cynk = natural hedge. Pipeline 1.6Mt do 2033 ($20.5B CapEx)
**Note:** W strefie FV. Najnizszy cash cost w branzy ($0.58/lb, Q4 $0.52!).
**Strengths:**
  + FY25 $13.4B rev (+17%), EBITDA $7.8B, NI $4.3B (+28%).
  + NAJNIZSZY CASH COST: $0.58/lb netto (Q4 $0.52/lb = -45.8% r/r!).
  + EBITDA MARGIN 58% = NIEOSIAGALNE dla konkurencji. FCX ~35%, BHP ~45%, Rio Tinto ~42%.
  + NAJWIEKSZE REZERWY MIEDZI na swiecie.
**Risks:**
  ! P/E ~22x (niektorzy licza 40x trailing) = PREMIUM za lowest cost.
  ! PRODUKCJA MIEDZI SPADA: 956Kt w 2025 (-1.8% r/r). 2026 guide 911Kt (-4.7%).
  ! PERU RYZYKO SPOLECZNE: atak nielegalnych gornikow na Los Chancas (marzec 2025) —...
  ! Grupo Mexico KONTROLA: 88.9% akcji = free float TYLKO 11.1%. Niska plynnosc.
**Verdict:** Southern Copper = najbardziej efektywny producent miedzi na swiecie. Cash cost $0.58/lb (Q4 $0.52!), EBITDA 58%, najwieksze rezerwy globalnie.

## ALB — Albemarle
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 174 | **FV:** 130-210 | **Entry:** 110
**P/E:** Fwd adj ~22x (FY26E $2.74). GAAP ~131x (strata FY25). FY27E $6.29 → ~28x. EV/EBITDA ~30.7x. Wycena CALKOWICIE zalezna od cen litu
**Revenue Growth:** FY25 $5.14B. FY26 guide $4.1-7.8B (scenariuszowy). Q4 25 +15.9% r/r = pierwszy wzrost od 2023
**Moat:** #2 producent litu (16% share). Salar de Atacama do 2043. Greenbushes JV 49%. Silver Peak = najstarsza kopalnia litu USA. Kings Mountain 50K ton docelowo. FEOC/IRA compliance = premium zachodni. $330M+ grantow USA
**Note:** W STREFIE FV (+4% vs mid $170). #2 producent litu (16% share).
**Strengths:**
  + CENY LITU PODWOILY SIE ($8-9→$16-20/kg). Spodumen >$2000/t.
  + ADJ EPS BEAT 3/4Q 2025: Q1 +64%, Q2 surprise positive, Q3 +79%.
  + SALAR DE ATACAMA DO 2043 = najcenniejszy asset litowy.
  + KINGS MOUNTAIN 50K TON LCE/ROK. $90M DoD + $150M DOE granty.
**Risks:**
  ! KEMERTON = $4B+ STRATA. Wygaszony od II.2026.
  ! 30-36% REV Z CHIN = PARADOKS FEOC. Meishan produkty moga NIE kwalifikowac sie do IRA.
  ! INSIDER SELLING $2.35M / ZERO ZAKUPOW.
  ! SCENARIUSZOWY GUIDANCE: EBITDA $0.9B (@$10/kg) vs $4.4B (@$30/kg) = 5x roznica.
**Verdict:** Albemarle = #2 producent litu z FEOC/IRA premium i Salar do 2043. Ceny litu podwoily sie, adj EPS beat 3/4Q, $450M oszczednosci.

## FCX — Freeport-McMoRan
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 68 | **FV:** 48-72 | **Entry:** 42
**P/E:** Fwd 18.1x (FY26E EPS $2.87 midpoint). FY27E $3.50+ przy pelnym Grasberg restart. Cu sensitivity: +/-$400M EBITDA per $0.10/lb
**Revenue Growth:** +1.8% FY25 ($25.9B). Q2 2025 $7.58B rekord (+14.5%). FY26 guide: Cu 3.4B lbs (H2-weighted 60%), Au 0.8M oz (H2 80%). EBITDA range $11-19B (szeroki = Cu price dependent). FY27 target 4.1B lbs Cu przy pelnym Grasberg
**Moat:** JEDYNY duzy pure-play copper miner notowany w USA. 70% US REFINED COPPER SHARE = near-shoring moat. Grasberg = top-2 copper/gold deposit na swiecie (Indonezja, PTFI 33% rev). Morenci AZ = largest US copper mine. LEACHING INNOVATION: 214M lbs Cu w 2025, target 800M lbs/yr z 42B lbs potential przy koszcie 90% nizszym niz tradycyjne wydobycie = game changer marzy. MOLIBDEN #1 globalnie (92M lbs, 80-90% world production) = monopol na niszowy metal krytyczny dla turbin wiatrowych i DC infra. Net debt $2.3B (z $20B!). $5.7B zwrocone akcjonariuszom w 2025. Bagdad AZ expansion (+250M lbs/yr od 2029). El Abra Chile ($7.5B, +500M lbs/yr). CEO Quirk 35 lat w firmie
**Note:** W strefie FV. #1 publiczny copper miner z 70% udzialu w rafinowanej miedzi USA = STRATEGICZNY asset w erze AI+near-shoring.
**Strengths:**
  + 70% US REFINED COPPER SHARE = STRATEGICZNY MONOPOL w erze near-shoring i AI.
  + LEACHING INNOVATION = HIDDEN GEM: 42B lbs Cu potential z istniejacych haldow przy 90%...
  + CAMPBELL CASCADE ADVANTAGE: sulfur z Hormuz disrupted = 9-14% globalnej miedzi z SX-EW...
  + GRASBERG = TOP-2 COPPER/GOLD DEPOSIT na swiecie. PTFI 33% rev.
**Risks:**
  ! GRASBERG MUD RUSH (8.IX.2025) = #1 OPERATIONAL RISK.
  ! AISC $1.65/lb (FY25) vs SCCO $0.58/lb = FCX jest 2.8x DROZSZY w produkcji.
  ! INSIDER SELLING $36.5M / ZERO ZAKUPOW: Chairman Adkerson $25.5M (400K akcji), CFO...
  ! INDONEZJA POLITICAL RISK: surowa polityka downstreamingu.
**Verdict:** SIGNAL CHANGE yellow->blue.

## KGH.WA — KGHM (PLN)
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 313 | **FV:** 280-370 | **Entry:** 240
**P/E:** Trailing 14.1x (FY25 EPS 18.44 PLN). Fwd ~13-14x (FY26E EPS ~19 PLN). EV/EBITDA 5.8x = NAJTANSZY copper play w dashboardzie (vs FCX 8x, SCCO 12x)
**Revenue Growth:** +3% FY25 (36.37B PLN). Q4 rekord 10.50B PLN (+22%). EBITDA 10.28B PLN (+22% r/r) = REKORD. Sierra Gorda EBITDA +96% r/r w Q4(!). Molibden +53%. FY26 guide: Cu +2.5% organic, Ag +1.4%, tax cut +500M PLN
**Moat:** JEDYNY duzy europejski producent miedzi. #2 SILVER PRODUCER NA SWIECIE (1,347 ton, Jordi: silver = top offensive pick). Top-5 producent renu (superstopy lotnicze). Pionowa integracja: kopalnia → huta → katoda → walcówka. Polskie zloza na 40+ lat. Sierra Gorda (Chile 55%) = 48% EBITDA grupy. Robinson (Nevada) + Carlota (Arizona) = US exposure. Dług netto/EBITDA 0.76x. Obniżka MET od I.2026 = +500M PLN/yr (ustawa z XI.2025)
**Note:** FV RAISE 280-370 (z 235-310). FY25: EBITDA 10.3 mld PLN (3x w 2 lata!), zysk 3.69 mld (+28%), Sierra Gorda +96% r/r = game changer. JPM OW PT 265. Miedz: AI DC demand 475K ton 2026 (4.3x r/r). P/E 15.5x. Risk: podatek miedziowy, Skarb Panstwa 32%.
**Strengths:**
  + FY25 EBITDA 10.28B PLN REKORD (+22% r/r). Q4 EBITDA 3.07B PLN = beat konsensusu +9.5%.
  + OBNIZKA PODATKU OD KOPALIN OD I.2026 = +500M PLN W 2026, +700M PLN W 2027 do EBITDA.
  + #2 SILVER PRODUCER NA SWIECIE: 1,347 ton Ag metalicznego. Cena srebra +40% r/r do $40/oz.
  + SILVER + REN + MOLIBDEN = UNIKALNA DYWERSYFIKACJA.
**Risks:**
  ! C1 $2.58/lb = NAJWYZSZY W COPPER SEKTORZE (SCCO $0.58, FCX $1.65).
  ! GOVERNANCE RISK = #1 PROBLEM. Skarb Panstwa 31.79%.
  ! KOREKTA -34% OD ATH: z 396 PLN (29.I.2026) do 260 PLN.
  ! PLN DENOMINATION = FX RISK dla USD investora.
**Verdict:** SIGNAL CHANGE red->blue.

## MP — MP Materials
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 56 | **FV:** 38-68 | **Entry:** 30
**P/E:** Fwd ~73x (FY26E EPS $0.71). FY27E $1.25 → fwd ~37x. P/S 42x TTM = EKSTREMALNIE drogi na revenue basis. Trailing P/E N/A (strata). Wycena na strategiczna wartosc + DoD optionality, nie na biezace earnings
**Revenue Growth:** +10% FY25 ($224.4M). ALE mix FUNDAMENTALNIE zmieniony: koncentrat z 71% do 0% (zaprzestanie sprzedazy do Chin VII.2025), NdPr z 28% do 72%, Magnetics z 0% do 30%. FY26E $590M (+163%!). FY27E $813M (+38%). NdPr rekord 2,599 MT (+101%). Target 6,000 MT/yr run-rate koniec 2026
**Moat:** JEDYNY ZACHODNI MINE-TO-MAGNET PRODUCER: Mountain Pass = jedyna dzialajaca kopalnia RE w USA. 50,692 MT REO (+12%). Rezerwy na 34 lat. DOD PARTNERSHIP = GAME CHANGER: $400M equity (15% udzialow DoD), PPA $110/kg NdPr na 10 lat (rynkowa $60 = $50/kg subsidy!), offtake 100% produkcji 10X gwarantowany na 10 lat, pozyczka $150M na separacje HREE, opcja +$350M. APPLE $500M kontrakt (magnesy z recyklingu, 2027). GM kontrakty na EV. 10X Facility $1.25B w Northlake TX = 7,000 MT magnetow/yr (JPMorgan + Goldman financing $1B). Separacja HREE (Dy/Tb) w Mountain Pass polowa 2026 = zamkniecie ostatniej luki. Net cash $832M. Section 45X permanentny tax credit + $58.5M Section 48C
**Note:** W strefie FV. JEDYNY zachodni mine-to-magnet producent ziem rzadkich.
**Strengths:**
  + DOD PPA = FUNDAMENTALNY GAME CHANGER.
  + JEDYNY MINE-TO-MAGNET NA ZACHODZIE: Mountain Pass → NdPr oxide → prekursory...
  + NdPr PRODUKCJA +101% r/r (2,599 MT). Target 6,000 MT/yr run-rate koniec 2026.
  + MAGNETICS SEGMENT Z ZERA DO $67M (30% REV) W JEDEN ROK.
**Risks:**
  ! P/S 42x, FWD P/E 73x = EKSTREMALNIE DROGI.
  ! BEZ PPA Q4 2025 EBITDA BYLABY UJEMNA. $51M PPA income = 130% raportowanej EBITDA $39.2M.
  ! INSIDER SELLING $67.2M / ZERO ZAKUPOW w 6 mcy. CEO Litinsky $59.3M (933K akcji!).
  ! SHORT INTEREST 16.4% FLOAT (23.3M akcji) = ZNACZACO powyzej peer group 7.8%.
**Verdict:** MP Materials = JEDYNY zachodni mine-to-magnet producer ziem rzadkich w swiecie gdzie Chiny kontroluja 90% przetworstwa RE.

## NEM — Newmont Corporation
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 121 | **FV:** 105-141 | **Entry:** 90
**P/E:** Fwd 11.6x (FY26E EPS $8.79). Trailing 15.9x. FY27E $10.34 → fwd 9.9x. Znaczaco tanszy niz Agnico Eagle (17-18x). Porównywalny z Barrick (11.4x) ale z niższym AISC i lepszą jurysdykcja
**Revenue Growth:** +21.3% FY25 ($22.669B rekord!). Q4 $6.818B (+20.6%). NI $7.09B (+112%!). Zloto 85% rev, miedz 6.3% (rosnacy), srebro 4.8%. FY26E $26.27B consensus (+16%). Marza brutto z 47.7% (Q1 2024) do 70.3% (Q4 2025) = transformacja marzy
**Moat:** #1 GOLD PRODUCER GLOBALNIE: 5.9M oz/rok po Newcrest integration (~13-14% share). 118M oz proven+probable reserves = 20+ LAT produkcji = NAJDLUZSZY life of mine w sektorze. 12.5M ton copper reserves (Cadia, Red Chris, Boddington). Portfolio zoptymalizowane: sprzedaz 6 kopalń non-core za $4.5B = focus na 12 Tier-1 assets. Cadia (Australia) = top-5 gold-copper kopalnia swiata, Panel Caves expansion Q4 2026. Tanami Expansion 2 (Australia) = -10% unit costs. Ahafo North (Ghana) = +300K oz/yr. Net cash $2.1B, $11.6B liquidity. FCF $7.3B (+massive). $3B buyback program. Autonomous mining fleet (Caterpillar AHS). Nowa CEO Viljoen = successful asset optimization
**Note:** PONIZEJ FV! #1 gold miner na swiecie. FY25 $22.7B rev (+21.3%), EBITDA $13.48B, FCF $7.3B REKORD.
**Strengths:**
  + BEAT 5/6 KWARTALOW z BEZPRECEDENSOWYM avg surprise: Q1 2025 +38.9%, Q4 2024 +28.4%, Q4...
  + FCF $7.299B = REKORDOWY w historii NEM i calego gold mining sektora.
  + MARZA TRANSFORMACJA: GM z 47.7% (Q1 2024) do 70.3% (Q4 2025) = +2,260bps w 8 kwartalow(!).
  + 118M OZ GOLD RESERVES = 20+ LAT PRODUKCJI = NAJDLUZSZY life of mine.
**Risks:**
  ! AISC ROSNACY: guide $1,680/oz na 2026 (z $1,358 w 2025!) = +24% wzrost kosztow.
  ! INSIDER SELLING 16 transakcji / ZERO ZAKUPOW w 6 mcy.
  ! GOLD CYKLICZNOSC = #1 STRUCTURAL RISK: jesli Fed zaciesnia agresywnie i CPI spada <2%...
  ! PRODUKCJA SPADA: 5.9M oz (2025) ale guide ~5.3M oz (2026) = -10% spadek wolumenu...
**Verdict:** SIGNAL CHANGE yellow->green.

## B — Barrick Gold
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 44 | **FV:** 42-62 | **Entry:** 34
**P/E:** Fwd 11.4x (FY26E EPS $3.61). Trailing 13.2x. FY27E $4.30 → fwd 9.2x. Znaczaco tanszy niz Agnico Eagle (32x) i porównywalny z NEM (~12x) ale z copper upside
**Revenue Growth:** +31.2% FY25 ($16.96B rekord!). Q4 $6.0B (+64.5% r/r!). Zloto $4,177/oz realized, miedz $5.42/lb. Copper revenue +75% r/r w Q4. FY26 guide: gold 2.9-3.25M oz, copper 190-220kt. CapEx $2.6-3.0B
**Moat:** #2 gold producer globalnie (3.26M oz/rok, ~9% share). COPPER DUAL EXPOSURE = 30% EBITDA i rosnacy — wyroznik vs NEM/AEM. Lumwana Super Pit (Zambia) = potencjalnie top-10 global copper mine do 2028. Fourmile (Nevada) = potencjalnie 20M+ oz high-grade gold deposit. Nevada Gold Mines (JV 61.5% z Newmont). Pueblo Viejo (60%, Dominikana). Reko Diq (50%, Pakistan — delayed ale $62B potential). Net cash $323M. FCF $3.87B (+194% r/r). Nowa polityka 50% FCF payout. NewCo IPO = value unlock $55-65B. Komatsu $440M kontrakt (autonomiczna flota). AISC $1,637/oz vs gold $4,500 = margin $2,863/oz
**Note:** PONIZEJ FV! #2 gold miner + copper dual exposure (30% EBITDA). FY25 $16.96B rev (+31.2%!), FCF $3.87B (+194%).
**Strengths:**
  + FY25 $16.96B rev (+31.2% r/r!) = REKORD. EBITDA $8.157B.
  + GOLD MARGIN $2,863/oz (gold $4,500 - AISC $1,637) = CASH MACHINE.
  + COPPER = AI BOTTLENECK SUROWIEC: 30% EBITDA z miedzi i rosnacy.
  + NEWCO IPO H2 2026 = GLOWNY KATALIZATOR.
**Risks:**
  ! GEOPOLITYKA = #1 RISK: Operacje w Mali (Loulo-Gounkoto = kluczowe zrodlo gotowki), DRC...
  ! AISC ROSNACY: $1,637/oz w 2025, guide $1,760-1,950/oz w 2026 = +7-19% wzrost kosztow.
  ! INSIDER SELLING NETTO: Lacznie $46M sprzedazy vs $1.5M zakupow w 12 mcy (ex-opcje).
  ! PRODUKCJA ZLOTA SPADA: 2026 guide 2.9-3.25M oz vs 3.26M w 2025.
**Verdict:** SIGNAL CHANGE blue->green.

## WPM — Wheaton Precious Metals
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 145 | **FV:** 95-155 | **Entry:** 85
**P/E:** Fwd ~21-22x (FY26E EPS $3.85). Trailing 35-43x. FY27E $3.80 → fwd ~32x. Premium za model streamingowy UZASADNIONY — zero opex, zero capex, pure margin expansion z cenami metali
**Revenue Growth:** +80% FY25 ($2.31B rekord!). Q4 $864.7M (+127% r/r!). FY26E $3.0-3.1B (+30%). GEO: 690K (2025) → 860-940K (2026, +30%) → 1.2M (2030, +50%). Antamina BHP dodaje ~70K GEO od IV.2026. OCF: $1.91B → prognoza >$3.2B/yr do 2030
**Moat:** #1 STREAMING COMPANY GLOBALNIE. Model streamingowy = ZERO kosztow operacyjnych, ZERO ekspozycji na energie/rope (Rick Rule: 'not impacted by capital costs or operating costs'). Koszt gotowkowy ~$500/GEO vs cena sprzedazy $4,500+ = marza 87-90%. 48 aktywow streamingowych (Salobo, Penasquito, Constancia, Antamina). SILVER 36% REVENUE = jedyna duza spolka streamingowa z istotna ekspozycja na AI/solar thesis (srebro w PV cells, GPU connectors, DC infrastructure). Srebro w 6. roku strukturalnego deficytu. ZERO DLUGU + $1.15B net cash + $2B niewykorzystanej linii kredytowej. Pipeline >$10B zdolnosci inwestycyjnej. 50% organic growth do 2030 (690K→1.2M GEO). Antamina BHP $4.3B = podwojenie ekspozycji na srebro. Gartner ESG: Sustainalytics 7.1 (Negligible Risk), MSCI AAA
**Note:** W strefie FV. NOWA SPOLKA #66.
**Strengths:**
  + MODEL STREAMINGOWY = ZERO KOSZTOW OPERACYJNYCH.
  + FY25 $2.31B REV (+80% r/r!) = REKORD. OCF $1.91B = REKORD.
  + SILVER 36% REVENUE = UNIKALNA EKSPOZYCJA AI/SOLAR.
  + ANTAMINA BHP $4.3B = NAJWIEKSZA TRANSAKCJA STREAMINGOWA W HISTORII. Wchodzi 1.IV.2026.
**Risks:**
  ! KONCENTRACJA NA VALE/SALOBO = 46% PRZYCHODOW.
  ! AMERYKA LACINSKA = 65-75% PRODUKCJI.
  ! FORWARD P/E ~21-22x = PREMIUM vs NEM 11.6x, B 11.4x.
  ! MARZA MARZEC 2026: -25% od ATH $166 w JEDNYM MIESIACU.
**Verdict:** NOWA SPOLKA #66. WPM = #1 streaming company na swiecie i ROZWIAZANIE problemu 'ropa drozeje = gold miner gorszy' (zero energy exposure).

## PAAS — Pan American Silver
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 57 | **FV:** 42-72 | **Entry:** 38
**P/E:** Fwd ~14x (FY26E EPS $3.71). Trailing 20-23x. FY27E $3.57. NAJTANSZY silver miner na fwd P/E (vs Hecla ~25x, First Majestic ~30x, Coeur ~18x). EV/EBITDA ~12-18x
**Revenue Growth:** +FY25 $3.62B. Q4 $1.18B (+44.7% r/r) = REKORD. FY26E $4.92B (+36%). Ag 22.8→25-27 Moz (+14%). Au 742→700-750 koz. Juanicipio pelny rok = +6.0-6.5 Moz Ag. La Colorada Skarn long-term: 19.1 Moz Ag/yr peak
**Moat:** #1 PRIMARY SILVER PRODUCER (rezerwy 452 Moz P&P = NAJWIEKSZE na swiecie). 11 kopaln w 7 krajach. AISC Ag $13.88/oz (FY25) przy silver $70 = marza $56+/oz = TECH-LIKE MARGINS (Tavi Costa: 'more profitable than Google'). La Colorada Skarn: 19.1 Moz Ag/yr peak, 37 lat zywotnosci, AISC UJEMNE -$22.67/oz (kredyty Zn/Pb) = potential game changer. Juanicipio (44%, pelna kontrola od IX.2025) = 6.0-6.5 Moz/yr high-grade. Srebro = mineral krytyczny USGS od 2025. 6. rok strukturalnego deficytu. 75% srebra = produkt uboczny Cu/Au/Zn = podaz nieelastyczna cenowo. Net cash $467M. FCF $1.15B. Dywidenda rosnaca kwartalnie
**Note:** W strefie FV. NOWA SPOLKA #67.
**Strengths:**
  + FY25 FCF $1.15B = REKORD. Q4 rev $1.18B (+45%), EPS $1.11 (beat +24%), margin 48.2%.
  + #1 PRIMARY SILVER PRODUCER: 452 Moz P&P rezerw = NAJWIEKSZE na swiecie.
  + LA COLORADA SKARN = POTENTIAL GAME CHANGER: PEA marzec 2026 — szczytowa produkcja 19.1...
  + JUANICIPIO FULL YEAR 2026: przejecie od MAG Silver (IX.2025) = pelna kontrola.
**Risks:**
  ! MEKSYK 42% PRODUKCJI Ag = KONCENTRACJA GEOGRAFICZNA #1 RISK.
  ! ESCOBAL (Gwatemala) = ZABLOKOWANE od 2017. Parlament Xinka odmowil zgody V.2025.
  ! +200% W ROK = MASYWNY RUN-UP. Trailing P/E 20-23x nie jest tanio na spolke surowcowa.
  ! INSIDER SELLING $6.84M / ZERO ZAKUPOW w 90 dni. Dyrektorzy sprzedaja przy $70+ CAD.
**Verdict:** NOWA SPOLKA #67. PAAS = #1 primary silver producer na swiecie (452 Moz reserves) i NAJTANSZY silver miner na fwd P/E (~14x).

## SII — Sprott Inc
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 147 | **FV:** 100-165 | **Entry:** 80
**P/E:** Fwd 30.4x (FY26E EPS $4.71). Trailing 40.1x. FY27E $6.00 → fwd 23.8x. P/S 13x. Premium za unique franchise ale commodity-cyclical
**Revenue Growth:** +60% FY25 ($285M). Q4 $111.4M (+162%!). Mgmt fees $63.8M (+54%). AUM: $31.5B→$59.6B→$70.1B. FY26E $360M (+26%). Fee rate 0.46% stale
**Moat:** TOLL BOOTH MODEL: zarabia 0.31-0.85% opłat za zarzadzanie na $70B AUM niezaleznie od kierunku cen (AUM rosnie z cenami commodities = naturalny leverage). SPUT 78.4M lbs U3O8 = 77% market share fizycznego uranu = MONOPOL. Spot market illiquid — SPUT robi 3x wolumen spotu dziennie (Rick Rule). PSLV $20.4B = 36% share fizycznego srebra. ETF suite: 6 z top 25 non-leveraged US ETFs by performance. Physical Copper Trust NYSE cross-listing Q2 2026 = first US-listed physical copper vehicle. Zero dlugu, $123M net cash. CEO George: AUM z $20B do $70B w 3.5 roku. Rick Rule = #1 shareholder of Sprott + SPUT. Flywheel effect (Huhn): ETF inflows→SPUT→buy physical uranium→price up→more ETF inflows→repeat
**Note:** NOWA SPOLKA #68. LEKKO DROGO (+8% vs FV mid).
**Strengths:**
  + AUM $70.1B (+89% r/r) = REKORD. FY25 rev $285.1M (+60%), adj EBITDA $121.4M (+43%).
  + SPUT = 78.4M LBS U3O8 = MONOPOL NA FIZYCZNY URAN. 77% market share (vs Yellow Cake 23%).
  + RICK RULE #1 POZYCJA: Rule jest zarowno najwiekszym udzialowcem Sprott Inc JAK I...
  + LARRY McDONALD FRAMEWORK: 'companies that control ASSETS are worth more, SOFTWARE...
**Risks:**
  ! 75% AUM Z GOLD/SILVER = CYKLICZNE. Gold $4,540 i silver $71 blisko ATH.
  ! FWD P/E 30.4x = DROGO na asset managera. BlackRock (BLK) handluje na ~22x, T.
  ! INSIDER SELLING $2.28M / ZERO ZAKUPOW w 6 mcy.
  ! PHYSICAL TRUST NAV DISCOUNTS: PHYS -3.25%, PSLV -5.42%.
**Verdict:** NOWA SPOLKA #68. Sprott Inc = TOLL BOOTH na commodity supercycle.

## CF — CF Industries
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 121 | **FV:** 85-150 | **Entry:** 75
**P/E:** Forward P/E 13.4x (konsensus EPS $9.01). Trailing P/E 14.49x (EPS $8.97). EV/EBITDA 7.0x. Bull EPS $10.77 (Wells Fargo) → P/E 12.1x = tanio. Bear EPS $6.03 → P/E 21.5x = drogo. Mid-cycle EBITDA guidance >$2.5B. Buyback od 2010: 215.8M akcji za $11.3B = 56% redukcja float
**Revenue Growth:** DEEP RESEARCH: FY25 $7.084B (+19.3% r/r). Q4 FY25 $1.872B (+22.8% r/r, GM 40.9% = najwyzsza w roku). Q3 $1.659B (+21.1%), Q2 $1.890B (+20.2%), Q1 $1.663B (+13.1%). Wzrost napedzany CENAMI nie wolumenami (19.06M ton vs 18.94M). Ceny Q4: amoniak $557/t (+20.8%), UAN $351/t (+51.9%). EBITDA $2.893B (+27%), FCF $1.789B. 7 kwartalow beat konsensusu z rzedu po miss Q1 2024
**Moat:** DEEP RESEARCH: NAJWIEKSZY KOMPLEKS AMONIAKOWY NA SWIECIE — Donaldsonville LA (1400 akrow, 6 zakladow, ~4.5M ton/yr). Zdolnosc produkcyjna 10.5M ton amoniaku = 40% capacity Ameryki Polnocnej, 'wiecej niz 4 nastepnych producentow lacznie'. Wykorzystanie 97% vs 87% srednia branzy. COST MOAT: Henry Hub $4/MMBtu vs TTF $15-20 = $300/ton amoniaku niz Europa. Gas = 70% kosztu produkcji → CF = structural low-cost producer. CAMPBELL CASCADE: 35% global urea trade przez Hormuz + Chiny zamknely eksport + Qatar facility 3-5 lat repair = CF jako 'lender of last resort' na azot. Clean energy optionality: Blue Point JV (CF 40%, JERA 35%, Mitsui 25%) — 1.4M ton/yr low-carbon ammonia od 2029, koszt $3.7B. CCS Donaldsonville operacyjny od VII.2025: do 2M ton CO2/yr, kredyty 45Q ~$170M/yr. Amoniak jako nosnik wodoru dla data centers AI (GHD 80MW DC design, Amogy/Hoku partnership). 4 kluczowe zaklady: Donaldsonville LA, Port Neal IA, Waggaman LA ($1.675B akwizycja XII.2023), Yazoo City MS (wylaczony od XI.2025)
**Note:** +10.5% POWYZEJ FV mid $117.50 = LEKKO DROGO po +64% YTD. #1 producent azotu w Ameryce Polnocnej, 10.5M ton amoniaku/yr (97% utilization).
**Strengths:**
  + CAMPBELL CASCADE EPICENTER — POTWIERDZONE PRZEZ 4 ZRODLA.
  + MARZA EBITDA 38.5% = NAJWYZSZA W SEKTORZE. Nutrien 20.8%, Yara 14.8%, LSB 24.8%.
  + COST MOAT $300/TON vs EUROPA: Henry Hub $4/MMBtu vs europejski TTF $15-20/MMBtu.
  + WYKORZYSTANIE MOCY 97% vs 87% srednia = operacyjna doskonalosc.
**Risks:**
  ! INSIDER SELLING = CZERWONA FLAGA. 28-29 transakcji sprzedazy, ZERO zakupow w 6 mcy.
  ! CENA $130 POWYZEJ KONSENSUSU PT $107 = RYNEK WYCENIA WIECEJ NIZ ANALITYCY.
  ! CYCLICALITY = FUNDAMENTALNE RYZYKO.
  ! YAZOO CITY WYLACZONY do co najmniej Q4 2026. Utrata ~200M USD EBITDA rocznie.
**Verdict:** DEEP RESEARCH.

## CCJ — Cameco Corporation
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 117 | **FV:** 82-125 | **Entry:** 72
**P/E:** Fwd 82-84x (FY26E adj EPS C$1.77 = ~$1.24 USD). Trailing 106x(!). FY27E C$2.61 = fwd ~57x. EKSTREMALNIE DROGI na earnings basis. Wycena to sum-of-parts: mining + Westinghouse optionality. SOTP: $41-58, market = $104 = 80-150% premium za scarcity + Westinghouse IPO
**Revenue Growth:** +11% FY25 (C$3.48B). Q4 C$1.20B (+1.5%). Uranium realized C$91.30/lb (+13% r/r). Fuel Services +18% Q4. ALE: FY26 guide C$3.13-3.37B = -3 do -7% r/r SPADEK (brak jednorazowego Dukovany). Westinghouse core EBITDA CAGR 6-10%
**Moat:** JEDYNA FIRMA NA SWIECIE laczaca: mining (McArthur River + Cigar Lake = 17% global production), conversion (Port Hope = jedyna zachodnia fabryka UF6), enrichment tech (GLE laser), fabrication i reactor tech (49% Westinghouse = AP1000 + AP300 SMR). Westinghouse serwisuje 50% globalnej floty nuklearnej. $80B US gov partnership na deployment AP1000/AP300. 14 AP1000 under construction + 5 under contract. 433M lbs reserves, 230M lbs contracted. Cigar Lake = najwyzszy grade operujaca kopalnia na swiecie (~17% U3O8). Russian ban 2028 = jedyne zrodlo zachodniego fuel cycle. Structural uranium deficit 30-40M lbs/yr
**Note:** LEKKO DROGO (stary FV $72-88 BYL ZA NISKI — nie uwzglednial Westinghouse). JEDYNA vertically integrated Western nuclear fuel company: mining → conversion → enrichment (GLE) → fabrication → reactor tech (49% Westinghouse).
**Strengths:**
  + WESTINGHOUSE = TRANSFORMATIONAL ASSET.
  + RICK RULE #2 POZYCJA URANOWA (VRIC marzec 2026): 'very large position, would be larger...
  + JEDYNA VERTICALLY INTEGRATED zachodnia firma nuclear fuel cycle.
  + 17% GLOBAL URANIUM PRODUCTION (23.4M lbs Cameco share).
**Risks:**
  ! 84x FWD P/E = NAJDROZSZY W CALYM 67-SPOLKOWYM DASHBOARDZIE (wyzszy niz PLTR 113x...
  ! INSIDER SELLING $18.4M / ZERO ZAKUPOW.
  ! McARTHUR RIVER PRODUCTION CUT -19%: z planned 18M lbs do actual 14-15M lbs w 2025.
  ! REVENUE GUIDE SPADA: FY26 C$3.13-3.37B = -3 do -7% vs FY25 C$3.48B.
**Verdict:** SIGNAL CHANGE red->yellow. STARY FV $72-88 BYL ZA NISKI — nie uwzglednial Westinghouse (+61% EBITDA, $80B gov deal, potential IPO).

## KAP — Kazatomprom (USD GDR)
**Signal:** YELLOW | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 29 | **FV:** 65-92 | **Entry:** 55
**P/E:** Fwd 13.3x (FY26E EPS ~$5.75). Trailing 18.2x. FY27E ~$5.65. EV/EBITDA 9.3x. P/B 3.2x. NAJTANSZY uranium play w dashboardzie (vs CCJ 84x!, UEC N/A, NXE N/A). Ale discount UZASADNIONY — Kazachstan + Rosja + management risk
**Revenue Growth:** FY25 KZT 1,803B (~$3.5B, -1% r/r). FY24 +26% r/r. FY26 guide KZT 2,200-2,300B (+22-28% r/r!). Produkcja: 25,839→27,500-29,000 tU (+7-12%). Sprzedaz: 18,494→19,500-20,500 tU (+5-11%). Realizowana cena $65.32/lb (FY25) vs spot $86-88
**Moat:** #1 GLOBALNY PRODUCENT URANU: 21% podazy pierwotnej, 25,839 tU (100% basis). 14 aktywow wydobywczych ISL w Kazachstanie. 564,300 tU reserves (100%), ~22 lat mine life. C1 $18.06/lb = NAJNIZSZY KOSZT w branzy (vs Cameco ~$20+, Orano nieujawnione). Technologia ISL = nieinwazyjna, nizsze koszty niz kopalnie konwencjonalne. STRUCTURAL DEFICIT: produkcja pokrywa ~90% popytu reaktorow, reszta ze stockpili. Goldman Sachs: cumulative deficit 1.9B lbs through 2045. AI nuclear: Big Tech 10+ GW zakontraktowane (MSFT TMI, Google Kairos, Amazon X-Energy, Meta Constellation). Chiny buduja 28-33 reaktory jednoczesnie. IEA: DC demand podwaja sie do 945 TWh do 2030
**Note:** LEKKO DROGO. #1 GLOBALNY PRODUCENT URANU (21% podazy).
**Strengths:**
  + #1 PRODUCENT URANU NA SWIECIE (21% podazy). Produkcja 25,839 tU (+11% r/r).
  + FWD P/E 13.3x, EV/EBITDA 9.3x = NAJTANSZY uranium play.
  + STRUCTURAL URANIUM DEFICIT = MEGATREND: produkcja pokrywa 90% popytu, deficyt 30-40M...
  + FY26 REVENUE GUIDE +22-28% r/r (KZT 2,200-2,300B).
**Risks:**
  ! SAMRUK-KAZYNA 75% = STATE CONTROL = #1 RISK.
  ! RICK RULE (VRIC marzec 2026): 'difficulties restarting hot-stopped facilities — when...
  ! MANAGEMENT CREDIBILITY 2.5/5 = NAJNIZSZA W DASHBOARDZIE.
  ! ROSATOM/ROSJA ~40% PRODUKCJI z JV. Budienowskoje 100% zarezerwowane dla Rosji do 2026.
**Verdict:** Conviction LOW→MEDIUM.

## UEC — Uranium Energy Corp
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 14 | **FV:** 11-20 | **Entry:** 9
**P/E:** N/A (GAAP strata, FY25 EPS -$0.20). FY26E ~breakeven, FY27E EPS ~$0.05. Forward P/E ~239x = meaningless — wycena na assets+optionality
**Revenue Growth:** FY25 $66.8M (+ramp). FY26E ~$67M (flat). Revenue LUMPY — zalezy od dyskrecjonalnej sprzedazy inventory. Q2 FY26 $20.2M (200K lbs @ $101/lb = GM 49.5%!)
**Moat:** LARGEST LICENSED US uranium producer: 12.1M lbs/yr (Irigaray 4M + Hobson 4M + Sweetwater 4.1M). 330M lbs S-K 1300 resources + 175M lbs historic (Sweetwater) = LARGEST US resource base. Zero dlugu + $486M cash + $818M liquid. 100% unhedged = max uranium leverage. ISR low-cost tech. UR&C conversion facility (NRC docket marzec 2026) = potencjalnie jedyna vertically integrated US uranium company. Spencer Abraham (ex-SecEnergy) = Executive Chairman
**Note:** Ponizej FV Mid. Largest licensed US uranium producer (12.1M lbs/yr) ale produkcja dopiero 244K lbs (<2% capacity).
**Strengths:**
  + LARGEST LICENSED US uranium producer 12.1M lbs/yr capacity.
  + RULE/HUHN URANIUM THESIS (VRIC marzec 2026): SPUT = 82M lbs (40% nadwyzki) zablokowane.
  + FORTECA BILANSOWA: $486M cash, $818M liquid assets, ZERO dlugu, current ratio 28.7x.
  + T. ROWE PRICE +42.3M akcji (!) = #1 holder z 59.3M akcjami ($647M, 12.3%).
**Risks:**
  ! P/S 304x = NAJWYZSZY W CALYM 67-SPOLKOWYM DASHBOARDZIE. $6.5B mkt cap na $67M rev.
  ! PRODUKCJA 244K lbs od restartu (Aug 2024) vs 12.1M lbs/yr licensed = <2% UTILIZATION.
  ! 100% REVENUE Z INVENTORY SALES, nie z mine production.
  ! DILUTION MASOWA: 350M akcji (2022) -> 490M (marzec 2026) = 40% w 3 lata.
**Verdict:** UEC = CALL OPTION na amerykanska niezaleznosc uranowa.

## NXE — NexGen Energy
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 12 | **FV:** 9-16 | **Entry:** 7
**P/E:** Pre-revenue / N/A. NPV @ uranium $60: CAD 3.47B, @ $90: ~CAD 6-7B, @ $150: CAD 12.8B. Wycena na NAV/NPV basis, nie earnings
**Revenue Growth:** Pre-production. ZERO revenue do ~2030. Cash burn ~$170M/yr (ops). First production 30M lbs/yr target po 48 mcy budowy = early 2030s. Revenue 2030+ est: $2.5-3.0B USD/yr przy uranium $80-100/lb
**Moat:** ARROW DEPOSIT = WORLD-CLASS: 2.37% avg grade U3O8 (vs Cameco ~1%, Kazatomprom <0.1%, Orano <0.5%). Basement-hosted = NIE wymaga mrozenia gruntu (eliminuje koszt vs Cameco McArthur River). Planned OpEx $9.98/lb CAD = NAJNIZSZY na swiecie (vs UEC $37/lb, CCJ ~$20-25, Kazatomprom ~$15). Docelowo 30M lbs/yr = ~20% globalnej podazy. Saskatchewan = NAJPRZYJAZNIEJSZA jurysdykcja uranowa (CNSC approved 5.III.2026 w rekordowe 14 dni po przesluchaniach). Patterson Corridor East (PCE) = dodatkowy exploration upside. Net cash CAD 1.1B. CEO Curyer = founder, 10+ lat single-project focus
**Note:** W strefie FV. Wlasciciel Rook I/Arrow = NAJWIEKSZE nierozwiniete zloze uranu high-grade na swiecie (2.37% avg grade).
**Strengths:**
  + CNSC APPROVED + FID TAKEN (5.III.2026) = BIGGEST DE-RISK EVENT zrealizowany.
  + RICK RULE + JUSTIN HUHN (VRIC marzec 2026): Rule ma 'large legacy position' w Arrow...
  + ARROW GRADE 2.37% = NAJWYZSZY na swiecie wsrod duzych projektow.
  + 30M LBS/YR TARGET = ~20% GLOBALNEJ PODAZY uranu. Zloze Arrow + PCE exploration upside.
**Risks:**
  ! CAPEX INFLATED Z CAD 1.3B DO 2.2B (+69%!) = MATERIALNY WZROST KOSZTOW.
  ! PRE-REVENUE = 4+ LAT CASH BURN do pierwszej produkcji (~2030).
  ! INSIDER SELLING CAD 35.8M / ZAKUPY CAD 0.03M (symboliczne).
  ! EPS MISS 5/5 KWARTALOW: Q4 miss -133%, Q3 miss -750%, Q2 miss -400%.
**Verdict:** NXE = OPCJA na najwieksza kopalnie uranu swiata z najnizszym kosztem operacyjnym. CNSC approved + FID = fundamentalnie de-risked regulacyjnie.

## GOOGL — Alphabet (Google)
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 318 | **FV:** 293-387 | **Entry:** 255
**P/E:** ~22x fwd (CY26E EPS ~$13.50). Najtanszy hyperscaler vs growth
**Revenue Growth:** +18% Q4 ($113.8B rekord). FY25 $403B (+15%). Cloud +48% ($17.7B). Search +17%. YouTube FY $60B+
**Moat:** Search 90% share (monopol). Cloud #3 ale najszybciej rosnacy (+48%). YouTube $60B/rok. Gemini 750M MAU. TPU custom silicon (AVGO partner). $240B cloud backlog. 325M paid subscriptions. Waymo 15M trips
**Note:** DEEP RESEARCH + HIDDEN ASSETS UPDATE 4.IV: 🟢 OKAZJA (-13% vs FV mid $340). Operating business at FV Low $280 = hidden assets ($164-206B) dostajesz GRATIS.
**Strengths:**
  + Q4 $113.8B rev (+18%) beat $111.4B est. EPS $2.82 beat $2.63 (+7%).
  + CLOUD EXPLOSION: $17.7B (+48% r/r) beat $16.2B est. ARR >$70B.
  + SEARCH WZMOCNIONY PRZEZ AI: $63.1B (+17%).
  + Gemini 750M MAU (z 650M Q3). 50% kodu Google generowane AI.
**Risks:**
  ! CapEx $175-185B w 2026 (2x 2025!). Depreciation +38% w 2025, accelerates further.
  ! DOJ APPEAL: rzad odwolal sie od Chrome ruling (luty 2026). Google tez apeluje.
  ! Insider selling: Pichai sprzedal $229M w 2 lata. Net insider selling -$59.4M w 90 dni.
  ! YouTube ads $11.38B MISS vs $11.84B est. Deceleration w paid video.
**Verdict:** DEEP RESEARCH UPGRADE + HIDDEN ASSETS → GREEN SIGNAL. Google = najlepiej zdywersyfikowany hyperscaler.

## META — Meta Platforms
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 630 | **FV:** 580-850 | **Entry:** 520
**P/E:** ~19.7x fwd normalized (FY26E EPS $30.26). PEG 0.88 = NAJTANSZY MEGA-CAP. Trailing normalized ~20x
**Revenue Growth:** +22% FY25 ($201B). Ad rev $184B (+22%). Q4 $59.9B (+24%). FY26E $250B+ (+25%). Ad impressions +18%, price/ad +6%
**Moat:** 3.58B DAP = LARGEST social media platform globally. FB + IG + WhatsApp + Messenger + Threads. 60% social media ad share. Advantage+ AI targeting (3x conversion vs legacy). Meta AI 1B MAU. Llama 4 open-source = developer ecosystem. Ray-Ban Meta glasses 20M+ units planned. MTIA custom chips (RISC-V, no ARM dependency). $81.6B cash. 97% revenue from ads = pure monetization machine
**Note:** PONIZEJ FV Low! ⚠️ NEWS 27.03: wyroki sadowe ($375M NM + $6M LA) dot. bezpieczenstwa dzieci = precedens. Kurs -8% do 52-week low ~$550. Zwolnienia RL/FB/sprzedaz. ALE: FY25 $201B (+22%). PEG 0.88. 3.58B DAP. Fwd P/E ~18x = NAJTANSZY MEGA-CAP.
**Strengths:**
  + FY25 $201B rev (+22%). BEAT 6/6Q revenue I EPS.
  + FORWARD P/E 19.7x NORMALIZED, PEG 0.88 = NAJTANSZY MEGA-CAP tech.
  + 3.58B DAILY ACTIVE PEOPLE (+7% r/r) = LARGEST user base na swiecie.
  + AD REVENUE $184B (+22%) = 60% social media ad market.
**Risks:**
  ! CAPEX $115-135B w 2026 (z $72B w 2025 = +87%!). FCF spadl z $52B do $43.6B.
  ! REALITY LABS -$17.5B/yr strata BEZ widocznego path to profitability.
  ! INSIDER SELLING ~$250-300M+ w 6 mcy / ZERO zakupow. Zuckerberg $244M.
  ! EU DMA + GDPR + WhatsApp antitrust + AI Act = regulatory headwinds w Europie (24%...
**Verdict:** Meta = advertising juggernaut z 3.58B DAP i AI-driven targeting. $201B rev (+22%), beat 6/6Q, P/E 19.7x normalized, PEG 0.88 = najtanszy mega-cap.

## AMZN — Amazon
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 238 | **FV:** 195-280 | **Entry:** 175
**P/E:** ~27x fwd (FY26E EPS $7.93). ~29x trailing. Discount do 5-yr avg
**Revenue Growth:** +12% FY25 ($716.9B). AWS +24% ($128.7B ARR). Ads +22% ($68.6B). FY26E $821B (+15%). Q4 $213.4B (+14%)
**Moat:** AWS #1 cloud 29-30% share, $200B backlog, 57% op income. 200+ services, largest global footprint. Trainium custom chips (50% cheaper than NVDA). Ads #3 platform ($68.6B, 50%+ margins). 220-250M Prime subscribers. 40% US e-commerce. Anthropic $8B+ + OpenAI $50B = dual AI lab partnerships. Amazon Leo satellite. Zoox robotaxi. 35K EV vans. AWS of logistics
**Note:** DEEP RESEARCH: W strefie FV. FY25 $716.9B (+12%). AWS $128.7B (+24%, fastest 13Q). Ads $68.6B (+22%). OpenAI $50B deal. ALE: CapEx $200B (!) = FCF -71%. Bezos $5.7B selling. Berkshire -77%.
**Strengths:**
  + FY25 $716.9B (+12%), op income $80B (+17%), NI $77.7B (+30%).
  + AWS REACCELERATION: +24% Q4 (fastest 13Q!). $128.7B ARR.
  + ADVERTISING $68.6B (+22%) = hidden profit engine. 50%+ op margins estimated.
  + OpenAI $50B INVESTMENT (marzec 2026): AWS = exclusive 3rd-party cloud for OpenAI Frontier.
**Risks:**
  ! CAPEX $200B IN 2026 = LARGEST CORPORATE INVESTMENT IN HISTORY.
  ! BEZOS $5.7B SELLING w 2025 ($3.37B w samym listopadzie).
  ! BERKSHIRE HATHAWAY -77% POZYCJI (z 10M do 2.3M akcji w Q4).
  ! AWS TRACI SHARE: z 33% (2021) do 29% (2025). Azure +31-39%, Google Cloud +48% = SZYBCIEJ.
**Verdict:** Amazon = AWS powerhouse ($128.7B, +24%) + advertising machine ($68.6B, 50%+ margin) + e-commerce dominance (40% USA).

## AAPL — Apple
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 261 | **FV:** 240-310 | **Entry:** 210
**P/E:** ~29x fwd (CY26E EPS ~$8.80)
**Revenue Growth:** +16% Q1 FY26 ($143.8B rekord). iPhone +23% ($85.3B). Services +14% ($30B). China +38% r/r comeback
**Moat:** 2.5B installed base (lock-in). Services 76.5% GM ($30B/Q). Apple Silicon (TSMC 2nm exclusive). Brand $608B (#1). App Store monopol. Apple Pay $9T processed
**Note:** DEEP RESEARCH: W strefie FV. Q1 FY26 $143.8B rev (+16%) REKORD. iPhone $85.3B (+23%). Services $30B (76.5% GM). 2.5B installed base. Apple Intelligence = supercykl wymiany. iPhone Fold wrzesien 2026.
**Strengths:**
  + Q1 FY26 $143.8B rev (+16%) REKORD. Beat expectations.
  + iPhone $85.3B (+23%) = 'staggering demand' (Tim Cook).
  + SERVICES $30B/Q, 76.5% GM = software-level margins. Apple Pay $9T processed.
  + 2.5 MILIARDA aktywnych urzadzen = installed base ROSNIE.
**Risks:**
  ! TSMC ABSOLUTE DEPENDENCY: 100% procesorow z TSMC (3nm/2nm).
  ! MEMORY COST INFLATION: DRAM/NAND ceny rosna (Dylan: smartfony +$150 BOM).
  ! INSIDER SELLING: Tim Cook $104M, Chairman Levinson $41M, CFO Parekh $4M.
  ! App Store REGULATORY: UE wymusza otwarcie. Potencjalny spadek marz Services o 500bps.
**Verdict:** Apple = cash machine + ecosystem fortress. Q1 $143.8B rekord, Services $30B z 76.5% GM, 2.5B installed base.

## MSFT — Microsoft
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 372 | **FV:** 345-500 | **Entry:** 330
**P/E:** ~21.8x fwd (FY26E EPS $16.92) = NAJNIZSZY OD 2023. PEG 1.37 (26% ponizej 10-yr median). Trailing 23.3x
**Revenue Growth:** +17% Q2 FY26 ($81.3B). Azure +39% (AI = 18pts). FY25 $281.7B. FY26E $335B (+19%). Cloud $51.5B/Q = crossed $50B/Q milestone. Ads growing
**Moat:** CRPO $625B (+110%) = LARGEST enterprise backlog in tech history. Azure #2 cloud (21% share, closing on AWS). 450M+ M365 commercial seats = Azure on-ramp. OpenAI $13B+ invested = exclusive partnership. Maia 100/200 custom chips. Copilot 15M paid seats (97% untapped!). GitHub Copilot 4.7M (+75%). $60B buyback. 75% Fortune 500 = M365. Dynamics 365 +19%. Op margin 47%. Three Mile Island nuclear PPA 835MW
**Note:** FV (Jordi thesis rozszerzony: regime shift + software disruption). -31% od ATH.
**Strengths:**
  + CRPO $625B (+110% YoY) = LARGEST ENTERPRISE BACKLOG IN TECH HISTORY.
  + FORWARD P/E 21.8x = NAJNIZSZY OD POCZATKU 2023 przy EPS +24%.
  + AZURE +39% (re-accelerated z 31% trough). AI = 18 punktow wzrostu Azure.
  + BEAT 6/6 KWARTALOW (100%). Avg revenue beat +$1.56B (+2.2%), avg EPS beat +$0.25 (+5.5%).
**Risks:**
  ! CAPEX $37.5B/Q = ~$150B/yr annualized. FY26E $98-120B.
  ! OpenAI = 45% CRPO ($281B z $625B).
  ! INSIDER SELLING: Nadella $75.3M (149K akcji po $505). Ratio 45:1 sell/buy.
  ! FTC ANTITRUST (luty 2026) = najszersza probe od lat 90.
**Verdict:** DEEP RESEARCH UPGRADE + JORDI UPDATE 30.03.

## PLTR — Palantir Technologies
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 129 | **FV:** 80-135 | **Entry:** 70
**P/E:** 238x trailing GAAP. 113x fwd (FY26E EPS $1.34). 78x FY27E ($1.89). Najdrozszy software w S&P 500
**Revenue Growth:** +56% FY25 ($4,475M). FY26 guide $7.19B (+61%). FY27E consensus $10.56B. US commercial +137% Q4. 10 kwartalow z rzedu przyspieszajacego wzrostu
**Moat:** UNIKALNY MONOPOL: Gotham (defense/intel, Top Secret/SCI), Foundry (commercial AI), AIP (LLM+ontology, 75% boot camp conversion), Apollo (air-gapped/edge deployment). IL-6 DISA authorization (1 z 3 firm obok MSFT i AWS). 3,500+ patentow. Maven AI = Pentagon Program of Record. Golden Dome $185B tarcza antyrakietowa. TITAN $178M+multibillion FRP. Warp Speed = OS obrony USA. 954 klientow, NDR 139%, TCV $4.26B (+138%)
**Note:** PRZEPŁACONE (+38% vs FV mid). Fastest-growing large-cap software: FY25 $4.5B (+56%), FY26 guide $7.2B (+61%).
**Strengths:**
  + FY25 $4,475M rev (+56%), GAAP NI $1,625M (36% margin), adj FCF $2,270M (51% margin).
  + BEAT 6/6 KWARTALOW z rosnacym magnitude.
  + US COMMERCIAL EKSPLOZJA: $150M (Q1'24) -> $507M (Q4'25) = +238% w 2 lata.
  + GOLDEN DOME $185B (news 27.03): PLTR + Anduril wybrani jako kluczowi deweloperzy C2...
**Risks:**
  ! P/E 238x TRAILING / 113x FWD = NAJDROZSZA SPOLKA W CALYM 67-SPOLKOWYM DASHBOARDZIE.
  ! INSIDER SELLING BEZPRECEDENSOWE: $317M w 6 mcy / ZERO zakupow.
  ! MICHAEL BURRY $912M PUT POSITION (strike $50, exp 2027).
  ! JORDI SOFTWARE P/E COMPRESSION: bezposrednio dotyczy PLTR.
**Verdict:** Palantir to NAJLEPSZA firma software na swiecie pod wzgledem execution — Rule of 40 = 127%, beat 6/6Q, revenue accelerating 10Q z rzedu, GAAP...

## RHM.DE — Rheinmetall AG (EUR)
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 1464 | **FV:** 1200-1800 | **Entry:** 1000
**P/E:** Fwd ~38x (FY26E EPS €40.52). Trailing ~68x (EPS €22.73). PEG ~0.95 (na 40% wzroscie). EV/EBITDA FY26E ~22x. Premium za growth ale DROGO vs US defense peers (LMT 28x, RTX 22x)
**Revenue Growth:** +29% FY2025 (€9.94B). FY2026 guide €14.0-14.5B (+40-45%). Konsensus €15.0B (7% wyzej!). Cel €50B do 2030 = 38% CAGR 5-letni. Vehicle Systems €4.99B, W&A €3.53B (marza 29.3%!), Electronic Solutions €2.50B (+45%). NVL wniesie €1.3-1.5B w 2026
**Moat:** BACKLOG €63.8B = 6.4x ROCZNYCH PRZYCHODOW — najwyzszy w branzy (BAE 2.7x, Thales 2.4x). Cel €135B na koniec 2026. 91% przychodow 2026 juz zabezpieczone. AMUNICJA = MONOPOL: najwiekszy europejski producent, nowa fabryka Unterluss (350,000 pociskow 155mm/rok do 2027, ~€2.1B potencjal z jednego zakladu). Ramowa umowa Bundeswehra €7.1B. W&A marza 29.3% = BEST IN CLASS. POJAZDY: Lynx KF41 (Wegry, Wlochy, Ukraina), Panther KF51 (Wlochy do 380 szt. = ~€23B program). INTEGRACJA WERTYKALNA: nitroceluloza (Hagedorn-NC), proch (JV Rumunia), nowy zaklad Litwa. NVL = stocznie (fregaty F126 ~€10B). Partnerstwo Anduril (autonomia/AI). 103,000 pracownikow
**Note:** W strefie FV (-3% vs mid). EUROPEAN DEFENSE PURE-PLAY #1 — najszybciej rosnaca duza europejska spolka zbrojeniowa.
**Strengths:**
  + FY2025 €9.94B rev (+29%), EBIT €1.84B (+33%), marza 18.5% = NAJWYZSZA w europejskiej...
  + BACKLOG €63.8B = 6.4x rocznych przychodow = BEZPRECEDENSOWY w branzy (BAE 2.7x, Thales...
  + AMUNICJA = EUROPEJSKI MONOPOL: W&A marza 29.3% = best in class.
  + INSIDERZY KUPUJA 137:1 RATIO: €852K zakupow vs €6.2K sprzedazy w 90 dni.
**Risks:**
  ! FWD P/E 38x = DROGO vs US defense peers (Lockheed 28x, BAE 29x, RTX 22x).
  ! TRACK RECORD SLABY: 1 beat / 4 miss w ostatnich 5 kwartalach. FY2024 EPS miss 18%.
  ! GUIDANCE 7% PONIZEJ KONSENSUSU: spolka mowi €14.0-14.5B, konsensus €15.0B.
  ! SEZONOWOSC EKSTREMALNA: 35-40% rocznego wyniku w Q4.
**Verdict:** SPOLKA #72. Rheinmetall = najszybciej rosnaca duza europejska spolka zbrojeniowa z BEZPRECEDENSOWYM backlogem €63.8B (6.4x rev, cel €135B).

## HAG.DE — Hensoldt AG (EUR)
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 83 | **FV:** 65-100 | **Entry:** 55
**P/E:** Trailing ~77x (GAAP EPS €0.77). Fwd ~54x (FY26E EPS €1.52). FY27E ~37x (EPS €2.23). EV/EBITDA fwd ~20x. DROGO vs Thales 13x, RHM 19x, Elbit 21x P/E
**Revenue Growth:** +9.6% FY25 (€2.46B). Order intake €4.71B (+62%!). FY26 guide €2.75B (+12%). Cel 2030 €6B (CAGR ~20%). Sensors 83.8% rev (+7.9%), Optronics 17.1% (+20.4%)
**Moat:** PURE-PLAY defense electronics: ~8-9% europejskiego rynku (~€24B). TRML-4D = dominant AESA radar sredniego zasiegu (>80 ESSI zakontraktowanych, combat-proven Ukraina IRIS-T). ITAR-FREE = strategiczna przewaga eksportowa (zero amerykanskich komponentow). GaN T/R modules (umowa 900K ukladow do 2030). Upstream do RHM Skyranger 30, Diehl IRIS-T, Airbus Eurofighter. FCAS next-gen fighter radar (dekadowy program). Partnerstwo Helsing (konstelacja 75-100 satelitow), Schwarz Digits (software-defined defence). KfW 25.1% (rzad niemiecki) + Leonardo 25.1% = kotwicowi akcjonariusze. 9,360 pracownikow, cel +1,600 w 2026. Nowa fabryka radarow Ulm (potrojenie mocy, dostawy od 2027)
**Note:** W STREFIE FV (midpoint €82.50). Defense electronics pure-play = 'Infineon obrony'.
**Strengths:**
  + BACKLOG €8.83B = 3.6x REVENUE. Order intake €4.71B (+62% r/r) = book-to-bill 1.9x.
  + CEO OLIVER DORRE KUPUJE NA OTWARTYM RYNKU: €222K @ €89 (11.XI.2025, dzien CMD) + €75K...
  + ITAR-FREE = STRATEGICZNA PRZEWAGA: zero US-kontrolowanych komponentow = eksport bez...
  + UPSTREAM DO CALEJ EUROPEJSKIEJ OBRONY: radar Skyranger 30 (RHM), IRIS-T (Diehl),...
**Risks:**
  ! FWD P/E ~54x = DRAMATYCZNA PREMIA vs Thales 21x, Elbit 21x, RHM 27x.
  ! EXECUTION BOTTLENECK = #1 RISK OPERACYJNY: order intake +62% ale revenue +9.6% =...
  ! GAL/GALLIUM = KRYTYCZNE RYZYKO UPSTREAM: Chiny kontroluja 98% globalnej produkcji galu.
  ! RHM ELECTRONIC SOLUTIONS = BEZPOSREDNIE ZAGROZENIE: dywizja RHM rosnie +45% r/r vs HAG...
**Verdict:** SPOLKA #74. Hensoldt = europejski pure-play defense electronics z REKORDOWYM backlogiem €8.83B (3.6x rev) i eksplozja zamowien (+62%).

## LMT — Lockheed Martin
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 616 | **FV:** 530-680 | **Entry:** 480
**P/E:** Fwd ~21x (FY26E EPS ~$30). Trailing GAAP ~29x (obciazony stratami). FY27E ~19x ($32.28). NAJTANSZY duzy defense. Historyczna srednia 16-18x = current premium ale uzasadniona backlogiem
**Revenue Growth:** +5.6% FY25 ($75.0B). FY26 guide $77-80B (+5%). MFC najszybciej +14% (PAC-3, JASSM, LRASM). Aero ~40% rev (F-35 >25% calej sprzedazy). Q4 $20.3B = REKORD kwartalny
**Moat:** F-35 = MONOPOL na 5th gen fighter (3,300+ zamowionych, 1,000+ dostarczonych, lifetime value $2T+). PAC-3 MSE = gold standard air defense (101/101 intercepts, tripling do 2000/rok). JASSM/LRASM = precision strike monopol NATO. Sentinel ICBM $96B (30-letni program). Backlog $194B = 2.6x revenue, 96% z obrony. Skunk Works = advanced R&D. Space: Orion, GPS III, NGI interceptor. 122,000 pracownikow. #1 Pentagon contractor 11-12% share
**Note:** PAC-3 MSE kontrakt $4.76B (10.IV). 94% FMS = globalny popyt. Beat 6/6Q. Earnings 23.IV. Backlog rosnący.
**Strengths:**
  + FWD P/E ~21x = NAJTANSZY DUZY DEFENSE na swiecie. RTX 29x, NOC 27x, RHM 38x, PLTR 113x.
  + ADJ EPS BEAT 6/6 KWARTALOW: Q1'25 +14.8%, Q2 +12.3%, Q3 +9.8%, Q4 +19.1%.
  + BACKLOG $194B REKORD = 2.6x rocznych przychodow. Book-to-bill Q4 1.7x.
  + PAC-3 MSE TRIPLING: Pentagon deal LMT+Boeing na potrojenie produkcji z 600 do 2000/rok.
**Risks:**
  ! PRZEGRAL 3 KLUCZOWE PROGRAMY: F-47 NGAD (Boeing, $60B+), F/A-XX (Navy), CCA Increment...
  ! INSIDER SELLING $6.8M / $0 BOUGHT w 6 mcy.
  ! CLASSIFIED PROGRAM LOSSES $3.3B+ w 12 mcy: Q4'24 $1.72B, Q2'25 $1.62B, FY25 $950M...
  ! FCF GUIDE SPADA: $6.5-6.8B FY26 vs $6.9B FY25. CapEx rosnie ($2.5-2.8B).
**Verdict:** SPOLKA #75. Lockheed Martin = US Defense Prime #1 z REKORDOWYM backlogiem $194B i NAJTANSZYM P/E ~21x wsrod duzych defense.

## RTX — RTX Corporation
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ❌ stub
**Price:** 203 | **FV:** 175-235 | **Entry:** 160
**P/E:** ~42x trailing. Fwd ~31x (FY26E EPS $6.70). Wyzszy niz LMT (30x) ale commercial aerospace premium
**Revenue Growth:** +12.1% Q4 (organic +14%). FY26 guide $92-93B (+5-6% organic). P&W commercial aftermarket +25%
**Moat:** PATRIOT = JEDYNY COMBAT-PROVEN HIMAD na swiecie (Israel, Gulf, Ukraine). Tomahawk = standard cruise missile NATO. SM-6 = fleet defense. P&W GTF = next-gen narrow-body engine (1,500+ orders). Collins = avionics monopol. Backlog $268B = 3.0x revenue. $10.5B R&D+capex FY26. 185,000 pracownikow
**Note:** STUB #76. Brak DR.
**Strengths:**
  + BACKLOG $268B REKORD = NAJWIEKSZY w calej branzy defense (vs LMT $194B, RHM €63.8B).
  + PATRIOT COMBAT-PROVEN: Israel, Gulf states, Ukraine. 101/101 intercepts (Trump).
  + FCF $7.9B FY25 → guide $8.25-8.75B FY26. FCF ROSNIE (vs LMT spada). 549% FCF increase Q4!
  + DUAL EXPOSURE: defense (Raytheon 40%) + commercial aerospace (P&W/Collins 60%) =...
**Risks:**
  ! P/E ~42x = DROGO.
  ! GTF fleet management: PW1100 AOGs reduced >20% from peak ale nadal problem.
  ! Pentagon performance reviews = sector pressure. Trade policy/tariffs impact supply chain
  ! Ceasefire scenario = bearish defense segment (40% rev) ale bullish commercial (60%)
**Verdict:** Stub #76. US Defense Prime #2 z UNIKALNYM dual exposure: Raytheon (missiles/defense) + P&W (engines) + Collins (avionics).

## TMO — Thermo Fisher
**Signal:** GREEN | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 505 | **FV:** 520-620 | **Entry:** 460
**P/E:** ~19.5x trailing, ~19x fwd (FY26E EPS $24.50)
**Revenue Growth:** +4% FY25 ($44.6B), Q4 +7% ($12.2B). FY26E $46.3-47.2B (+4-6%)
**Moat:** #1 global life sciences: 800K+ produktow, CDMO (Patheon), CRO (PPD), Cryo-EM monopol (Krios), Olink proteomics, 60% recurring revenue, switching costs
**Note:** DEEP RESEARCH: PONIZEJ FV Low $520! -13% vs mid $570. -26% od ATH. FY25 $44.6B (+4%), Q4 $12.2B (+7%). FY26E EPS $24.50 (+7%). Picks-and-shovels na AI drug discovery. Berkshire nauk przyrodniczych.
**Strengths:**
  + Q4 beat — $12.2B rev (+7%), adj EPS $6.57 (+8%). FY25 $44.6B, adj EPS $22.87
  + FY26 guide: $46.3-47.2B (+4-6%), adj EPS $24.22-24.80 (+6-8%).
  + 4 SEGMENTY tworzace fortress: LPBS 50%+ rev (CDMO+CRO), Life Sci (Olink proteomics),...
  + Clario $8.88B przejecie (zamkniecie H1 2026) — cyfrowe endpointy kliniczne + AI...
**Risks:**
  ! Chiny: spadek low single-digit r/r (Q4 i caly FY25).
  ! NIH budget uncertainty: US academic/government spending cautious do finalizacji budzetu.
  ! Insider SELLING: CEO Casper sprzedal 53,250 akcji za $27.5M (6 mcy).
  ! Marza operacyjna 22.7% vs Danaher 28.2% i Waters 35.2% — LPBS segment ciagle...
**Verdict:** TMO = Berkshire Hathaway nauk przyrodniczych. Przy $478 i P/E 19.5x handluje PONIZEJ FV — najnizszy P/E od COVID przy intact fundamentach.

## ISRG — Intuitive Surgical
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 452 | **FV:** 430-600 | **Entry:** 400
**P/E:** Fwd 46.2x (FY26E EPS $10.22). Trailing 59.6x. FY27E $11.68 → fwd 40.4x. PEG 3.09 = premium ale justified przez monopol + 6/6 beat + 75% recurring
**Revenue Growth:** +21% FY25 ($10.065B rekord!). Q4 $2.866B (+19%). FY26E $11.75B (+17%). I&A (instruments) 60% rev = recurring razor/blade. Procedures +18% FY25 (da Vinci +17-18%, Ion +51%, SP +87%). System placements 1,721 (870 dV5). Revenue per procedure ~$1,800 stabilne
**Moat:** MONOPOL CHIRURGII ROBOTYCZNEJ: ~60% global share, 11,106 da Vinci + 995 Ion zainstalowanych, 20M+ procedur od powstania. DA VINCI 5 = force feedback (JEDYNY system z force feedback), 10,000x wieksza moc obliczeniowa niz Xi. MULTI-PLATFORM: da Vinci (soft tissue) + Ion (bronchoskopia/biopsja) + SP (single port). 75% RECURRING REVENUE (instrumenty + serwis) = razor/blade model z najwyzszymi switching costs w medtech. FDA CARDIAC CLEARANCE (I.2026) = nowy TAM ~2M procedur rocznie. Surgeon training ecosystem = 20+ lat danych klinicznych. $9B cash+investments, ZERO dlugu. $4B buyback. OUS utilization przyspieszajacy (4%→8% w 12 mcy). Schoelly Fiberoptic = 20+ lat exclusive optics partnership
**Note:** W strefie FV. MONOPOL chirurgii robotycznej (~60% share).
**Strengths:**
  + BEAT 6/6 KWARTALOW z avg EPS surprise +15-20%(!). Q4 2024 beat +24.9% = najsilniejszy.
  + DA VINCI 5 DOMINACJA: 870 systemow zainstalowanych w 2025, 57% wszystkich placements w Q4.
  + FDA CARDIAC CLEARANCE (26.I.2026) = GAME CHANGER. Zastawka mitralna + IMA mobilization.
  + 75% RECURRING REVENUE (I&A 60% + Services 16%) = razor/blade z najwyzszymi switching...
**Risks:**
  ! FWD P/E 46.2x = PREMIUM PRICED FOR PERFECTION.
  ! INSIDER SELLING $70-80M / ZERO ZAKUPOW w 6 mcy.
  ! HUGO MEDTRONIC FDA CLEARED (XII.2025): pierwsze przypadki w Cleveland Clinic i Duke w...
  ! OTTAVA J&J FILING (I.2026): jesli FDA approval H2 2026/H1 2027 = generuje hype...
**Verdict:** ISRG = MONOPOL chirurgii robotycznej z najsilniejszym moatem w medtech.

## LLY — Eli Lilly
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 940 | **FV:** 850-1150 | **Entry:** 780
**P/E:** ~27x fwd FY26E (EPS $33.50-35.00). ~25x FY27E ($41.57). Trailing 39.5x. 3-yr avg P/E 82x = DRAMATYCZNA KOMPRESJA z earnings growth. PEG 0.98 = fair by Lynch metric
**Revenue Growth:** +45% FY25 ($65.2B rekord!). FY26 guide $80-83B (+25%, POWYZEJ consensus $78.4B). FY27E $91.5B. Mounjaro +99% r/r ($23.0B). Zepbound +175% ($13.5B). Q4 rev $19.3B (+43%)
**Moat:** Tirzepatide franchise $36.5B = #1 drug na swiecie (pokonala Keytruda). Patent do 2036 (composition) / 2039-2041 (formulation). Orforglipron = jedyny oral GLP-1 small molecule (FDA APPROVED 1.IV.2026, LAUNCHED 6.IV). Retatrutide = best-in-class 28.7% weight loss. $50B+ US manufacturing buildout = structural moat. 36 Phase 3 programow. GM 83.8%. Projected 2030 incretin franchise $79.8B (Evaluate). Zepbound 70% nowych branded obesity Rx w 2025
**Note:** PONIZEJ FV Mid! FY25 $65.2B (+45%) = najszybciej rosnaca large-cap pharma w historii. Tirzepatide $36.5B = #1 drug franchise na swiecie.
**Strengths:**
  + FY25 $65.2B rev (+45%) = NAJSZYBCIEJ ROSNACA large-cap pharma W HISTORII.
  + TIRZEPATIDE $36.5B = #1 DRUG FRANCHISE NA SWIECIE (pokonala Keytruda).
  + ORFORGLIPRON ⭐ LAUNCHED 6.IV.2026 — FDA approved 1.IV, wysylka od 6.IV.
  + FORWARD P/E ~27x = DRAMATYCZNY SPADEK z 3-yr avg 82x. PEG 0.98.
**Risks:**
  ! DLUG $42.5B vs cash $7.3B = NET DEBT $35.2B. D/E 165%.
  ! 100+ GLP-1 W DEVELOPMENT globally = dlugoterminowe commoditization risk.
  ! PRICING COMPRESSION: Medicare $245/mo = 77% discount to list.
  ! ORFORGLIPRON ADOPTION RISK: FDA APPROVED 1.IV ale utrata wagi 12.4% (nizsza niz...
**Verdict:** SIGNAL CHANGE yellow->green. LLY = GLP-1 JUGGERNAUT z najszybszym wzrostem w historii large-cap pharma.

## DHR — Danaher Corporation
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 193 | **FV:** 180-260 | **Entry:** 165
**P/E:** Fwd ~25-28x. Trailing ~35x. Wyzsze marze niz TMO (28.2% vs 22.7%) ale wolniejszy growth
**Revenue Growth:** ~$24B FY25. Bioprocessing recovery w toku po destocking cycle 2023-2024. Diagnostics stabilne
**Moat:** DBS (Danaher Business System) = kaizen/lean methodology stosowana od dekad = systematyczna poprawa marzy i efektywnosci. Cytiva = #1 bioprocessing (upstream+downstream). Beckman Coulter = #2 diagnostics. Pall = filtration leader. Leica = premium microscopy. Pure-play life sciences po Veralto spin-off
**Note:** Brak DR. NOWA SPOLKA #68.
**Strengths:**
  + #2 global life sciences tools za TMO. DBS = legendary operational excellence system
  + Cytiva bioprocessing = GLP-1 manufacturing beneficjent (kazdy producent potrzebuje...
  + Op margin 28.2% = WYZSZA niz TMO (22.7%) — DBS delivers
  + Pure-play po Veralto spin-off. Fortress balance sheet. Defensive healthcare exposure
**Risks:**
  ! Bioprocessing destocking cycle 2023-2024 — recovery wolniejsze niz oczekiwano
  ! Fwd P/E 25-28x = premium vs TMO 19.5x — TMO jest TANSZA
  ! China exposure podobna do TMO (~10% rev)
  ! WYMAGA DR dla pelnej kalibracji FV i conviction
**Verdict:** Stub entry. TMO peer z wyzszymi marzami ale wolniejszym growth. DBS = legendary. WYMAGA DR.

## CRWV — CoreWeave
**Signal:** BLUE | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 103 | **FV:** 52-115 | **Entry:** 40
**P/E:** GAAP strata. FY27E EPS $2.03 → fwd ~41x. P/S TTM 6.9x, fwd 2026E 3.4x, fwd 2027E 1.9x. EV/EBITDA fwd ~17x. Wycena na revenue trajectory nie earnings
**Revenue Growth:** +168% FY25 ($5.131B). Q4 $1.572B (+110% r/r). FY26 guide $12-13B (+146%). FY27 consensus $22.53B (+78%). Run-rate exit 2026: $17-19B annualized. Exit 2027: >$30B. Najszybsza chmura do $5B rev w historii
**Moat:** PURE-PLAY GPU CLOUD LIDER: 250K+ GPU (H100/H200/GB200/GB300), 33 DC, 850MW active (cel >1.7GW 2026). NVIDIA PREFERRED PARTNER = priorytetowy dostep do Rubin (H2 2026) + GB300. NVIDIA zainwestowala $3.25B i posiada ~13%. 20-30% wyzsza efektywnosc treningowa vs hyperscalerzy (bare-metal Kubernetes, 96% goodput). 30-60% tanszy niz Azure/AWS. Backlog $66.8B (OpenAI $22.4B, Meta $14.2B, NVIDIA $6.3B, Core Scientific $10B). 96% rev z wieloletnich kontraktow take-or-pay. Adj EBITDA margin 60%
**Note:** LEKKO DROGO. NAJSZYBCIEJ ROSNACA chmura GPU w historii — z $16M (2022) do $5.13B (2025).
**Strengths:**
  + BACKLOG $66.8B = 4.4x YoY = BEZPRECEDENSOWY w historii cloud computing.
  + NVIDIA STRATEGIC PARTNERSHIP = MOAT: $3.25B invested (~13% share), $6.3B umowa...
  + FY25 $5.13B (+168%) = NAJSZYBSZA CHMURA DO $5B W HISTORII. Z $16M (2022) do $5B w 3 lata.
  + 20-30% WYZSZA EFEKTYWNOSC TRENINGOWA vs hyperscalerzy: bare-metal Kubernetes (zero...
**Risks:**
  ! DLUG $21.4B vs MKT CAP $43B = DEBT/EQUITY 894%(!). Altman Z-Score 0.5 = STREFA DISTRESS.
  ! CAPEX $30-35B W 2026 = WYMAGA CIAGLEGO DOSTEPU DO RYNKOW KAPITALOWYCH.
  ! MICROSOFT 67% REVENUE = EKSTREMALNIE SKONCENTROWANE.
  ! 100% NVIDIA DEPENDENCY = ZERO ALTERNATYW. Brak AMD, Intel ani wlasnego krzemu.
**Verdict:** CoreWeave = NAJCZYSTSZA ekspozycja na supercykl AI infrastructure i jednoczesnie NAJRYZYKOWNIEJSZA spolka w calym 68-spolkowym dashboardzie.

## IFX.DE — Infineon Technologies (EUR)
**Signal:** RED | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 43 | **FV:** 28-40 | **Entry:** 24
**P/E:** ~18x fwd
**Revenue Growth:** +8% FY26E
**Moat:** #1 power semiconductors globalnie. SiC/GaN revolution. Dostawca VRT, ETN, automotive. EV + DC + industrial = triple tailwind
**Note:** Brak DR. Power semicon lider (MOSFET, IGBT, SiC, GaN). Pojawia sie w VRT i ETN DR jako kluczowy dostawca. Kazdy DC potrzebuje power ICs.
**Strengths:**
  + #1 power semiconductors globalnie — MOSFET, IGBT, SiC, GaN
  + Pojawia sie jako kluczowy dostawca w VRT i ETN deep research
  + SiC/GaN = przyszlosc power management w DC (wyzsza efektywnosc)
  + EV + DC + industrial = 3 megatrendy jednoczesnie
**Risks:**
  ! Cyklicznosc auto (40%+ rev)
  ! STMicro, ON Semi, Texas Instruments = silna konkurencja
  ! China risk (fabryki + klienci)
  ! Slabszy wzrost niz pure AI plays
**Verdict:** Brak deep research. Stub entry. ASML power semiconductors — kazdy DC potrzebuje power management.

## IREN — IREN (ex-Iris Energy)
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 39 | **FV:** 35-65 | **Entry:** 28
**P/E:** ~5x FY27E adj EBITDA. Tanio jesli delivers
**Revenue Growth:** +168% FY25 ($501M). Q1 FY26 $240M (9x w 6Q). AI Cloud $17.3M/Q (+137% QoQ). $3.7B ARR target CY26
**Moat:** MSFT $9.7B kontrakt = najwiekszy single-contract w sektorze BTC minerow. 150K GPU (H100+H200+B200+B300) = Nvidia Preferred Partner. 4.5+ GW secured power (Sweetwater 2GW flagship). 100% renewable = ESG-friendly. MSCI USA Index (luty 2026). Dell = system integrator partner
**Note:** DEEP RESEARCH: W strefie FV. Najagresywniejszy AI pivot wsrod minerow. MSFT $9.7B kontrakt. 150K GPU fleet (B300). 4.5GW power. $3.7B ARR target CY26. FY25 $501M (+168%). ALE: 83% pipeline = MSFT, $4.6B dlugu, construction play.
**Strengths:**
  + MSFT $9.7B multi-year AI contract = LARGEST single contract w calym BTC mining sektorze.
  + 150K GPU FLEET: H100, H200, B200, B300.
  + 4.5+ GW SECURED POWER = potencjalnie $225B infrastruktury (Schmidt: 1GW=$50B).
  + FY25 $501M rev (+168%), net income $86.9M (z straty $28.9M rok wczesniej!).
**Risks:**
  ! MSFT = 83% PIPELINE ($1.9B z $2.3B ARR).
  ! DLUG MASYWNY: $1B zero-coupon convertibles (konwersja ~$91/akcje) + $3.6B GPU financing.
  ! CONSTRUCTION PLAY: $3.5B capex ahead w H2 2026.
  ! BTC DEPENDENCY nadal ~90% revenue.
**Verdict:** IREN = najagresywniejszy AI pivot w BTC mining sektorze. MSFT $9.7B + 150K GPU + 4.5GW power = potencjalnie transformative.

## MARA — MARA Holdings (Marathon)
**Signal:** BLUE | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 10 | **FV:** 8-12 | **Entry:** 6
**P/E:** GAAP strata (mark-to-market BTC) / fwd ~7x jesli BTC >$100K
**Revenue Growth:** +38% FY25 ($907M). Q3 $252M (+92% r/r). BTC mining + lending $32M/yr + Starwood AI pivot
**Moat:** 38.7K BTC skarbiec (sprzedaz 15.1K BTC 26.03 na redukcje dlugu). 66.4 EH/s = #1 publiczny miner globalnie. Starwood JV 1-2.5 GW AI/HPC = konwergencja energii + compute. Energia wlasna $0.04/kWh. Exaion = sovereign AI cloud Europa. Dlug zredukowany do $2.3B (z $3.3B). 'Energy-to-value' model
**Note:** JPM TNIE PT z $20 na $13 (7.IV.2026), wycena mining z $2.5B na $1.3B. DEEP RESEARCH + UPDATE 7.IV: W strefie FV.
**Strengths:**
  + 38.7K BTC skarbiec (sprzedano 15.1K BTC 26.03 na redukcje dlugu z $3.3B do $2.3B).
  + 66.4 EH/s = #1 publiczny miner globalnie. Hashrate +168% w 2024 (53.2 EH/s z 19.8).
  + STARWOOD JV: 1 GW mocy IT (docelowo 2.5 GW) dla AI/HPC.
  + FY25 $907M rev (+38%).
**Risks:**
  ! ALL-IN COST $136K/BTC = profitable TYLKO jesli BTC >$136K.
  ! GAAP STRATA $1.7B w Q4 2025 (mark-to-market).
  ! DLUG ZREDUKOWANY do $2.3B (z $3.3B) po sprzedazy 15.1K BTC 26.03.2026.
  ! Hashrate target 75 EH/s MISSED (actual 66.4).
**Verdict:** DEEP RESEARCH + UPDATE 7.IV. MARA agresywnie pivotuje: sprzedala lacznie ~29K BTC ($1.1B+ w samym kwietniu), zwolnila 15% pracownikow.

## CLSK — CleanSpark
**Signal:** BLUE | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 10 | **FV:** 9-18 | **Entry:** 7
**P/E:** GAAP strata (mark-to-market) / fwd ~8x jesli BTC >$100K
**Revenue Growth:** +102% FY25 ($766M). Q4 $243M rekord. Track record: 50 EH/s delivered on schedule. FY26E zalezy od BTC + AI hosting
**Moat:** 16.07 J/TH = NAJLEPSZA efektywnosc wsrod publicznych minerow. 50 EH/s US-only (#1 USA). 1.8 GW power capacity. Cash cost ~$34K/BTC = lowest in sector. $460M buyback (JEDYNY miner!). Brazoria County TX 300-600MW AI-ready. Sandersville GA immersion cooling (Submer). Zero-coupon $1.15B convertible = 0% kosztu odsetkowego
**Note:** DEEP RESEARCH: W strefie FV. Najefektywniejszy BTC miner (16.07 J/TH). FY25 $766M (+102%). 50 EH/s US-only. 1.8GW power. Cash cost $34K/BTC (NAJNIZSZY!). Buyback $460M = jedyny miner ktory skupuje akcje. Brazoria 600MW AI pivot.
**Strengths:**
  + 16.07 J/TH = 30-40% LEPSZY niz srednia rynkowa (25-30 J/TH).
  + FY25 $766M rev (+102%). Q4 $243M rekord.
  + BUYBACK $460M = JEDYNY miner w sektorze ktory skupuje akcje zamiast dilutowac.
  + 1.8 GW power capacity zabezpieczone.
**Risks:**
  ! GAAP STRATA $378.7M w Q1 FY26 = mark-to-market BTC (ASC 350-60).
  ! CBP CARNA SPRAWA: $185M potencjalnej kary za 'country of origin' koparek.
  ! BTC DEPENDENCY 100% rev. Zero AI revenue jeszcze.
  ! ERCOT RYZYKO: Teksas = cenowe szczyty energii podczas fal upalow/mrozow.
**Verdict:** CleanSpark = NAJEFEKTYWNIEJSZY publiczny BTC miner na swiecie (16.07 J/TH, $34K/BTC).

## TSLA — Tesla
**Signal:** RED | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 351 | **FV:** 180-320 | **Entry:** 160
**P/E:** 335x trailing GAAP (EPS $1.08). 174x fwd (FY26E $2.08). Najdrozszy auto/AI play w dashboardzie
**Revenue Growth:** FY25 $94.8B (-3% = PIERWSZY spadek w historii). Auto -10%, Energia +27% ($12.8B), Uslugi +19%. FY26E $105B (+11%). Dostawy 1.636M (-8.6%). Energia 46.7 GWh (+49%)
**Moat:** FSD 8.4B mil danych, 1.1M subskrybentow (+38%). Megapack dominacja (46.7 GWh, +49%). Optimus first-mover (Gen 3 H2 2026). $44.1B cash (rekord). Custom AI silicon: AI5 (TSMC 3nm, 10x) + AI6 (Samsung 2nm, 50x). 81K GPU NVIDIA Cortex. Supercharger network. Vertically integrated: baterie (4680) + rafineria litu (Robstown) + LFP fabryka (Lansing z LG $4.3B)
**Note:** PRZEPŁACONE (+45% vs FV mid $250). Trailing P/E 335x, fwd 174x.
**Strengths:**
  + SEGMENT ENERGETYCZNY = realny biznes wzrostowy.
  + CASH $44.1B (REKORD) + net cash $29.3B = forteca finansowa na multi-year AI pivot.
  + FSD v14 = 10x wiekszy model parametryczny. 1.1M aktywnych subskrybentow (+38% r/r).
  + CYBERCAB masowa produkcja od IV.2026. Dedykowana linia.
**Risks:**
  ! TRAILING P/E 335x, FWD 174x = wycena zaklada PERFEKCYJNA egzekucje na...
  ! BEAT/MISS: 6/8 EPS MISS, 5/8 REVENUE MISS w 8 kwartalach = NAJGORSZY TRACK RECORD w...
  ! PIERWSZY W HISTORII SPADEK dostaw (-8.6%) i przychodow (-3%).
  ! ROBOTAXI AUSTIN: 31-135 pojazdow, 14 KOLIZJI od startu.
**Verdict:** Tesla = paradoks dashboardu. Segment energetyczny ($12.8B, +27%) i cash ($44.1B) sa REALNE i rosna.

## BTC — Bitcoin
**Signal:** BLUE | **Conviction:** HIGH | **Analyzed:** ✅
**Price:** 72954 | **FV:** 55000-95000 | **Entry:** 48000
**P/E:** NVT ~65 (neutral). Stock-to-Flow implied FV ~$100K-120K. Realized Price ~$38K = strong floor
**Revenue Growth:** Hash rate ATH ~750 EH/s. Mining revenue $12B/yr. Lightning Network capacity 8,500 BTC. Ordinals/BRC-20 fee revenue declining ale network secured
**Moat:** 21M HARD CAP = absolutna rzadkosc. Halving co 4 lata (ostatni IV.2024 → 3.125 BTC/blok). 15+ lat uptime 99.98%. Decentralizacja: ~20,000 nodow, ~750 EH/s. ETF: BlackRock iShares (IBIT) = biggest crypto ETF. $56B cumulative inflows. El Salvador, MicroStrategy (478K BTC). Hash rate = most secure network ever built
**Note:** W strefie FV (-11% vs mid). JEDYNY prawdziwie scarce digital asset (21M hard cap).
**Strengths:**
  + 21M HARD CAP = Jordi 'long scarcity' thesis w czystej formie.
  + ETF INFLOWS $56B cumulative. BlackRock IBIT = wiodacy ETF.
  + HASH RATE ATH ~750 EH/s = NAJBEZPIECZNIEJSZA siec na swiecie.
  + BTC -47% od ATH $126K = w historycznej strefie opportunity (kazdy bear w cyklu...
**Risks:**
  ! W KROTKIM TERMINIE zachowuje sie jak high-beta tech, NIE jak digital gold.
  ! HORMUZ + CPI 4%+ = Fed hawkish = NEGATYWNE dla risk assets wlaczajac BTC.
  ! Darius Dale: liquidity cycle = kluczowy driver BTC.
  ! ENERGY COST: mining cost ~$45-55K/BTC przy obecnych cenach energii.
**Verdict:** BTC = JEDYNY prawdziwie scarce digital asset. 21M hard cap = Jordi 'long scarcity' w najczystszej formie.

## ETH — Ethereum
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 2244 | **FV:** 1400-3500 | **Entry:** 1300
**P/E:** P/F ratio na L1 = ~2,086x (absurdalne ale misleading). L1 fee revenue $120-130M/yr annualized. ALE: stablecoin volume $18.8T/yr przechodzi przez ETH infra = wartosc uzytkowa >> fee revenue. Staking yield 2.77-3.8% = implicit 'P/E' ~26-36x na yield basis. NVT podwyzszone. ETF AUM $12.3-13.75B (spadek z $30.6B peak)
**Revenue Growth:** DEEP RESEARCH v2: L1 fee revenue $10.3M/mies (III.2026) = $120-130M annualized = -98% od szczytu $500M+/mies w 2021. Q1 2026: 200.4M transakcji (+43% QoQ). Active addresses REKORD 2M+ daily (II.2026) ale L1 350-450K. Stablecoin mkt cap na ETH: $160-175B (+49% YoY). DEX vol $52B/mies vs SOL $117B. RWA tokenized: $5.8-9B (60-65% dominacja). Base przetwarza 11.57M tx/dzien = 60% all L2 tx
**Moat:** DEEP RESEARCH v2: SETTLEMENT LAYER GLOBALNEGO SYSTEMU FINANSOWEGO. DeFi TVL $52.6B (57-68%). STABLECOIN INFRA $160-175B (52% global) — USDC $55B (rekord III.2026), USDT $85-88B. Stablecoin volume $18.8T/yr. RWA: BlackRock BUIDL $1.9-2.9B AUM, Ondo $2.5B TVL, JPMorgan $100M tokenized money market fund. EVM = lingua franca (Hyperliquid, BSC, Avalanche adoptuja). L2: Arbitrum $16.84B TVS (44%), Base $10.72B (33%), Optimism $8B. EigenLayer $8.7B restaking. Staking 28.9-30% supply (35.86-37.5M ETH). Lido 23-29% staked ETH. ZERO VC UNLOCK PRESSURE — cala podaz w pelni odblokowana od ICO 2014-15. Salda ETH na gieldach spadly do 16.24M (11% podazy, -21% YoY). SEC/CFTC COMMODITY CLASSIFICATION 17.III.2026 (68-stronnicowa wspolna interpretacja). BlackRock ETHB STAKING ETF 12.III.2026 ($106.7M start, 70-95% staked, yield ~3.1%). EF PRZESTAL SPRZEDAWAC ETH — zeskakowal 70K ETH, polityka skarbowa: 15% skarbu/yr, antycykliczna. Pectra (V.2025): EIP-7251 (max 2048 ETH/validator), EIP-7702 (account abstraction). Fusaka (XII.2025): PeerDAS (-85% bandwidth), blob fee floor (EIP-7918)
**Note:** DEEP RESEARCH v2: W strefie FV (-16% vs mid $2,450). -58% od ATH $4,950 (VIII.2025).
**Strengths:**
  + DEEP RESEARCH v2: STABLECOIN DOMINACJA $160-175B (52% GLOBAL) = NAJWAZNIEJSZA METRYKA.
  + REKORDOWE 2M+ ACTIVE ADDRESSES DAILY (II.2026) + Q1 transakcje +43% QoQ = 200.4M.
  + SEC/CFTC COMMODITY CLASSIFICATION 17.III.2026 = PRZELOM REGULACYJNY.
  + BlackRock ETHB STAKING ETF (12.III.2026) = STRUCTURAL NEW DEMAND.
**Risks:**
  ! DEEP RESEARCH v2: L2 CANNIBALIZATION = EXISTENTIAL RISK POTWIERDZONY DANYMI.
  ! ETH/BTC 0.030-0.032 = WIELOLETNIE MINIMA (od II.2020). 3.5-letni downtrend od Merge.
  ! SOL COMPETITIVE THREAT INTENSYFIKUJE SIE: SOL DEX vol $117B/mies vs ETH $52B (2.25x).
  ! BETA 1.5-2.0x vs BTC W SPADKACH = NAJGORSZE POZYCJONOWANIE w risk-off.
**Verdict:** DEEP RESEARCH v2.

## SOL — Solana
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 85 | **FV:** 50-135 | **Entry:** 45
**P/E:** DEEP RESEARCH v2: P/S na chain fees ($187M) = 246x = DROGO. ALE P/S na app fees ($1.76B) = 26x = ROZSADNIE. Problem: SIMD-0096 sprawia ze SOL token przechwytuje zaledwie ~1% wartosci ekonomicznej ekosystemu — 99% akumuluje sie na warstwie aplikacyjnej (Jito, Jupiter, Raydium). FDV $49-50B vs mkt cap $45-46B = prawie tożsame (fully unlocked). Staking yield 5.9-8.1% kompensuje inflacje 4.6%
**Revenue Growth:** DEEP RESEARCH v2: Chain fees $512K/dzien ($187M annualized). App fees $4.83M/dzien ($1.76B annualized). Jito MEV: $4.2B SOL/dzien, $115M ann. fees. DEX vol: $117.7B I.2026 (ATH), $98B II.2026. LIDER DEX 17 KOLEJNYCH MIESIECY. Jupiter 95% udzial agregacji, $700M+/dzien swapow. Stablecoin tx: $650B w samym II.2026 (rekord). Active addresses: 3.9-5.3M/dzien (wielokrotnosc ETH L1). 150M tx/dzien, TPS >10,000. Pump.fun $937M revenue 2025 ALE -80% od peak = cyklicznosc. TVL w SOL = ATH 80M SOL ($ spadek wynika z deprecjacji tokena nie z odplywu kapitalu)
**Moat:** DEEP RESEARCH v2: NAJSZYBSZY MAINSTREAM L1: >10,000 TPS, 400ms bloki (Alpenglow → 150ms), <$0.01 fees. 150M tx/dzien. 100% UPTIME 2025-2026 (z 7 outage'ow w 2022-23 do zera). FIREDANCER na mainnet (17-26% walidatorow, 1M+ TPS w testach, pelne wdrozenie H2 2026). DEX DOMINACJA 17 MIESIECY: $117.7B I.2026. Jupiter 95% agregacji, $3.13B TVL. STABLECOIN INFRA: $14.8B mkt cap, $650B/mies tx volume, USDC 53%. Visa USDC settlements (XII.2025), Stripe API, PayPal PYUSD, Western Union USDPT (H1 2026), Fiserv. payments.org hub. SOL ETFs ZATWIERDZONE (X.2025, $900M+ inflows). Goldman $108M, Morgan Stanley SOL Trust ETF w procesie. SEC/CFTC COMMODITY (17.III.2026). Staking 62-70% supply, yield 5.9-8.1%. ZERO LEGACY UNLOCK PRESSURE (vesting zakonczony). Top 10 wallets only 6.58% supply. RWA $1.82B (ATH III.2026). DePIN: Helium 350K+ subscribers, Render, Hivemapper = $2.4-2.6M/mies revenue (ATH). Solana Mobile 200K+ urzadzen. 2,100+ active dApps. CLARITY Act 72% szans na uchwalenie 2026
**Note:** DEEP RESEARCH v2 + MACRO OVERLAY 4.IV: W strefie FV (-13.5% vs mid $92.50). -73% od ATH $295 (19.I.2025).
**Strengths:**
  + DEEP RESEARCH v2: APP FEES $1.76B/YR ANNUALIZED = REALNE PRZYCHODY EKOSYSTEMU.
  + DEX VOLUME 2x ETHEREUM: tygodniowy DEX vol $36B vs ETH $20.1B (II.2026).
  + TVL w SOL = ALL-TIME HIGH 80M SOL (II.2026) mimo $ TVL spadku do $5.4B z ATH $12.2B.
  + SEC/CFTC COMMODITY CLASSIFICATION (23.III.2026): SOL explicite sklasyfikowany jako...
**Risks:**
  ! DEEP RESEARCH v2: AKTYWNOSC ON-CHAIN NORMALIZUJE SIE: DEX vol spadl z $117.7B (I.2026)...
  ! SIMD-0096 = L1 VALUE CAPTURE OSLABIONY (NOWY): Po zmianie II.2025 opłaty priorytetowe...
  ! 6 MIESIECY RED (-31% YTD): H&S breakdown target $73 (potwierdzony 27.III).
  ! INFLACJA 4.6% NOMINALNIE (3.93% REALNIE) = NIE SCARCE.
**Verdict:** DEEP RESEARCH v2 + MACRO OVERLAY 4.IV.

## BNB — BNB (Binance)
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 605 | **FV:** 500-1000 | **Entry:** 400
**P/E:** P/F 710x, P/S 7102x na chain fees = DROGO na on-chain basis. ALE: BNB jest wyceniany jako exchange equity token, nie jako L1. Binance revenue $16.8B (2024), zysk $464M. Jesli BNB = proxy na ~5% Binance revenue = $840M value capture. Deflacja 4.5%/yr = equivalent buyback. Staking yield ~1% nominal + 4.5% deflacja = ~5.5% real return
**Revenue Growth:** DEEP RESEARCH: BNB Chain fee revenue $259M Q4 2025, $357M Q3 2025. Annualized $800M-1B. ALE: spadek 30% w/w w IV.2026. Binance exchange: spot $640B Q1 2026 (34% rynku), derivatives $4.9T (34.9%, wzrost z 29%). Binance ROSNIE w market share mimo spadku wolumenow. Daily tx ATH 31M (X.2025), srednia 17.3M/dzien Q4. PancakeSwap $2.36T vol 2025 = #1 DEX globalnie. Stablecoin mkt cap na BNB Chain $14B (+133% YoY). FDUSD zaledwie $370-500M = porazka post-BUSD
**Moat:** DEEP RESEARCH: BINANCE ECOSYSTEM = DOMINUJACA GIELDA CRYPTO. 280M+ userow, $152.9B aktywow (70%+ wsrod CEX), 34.9% derivatives mkt share, 34% spot. Dzenny vol spot 5x wiecej niz #2. AUTO-BURN: z 200M do docelowo 100M BNB. Ostatni burn: 1.37M BNB ($1.277B, 15.I.2026). Deflacja 4.2-4.7%/yr = NAJSILNIEJSZA w crypto (vs BTC <1% inflacji, ETH 0.3-0.5% inflacji, SOL 4.6% inflacji). BNB Chain: 5.4B TVL, 56.4M weekly active addresses (#1), 285 TPS (Fermi → 0.45s blocks), roadmap 20K TPS. opBNB L2: 4500+ TPS, <$0.005 fees. 670+ DeFi protokolow, 4200+ dApps. RWA $2.1B (BlackRock BUIDL, Franklin BENJI, VanEck VBILL). Binance Pay: $121B processed, 1.36B tx. Launchpad/Launchpool: 70+ projektow, $215M net fees 2025. CZ pardoned (X.2025) ale lifetime exec ban. Licencja ADGM Abu Dhabi, Mubadala $2B inwestycja
**Note:** DEEP RESEARCH + EQUITY FRAMEWORK: BNB = DE FACTO AKCJE BINANCE bez IPO. Binance rev $17B, zysk $464M+.
**Strengths:**
  + DEFLACJA -4.2-4.7%/YR = NAJAGRESYWNIEJSZY BURN W CRYPTO.
  + BINANCE = #1 GIELDA GLOBALNIE I ROSNIE W SHARE. Derivatives 34.9% (z 29%), spot 34%.
  + WEEKLY ACTIVE ADDRESSES 56.4M = #1 WSROD WSZYSTKICH L1.
  + STABLECOIN $14B NA BNB CHAIN (+133% YoY).
**Risks:**
  ! 21 WALIDATOROW = CENTRALIZACJA SYSTEMOWA.
  ! DOJ DOCHODZENIE IRAN SANCTIONS (III.2026, WSJ) = MANAGEABLE ALE REALNY RISK.
  ! TOP 10 WALLETS KONTROLUJE 60%+ SUPPLY = EKSTREMALNIE SKONCENTROWANE.
  ! EXCHANGE TOKEN = BETA NA WOLUMEN GIELDOWY.
**Verdict:** DEEP RESEARCH + EQUITY FRAMEWORK REVALUATION. BNB = DE FACTO AKCJE BINANCE.

## XRP — XRP (Ripple)
**Signal:** BLUE | **Conviction:** LOW | **Analyzed:** ✅
**Price:** 1 | **FV:** 0.90-2.20 | **Entry:** 0.75
**P/E:** Mkt cap ~$78B. On-chain fee revenue minimal (<$10M/yr). Valuation = speculation on ODL adoption, nie on-chain revenue
**Revenue Growth:** RippleNet ODL volume growing ale undisclosed. XRPL DEX volume minimal. CBDC pilot programs z centralnym bankami (Singapur, Bhutan, Palau)
**Moat:** SEC CASE RESOLVED = regulatory clarity (jedyny major alt z tym statusem). RippleNet 300+ financial institutions. ODL (On-Demand Liquidity) = real-time cross-border settlements. XRPL = native DEX, NFTs, smart contracts (Hooks). CBDC partnerships. Standard Chartered PT $8. $45B XRP w Ripple escrow = controlled supply
**Note:** W strefie FV (-13% vs mid). SEC case RESOLVED = regulatory clarity.
**Strengths:**
  + SEC CASE RESOLVED = JEDYNY major altcoin z pelna regulatory clarity w USA.
  + CROSS-BORDER PAYMENTS = $150T/yr TAM. RippleNet 300+ instytucji.
  + FLIPPED BNB w market cap = momentum. Standard Chartered PT $8 = 6x od obecnej ceny.
  + CBDC PILOTS: Singapur MAS testuje XRPL dla settlements.
**Risks:**
  ! 1B XRP MONTHLY ESCROW UNLOCK = massive supply pressure.
  ! VALUATION vs ON-CHAIN REVENUE: $78B mkt cap na <$10M/yr fee revenue = valuation oparta...
  ! ODL ADOPTION WOLNIEJSZE niz promises.
  ! RETAIL-DRIVEN: XRP community = emocjonalna, hype-driven.
**Verdict:** XRP = SEC clarity play + cross-border payments thesis. Regulatory advantage jest REALNE — jedyny major alt z resolved case.

## HYPE — Hyperliquid
**Signal:** BLUE | **Conviction:** MEDIUM | **Analyzed:** ✅
**Price:** 35.5 | **FV:** 18-55 | **Entry:** 16
**P/E:** P/S 11.7x (DeFiLlama) do 15.9x (Artemis) circulating = ROZSADNIE. FDV P/S 43-54x = DROGO fully diluted. Fee revenue $640-800M/yr. Buyback 7%/yr mkt cap ALE unlock = 6-7x wiecej = NET DILUTIVE
**Revenue Growth:** DEEP RESEARCH: Cumulative perp $4.17T. Daily $5-10B typowy, rekord $45B. III.2026: $208B. 2025: $2.95T + $844M fees. OI $5.6-7.3B (70%+ perp DEX). HIP-3: ropa $1.7B/dzien (>ETH perps!), zloto, S&P, NVDA, TSLA. 130+ perp markets + 311+ HIP-3. Spot cumulative $135.3B
**Moat:** DEEP RESEARCH: PERP DEX DOMINACJA 70%+ OI. Sub-0.2s finalnosc. 200K orderow/sek. Zero gas. Fully on-chain orderbook. Jedyny DEX w top 10 derywatow globalnie, przekroczyl Coinbase. BUYBACK 97% fees, $1B+ cumulative, 46% all crypto buybacks 2025. 41.7M HYPE skupione po sr. $14, AF formalnie spalone. ZERO VC. HyperEVM 175 zespolow, 100+ dApps, Kinetiq $740M, HyperLend $360M. ETF filings: Grayscale GHYP, Bitwise BHYP. MetaMask mobile integration. Ripple Prime institutional onramp
**Note:** W strefie FV (-2.7% vs mid $36.50). -40% od ATH $59.30 (IX.2025).
**Strengths:**
  + FEE REVENUE $640-800M/YR = WIECEJ NIZ ETH L1 ($120M) + SOL CHAIN ($187M) LACZNIE.
  + 70%+ OPEN INTEREST = ABSOLUTNA DOMINACJA. OI $5.6-7.3B vs dYdX $300-400M.
  + HIP-3 COMMODITIES/EQUITIES = STRUCTURAL HEDGE + HORMUZ CATALYST.
  + ZERO VC = UNIKALNE. Genesis airdrop 310M HYPE do 94K portfeli (sr.
**Risks:**
  ! UNLOCK = KRYTYCZNY.
  ! CENTRALIZACJA: 24 walidatory, polowa stake u 5 Foundation. Closed-source.
  ! CFTC FRAMEWORK 'WITHIN WEEKS.' Equities/commodities/S&P BEZ KYC =...
  ! MANIPULACJE: JELLY ($13.5M), POPCAT ($5M), XPL ($2.78M, 3.IV.2026).
**Verdict:** DEEP RESEARCH.

---
# 9. CRYPTO FAIR VALUE DASHBOARD (14 DeFi/L1)

Osobny dashboard React z 14 projektami. Key data:

| Ticker | Mcap | TTM Fees | P/F | P/E | Rating | Conviction |
|---|---|---|---|---|---|---|
| AAVE | $1.80B | $896M | 1.95x | 15.4x | UNDERVALUED | VERY HIGH |
| ENA | $874M | $360M | 2.43x | 69x | SPECULATIVE | LOW-MEDIUM |
| HYPE | $9.55B | $1.01B | 9.43x | 12.2x | UNDERVALUED | HIGH |
| AERO | $300M | $145M | 2.07x | neg. | SPECULATIVE | MEDIUM |
| LDO | $250M | $768M | 0.33x | 3.45x | DEEP VALUE | HIGH |
| JUP | $564M | $699M | 0.81x | 3.07x | UNDERVALUED | VERY HIGH |
| ONDO | $1.30B | ~$47M | 28.1x | 28.1x | NARRATIVE BET | MEDIUM |
| MORPHO | $971M | $187M | 5.19x | neg. | NARRATIVE BET | LOW |
| LIT | $235M | $58M | 4.02x | 5.22x | EARLY STAGE | MEDIUM |
| JTO | $168M | $398M | 0.42x | 5.82x | DEEP VALUE | MEDIUM |
| LINK | $6.15B | $40M | 154.7x | 170x | INFRA PREMIUM | MEDIUM-HIGH |
| KMNO | $85M | $98M | 0.87x | 4.81x | DEEP VALUE | MEDIUM-HIGH |
| TAO | $3.3B | ~$20M | 165x | neg. | HIGH-RISK | MEDIUM |
| MET | $68.2M | $1.02B | 0.067x | 1.16x | DEEP VALUE | MEDIUM |

---

---
# SESSION 7 UPDATE (13.IV.2026)

## Zmiany w dashboardzie
- **Stacked bar chart** zastąpił grid statystyk — SIGNAL_HISTORY z obliczonymi wartościami (cena vs FV midpoint)
- **Source panel usunięty z JSX** → przeniesiony do KB (sekcja 5)
- **hasDR fix:** 32 → 81 (wszystkie analyzed: true = mają DR)
- **Catalyst cleanup:** usunięte eventy starsze niż 7 dni (4 usunięte, 28 pozostało)
- **Insights wyekstrahowane** z JSX do insights-reference.md (oszczędność 45% rozmiaru)
- Dashboard: 213 KB → 114 KB (renderuje się poprawnie)
- **BE FV RAISE $120-180 → $140-210:** Oracle warrant 3.5M akcji + AEP 1GW deal ($2.65B) + nowy CFO Simon Edwards (ex-Groq). Cena $197 = YELLOW (+12.6% vs mid). P/E 140x, GAAP strata, insider selling $85M → conviction MEDIUM

## Nowe pliki w systemie
- `knowledge-base.md` — ten plik, zastępuje briefing
- `insights-reference.md` — pełne strengths/risks/verdict
- `DR/DR-INDEX.md` — inwentarz DR z statusami
- `DR/DR-NVDA.md`, `DR-AMD.md`, `DR-TSM.md`, `DR-TSM-ENERGY.md`, `DR-IREN.md` — odzyskane DR
- `DR/DR-TEMPLATE.md` — template na przyszłe DR (7 sekcji + cross-portfolio)

## Analiza: Jordi Visser tygodniówka ~11.IV.2026

### Nowe twarde dane:
- **CPI MoM: +0.9%** — najwyższy od szczytu VI.2022
- **Core PCE: 3 miesiące >0.3%** — jedyny raz w 25 lat poza boomem inflacyjnym 2021-22
- **Goods inflation w core PCE: 0.84%** — najwyższy run rate od 1991
- **Ceny gazu: największy 40-dniowy ruch od 22 lat.** Diesel jeszcze bardziej
- **ISM: "every single commodity up in price. Nothing down."** Short supply: electrical components, memory, rare earths
- **Fed funds vs CPI crossover imminent** → negative real yields → BTC quadrant z ALL returns
- **Computer equipment investment: 1% GDP** — historycznie bezprecedensowe

### Mythos emergency:
- Treasury Secretary Bessant zwołała emergency meeting z CEO banków (Jamie Dimon nie zdążył)
- Project Glasswing: AWS+Anthropic+Apple+Broadcom+Cisco+CrowdStrike+Google+JPM
- Model złamał software uważany za bezpieczny od 27 lat
- IGV new lows bez bounce. PLTR oddał 25% outperformance w tydzień
- Sundar Pichai: "these models are definitely going to break pretty much all software out there"

### Anthropic update:
- 500+ klientów >$1M/rok (z 12 dwa lata temu)
- 8 z Fortune 10 = klienci Claude
- Claude Code subskrypcje 4x wzrost
- 30+ produktów w samym styczniu (PowerPoint, Excel)
- Compute shortage potwierdzone — Jordi sam miał problemy
- Anthropic ekspanduje na Google/Broadcom TPU (brak wystarczającej capacity od NVDA/AWS)

### Private credit eskalacja:
- Carlyle ogranicza redempcje przy 15.7%
- Fundraising PE na najniższym poziomie od dekady
- Jordi math: ~25-30% kapitału w software × 1.7x leverage = ~50% levered ekspozycji na software
- "Private credit cycles do not stop on their own"

### NVDA PE compression:
- FY27 P/E spadło do najniższego poziomu w dekadzie (~20x)
- Jordi pisze paper o NVDA w tym tygodniu
- "In my opinion, it's going higher"

### Thematic basket 100 names:
- 5 tematów: rack, chemicals, optical fiber, advanced packaging, power
- 4 z 5 na ATH. Basket up big YTD vs S&P unchanged
- "AI is not a technology. It is electricity. It needs power, copper, optical fibers."

### Brazil (EWZ):
- Iran uderzył w 2 centra danych AWS w UAE → Latin America DC security angle
- EWZ blisko 5-year highs. Clean energy + data center boom

### Nowe tematy do śledzenia:
- Edge devices (Jordi zaczyna thematic ideas — "winners not part of current trades")
- Silver jako AI commodity (Jordi napisał paper)
- Jeff Curry: batteries (military + grid + security converge on storage)
- Tesla i battery stocks "poised for re-rating"

## Section 232 Phase 2 — OUTCOME (14.IV.2026)

**Wynik: DOVISH — framework agreements chronią główny supply chain.**

Faza 1 (od 15.I.2026): 25% cło na wąski zestaw AI chips (H200, MI325X class). Exemptions dla US supply chain buildout.
Faza 2 (raport 14.IV): NIE agresywne broad tariffs. Framework agreements z Taiwan, Korea, Japonia = preferential treatment dla firm inwestujących w US.

| Kraj | Deal | Nasze tickery |
|---|---|---|
| Taiwan | TSMC $165B Arizona + $250B trade deal. Import bez cła przy US capacity buildout | TSM, NVDA, AMD, AVGO, MRVL, CRDO, ARM |
| Korea Pd. | MFN — stawka nie wyższa niż Taiwan | 000660.KS, 005930.KS |
| Japonia | MFN — to samo | — |

Kolejny checkpoint: **1.VII.2026** — Commerce update na DC semiconductor market, może zmodyfikować tariffs.
Ryzyko zmniejszone ale nie zerowe — Trump "reserved authority to impose broader tariffs."

Rynek reakcja 14.IV: CRDO +23.5%, SNDK +13.6%, SK Hynix +7.6%, ARM +8.2%, MU +3.9%, AVGO +3.5%. Broad semi rally.

## TOP 10 (13.IV.2026)

1. **TSM $371** 🔵 HIGH — Q1 rev $35.7B rekord, insider BUYING, full earnings 16.IV
2. **MU $420** 🔵 HIGH — Q3 guide $33.5B (+47% beat), GM 81%, momentum +340%
3. **QCOM $128** 🟢 HIGH — P/E 12x, -29% vs FV mid, buyback $20B, największa value play
4. **CEG $287** 🔵 HIGH — 22 GW nuclear, -34% od ATH, R/R 2.7, kontrarian
5. **NVDA $188** 🔵 HIGH — PE najniższe w dekadzie, Jordi bullish, Vera Rubin H2 2026
6. **CCJ $117** 🔵 HIGH — Uranium $90/lb ATH, SPUT 40% podaży, Hormuz → Japan restarts
7. **BTC $73K** 🔵 HIGH — Negative real yields imminent, MACD crossover, correlation break
8. **ETN $404** 🔵 HIGH — DC orders +200%, Boyd Thermal, Nvidia Beam Rubin partner
9. **LNG $266** 🔵 HIGH — US LNG omija Hormuz, Ras Laffan 3-5 lat offline, Stage 3 ramp
10. **CF $121** 🔵 HIGH — Urea $350→$700+, Chiny ban sulfuric acid, 49% urea through Hormuz

## Workflow update
- Briefing zastąpiony przez knowledge-base.md (ten plik)
- Nowa sesja: załącz KB + dashboard JSX + opcjonalnie DR-[TICKER].md
- Każdy nowy DR automatycznie zapisywany jako DR-[TICKER].md
- SIGNAL_HISTORY aktualizowany przy każdym price update

# 10. PENDING ACTIONS

## PENDING ACTIONS — SESSION 8 (14.IV.2026)

### Completed (Session 7→8):
- [x] **Section 232 Phase 2 reaction** — DOVISH outcome. Semi rally: CRDO +21.5%, SNDK +11.8%, SK Hynix +6.1%, ARM +8.2%
- [x] **News scan 48h** — dwa raporty (Gemini DR + Opus 4.6), zintegrowane sygnały
- [x] **Catalyst calendar update** — usunięte stale eventy, dodane: SNDK Nasdaq-100, Amazon surcharge, SK Hynix preliminary, GDP+PCE, PLTR osobno, SEC Roundtable

### High Priority:
- [ ] **Price update** — ceny z 14.IV po Section 232 rally + momentum refresh
- [ ] **ASML Q1 earnings** (15.IV) — cons €8.5B rev, EPS $7.49-7.72. Key: bookings, China % (norm ~20%), MATCH Act, High-NA
- [ ] **TSM full earnings** (16.IV) — rev $35.6B (+35%), NI +50%. Key: 2nm yield, CoWoS, marża 63-65%, Arizona koszty
- [ ] **Warsh hearing** (16.IV) — Komisja Bankowa + SEC Roundtable digital assets
- [ ] **RTX Deep Research** — earnings 21.IV, PAC-3 $4.76B (94% FMS), P&W GTF $2.8B drag, backlog $202B
- [ ] **ENR.DE Deep Research** — URGENT: backlog €146B rekord, Q1 €9.7B (+12.8%), 25% zamówień z AI DC. Earnings 12.V
- [ ] **Weryfikacja kluczowych claimów** z news scanu (patrz sekcja 11.5)

### Medium Priority:
- [ ] FN (Fabrinet) Deep Research — record rev ~$1.13B (+36%), AWS custom AI manufacturing
- [ ] MOD (Modine) Deep Research — ekspansja Rockbridge VA + Franklin WI ($100M), TurboChill 3+ MW
- [ ] CEG guidance miss analysis — EPS $11-12 rozczarowuje, TMI restart PJM do lat 2030. FV korekta?
- [ ] HYPE price fix + ETF filing integration (Bitwise BHYP, Grayscale, 21Shares)
- [ ] WPM FV review — $4.3B Antamina stream + $275M Jervois
- [ ] ETH/SOL conviction review — BlackRock ETHB staking ETF live, Firedancer mainnet (hybrid)
- [ ] TT moat update — przejęcia LiquidStack + Stellar Energy Digital
- [ ] Consider adding WTI front-back spread to macro monitoring (Hayes framework)

### Low Priority:
- [ ] KAP price fix (Yahoo GBp/GBP bug)
- [ ] SII status — subsidiary Coeur Mining od II.2025, rozważyć usunięcie z watchlisty
- [ ] CCJ production cut analysis — McArthur River 14-15M lbs (z 18M), "value over volume"
- [ ] Zeihan as geopolitical bear source in panel

---
# 11. SESSION 8 UPDATE (14.IV.2026)

## 11.1 News Scan — metodologia

Dwa raporty wygenerowane z tego samego promptu:
- **Raport A (Gemini DR):** narracyjny, makro-framework, tendencja do tworzenia własnych tez. Pokrycie spółek spoza dashboardu (Glasswing: CRWD, PANW, CSCO). FV w tabelce NIE skalibrowane do naszego systemu (halucynacja)
- **Raport B (Claude Opus 4.6):** granularny, systematyczny, trzyma się formatu promptu. Konkretne PT analityków, SEC filingi, precyzyjne ruchy cenowe. Lepsza sekcja Hormuz (2 statki 11.IV, mechanizm IRGC, korytarz Larak)

**Wniosek:** Opus 4.6 lepszy do news scanu (actionable data). Gemini DR lepszy do budowania tez makro (narracja). Oba halucynują — wymagają weryfikacji przed integracją.

## 11.2 Kluczowe sygnały z 48h (zweryfikowane / high confidence)

### Energia / Zasilanie:
- **BE:** Oracle 2.8 GW fuel cells (rozszerzenie AEP 1GW). "Bring-your-own-power" w 55 dni vs 5-7 lat grid. Backlog $20B (+65% r/r). Cena +15% → ~$235. Przy FV $140-210 = deep YELLOW/RED
- **LNG:** Hormuz zamknięty → europejski TTF >€50/MWh, azjatycki JKM +140%. Max liquefaction. BofA PT $322. Buyback $10B. ALE: rozejm 22.IV = binary
- **CEG:** Guidance EPS $11-12 (rozczarowuje, cons $11.72-78). TMI restart: PJM może przesunąć do 2030. Calpine $16.4B przejęcie zamknięte. -34% od ATH
- **GEV:** Backlog 83 GW, CEO target 100 GW do końca 2026. Prolec GE $5.3B on track. Earnings 22.IV
- **ENR.DE:** Q1 FY26 €9.7B (+12.8%), **backlog €146B rekord**. 25% nowych zamówień turbinowych z AI DC. Buyback €6B. Gamesa do break-even FY26. → WYMAGA PILNEGO DR

### Pamięć / HBM:
- **SK Hynix:** Record close KRW 1,103,000 (+6.1%). Goldman PT KRW 1.35M. Q1 preview: OP ~3.85-4T KRW (+418% r/r). 85% dostaw HBM do Nvidii. US listing $10-14B filed
- **Samsung:** Record Q1 OP 57.2T KRW (+755% r/r, all-time record). Próbki HBM4 do Nvidii w kwalifikacji
- **MU:** KeyBanc upgrade OW PT $600, Lynx Equity PT $825 (street-high). HBM4 w produkcji dla Vera Rubin. Może zaspokoić tylko 55-60% popytu
- **SNDK:** Wejście do Nasdaq-100 od 20.IV — mechaniczny popyt pasywny. Citi PT $980. +11.8% do $952.50 (AH $979). Przy naszym expensive $1000 = prawie na granicy

### Sieć / Łączność:
- **CRDO:** +21.5%. Raport mówi o przejęciu DustPhotonics za $750M (⚠️ DO WERYFIKACJI). Jefferies Buy PT $175. Section 232 beneficjent
- **LITE:** Nvidia $2B preferred equity + purchase commitments. Portfel do 2028. BNP PT $1040. S&P 500 inclusion. +6.8%
- **ANET:** XPO MSA (12.8 Tbps liquid-cooled optics). AI networking $3.25B w 2026 (~2x r/r). ALE kurs -9.2% (14.IV) — kontra-signal
- **GLW:** Umowa z Meta na $6B (fiber + cable)

### Chłodzenie / Infra:
- **TT:** Przejęcia LiquidStack (liquid cooling) + Stellar Energy Digital → "central plant to chip". Rack density 600kW→1MW
- **ETN:** Nowa fabryka switchgear w Nebrasce ($30M+, 370K sqft). Beam Rubin DSX dla Nvidia
- **SCHN.PA:** Przejęcie 75% Motivair (liquid cooling). Partnership NVIDIA + ETAP (digital twins)
- **MOD:** Ekspansja Rockbridge VA + Franklin WI ($100M). TurboChill 3+ MW. $180M zamówień

### Semiconductors:
- **NVDA:** Vera Rubin w produkcji. NVLink Fusion — Intel i Samsung dołączyli. $6B inwestycji strategicznych (LITE, COHR, MRVL po $2B)
- **AMD:** MI350 shipping — "najszybciej rampujący produkt w historii". MI450/Helios H2 2026 on track
- **AVGO:** Google TPU lead design partner do 2031. Custom ASIC 70% rynku, $73B backlog
- **ARM:** +8.2% na Section 232. ALE Morgan Stanley downgrade EW (erozja marż przez AGI CPU). Mixed signal

### Mining / Surowce:
- **MP:** Pentagon $400M equity investment (⚠️ DO WERYFIKACJI). Rząd USA jako największy akcjonariusz. NdPr floor $110/kg
- **WPM:** $4.3B Antamina silver stream z BHP + $275M Jervois
- **CCJ:** McArthur River produkcja obcięta do 14-15M lbs (z 18M). "Value over volume"
- **ALB:** Oppenheimer PT $222, UBS PT $230. Lithium spot +51% MoM. Kemerton idled (accretive)
- **HL:** Low-cost leader AISC ~$11/oz, cash cost ujemny. Record Q4: $410M rev (+67%)
- **AG:** Q1 Ag 3.5M oz (-4% r/r, celowo). "Margin Over Volume". Cash $938M record. Dywidenda 2x
- **PAAS:** "Game-changing" odkrycie La Colorada — 40% odwiertów >1000 g/t Ag

### Defense:
- **LMT:** PAC-3 MSE $4.76B (94% FMS). Produkcja 600→2000 szt/rok. Saudi: potencjalnie $9B. Pentagon FY2027 $1.5T
- **RHM.DE:** Record backlog €63.8B (+36% r/r). Goldman European Conviction List. Niemiecki budżet obrony €108.2B

### Healthcare:
- **LLY:** Foundayo (doustny GLP-1) via Amazon Pharmacy, GoodRx, WW. Jaypirca Phase 3+ (CLL/SLL). MS PT $1327
- **ISRG:** Da Vinci 5 FDA clearance na kardiochirurgię. Ion +51%. Konkurencja: Medtronic Hugo, J&J Ottava

### Crypto:
- **HYPE:** Bitwise złożył amended registration na spot HYPE ETF (BHYP). Grayscale i 21Shares w kolejce. Hayes kupił 26K HYPE ($1.1M). $396M rev/180 dni. 61.9% udziału on-chain derywatów
- **SOL:** Firedancer mainnet (Frankendancer hybrid, ~21% staked SOL). $1M bug bounty. Alpenglow Q3 2026. ALE: Drift Protocol $280M breach (12.IV)
- **BTC:** ETF avg cost basis ~$84K (18.5% pod wodą). Hash cost $80K/BTC > cena. Tax deadline 15.IV
- **XRP:** CLARITY Act markup. RLUSD market cap $1.56B (z $132M r/r). ALE RLUSD może kanibalizować use case XRP

### Hyperscalers:
- **TSLA:** FSD v14.3 (MLIR rewrite, +20% reaction). FSD zatwierdzony w Holandii (pierwszy EU). Q1 358K dostaw (miss vs 365-370K). Cybercab ramp od kwietnia
- **META:** Przegoni Google w global digital ad revenue 2026 ($243.5 vs $239.5B). $21B CRWV deal
- **CRWV:** Rozszerzenie Meta do $21B (do XII.2032). Anthropic nowy klient. Upsizing: $3.5B convertible + $1.75B senior notes. ALE dług/equity 648%

## 11.3 Hormuz — szczegółowy status (14.IV wieczór)

- **Ruch:** Faktycznie zamknięty. 11.IV: tylko **2 statki** (żaden tankowiec). Tydzień do 11.IV: 24 statki (vs ~1246 normalnie)
- **~500-700 statków >10K DWT uwięzionych** w Zatoce. 230 załadowanych tankowców czeka
- **Blokada USA:** CENTCOM wdrożył blokadę irańskich portów od 13.IV 10:00 ET. NIE blokuje tranzytu non-Iran
- **Mechanizm IRGC (Hormuz Management Plan):**
  - Opłata $0.50-1/baryłkę (VLCC ~2M baryłek = ~$2M/przejście)
  - Płatność w juanach lub krypto (BTC/USDT)
  - 5-stopniowy ranking narodowościowy — przyjazne kraje tańsze
  - Eskort przez korytarz Larak (północny)
  - **Wszystkie 57 tranzytów od 13.III użyło korytarza Larak — ZERO normalną trasą**
  - Revenue: do $20M/dzień, $600-800M/miesiąc
- **Ubezpieczenia:** War-risk premiums z 0.02-0.125% do 0.5-1% wartości statku. VLCC charter $800K/dzień (4x normy)
- **Infrastruktura:** Ras Laffan: 17% zdolności eksportowej Kataru zniszczone, naprawa 3-5 lat (IEA/WB/IMF)
- **Rozejm wygasa 21-22.IV.** Bloomberg: obie strony "w rozmowach". Trump: "holds well". Pakistan oferuje hosting rundy 2

## 11.4 Section 232 — potwierdzone ruchy cenowe 14.IV

| Ticker | Ruch 14.IV | Driver |
|---|---|---|
| CRDO | +21.5% | M&A (DustPhotonics?) + Jefferies initiation + 232 |
| SNDK | +11.8% ($952, AH $979) | Nasdaq-100 inclusion 20.IV + Citi PT $980 |
| ARM | +8.2% | 232 framework = więcej fabów = więcej royalties |
| SK Hynix | +6.1% (KRW 1,103K record) | Earnings optimism + Goldman PT raise |
| Samsung | +3.4% (KRW 207,750) | Record Q1 earnings |
| BE | +15% (~$235) | Oracle 2.8 GW deal |
| LITE | +6.8% | Nvidia $2B + S&P 500 inclusion |
| Semi index (SOX) | +25% YTD | Vastly outperforming Nasdaq (-1.5% YTD) |

## 11.5 Claimy wymagające weryfikacji

| Claim | Źródło raportu | Ryzyko halucynacji | Status |
|---|---|---|---|
| CRDO przejęcie DustPhotonics za $750M | Opus | Wysokie | ❓ SPRAWDZIĆ SEC 8-K |
| MP Materials — Pentagon $400M equity, 15% udziałów, "Project Vault" $12B | Gemini+Opus | Średnie | ❓ SPRAWDZIĆ DOD/SEC |
| Samsung Q1 OP 57.2T KRW (+755%) all-time record | Opus | Niskie (preliminary bywają) | ❓ Samsung IR |
| TSLA FSD zatwierdzony w Holandii | Opus | Średnie | ❓ Electrek / EU regulatory |
| SOL Drift Protocol $280M breach | Opus | Średnie | ❓ Solana explorer |
| MU wycofanie marki "Crucial" | Gemini | Wysokie | ❓ Micron IR |
| HBF (High Bandwidth Flash) — KAIST patent | Gemini | Średnie (akademickie) | ❓ KAIST publications |
| TT przejęcie LiquidStack | Opus | Średnie | ❓ Trane IR |
| SCHN.PA przejęcie 75% Motivair | Opus | Średnie | ❓ Schneider IR |
| ENR.DE backlog €146B | Opus | Niskie | ❓ Siemens Energy IR |

## 11.6 Nowe catalysts dodane w sesji 8

- **17.IV:** Amazon 3.5% fuel/logistics surcharge (AMZN)
- **20.IV:** SNDK wchodzi do Nasdaq-100 — masywne pasywne flows (SNDK)
- **23.IV:** SK Hynix Q1 preliminary (000660.KS)
- **30.IV:** GDP Q1 + PCE Deflator (Makro)
- **~4.V:** PLTR wydzielony z bloku 5.V (earnings osobno)
- **16.IV:** SEC Roundtable digital assets dodany do Warsh hearing
- Wzbogacone labels dla ASML (consensus), TSM (key metrics), RTX (PAC-3 + GTF drag), CEG (guidance miss), ENR.DE (backlog €146B)

## 11.7 Project Glasswing — notatka kontekstowa

Anthropic ogłosił Project Glasswing (7.IV) — Claude Mythos Preview z zdolnościami zero-day detection. 11 partnerów launchowych (AWS, MSFT, GOOGL, NVDA, AVGO, AAPL, JPM, CRWD, PANW, CSCO, Linux Foundation).

**Wpływ na dashboard:** Bezpośredni impact na NVDA, AVGO, AAPL, MSFT, GOOGL, AMZN (partnerzy). AMD wykluczony (negatywne). Spółki cyber (CRWD, PANW, CSCO) NIE są w naszym dashboardzie — nie dodajemy, ale monitorujemy jako tło.

Implikacja: software disruption thesis (Jordi Visser "every single software name getting hit") potwierdzona strukturalnie. Hardware longs > software longs.

## 11.8 Workflow update

- News scan prompt zapisany jako `news-scan-48h-14IV2026.md`
- Następny scan: po earnings ASML (15.IV) + TSM (16.IV)
- Opus 4.6 preferowany do news scanu (granularność, format). Gemini DR do tez makro

## 11.9 Raport 3 — dodatkowe sygnały (15.IV scan, Opus)

Trzeci raport dostarczył nowe dane nieobecne w raportach 1 i 2:

### FV CHANGES — sesja 8

| Ticker | Stare FV | Nowe FV | Signal | Powód |
|---|---|---|---|---|
| **AVGO** | $290-400 | **$350-480** | 🟡→🔵 | Meta MTIA multi-GW partnership (14.IV) = custom 2nm AI accelerator. Teraz 5+ XPU: Google TPU 2031 + Meta + Anthropic 3.5GW + 2 undisclosed. $73B backlog. JPM PT $500, GS PT $480 |
| **BE** | $140-210 | **$160-250** | 🟡→🔵 | Oracle 2.8GW fuel cells (1.2GW contracted) + AEP 1GW = 3.8GW pipeline. JPM PT $231 (z $166). 58% rev growth guide. "Bring-your-own-power" w 55 dni vs 5-7 lat grid |
| **RTX** | $175-235 | **$190-260** | 🔵→🟡 | $3.7B Patriot GEM-T Ukraine (14.IV) + $627M Holandia + PAC-3 $4.76B. Production tripling 600→2000/yr. BofA top Q2 pick |
| **FSLR** | $150-380 | **$130-250** | 🔵→🟡 | 2026 guide $4.9-5.2B vs $6.16B consensus = massive miss. Tariff $125-135M. Multiple downgrades (Jefferies, Deutsche, Baird). FV High $380 był absurdalnie szeroki |
| **CRWV** | $52-115 | **$65-140** | 🔴→🟡 | Meta $21B deal (do XII.2032), Anthropic multi-year, ~$90B revenue backlog. 4 upgrades. ALE: D/E 648%, net margin -23%, short 15% |

### Nowe sygnały fundamentalne:

**AVGO — Meta MTIA partnership (14.IV):**
- Multi-GW custom 2nm AI accelerator, >1GW initial
- Dołącza do: Google TPU (through 2031), Anthropic 3.5GW (8-K 6.IV), + 2 undisclosed
- Mizuho: $21B AI rev od Anthropic w 2026
- Custom AI silicon backlog $73B
- Market cap >$1T

**UEC — Burke Hollow production commenced (8.IV):**
- Pierwszy nowy US ISR uranium mine w dekadzie
- Dual platform: Burke Hollow TX + Christensen WY
- Licensed 12M lbs/yr capacity (vs produkcja 244K lbs dotychczas)
- Roth Buy, Goldman PT $18
- De-riskuje thesis — przejście z "development" na "production"

**PPI (14.IV) — significant downside surprise:**
- PPI MoM: +0.5% vs 1.1% consensus
- Core PPI: +0.1% vs 0.5% consensus
- Rynek: "nie tak źle jak się obawiano" post-Iran
- Pozytywne dla duration assets, zmniejsza presję na Fed
- WTI spadło 7% do $91.34 na nadziejach negocjacyjnych

**Warsh hearing OPÓŹNIONY:**
- Z 16.IV na **21.IV** (financial disclosure filed late)
- Tillis remains "hard no"
- Powell's term expires 15.V — tight timeline

**Silver przebiło $79/oz (+5% na 14.IV):**
- 6. rok deficytu strukturalnego
- COMEX/LBMA na decade lows
- Solar PV: ~200M oz/yr demand
- China restricted exports od I.2026
- Gold/silver ratio 64:1
- Bullish dla: HL, AG, PAAS, WPM, SII

**FSLR — guidance miss:**
- 2026 rev guide $4.9-5.2B vs $6.16B consensus = FAR below
- Tariff impact $125-135M na 2026
- Downgrades: Jefferies obciął PT do $187, Deutsche, Baird
- Nowa fabryka Gaffney SC ($330M) Q4 2026
- Idling Azji Płd.-Wsch. ~20%
- US manufacturing advantage long-term, ale near-term painful

**TER — Goldman Sachs Sell initiation PT $80:**
- "Not well-positioned w merchant GPU testing"
- Nasza cena $370, nasz FV $220-340 = RED
- Kontrapunkt: revenue +75% r/r (AI = ~70%), long-term target $6B
- Uwaga: jedyny major ticker z GS Sell w dashboardzie

**VICR — insider selling red flag:**
- CEO sprzedał $111M w 6 miesięcy
- 183 insider sells, **0 buys**
- Fab utilization niska
- Gen 5 VPD ramp kluczowy ale brak design win confirmation
- Earnings 21.IV — watch closely

**VRT — vertical integration:**
- Przejęcie BMarko Structures (13.IV) — prefab DC capabilities
- CPower BESS/VPP collaboration (14.IV)
- Earnings 22.IV

**MOD — pivot to pure-play DC cooling:**
- DC sales +78% r/r
- SpinCo/Gentherm separation → pure-play
- FY guide raised: rev growth 20-25%, EBITDA $455-475M
- Potwierdza pilność DR

**FN — new ATH $708:**
- HPC rev: $15M→$86M→$150M+/q (eksponencjalny wzrost)
- AWS HPC manufacturing relationship
- 3 CPO programs live
- ALE: FCF negative, insider selling $19.5M
- DR jeszcze bardziej pilny

### Rozbieżności między raportami (do weryfikacji):

| Claim | Raport 2 | Raport 3 | Który prawdopodobny |
|---|---|---|---|
| CRDO driver 14.IV | DustPhotonics $750M M&A | Jefferies Buy initiation $175 PT | **Raport 3** — M&A niepotwierdzone |
| ENR.DE backlog | €146B | €138B | Sprawdzić Siemens Energy IR |
| RTX backlog | $202B | $268B | Sprawdzić RTX IR |
| BE move 14.IV | +15% | +22.77% | Sprawdzić Yahoo |
| DXY | 98.08 (yfinance JSON) | ~96.6 | **JSON** — ufamy yfinance |

### Catalyst calendar corrections:

- **Warsh hearing:** ~~16.IV~~ → **21.IV** (delayed, financial disclosure)
- **LRCX earnings:** w JSX przesunięty do 29.IV (korekta vs wcześniejszy 22.IV)
- **UK-France Hormuz Summit:** 18.IV w Paryżu (nowy event)
- **NRC Duane Arnold restart meeting:** 22.IV (NEE, nowy)
- **ICLR 2026:** 23-27.IV — Google TurboQuant prezentacja (nowy)

## 11.10 Signal System — zmiana definicji (sesja 8)

**Nowa logika (od sesji 8):**
- 🟢 GREEN = cena < FV Low
- 🔵 BLUE = FV Low ≤ cena ≤ FV Mid
- 🟡 YELLOW = FV Mid < cena ≤ FV High
- 🔴 RED = cena > FV High

**Rationale:** Poprzedni system (BLUE = cała strefa FV, YELLOW = 0-15% powyżej FV High) maskował spółki w górnej połowie FV. Nowy system daje bardziej granularny obraz — od razu widać czy spółka jest w dolnej (atrakcyjnej) czy górnej (ryzykownej) części strefy.

**SIGNAL_HISTORY 14.IV:** 🟢3 🔵34 🟡37 🔴13

Labels w UI: "Okazja" / "Fair Value" / "Powyżej FV" / "Przepłacone"