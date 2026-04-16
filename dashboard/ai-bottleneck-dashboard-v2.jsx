import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

var SIGNAL_HISTORY = [
  { date: "9.IV", green: 15, blue: 43, yellow: 18, red: 9 },
  { date: "11.IV", green: 10, blue: 28, yellow: 31, red: 16 },
  { date: "13.IV", green: 12, blue: 28, yellow: 30, red: 15 },
  { date: "15.IV", green: 1, blue: 34, yellow: 36, red: 16 },
<<<<<<< HEAD
  { date: "16.IV", green: 1, blue: 40, yellow: 33, red: 14 }
=======
  { date: "16.IV", green: 1, blue: 38, yellow: 34, red: 14 }
>>>>>>> f70075d30d73c3d2e98303a1232b4d1fee3c7bda
];

const MOMENTUM_DATA = {
  "000660.KS":{ret12minus1:357.3,tsPositive:true,aboveSMA:true},
  "005930.KS":{ret12minus1:205.9,tsPositive:true,aboveSMA:true},
  "AAPL":{ret12minus1:19.9,tsPositive:true,aboveSMA:true},
  "AG":{ret12minus1:243.5,tsPositive:true,aboveSMA:true},
  "ALB":{ret12minus1:211.2,tsPositive:true,aboveSMA:true},
  "AMAT":{ret12minus1:128.8,tsPositive:true,aboveSMA:true},
  "AMD":{ret12minus1:109.0,tsPositive:true,aboveSMA:true},
  "AMKR":{ret12minus1:160.6,tsPositive:true,aboveSMA:true},
  "AMZN":{ret12minus1:12.9,tsPositive:true,aboveSMA:true},
  "ANET":{ret12minus1:49.2,tsPositive:true,aboveSMA:true},
  "ARM":{ret12minus1:32.6,tsPositive:true,aboveSMA:true},
  "ARRY":{ret12minus1:51.3,tsPositive:true,aboveSMA:false},
  "ASM":{ret12minus1:50.7,tsPositive:true,aboveSMA:true},
  "ASML":{ret12minus1:93.8,tsPositive:true,aboveSMA:true},
  "AVGO":{ret12minus1:61.8,tsPositive:true,aboveSMA:true},
  "B":{ret12minus1:69.4,tsPositive:true,aboveSMA:true},
  "BE":{ret12minus1:639.6,tsPositive:true,aboveSMA:true},
  "BNB":{ret12minus1:2.9,tsPositive:false,aboveSMA:false},
  "BTC":{ret12minus1:-27.6,tsPositive:false,aboveSMA:false},
  "CCJ":{ret12minus1:141.0,tsPositive:true,aboveSMA:true},
  "CEG":{ret12minus1:25.4,tsPositive:true,aboveSMA:false},
  "CF":{ret12minus1:69.5,tsPositive:true,aboveSMA:true},
  "CLS":{ret12minus1:230.0,tsPositive:true,aboveSMA:true},
  "CLSK":{ret12minus1:4.2,tsPositive:true,aboveSMA:false},
  "COHR":{ret12minus1:270.4,tsPositive:true,aboveSMA:true},
  "CRDO":{ret12minus1:118.0,tsPositive:true,aboveSMA:true},
  "CRWV":{ret12minus1:87.6,tsPositive:true,aboveSMA:true},
  "DELL":{ret12minus1:82.2,tsPositive:true,aboveSMA:true},
  "DHR":{ret12minus1:-4.4,tsPositive:false,aboveSMA:false},
  "ENR.DE":{ret12minus1:111.5,tsPositive:true,aboveSMA:true},
  "ETH":{ret12minus1:17.3,tsPositive:true,aboveSMA:false},
  "ETN":{ret12minus1:22.6,tsPositive:true,aboveSMA:true},
  "FCX":{ret12minus1:65.4,tsPositive:true,aboveSMA:true},
  "FN":{ret12minus1:154.3,tsPositive:true,aboveSMA:true},
  "FNV":{ret12minus1:44.1,tsPositive:true,aboveSMA:true},
  "FSLR":{ret12minus1:56.8,tsPositive:true,aboveSMA:false},
  "GEV":{ret12minus1:135.9,tsPositive:true,aboveSMA:true},
  "GLW":{ret12minus1:211.0,tsPositive:true,aboveSMA:true},
  "GOOGL":{ret12minus1:81.6,tsPositive:true,aboveSMA:true},
  "HAG.DE":{ret12minus1:11.5,tsPositive:true,aboveSMA:false},
  "HL":{ret12minus1:226.2,tsPositive:true,aboveSMA:true},
  "IFX.DE":{ret12minus1:32.5,tsPositive:true,aboveSMA:true},
  "IREN":{ret12minus1:461.1,tsPositive:true,aboveSMA:true},
  "ISRG":{ret12minus1:-10.6,tsPositive:false,aboveSMA:false},
  "KGH.WA":{ret12minus1:124.1,tsPositive:true,aboveSMA:true},
  "KLAC":{ret12minus1:111.1,tsPositive:true,aboveSMA:true},
  "LITE":{ret12minus1:1090.3,tsPositive:true,aboveSMA:true},
  "LLY":{ret12minus1:3.1,tsPositive:false,aboveSMA:true},
  "LMT":{ret12minus1:29.3,tsPositive:true,aboveSMA:true},
  "LNG":{ret12minus1:24.0,tsPositive:true,aboveSMA:true},
  "LRCX":{ret12minus1:199.9,tsPositive:true,aboveSMA:true},
  "MARA":{ret12minus1:-39.0,tsPositive:false,aboveSMA:false},
  "META":{ret12minus1:4.5,tsPositive:true,aboveSMA:false},
  "MOD":{ret12minus1:165.4,tsPositive:true,aboveSMA:true},
  "MP":{ret12minus1:97.3,tsPositive:true,aboveSMA:false},
  "MRVL":{ret12minus1:70.3,tsPositive:true,aboveSMA:true},
  "MSFT":{ret12minus1:-5.6,tsPositive:true,aboveSMA:false},
  "MU":{ret12minus1:339.9,tsPositive:true,aboveSMA:true},
  "NEE":{ret12minus1:43.0,tsPositive:true,aboveSMA:true},
  "NEM":{ret12minus1:107.7,tsPositive:true,aboveSMA:true},
  "NVDA":{ret12minus1:60.1,tsPositive:true,aboveSMA:true},
  "NXE":{ret12minus1:121.8,tsPositive:true,aboveSMA:true},
  "NXT":{ret12minus1:196.8,tsPositive:true,aboveSMA:true},
  "PAAS":{ret12minus1:117.9,tsPositive:true,aboveSMA:true},
  "PLTR":{ret12minus1:23.5,tsPositive:true,aboveSMA:false},
  "POWL":{ret12minus1:196.6,tsPositive:true,aboveSMA:true},
  "PWR":{ret12minus1:87.8,tsPositive:true,aboveSMA:true},
  "QCOM":{ret12minus1:-11.8,tsPositive:false,aboveSMA:false},
  "RHM.DE":{ret12minus1:-3.1,tsPositive:false,aboveSMA:false},
  "RTX":{ret12minus1:55.5,tsPositive:true,aboveSMA:true},
  "SCCO":{ret12minus1:104.5,tsPositive:true,aboveSMA:true},
  "SCHN.PA":{ret12minus1:14.2,tsPositive:true,aboveSMA:true},
  "SII":{ret12minus1:173.6,tsPositive:true,aboveSMA:true},
  "SNDK":{ret12minus1:1878.6,tsPositive:true,aboveSMA:true},
  "SOL":{ret12minus1:-43.7,tsPositive:false,aboveSMA:false},
  "TER":{ret12minus1:301.0,tsPositive:true,aboveSMA:true},
  "TMO":{ret12minus1:14.9,tsPositive:true,aboveSMA:true},
  "TSLA":{ret12minus1:31.8,tsPositive:true,aboveSMA:false},
  "TSM":{ret12minus1:104.7,tsPositive:true,aboveSMA:true},
  "TT":{ret12minus1:9.2,tsPositive:true,aboveSMA:true},
  "UEC":{ret12minus1:157.1,tsPositive:true,aboveSMA:true},
  "VICR":{ret12minus1:303.4,tsPositive:true,aboveSMA:true},
  "VRT":{ret12minus1:193.8,tsPositive:true,aboveSMA:true},
  "VST":{ret12minus1:65.0,tsPositive:true,aboveSMA:true},
  "WDC":{ret12minus1:519.1,tsPositive:true,aboveSMA:true},
  "WPM":{ret12minus1:57.5,tsPositive:true,aboveSMA:true},
  "XRP":{ret12minus1:-38.8,tsPositive:false,aboveSMA:false}
};

var RSI_DATA = {
  "000660.KS":64.4,
  "005930.KS":60.0,
  "AAPL":62.3,
  "AG":46.9,
  "ALB":58.4,
  "AMAT":63.5,
  "AMD":74.8,
  "AMKR":68.6,
  "AMZN":75.6,
  "ANET":67.6,
  "ARM":64.1,
  "ARRY":52.0,
  "ASM":62.2,
  "ASML":53.9,
  "AVGO":77.0,
  "B":49.6,
  "BE":71.6,
  "BNB":49.7,
  "BTC":61.1,
  "CCJ":60.0,
  "CEG":51.0,
  "CF":48.7,
  "CLS":73.4,
  "CLSK":64.1,
  "COHR":64.9,
  "CRDO":77.7,
  "CRWV":74.8,
  "DELL":57.2,
  "DHR":54.9,
  "ENR.DE":63.0,
  "ETH":60.4,
  "ETN":62.2,
  "FCX":68.3,
  "FN":67.4,
  "FNV":54.0,
  "FSLR":46.2,
  "GEV":68.0,
  "GLW":64.6,
  "GOOGL":71.3,
  "HAG.DE":50.6,
  "HL":46.8,
  "IFX.DE":62.7,
  "IREN":67.3,
  "ISRG":49.3,
  "KGH.WA":63.5,
  "KLAC":66.9,
  "LITE":56.4,
  "LLY":40.1,
  "LMT":43.5,
  "LNG":42.4,
  "LRCX":64.8,
  "MARA":65.9,
  "META":66.6,
  "MOD":57.5,
  "MP":59.8,
  "MRVL":81.9,
  "MSFT":67.3,
  "MU":63.2,
  "NEE":45.3,
  "NEM":50.1,
  "NVDA":69.8,
  "NXE":58.6,
  "NXT":46.1,
  "PAAS":54.0,
  "PLTR":48.4,
  "POWL":68.9,
  "PWR":62.1,
  "QCOM":54.5,
  "RHM.DE":45.2,
  "RTX":48.6,
  "SCCO":56.0,
  "SCHN.PA":62.2,
  "SII":51.1,
  "SNDK":65.7,
  "SOL":48.8,
  "TER":66.8,
  "TMO":65.8,
  "TSLA":57.6,
  "TSM":62.7,
  "TT":61.8,
  "UEC":58.5,
  "VICR":60.4,
  "VRT":65.2,
<<<<<<< HEAD
  "VST":52.8,
=======
>>>>>>> f70075d30d73c3d2e98303a1232b4d1fee3c7bda
  "WDC":70.1,
  "WPM":62.2,
  "XRP":49.8
};

function TechBadge({ ticker }) {
  var m = MOMENTUM_DATA[ticker];
  if (!m) return null;
  var ts = m.tsPositive;
  var sma = m.aboveSMA;

  var allMom = Object.values(MOMENTUM_DATA).map(function(x) { return x.ret12minus1; }).sort(function(a,b) { return b - a; });
  var qSize = Math.ceil(allMom.length / 5);
  var rank = allMom.indexOf(m.ret12minus1);
  if (rank === -1) { for (var i = 0; i < allMom.length; i++) { if (Math.abs(allMom[i] - m.ret12minus1) < 0.01) { rank = i; break; } } }
  var isTop = rank < qSize;
  var isBottom = rank >= allMom.length - qSize;

  var score = (ts ? 1 : 0) + (sma ? 1 : 0) + (isTop ? 1 : 0);
  var label, bg, color;
  if (score === 3) { label = "\u2605 3/3"; bg = "#22c55e18"; color = "#4ade80"; }
  else if (score === 2) { label = "\u2713 2/3"; bg = "#60a5fa15"; color = "#60a5fa"; }
  else if (score === 1) { label = "~ 1/3"; bg = "#eab30812"; color = "#facc15"; }
  else { label = "\u26A0 0/3"; bg = "#ef444415"; color = "#f87171"; }
  var qLabel = isTop ? " Q1" : isBottom ? " Q5" : "";
  var tip = "ACADEMIC TECH: " + score + "/3\nTS Mom: " + (ts ? "+" : "\u2212") + "\n10M SMA: " + (sma ? "\u25B2 above" : "\u25BC below") + "\n12-1M: " + (m.ret12minus1 > 0 ? "+" : "") + m.ret12minus1.toFixed(1) + "%" + (isTop ? " (TOP 20%)" : isBottom ? " (BOT 20%)" : " (MID)");
  return (
    <span title={tip} style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.06em", padding: "2px 5px", borderRadius: 3, background: bg, color: color, cursor: "help", fontFamily: "monospace" }}>
      {label}{qLabel}
    </span>
  );
}

const SECTORS = [
  {
    name: "Energia / zasilanie", icon: "\u26A1", subtitle: "Niedobór ~92 GW do 2030 (Eric Schmidt, Kongres USA)", color: "#E8593C",
    stocks: [
      { ticker: "BE", name: "Bloom Energy", price: 214, analyzed: true, fairValueLow: 160, fairValueHigh: 250, entryZone: 140, bargain: 100, expensive: 320, analystTarget: 231, signal: "yellow", conviction: "MEDIUM", note: "FV RAISE $140-210 (z $120-180). Oracle warrant 3.5M akcji + AEP 1GW deal ($2.65B). Nowy CFO Simon Edwards (ex-Groq). FY25 $2B (+37%), FY26E $3.1-3.3B (+58%). Backlog $20B. Beat 5/5Q", pe: "~140x fwd (FY26E EPS $1.42). P/S 13.4x vs sektor 2.7x. GAAP strata", revGrowth: "+37% FY25 ($2.02B). FY26E $3.1-3.3B (+58%). Q4 $777M (+36% r/r, beat +19%). Backlog $20B", moat: "SOFC fuel cells 60-65% sprawnosc (vs PEM 40-50%). 800V DC output = eliminuje inwertery w AI DC", dividend: "0%", hasDR: true, verdict: "FV RAISE sesja 7. Oracle warrant + AEP 1GW + CFO ex-Groq = AI DC pivot potwierdony. Ale P/E 140x, GAAP strata, insider selling $85M." },
      { ticker: "LNG", name: "Cheniere Energy", price: 257, analyzed: true, fairValueLow: 245, fairValueHigh: 320, entryZone: 220, bargain: 170, expensive: 335, analystTarget: 287, signal: "blue", conviction: "HIGH", note: "LEKKO DROGO (+5% vs FV mid). #2 LNG producer globalnie, #1 w USA (~50% mocy eksportowych).", pe: "Trailing 12.3x (GAAP EPS $24.13 — inflated by MTM). Forward ~18.7x", revGrowth: "+27% FY25 ($19.98B rekord). FY26E $22.95B (+15%). Q4 $5.45B (+23%). EBITDA", moat: "#2 LNG producer globalnie (#1 USA, ~50% mocy eksportowych). ~52 MTPA operacyjnych. 90%+ contracted", dividend: "0.75% ($2.22/rok, ~10% roczny", hasDR: true, verdict: "NOWA SPOLKA #64. Cheniere = #2 globalny producent LNG i KLUCZOWY ELEMENT naszego TSMC energy secu..." },
      { ticker: "NEE", name: "NextEra Energy", price: 91, analyzed: true, fairValueLow: 80, fairValueHigh: 110, entryZone: 72, bargain: 55, expensive: 130, analystTarget: 94, signal: "blue", conviction: "MEDIUM", note: "DEEP RESEARCH: W strefie FV. Najwiekszy operator czystej energii na swiecie. FY25 $27.4B (+11%). Adj EPS $3.71 (+8.2%). 76 GW capacity. Pipeline AI 20 GW (9 GW", pe: "~21.3x fwd. Premium za growth utility status", revGrowth: "+11% FY25 ($27.4B). FPL ~68% rev (regulowane). NEER ~30% (OZE+AI). Op margin", moat: "Najwiekszy operator czystej energii na swiecie: 76 GW capacity, 37.5 GW renewable. FPL: 6M+", dividend: "2.7% ($2.27/rok, target", hasDR: true, verdict: "NextEra = najwiekszy operator czystej energii na swiecie z unikalnym dwusilnikowym modelem (FPL r..." },
      { ticker: "CEG", name: "Constellation Energy", price: 295, analyzed: true, fairValueLow: 275, fairValueHigh: 400, entryZone: 245, bargain: 200, expensive: 450, analystTarget: 399, signal: "blue", conviction: "HIGH", note: "W strefie FV. Najwieksza flota nuklearna USA (22 GW, 21 reaktorow).", pe: "~32.5x fwd (FY26E EPS $11.65). ~26x na FY27E $13.64. Premium za", revGrowth: "+13% FY25 (est $25.5B). Q3 $6.57B (+7.2%). Post-Calpine FY26E $31B+. EPS CAGR", moat: "NAJWIEKSZA FLOTA NUKLEARNA USA: 22 GW, 21 reaktorow, 15 lokalizacji. Capacity factor 94.7% =", dividend: "0.56% ($1.71, target +10%/yr)", hasDR: true, verdict: "TMI RESTART OPOZNIONY DO 2030+ (FERC filing, bottleneck transmisyjny)." },
      { ticker: "GEV", name: "GE Vernova", price: 986, analyzed: true, fairValueLow: 700, fairValueHigh: 1000, entryZone: 600, bargain: 450, expensive: 1400, analystTarget: 1100, signal: "yellow", conviction: "MEDIUM", note: "DEEP RESEARCH: W strefie FV. Architekt transformacji energetycznej. Backlog $150B rekord. FY25 $38.5B rev. Power margin 16.9%. Electrification +28%. Prolec GE", pe: "~35x fwd (FY26E). Premium za backlog visibility i energy supercycle", revGrowth: "+12% FY25 ($38.5B). FY26E $44-45B. FY28E $56B (po Prolec GE). Power orders +78%", moat: "25-30% globalny udzial w ciezkich turbinach gazowych. Backlog $150B (4 lata rev). Prolec GE =", dividend: "~0.3%", hasDR: true, verdict: "GE Vernova = architekt energetycznej transformacji dla AI ery." },
      { ticker: "ETN", name: "Eaton Corporation", price: 395, analyzed: true, fairValueLow: 340, fairValueHigh: 430, entryZone: 300, bargain: 240, expensive: 500, analystTarget: 430, signal: "yellow", conviction: "HIGH", note: "DEEP RESEARCH: W strefie FV. Intelligent Power Management. DC orders +200% r/r. FY25 $27.5B (+10%). Electrical Americas margin 30%. Boyd Thermal $9.5B = liquid", pe: "~28x fwd (FY26E adj EPS $13.25). Fair premium za AI infra + aerospace", revGrowth: "+10% FY25 ($27.5B). Electrical Americas +21% Q4. DC orders +200% r/r. FY26E", moat: "63% rev z Ameryki Polnocnej = dominacja USA. Electrical Americas margin 30% (best-in-class). Boyd", dividend: "1.3% ($4.24/rok, 15+ lat", hasDR: true, verdict: "Eaton = 'strażnik energii' od grid do chip. DC orders +200% = demand bezprecedensowy." },
      { ticker: "PWR", name: "Quanta Services", price: 592, analyzed: true, fairValueLow: 450, fairValueHigh: 600, entryZone: 400, bargain: 320, expensive: 685, analystTarget: 580, signal: "yellow", conviction: "MEDIUM", note: "DEEP RESEARCH: Lekko drogo. Najwiekszy wykonawca infra elektrycznej na swiecie. FY25 $28.5B (+20%). Backlog $44B rekord. Beat 7/8Q. Fabryka transformatorow", pe: "~43x fwd adj (FY26E EPS $13.00). Trailing adj 53x. GAAP 84x. Premium", revGrowth: "+20% FY25 ($28.5B). Q4 $7.84B (+20%). FY26E $33.25-33.75B (+18%). Adj EPS", moat: "NAJWIEKSZY wykonawca infra elektrycznej na swiecie ($28.5B, 2x EMCOR). Backlog $44B rekord (+27%", dividend: "0.08% ($0.44/yr, payout 6%)", hasDR: true, verdict: "Quanta = #1 wykonawca infra elektrycznej globalnie. $28.5B rev, $44B backlog, 9 lat rekordowego E..." },
      { ticker: "POWL", name: "Powell Industries", price: 230, analyzed: true, fairValueLow: 143, fairValueHigh: 193, entryZone: 127, bargain: 100, expensive: 217, analystTarget: 142, signal: "red", conviction: "MEDIUM", note: "POWYZEJ FV High $193 (POST-SPLIT 3:1 od 6.IV.2026). +25% vs mid $168.", pe: "~33x fwd (FY26E EPS $5.57 post-split). Trailing 36.4x. Premium za", revGrowth: "+9% FY25 ($1.10B). Q4 $298M, GM 31.4% rekord. FY26E $1.23-1.25B (+11-13%)", moat: "Custom switchgear lider USA (medium voltage). ZERO DLUGU + $501M net cash = najczystszy bilans w", dividend: "0.2% ($1.08/yr, payout 7%)", hasDR: true, verdict: "DEEP RESEARCH UPGRADE + SPLIT 3:1 (6.IV.2026)." },
<<<<<<< HEAD
      { ticker: "VST", name: "Vistra Corp", price: 164, analyzed: true, fairValueLow: 155, fairValueHigh: 260, entryZone: 135, bargain: 110, expensive: 305, analystTarget: 235, signal: "blue", conviction: "HIGH", note: "DEEP RESEARCH sesja 8. #2 IPP w USA, 44 GW (rosnie do 50 GW po Cogentrix). Nuclear 6.5 GW (Comanche Peak, Beaver Valley, Perry, Davis-Besse). Meta 2,609 MW PPA (dostawy Q4 2026) + Amazon 1,200 MW PPA (Q4 2027 z Comanche Peak). Investment grade S&P+Fitch (III.2026). Cogentrix close H2 2026. Earnings 7.V. Spadek -25% z szczytu $219 (IX.2025)", pe: "Fwd EV/EBITDA 10.3x (na guide midpoint $7.2B FY26). Fwd P/E 18.4x (EPS $8.92). Trailing P/E 75x (zniekszt. hedgingiem)", revGrowth: "FY25 rev $17.7B (+3%). FY26E ~$19.6B (+11%), FY27E ~$23B (+17%). EBITDA FY25 $5.9B → FY26 guide $6.8-7.6B (+22% midpoint). FCFbG/share >$12.50 FY26, ~$16 FY27, $22-25 do 2030", moat: "#2 nuclear fleet w USA (6.5 GW vs CEG 22 GW). Najwyzszy FCF generation w grupie ($3.6B vs CEG $1.3B). Buyback $5.9B od 2021 = -30% akcji. Dual retail+wholesale = naturalny hedging. Dominacja ERCOT (45% floty) + PJM. Vistra Zero = world's largest BESS (Moss Landing 750 MW). Hedging 100% 2026, 84% 2027", dividend: "0.55% ($0.91/yr). $1.8B buyback authorization remaining. Cash gen >$10B do YE2027", hasDR: true, verdict: "DR sesja 8: BLUE z FV RAISE $155-260 (z $140-210). Konsensus analitykow $233-237 (Strong Buy 19/20). Bull case $293-318. Cogentrix NIE w guidance. RED FLAGS: insider selling $109M w 6mc (CEO $86M, ZERO buy >1 rok), Coatue/Lone Pine wyjscie, Altman Z 1.8 (strefa zagrozenia), debt/equity 4.0x. Komplementarny do CEG (nuclear pure-play) i NEE (renewables)" },
=======
>>>>>>> f70075d30d73c3d2e98303a1232b4d1fee3c7bda
    ],
  },
  {
    name: "Pamięć / HBM", icon: "\uD83E\uDDE0", subtitle: "Supercykl \u2014 wyprzedane do 2026+", color: "#378ADD",
    stocks: [
      { ticker: "MU", name: "Micron Technology", price: 456, analyzed: true, fairValueLow: 380, fairValueHigh: 520, entryZone: 340, bargain: 250, expensive: 700, analystTarget: 550, signal: "yellow", conviction: "HIGH", note: "DEEP RESEARCH: PONIZEJ FV Low. ⚠️ NEWS 27.03: 5 dni spadkow — Google TurboQuant (6x kompresja KV cache) = rynek boi sie peak HBM demand. ALE: FQ2-26 REKORD", pe: "~8x trailing FY26E EPS ~$52. Forward ~7-8x na FY27", revGrowth: "+196% FQ2-26 ($23.9B rekord!). FQ3 guide $33.5B (+40% QoQ!). FY26E >$100B", moat: "Jedyny US producer DRAM+NAND. HBM3E/HBM4 energooszczednosc 20-30% lepsza. 1-gamma DRAM lider. 122TB", dividend: "0.15% (podniesiona +30%)", hasDR: true, verdict: "Micron przeszedl metamorfoze z cyklicznego producenta pamieci w AI infrastructure cornerstone." },
      { ticker: "000660.KS", name: "SK Hynix (KRW)", price: 1155000, analyzed: true, fairValueLow: 900000, fairValueHigh: 1400000, entryZone: 780000, bargain: 600000, expensive: 2000000, analystTarget: 1540000, signal: "yellow", conviction: "MEDIUM", note: "W strefie FV. US IPO FILED (poufny wniosek, do $14B — re-rating z 5x na 12-15x P/E).", pe: "~5x fwd (2026E EPS ~107K KRW). Bull case P/E 3.7x", revGrowth: "+66% Q4 2025 (32.8T KRW rekord). +34% QoQ. FY25 97.1T KRW. 2026E consensus 166T", moat: "HBM #1 globalnie (55-60% share). MR-MUF packaging tech (lepsza od Samsung TC-NCF). Nvidia/TSMC 'AI", dividend: "~1.5% (3,000 KRW/akcje FY25 +", hasDR: true, verdict: "SK Hynix = HBM KING i najwazniejszy partner Nvidii w pamieci. Q4 marza 58.4% > TSMC." },
      { ticker: "005930.KS", name: "Samsung (KRW)", price: 216000, analyzed: true, fairValueLow: 185000, fairValueHigh: 250000, entryZone: 160000, bargain: 130000, expensive: 330000, analystTarget: 280000, signal: "blue", conviction: "MEDIUM", note: "Ponizej FV. Q1 2026 REKORD: zysk op.", pe: "~10x trailing, ~5.8-10x fwd. Najtanszy AI play na swiecie", revGrowth: "+11% FY25 (333T KRW). Q4 93.8T KRW rekord (+24% r/r). DS segment +33% QoQ", moat: "Jedyna firma = HBM + DRAM + NAND + Foundry 2nm GAA + Display OLED + Smartfony. 36% udzial DRAM", dividend: "~2% (9.8T KRW rocznie, policy", hasDR: true, verdict: "Samsung = najtanszy sposob na ekspozycje AI infrastructure. P/E 5.8-10x vs TSMC 20x, SK Hynix 15x..." },
      { ticker: "WDC", name: "Western Digital", price: 365, analyzed: true, fairValueLow: 260, fairValueHigh: 370, entryZone: 230, bargain: 170, expensive: 440, analystTarget: 380, signal: "yellow", conviction: "MEDIUM", note: "DEEP RESEARCH: W strefie FV. Pure-play HDD po SanDisk spin-off. Cloud 89% rev. Q2 FY26 $3.02B (+28%). GM 46.1% rekord. Build-to-order model = zero inventory", pe: "~17x fwd (FY26E EPS ~$8.20)", revGrowth: "+28% Q2 FY26 ($3.02B). Q3 guide $3.2B (+40% r/r). Cloud 89% rev. 215 EB shipped", moat: "Duopol HDD (62.8% Nearline share vs Seagate 37.2%). Build-to-order z 7 hyperscalerami. UltraSMR", dividend: "0%", hasDR: true, verdict: "WDC = pure-play AI storage infrastructure po SanDisk spin-off. 62.8% Nearline share w duopolu." },
      { ticker: "SNDK", name: "Sandisk", price: 892, analyzed: true, fairValueLow: 500, fairValueHigh: 750, entryZone: 420, bargain: 300, expensive: 1000, analystTarget: 850, signal: "red", conviction: "LOW", note: "DEEP RESEARCH: Gorna strefa FV. Pure-play NAND spinoff z WDC (luty 2025). Q2 FY26 $3.03B rev (+61%). GM 51.1% REKORD. EPS $6.20 vs $3.40 guide = +82% beat!", pe: "~12x trailing annualized (~$24 EPS run-rate). Forward zalezy od", revGrowth: "+61% Q2 FY26 ($3.03B vs $2.55B guide). DC segment +64% QoQ. ASP +35% QoQ", moat: "Pure-play NAND #3 globalnie (~12% share). BiCS8 218-layer (2Tb QLC die = najwyzsza gestosc). Kioxia", dividend: "0% (buyback $4B authorized)", hasDR: true, verdict: "SIGNAL UPGRADE red->yellow. SanDisk to phoenix — z niedowartosciowanej jednostki WDC do best-perf..." },
    ],
  },
  {
    name: "Sieć / łączność", icon: "\uD83D\uDD17", subtitle: "Kolejny bottleneck \u2014 DC switches + optical interconnects", color: "#1D9E75",
    stocks: [
      { ticker: "CRDO", name: "Credo Technology", price: 168, analyzed: true, fairValueLow: 90, fairValueHigh: 140, entryZone: 78, bargain: 55, expensive: 250, analystTarget: 180, signal: "red", conviction: "MEDIUM", note: "DEEP RESEARCH: W strefie FV. AEC KING — 73% udzial. Q3 FY26 $407M rev (+201%!). GM 68.6%. 88% rev od 3 klientow. Cardinal 1.6T DSP = next catalyst. 50% mniej", pe: "~25x fwd (FY27E). High-growth premium uzasadniony +201% rev growth", revGrowth: "+201% Q3 FY26 ($407M). +52% QoQ. FY26E $1.33B. FY27E >$2B. Z $61M (Q4 FY24) do", moat: "AEC (Active Electrical Cables) 73% global share. 50% mniej energii niz optyka. 224G SerDes na 3nm", dividend: "0%", hasDR: true, verdict: "Credo = AEC King z 73% share i najszybszym wzrostem w dashboardzie (+201% r/r)." },
      { ticker: "LITE", name: "Lumentum", price: 824, analyzed: true, fairValueLow: 750, fairValueHigh: 1000, entryZone: 600, bargain: 450, expensive: 1200, analystTarget: 940, signal: "blue", conviction: "MEDIUM", note: "FV RAISE $750-1000 (z $480-560). Nvidia $2B investment. CEO: 'sold out to 2028, 25-30% za popytem.' JPM PT $950, Mizuho $930. CPO penetracja 4%→30% do 2029", pe: "~45x fwd", revGrowth: "+65% Q2 r/r, Q3 guide $780-830M", moat: "Lasery EML i VCSEL dla AI DC, Nvidia $2B strategic deal, S&P 500 inclusion", hasDR: true, verdict: "Nvidia partnership zmienia firm\u0119 \u2014 ale rynek ju\u017c to wyceni\u0142. WS target poni" },
      { ticker: "COHR", name: "Coherent", price: 308, analyzed: true, fairValueLow: 165, fairValueHigh: 270, entryZone: 145, bargain: 115, expensive: 350, analystTarget: 270, signal: "red", conviction: "MEDIUM", note: "LEKKO DROGO. NVIDIA $2B investment + wielomiliardowy purchase commitment = walidacja strategiczna.", pe: "Fwd ~41x (FY26E non-GAAP EPS $5.45). FY27E $7.47 → fwd ~30x. Trailing", revGrowth: "FY25 $5.81B (+23.4%). Q2 FY26 $1.686B (+17.5% r/r). 8 kwartalow wzrostu z", moat: "JEDYNA SPOLKA Z TOP-5 POZYCJA WE WSZYSTKICH SEGMENTACH: transceivery (#3), VCSEL (#2, ~37%), 1.6T", dividend: "0%", hasDR: true, verdict: "Conviction LOW→MEDIUM." },
    { ticker: "FN", name: "Fabrinet", price: 686, analyzed: false, fairValueLow: 400, fairValueHigh: 650, entryZone: 350, bargain: 280, expensive: 800, analystTarget: 620, signal: "red", conviction: "MEDIUM", note: "STUB #84. Brak DR.", pe: "~28x trailing. Stabilny margin expansion", revGrowth: "~+20% r/r napedzany AI optical transceiver demand", moat: "Contract manufacturer #1 dla optical transceivers. Precision manufacturing (Thailand). Produkuje", dividend: "0%", hasDR: false, verdict: "Stub #84. Fabrinet = picks-and-shovels dla optyki. Unikalna pozycja contract manufacturer. Potrze..." },

      { ticker: "GLW", name: "Corning", price: 168, analyzed: true, fairValueLow: 100, fairValueHigh: 140, entryZone: 85, bargain: 65, expensive: 170, analystTarget: 140, signal: "red", conviction: "MEDIUM", note: "LEKKO DROGO. 'NERVOUS SYSTEM OF AI' — dominujacy dostawca swiatłowodów dla DC.", pe: "Fwd ~40x core (FY26E $3.10). Trailing ~55x core. FY27E $3.87 → fwd", revGrowth: "+19.1% FY25 GAAP ($15.63B), +13% core ($16.41B). Q4 $4.22B (+14%). Optical", moat: "WYNALAZCA SWIATŁOWODU (1970). Jedyna firma na swiecie od kompozycji szkla do gotowych systemow", dividend: "0.8% ($1.12/yr, $0.28/kw, bez", hasDR: true, verdict: "Conviction LOW→MEDIUM. Stary FV $100-130 przesuniety do $100-140 (Springboard $11B + Meta $6B + p..." },
      { ticker: "ANET", name: "Arista Networks", price: 154, analyzed: true, fairValueLow: 108, fairValueHigh: 155, entryZone: 95, bargain: 75, expensive: 200, analystTarget: 176, signal: "yellow", conviction: "HIGH", note: "W strefie FV. NOWA SPOLKA #65.", pe: "Fwd 33.7x (FY26E EPS $3.58). Trailing 43-47x. FY27E $4.32 → fwd 28x", revGrowth: "+28.6% FY25 ($9.006B). Q4 $2.488B (+25.3%). FY26 guide $11.25B (+25%)", moat: "#1 PRZELACZNIKI DC (21.3% share, wyprzedzil Cisco). JEDEN system operacyjny EOS (vs Cisco multi-OS", dividend: "0% ($787M buyback w Q1 2025)", hasDR: true, verdict: "NOWA SPOLKA #65. Arista = LIDER przelacznikow DC i AI networking z najsilniejszym track recordem ..." },
    ],
  },
  {
    name: "Chłodzenie / infrastruktura", icon: "\u2744\uFE0F", subtitle: "Krytyczne dla GPU nowej gen.", color: "#7F77DD",
    stocks: [
      { ticker: "TT", name: "Trane Technologies", price: 463, analyzed: true, fairValueLow: 380, fairValueHigh: 500, entryZone: 350, bargain: 300, expensive: 560, analystTarget: 480, signal: "yellow", conviction: "HIGH", note: "W strefie FV. HVAC lider z eksplodujacym DC cooling pipeline.", pe: "Fwd 27.5x (FY26E EPS $14.75). Trailing 31x. FY27E konsensus $17.32 →", revGrowth: "+7.5% FY25 ($21.32B). FY26 guide $23.1-23.4B (+8.5-9.5% reported, +6-7%", moat: "Globalny lider HVAC (100% climate focus — jedyny pure-play wsrod top 4). Backlog $7.8B rekord = 4+", dividend: "1.02% ($4.20/rok, +12% raise", hasDR: true, verdict: "Trane = najsilniej rosnacy quality compounder w HVAC z eksplodujacym DC cooling pipeline." },
      { ticker: "VRT", name: "Vertiv Holdings", price: 301, analyzed: true, fairValueLow: 250, fairValueHigh: 350, entryZone: 210, bargain: 160, expensive: 410, analystTarget: 350, signal: "yellow", conviction: "MEDIUM", note: "DEEP RESEARCH: W strefie FV. Grid-to-chip infrastructure king. Backlog $15B (+252% orders). 80% rev z DC. Q4 margin 23.2% (z 15.2% 8Q temu). S&P 500 inclusion", pe: "~46x fwd (FY26E EPS $6.02). Premium za AI infra pure-play", revGrowth: "+28% FY25 ($10.3B). Q4 $2.88B (+19%). FY26E $13.25-13.75B (+28%). Organic", moat: "80% rev z data center = najczystsza ekspozycja na AI infra. Backlog $15B (book-to-bill 2.9x)", dividend: "~0.1%", hasDR: true, verdict: "Vertiv = najczystsza AI infrastructure pure-play w dashboardzie (80% DC rev). Backlog $15B z book..." },
    { ticker: "VICR", name: "Vicor Corporation", price: 194, analyzed: true, fairValueLow: 130, fairValueHigh: 200, entryZone: 110, bargain: 85, expensive: 250, analystTarget: 209, signal: "yellow", conviction: "MEDIUM", note: "LEKKO DROGO (+9% vs mid $165). CHIP-LEVEL POWER DELIVERY pioneer — 48V-to-1V VPD bezposrednio przy GPU.", pe: "Trailing ~69x ($2.61 EPS). Fwd ~67x (FY26E $2.69). FY27E $4.73 → ~38x", revGrowth: "+26.1% FY25 ($452.7M) ale $45M jednorazowa ugoda = organic ~$408M (+12-15%)", moat: "PIONIER VPD (Vertical Power Delivery) — moduly zasilania bezposrednio pod procesorem. Opatentowana", dividend: "0%", hasDR: true, verdict: "SPOLKA #83. Vicor = pioneer chip-level VPD z unikalna technologia i fortress balance sheet (zero ..." },

      { ticker: "SCHN.PA", name: "Schneider Electric (EUR)", price: 266, analyzed: true, fairValueLow: 220, fairValueHigh: 340, entryZone: 220, bargain: 180, expensive: 380, analystTarget: 294, signal: "blue", conviction: "HIGH", note: "PONIZEJ FV! Grid-to-Chip lider = najbardziej zintegrowany stos technologiczny w AI power+cooling. FY25 40.2B EUR (+9% organic), FCF 4.64B EUR (111%", pe: "Fwd 22.7x (FY26E EPS 9.75 EUR). Trailing 32.2x. Tanszy niz ETN (28x)", revGrowth: "+9% FY25 organic (40.22B EUR). FY26 guide +7-10% organic. Long-term CAGR", moat: "Grid-to-Chip = JEDYNA firma oferujaca kompletny stos od rozdzielnicy SN po chlodzenie", dividend: "1.83% (4.20 EUR, rosnaca)", hasDR: true, verdict: "SIGNAL CHANGE blue->green. Schneider Electric = Grid-to-Chip lider z NAJBARDZIEJ ZINTEGROWANYM st..." },
<<<<<<< HEAD
      { ticker: "ENR.DE", name: "Siemens Energy (EUR)", price: 171, analyzed: true, fairValueLow: 155, fairValueHigh: 220, entryZone: 120, bargain: 90, expensive: 260, analystTarget: 166, signal: "blue", conviction: "HIGH", note: "DR sesja 8. FV RAISE €155-220 (z €150-210). Backlog rekord €146B. Q1 FY26 PbSI €1.16B (2.4x r/r), zysk netto €746M (~3x). Gamesa strata tylko -€46M (z -€374M!). 60% zamowien turbin gaz. od DC operators. FY28 margin target PODNIESIONY 10-12%→14-16%. Earnings 12.V", pe: "Fwd ~40x (FY26E EPS €4.11). Trailing ~78x. EV/EBITDA fwd ~18-20x. PEG 0.77", revGrowth: "+15.2% FY25 (€39.1B). Q1 FY26 €10.3B. FY26 guide wzrost 11-13%, marza PbSI 9-11% (z 6% FY25!), zysk netto €3-4B, FCF €4-5B. FY28 cel marzy 14-16% = EBITDA €8-9B", moat: "GRID TECHNOLOGIES = transformatory + HVDC (lead time 128 tyg = 2.5 roku!). Deficyt 30% w USA. Gas Services wyprzedane do 2028, FY29 'zapelnia sie szybko'. Grid margin 19.9% (z 10.2% 5Q temu). JEDYNA firma gen+przesyl w jednym portfelu. $1B US expansion (Charlotte NC 57 LPT/rok, Mississippi)", dividend: "0.42% (€0.70/yr, pierwsza od 4 lat). Buyback €6B + div = €10B zwrotu kapitalu do FY2028. Transza €2B uruchomiona 4.III.2026, odkupiono ~7.3M akcji", hasDR: true, verdict: "DR sesja 8. ENR.DE = NAJLEPSZA transformacja DAX (€7→€171). BlackRock up 5.6%→7.83%. ALE: Siemens AG redukuje 15%→5.5% (chce dalej), insider selling netto -€2.7M, P/E 40x fwd, Morningstar 81% premium. Gamesa break-even FY26 MUSI sie zrealizowac. Barclays bear $89" },
=======
      { ticker: "ENR.DE", name: "Siemens Energy (EUR)", price: 171, analyzed: true, fairValueLow: 150, fairValueHigh: 210, entryZone: 120, bargain: 90, expensive: 250, analystTarget: 166, signal: "blue", conviction: "HIGH", note: "DEEP RESEARCH: W strefie FV. JEDYNA firma laczaca generacje (Gas Services) i przesyl (Grid Technologies). Backlog 146B EUR rekord. 60% zamowien turbin gazowych od DC operators. Grid margin 19.9%. Gamesa strata -46M (z -374M r/r) → cel break-even FY2026", pe: "Fwd ~40x (FY26E EPS €4.11). Trailing ~78x. EV/EBITDA fwd ~18-20x. PEG 0.77", revGrowth: "+15.2% FY25 (€39.1B). Q1 FY26 €10.3B, PbSI €1.16B (marza 11.3%, 2.4x r/r). FY26 guide €43.7B (+11-13%). Zysk netto FY26E €3-4B", moat: "GRID TECHNOLOGIES = transformatory + HVDC (lead time 128 tyg = 2.5 roku!). Deficyt 30% w USA. Gas Services: turbiny gazowe wyprzedane do 2028. Jedyna firma gen+przesyl w jednym portfelu", dividend: "0.42% (€0.70/yr, pierwsza od 4 lat). Buyback 6B EUR + div = 10B EUR do FY2028", hasDR: true, verdict: "DEEP RESEARCH sesja 8. Siemens Energy = NAJLEPSZA transformacja w historii DAX (€7→€171). Backlog 146B, net cash €8B, Grid margin 20%, DC exposure 60%. Risk: P/E 40x, Gamesa break-even MUSI się zrealizować, Siemens AG sprzedaje." },
>>>>>>> f70075d30d73c3d2e98303a1232b4d1fee3c7bda
      { ticker: "CLS", name: "Celestica", price: 382, analyzed: true, fairValueLow: 200, fairValueHigh: 300, entryZone: 175, bargain: 140, expensive: 380, analystTarget: 105, signal: "red", conviction: "LOW", note: "Brak DR. AI server manufacturer/integrator. Buduje raki dla hyperscalerow. Jensen: 200 pods/week = Celestica builds them. HPS segment +50%.", pe: "~22x fwd", revGrowth: "+20% FY25E ($10B+)", moat: "AI server/rack assembly dla hyperscalerow. HPS segment (DC) = 65%+ rev. Dell competitor w AI", dividend: "0%", hasDR: true, verdict: "Brak deep research. Stub entry. Buduje fizyczne raki AI — Jensen's 200 pods/week vision." },
    { ticker: "MOD", name: "Modine Manufacturing", price: 238, analyzed: false, fairValueLow: 150, fairValueHigh: 280, entryZone: 130, bargain: 100, expensive: 350, analystTarget: 260, signal: "yellow", conviction: "MEDIUM", note: "STUB #85. Brak DR. LIQUID COOLING specialist dla high-density AI racks. Inny wektor niz VRT (broader HVAC) i TT (commercial). Skoncentrowany na thermal", pe: "~25x trailing. Margin expansion z AI cooling mix shift", revGrowth: "~+15-20% r/r napedzany AI DC liquid cooling demand", moat: "Liquid cooling expertise: direct-to-chip, rear door heat exchangers, CDUs. AI GPU density", dividend: "~0.3%", hasDR: false, verdict: "Stub #85. Modine = liquid cooling specialist. GPU power density wymusza liquid cooling. Potrzebna..." },

{ ticker: "DELL", name: "Dell Technologies", price: 177, analyzed: true, fairValueLow: 140, fairValueHigh: 200, entryZone: 115, bargain: 90, expensive: 250, analystTarget: 170, signal: "yellow", conviction: "MEDIUM", note: "W strefie FV (+1% vs mid). #1 AI SERVER OEM NA SWIECIE (10% global server share, $43B AI backlog!).", pe: "Fwd 13.3x non-GAAP (FY27 guide $12.90). Trailing 16.7x. FY28E", revGrowth: "+19% FY2026 ($113.5B). Q4 $33.4B (+39.4% r/r!) = rekord. AI serwery FY2026:", moat: "#1 AI SERVER OEM globalnie (IDC 10.0% share, przed SMCI 9.5%). BACKLOG AI $43B = bezprecedensowy", dividend: "1.47% ($2.52/yr, +20% r/r", hasDR: true, verdict: "SPOLKA #70. Dell = #1 AI server OEM na swiecie z $43B backlogu i FY2027 guide $140B (+23%)." },
,
    ],
  },
  {
    name: "Packaging / sprzęt semicon", icon: "\u2699\uFE0F", subtitle: "CoWoS wyprzedany \u2014 limit GPU", color: "#BA7517",
    stocks: [
      { ticker: "TSM", name: "TSMC", price: 375, analyzed: true, fairValueLow: 320, fairValueHigh: 420, entryZone: 280, bargain: 220, expensive: 520, analystTarget: 480, signal: "yellow", conviction: "HIGH", note: "Q1 revenue $35.7B (+35.1% r/r) REKORD, marzec +45.2%. Goldman PT $550. Full earnings 16.IV. Section 232 14.IV risk. Arizona $165B buildout.", pe: "~22x fwd (CY26E). Fair premium za monopol foundry", revGrowth: "+36% FY25 ($122.4B / 3.81T NTD). Q4 $33.7B (+26%). FY26E +30%. N3 = 28% rev (z", moat: "72% pure-play foundry share (90%+ w advanced nodes). N2/N3/N5 monopol. CoWoS packaging (NVDA 60%", dividend: "~1.3% (rosnaca, 23 NTD/akcje", hasDR: true, verdict: "TSMC = CENTRALNY UKLAD NERWOWY globalnej cywilizacji technicznej." },
      { ticker: "LRCX", name: "Lam Research", price: 265, analyzed: true, fairValueLow: 200, fairValueHigh: 280, entryZone: 175, bargain: 140, expensive: 325, analystTarget: 280, signal: "yellow", conviction: "HIGH", note: "DEEP RESEARCH: W strefie FV. Lider trawienia (45% share) i osadzania. CY25 >$20B rev (+30%). GM 49.7%. GAA = +20% etch steps per wafer. HBM4 TSV = LRCX", pe: "~22x fwd (CY26E EPS ~$5.80). Fair dla structural growth", revGrowth: "+22% Q2 FY26 ($5.34B). CY25 >$20B (+30%). Q3 guide $5.7B. 10 kwartalow wzrostu", moat: "45% global etch share (#1). Trawienie HAR (High-Aspect-Ratio) = monopol na 3D NAND i HBM TSV", dividend: "0.8%", hasDR: true, verdict: "Lam Research = 'cyfrowy kowal' ery AI. 45% etch share, dominacja w HBM TSV i GAA trawienia." },
      { ticker: "AMAT", name: "Applied Materials", price: 394, analyzed: true, fairValueLow: 310, fairValueHigh: 420, entryZone: 270, bargain: 220, expensive: 470, analystTarget: 430, signal: "yellow", conviction: "HIGH", note: "DEEP RESEARCH: W strefie FV. Najszersze portfolio WFE (~19% share). Q1 FY26 $7.01B beat. DRAM rekord 34% miksu (HBM!). Molibden ALD = 'straznik bramy' 2nm. AGS", pe: "~37x fwd (FY26E EPS ~$11.11). Premium za szerokosc portfolio", revGrowth: "+4% FY25 ($28.4B). Q1 FY26 $7.01B beat $6.85B. DRAM 34% miksu (rekord). FY26", moat: "~19% WFE share = najszersze portfolio (deposition+etch+metrology+modification). Molibden ALD", dividend: "0.7%", hasDR: true, verdict: "Applied Materials = 'inzynier materialowy' ery AI. Najszersze portfolio WFE (19% share), obecny n..." },
      { ticker: "ASM", name: "ASM Intl (EUR)", price: 754, analyzed: true, fairValueLow: 480, fairValueHigh: 560, entryZone: 480, bargain: 400, expensive: 700, analystTarget: 650, signal: "red", conviction: "LOW", note: "~5% powy\u017cej FV. ALD technology leader. Kluczowy dla 2nm i HBM. Amsterdam listed.", pe: "~35x fwd", revGrowth: "+20% rev 2026E", moat: "Monopol ALD (atomic layer deposition) \u2014 kluczowy dla 2nm i advanced packaging", hasDR: true, verdict: "Niszowy monopolista w ALD \u2014 bez ASM nie ma 2nm chip\u00f3w. Premium uzasadniony pozycj\u0105." },
      { ticker: "TER", name: "Teradyne", price: 365, analyzed: true, fairValueLow: 220, fairValueHigh: 340, entryZone: 190, bargain: 155, expensive: 400, analystTarget: 314, signal: "red", conviction: "MEDIUM", note: "W strefie FV. AI ZMIENILO DNA SPOLKI TESTOWEJ — z cyklicznego ATE na >60% AI revenue.", pe: "Fwd ~44x (FY26E non-GAAP EPS $6.24). Trailing 85-88x GAAP. FY27E", revGrowth: "+13.1% FY25 ($3.19B). Q4 $1.083B (+43.8% r/r, +40.8% QoQ!). FY26E $4.18B", moat: "#2 ATE GLOBALNIE (~25-30% share). Duopol Advantest-Teradyne = ~80% rynku testerow. ATE TAM 2025", dividend: "0.18% ($0.52/yr, 12 lat bez", hasDR: true, verdict: "TER = picks-and-shovels na KAZDY chip AI z bezprecedensowa transformacja (AI z 10% do >70% rev w ..." },
      { ticker: "AMKR", name: "Amkor Technology", price: 60, analyzed: true, fairValueLow: 35, fairValueHigh: 50, entryZone: 32, bargain: 25, expensive: 60, analystTarget: 53, signal: "red", conviction: "LOW", note: "W strefie FV. NVDA packaging partner. $7B Arizona fab. Q4 beat 57%.", pe: "~18x fwd", revGrowth: "+6% FY25 ($6.7B)", moat: "#2 OSAT, NVDA partner, $7B Arizona, advanced packaging", dividend: "0.8%", hasDR: true, verdict: "Tani picks-and-shovels packaging. NVDA + Arizona = catalysty. Przy ~$45 w strefie FV. Wejście z M..." },
<<<<<<< HEAD
      { ticker: "ASML", name: "ASML (EUR)", price: 1227, analyzed: true, fairValueLow: 1100, fairValueHigh: 1400, entryZone: 900, bargain: 700, expensive: 1800, analystTarget: 1400, signal: "blue", conviction: "HIGH", note: "Q1 BEAT: rev 8.77B EUR (+3.2% vs cons), NI 2.76B (+10.4%), GM 53% (high end). FY26 RAISED 36-40B (z 34-39B). Memory 51% sprzedazy (vs 30% Q4!). China 19% (z 36%). MATCH Act risk. Bookings nie ujawnione (nowa polityka). Low-NA EUV: 60 szt 2026, 80 szt 2027", pe: "~50x trailing / ~30x fwd (FY26E EPS ~41 EUR). Premium za monopol", revGrowth: "+13% Q1 r/r (8.77B EUR). FY26E 36-40B EUR (raised +4%). FY25 32.7B. Low-NA 60→80 ramp", moat: "100% MONOPOL na EUV litografie. Jedyny dostawca na swiecie. 94% rynku litografii ogolnie. 30 lat +", dividend: "~0.6% (7.50 EUR/rok, +17% raise)", hasDR: true, verdict: "Q1 BEAT + guidance raise. Fouquet: 'demand outpacing supply'. Memory pivot 51% = HBM thesis confirmed. MATCH Act = binary risk na China DUV." },
=======
      { ticker: "ASML", name: "ASML (EUR)", price: 1230, analyzed: true, fairValueLow: 1050, fairValueHigh: 1400, entryZone: 900, bargain: 700, expensive: 1800, analystTarget: 1500, signal: "yellow", conviction: "HIGH", note: "DEEP RESEARCH: W strefie FV. ABSOLUTNY MONOPOL na EUV. 100% udzial. FY25 32.7B EUR (+16%). Q4 bookings 13.2B EUR rekord. Backlog 38.8B EUR. High-NA EXE:5200 =", pe: "~37x trailing / ~30x fwd (FY26E). Premium za monopol", revGrowth: "+16% FY25 (32.7B EUR). Q4 bookings 13.2B EUR rekord (+86% QoQ). FY26E 34-39B", moat: "100% MONOPOL na EUV litografie. Jedyny dostawca na swiecie. 94% rynku litografii ogolnie. 30 lat +", dividend: "~0.8% (6.40 EUR/rok)", hasDR: true, verdict: "ASML = JEDYNY dostawca EUV na swiecie. 100% monopol." },
>>>>>>> f70075d30d73c3d2e98303a1232b4d1fee3c7bda
      { ticker: "KLAC", name: "KLA Corporation", price: 1748, analyzed: true, fairValueLow: 1200, fairValueHigh: 1600, entryZone: 1050, bargain: 900, expensive: 1800, analystTarget: 300, signal: "red", conviction: "HIGH", note: "Brak DR. 54% share wafer inspection/metrology. Pojawia sie w AMAT DR jako dominujacy rywal. Zamyka WFE coverage.", pe: "~25x fwd", revGrowth: "+15% FY25E", moat: "54% share inspekcja/metrologia wafli. Monopol w defect inspection. Wysokie marze 62% GM", dividend: "0.8%", hasDR: true, verdict: "Brak deep research. Stub entry. Zamyka WFE coverage obok ASML, LRCX, AMAT." },
      { ticker: "ARM", name: "Arm Holdings", price: 159, analyzed: true, fairValueLow: 115, fairValueHigh: 170, entryZone: 100, bargain: 80, expensive: 240, analystTarget: 165, signal: "yellow", conviction: "MEDIUM", note: "DEEP RESEARCH + UPDATE 4.IV: W strefie FV. Monopol IP procesorowego (99% mobile, 21-25% DC).", pe: "~65-82x fwd NTM (FY26E EPS $1.76). ~66x FY27E ($2.17). Trailing GAAP", revGrowth: "+24% FY25 ($4.01B rekord). FY26E $4.96B (+23.7%). FY27E $5.98B (+20.6%). Q4", moat: "99% smartfonow, 94% automotive OEMs, 21-25% serwerow (IDC). Architektura ARM w KAZDYM chipie AI:", dividend: "0%", hasDR: true, verdict: "DEEP RESEARCH UPGRADE + AGENTIC CPU UPDATE 4.IV. ARM = monopol IP procesorowego z najwyzsza marza..." },
,
    ],
  },
  {
    name: "Semiconductors", icon: "\uD83D\uDC8E", subtitle: "Chipy AI, mobile SoC, edge computing", color: "#D4537E",
    stocks: [
      { ticker: "QCOM", name: "Qualcomm", price: 133, analyzed: true, fairValueLow: 150, fairValueHigh: 210, entryZone: 130, bargain: 100, expensive: 250, analystTarget: 200, signal: "green", conviction: "HIGH", note: "PONIZEJ FV! ⚠️ NEWS 27.03: Bernstein downgrade do 'market perform' PT $140 (20/32 analitykow hold lub gorszy). ALE: zarzad odpowiada buybackiem $20B (15% mkt", pe: "~12-14x fwd (FY26E EPS ~$11.50). Najtanszy quality semicon w", revGrowth: "+14% FY25 ($44.3B rekord). Q1 FY26 $12.3B rekord. Q2 guide $10.2-11.0B", moat: "Snapdragon 8 Elite (lider mobile AI), QTL licensing 70%+ EBT margin (patent royalties nawet bez", dividend: "2.0% ($3.40/rok)", hasDR: true, verdict: "QCOM to NAJWIEKSZA VALUE PLAY w 68-spolkowym dashboardzie." },
      { ticker: "NVDA", name: "Nvidia", price: 199, analyzed: true, fairValueLow: 170, fairValueHigh: 230, entryZone: 150, bargain: 110, expensive: 350, analystTarget: 280, signal: "blue", conviction: "HIGH", note: "W strefie FV. ⚠️ NEWS 27.03: -4.16% na risk-off.", pe: "~24x fwd (FY27E EPS ~$8.75), ~20x na CY27", revGrowth: "+65% FY26 ($215.9B). Q4 $68.1B (+75% DC r/r). FQ1-27 guide $78B. FY27E >$380B", moat: "85-90% AI accelerator share. CUDA 4M devs (20 lat moat). NVLink/InfiniBand = zamkniety ekosystem", dividend: "0.03%", hasDR: true, verdict: "Nvidia to NAJWAZNIEJSZA FIRMA TECH NA SWIECIE. FY26 $215.9B (+65%) z GM 75% na HARDWARE to bezpre..." },
      { ticker: "AMD", name: "AMD", price: 258, analyzed: true, fairValueLow: 190, fairValueHigh: 280, entryZone: 170, bargain: 130, expensive: 380, analystTarget: 260, signal: "yellow", conviction: "MEDIUM", note: "DEEP RESEARCH: W strefie FV. FY25 $34.6B (+34%). DC $5.4B/Q rekord (+39% r/r). x86 server share >41% rekord. MI325X = Nvidia alternative. PEG 0.70 = 44%", pe: "~35x fwd (FY26E EPS ~$5.80). PEG 0.70 = tanio vs growth", revGrowth: "+34% FY25 ($34.6B). DC +39% ($5.4B/Q rekord). Client +34%. Q1 FY26 guide $9.8B", moat: "x86 server revenue share >41% (rekord, z 28% 2 lata temu). EPYC Turin = TCO leader. MI325X 288GB", dividend: "0%", hasDR: true, verdict: "AMD = 'druga sila' w AI po NVDA + dominacja x86 (>41% server share)." },
      { ticker: "AVGO", name: "Broadcom", price: 397, analyzed: true, fairValueLow: 350, fairValueHigh: 480, entryZone: 310, bargain: 250, expensive: 580, analystTarget: 480, signal: "blue", conviction: "HIGH", note: "FV RAISE $350-480 (z $290-400). 5+ XPU customers: Google TPU 2031, Meta MTIA multi-GW (14.IV), Anthropic 3.5GW, +2 undisclosed. $73B custom AI silicon backlog. JPM PT $500, GS PT $480", pe: "~28x fwd (FY27E EPS ~$14.40). PEG 0.44 = niedowartosciowany vs growth", revGrowth: "+29% Q1 FY26 ($19.3B). AI rev +106% ($8.4B). Q2 guide $22B (+47% r/r). FY27E", moat: "Custom ASIC #1 (60%→70% share): Google TPU, Meta MTIA, OpenAI Titan, Anthropic $11B. Tomahawk 6 Ethernet", dividend: "0.84% ($2.60/rok, 15 lat", hasDR: true, verdict: "FV RAISE sesja 8. Meta MTIA multi-GW (14.IV) = 5. potwierdzony XPU customer. $73B backlog. JPM $500." },
      { ticker: "MRVL", name: "Marvell Technology", price: 135, analyzed: true, fairValueLow: 105, fairValueHigh: 145, entryZone: 90, bargain: 70, expensive: 180, analystTarget: 150, signal: "yellow", conviction: "MEDIUM", note: "FV RAISE $105-145 (z $88-115). Nvidia $2B investment + NVLink Fusion integration. Barclays OW PT $150. DC rev $6.1B (+46.5%), 74% total. Optyczne porty 2x w", pe: "~23x fwd (FY27E EPS ~$3.80), ~17x FY28E ($5+)", revGrowth: "+42% FY26 ($8.2B rekord), Q4 $2.22B. FY27E ~$11B (+34%), FY28E ~$15B", moat: "1.6T/3.2T optyczne DSP (lider), Custom ASIC (AWS Trainium/Inferentia), Celestial AI (photonic", dividend: "0.3%", hasDR: true, verdict: "Marvell = system nerwowy AI DC. Nie CPU/GPU ale WSZYSTKO co je laczy: optyka 1.6T/3.2T, switching..." },
    ],
  },
  {
    name: "Solar Energy", icon: "\u2600\uFE0F", subtitle: "Solar trackery \u2014 backbone utility-scale PV", color: "#F59E0B",
    stocks: [
      { ticker: "NXT", name: "Nextpower (ex-Nextracker)", price: 110, analyzed: true, fairValueLow: 100, fairValueHigh: 110, entryZone: 95, bargain: 80, expensive: 130, analystTarget: 108, signal: "yellow", conviction: "LOW", note: "~8% powy\u017cej FV. Lider solar tracker\u00f3w, zero debt, $953M cash. Beta 2.41!", pe: "~27x fwd", revGrowth: "+34% r/r Q3", moat: "Najwi\u0119kszy solar tracker globalnie, platforma eBOS+software", hasDR: true, verdict: "Lider z fortecy bilansem. Ale przy ~$116 cena jest ~8% powy\u017cej fair value." },
      { ticker: "ARRY", name: "Array Technologies", price: 8, analyzed: true, fairValueLow: 8, fairValueHigh: 12, entryZone: 6, bargain: 4, expensive: 16, analystTarget: 14, signal: "blue", conviction: "LOW", note: "DEEP RESEARCH: Ponizej FV. Solar tracker #2 globalnie. FY25 $1.28B (+40%). Backlog $2.2B. 100% US content = IRA play. AI DC power demand.", pe: "~10x fwd (FY26E EPS $0.65-0.75)", revGrowth: "+40% FY25 ($1.28B). FY26E $1.4-1.5B (+10-17%). Backlog $2.2B = 18 mcy", moat: "Solar tracker #2 globalnie (15-20% share), DuraTrack centralny naped (nizsze O&M), 100% US", dividend: "0%", hasDR: true, verdict: "ARRY to asymetryczny bet na US solar + AI DC power demand. Przy $7 i FV $8-12 = 15-70% upside." },
      { ticker: "FSLR", name: "First Solar", price: 195, analyzed: true, fairValueLow: 130, fairValueHigh: 250, entryZone: 110, bargain: 80, expensive: 290, analystTarget: 220, signal: "yellow", conviction: "MEDIUM", note: "DEEP RESEARCH: Ponizej FV Mid. Jedyny US solar manufacturer. FY25 $5.2B (+24%), EPS $14.21. Backlog 50.1 GW ($15B). Net cash $2.4B. Fwd P/E 7.7x = historycznie", pe: "~7.7x fwd (FY26E EPS $25.10). Historycznie najnizszy. Trailing 13.6x", revGrowth: "+24% FY25 ($5.2B rekord). 17.5 GW shipped. FY26E $4.9-5.2B (flat — rozczarowalo", moat: "JEDYNY duzy producent CdTe na swiecie. Jedyny znaczacy US solar manufacturer. 25-30% udzial USA", dividend: "0%", hasDR: true, verdict: "First Solar = jedyny US solar manufacturer z CdTe technologia. FY25 rekord $5.2B, backlog 50.1 GW..." },
    ],
  },
  {
    name: "Mining / surowce AI", icon: "\u26CF\uFE0F", subtitle: "Mied\u017a i lit \u2014 krytyczne dla elektyfikacji i baterii", color: "#C2410C",
    stocks: [
      { ticker: "SCCO", name: "Southern Copper", price: 189, analyzed: true, fairValueLow: 145, fairValueHigh: 220, entryZone: 125, bargain: 105, expensive: 260, analystTarget: 200, signal: "yellow", conviction: "HIGH", note: "W strefie FV. Najnizszy cash cost w branzy ($0.58/lb, Q4 $0.52!).", pe: "~22x fwd. Premium za lowest cost + largest reserves", revGrowth: "+17% FY25 ($13.4B rekord). Q4 $3.87B (+39% r/r). Srebro +15%, cynk +36%. FY26", moat: "NAJNIZSZY cash cost na swiecie: $0.58/lb (Q4 $0.52!). vs FCX $2.22/lb. EBITDA margin 58% =", dividend: "~2.1% (rosnaca z FCF)", hasDR: true, verdict: "Southern Copper = najbardziej efektywny producent miedzi na swiecie. Cash cost $0.58/lb (Q4 $0.52..." },
      { ticker: "ALB", name: "Albemarle", price: 185, analyzed: true, fairValueLow: 130, fairValueHigh: 210, entryZone: 110, bargain: 85, expensive: 260, analystTarget: 190, signal: "yellow", conviction: "MEDIUM", note: "W STREFIE FV (+4% vs mid $170). #2 producent litu (16% share).", pe: "Fwd adj ~22x (FY26E $2.74). GAAP ~131x (strata FY25). FY27E $6.29 →", revGrowth: "FY25 $5.14B. FY26 guide $4.1-7.8B (scenariuszowy). Q4 25 +15.9% r/r = pierwszy", moat: "#2 producent litu (16% share). Salar de Atacama do 2043. Greenbushes JV 49%. Silver Peak =", dividend: "0.93% ($1.62/yr, 31 lat)", hasDR: true, verdict: "Albemarle = #2 producent litu z FEOC/IRA premium i Salar do 2043. Ceny litu podwoily sie, adj EPS..." },
      { ticker: "FCX", name: "Freeport-McMoRan", price: 69, analyzed: true, fairValueLow: 48, fairValueHigh: 72, entryZone: 42, bargain: 32, expensive: 85, analystTarget: 68, signal: "yellow", conviction: "HIGH", note: "W strefie FV. #1 publiczny copper miner z 70% udzialu w rafinowanej miedzi USA = STRATEGICZNY asset w erze AI+near-shoring.", pe: "Fwd 18.1x (FY26E EPS $2.87 midpoint). FY27E $3.50+ przy pelnym", revGrowth: "+1.8% FY25 ($25.9B). Q2 2025 $7.58B rekord (+14.5%). FY26 guide: Cu 3.4B lbs", moat: "JEDYNY duzy pure-play copper miner notowany w USA. 70% US REFINED COPPER SHARE = near-shoring moat", dividend: "1.06% ($0.60/rok base +", hasDR: true, verdict: "SIGNAL CHANGE yellow->blue." },
      { ticker: "KGH.WA", name: "KGHM (PLN)", price: 325, analyzed: true, fairValueLow: 280, fairValueHigh: 370, entryZone: 240, bargain: 190, expensive: 420, analystTarget: 313, signal: "blue", conviction: "MEDIUM", note: "FV RAISE 280-370 (z 235-310). FY25: EBITDA 10.3 mld PLN (3x w 2 lata!), zysk 3.69 mld (+28%), Sierra Gorda +96% r/r = game changer. JPM OW PT 265. Miedz: AI DC", pe: "Trailing 14.1x (FY25 EPS 18.44 PLN). Fwd ~13-14x (FY26E EPS ~19 PLN)", revGrowth: "+3% FY25 (36.37B PLN). Q4 rekord 10.50B PLN (+22%). EBITDA 10.28B PLN (+22%", moat: "JEDYNY duzy europejski producent miedzi. #2 SILVER PRODUCER NA SWIECIE (1,347 ton, Jordi: silver =", dividend: "~2% (oczekiwana 4-6 PLN/akcje", hasDR: true, verdict: "SIGNAL CHANGE red->blue." },
      { ticker: "MP", name: "MP Materials", price: 60, analyzed: true, fairValueLow: 38, fairValueHigh: 68, entryZone: 30, bargain: 22, expensive: 95, analystTarget: 80, signal: "yellow", conviction: "MEDIUM", note: "W strefie FV. JEDYNY zachodni mine-to-magnet producent ziem rzadkich.", pe: "Fwd ~73x (FY26E EPS $0.71). FY27E $1.25 → fwd ~37x. P/S 42x TTM =", revGrowth: "+10% FY25 ($224.4M). ALE mix FUNDAMENTALNIE zmieniony: koncentrat z 71% do 0%", moat: "JEDYNY ZACHODNI MINE-TO-MAGNET PRODUCER: Mountain Pass = jedyna dzialajaca kopalnia RE w USA", dividend: "0%", hasDR: true, verdict: "MP Materials = JEDYNY zachodni mine-to-magnet producer ziem rzadkich w swiecie gdzie Chiny kontro..." },
      { ticker: "NEM", name: "Newmont Corporation", price: 113, analyzed: true, fairValueLow: 105, fairValueHigh: 141, entryZone: 90, bargain: 70, expensive: 170, analystTarget: 134, signal: "blue", conviction: "HIGH", note: "PONIZEJ FV! #1 gold miner na swiecie. FY25 $22.7B rev (+21.3%), EBITDA $13.48B, FCF $7.3B REKORD.", pe: "Fwd 11.6x (FY26E EPS $8.79). Trailing 15.9x. FY27E $10.34 → fwd 9.9x", revGrowth: "+21.3% FY25 ($22.669B rekord!). Q4 $6.818B (+20.6%). NI $7.09B (+112%!). Zloto", moat: "#1 GOLD PRODUCER GLOBALNIE: 5.9M oz/rok po Newcrest integration (~13-14% share). 118M oz", dividend: "1.02% ($1.04/rok base", hasDR: true, verdict: "SIGNAL CHANGE yellow->green." },
      { ticker: "B", name: "Barrick Gold", price: 45, analyzed: true, fairValueLow: 42, fairValueHigh: 62, entryZone: 34, bargain: 26, expensive: 72, analystTarget: 59, signal: "blue", conviction: "HIGH", note: "PONIZEJ FV! #2 gold miner + copper dual exposure (30% EBITDA). FY25 $16.96B rev (+31.2%!), FCF $3.87B (+194%).", pe: "Fwd 11.4x (FY26E EPS $3.61). Trailing 13.2x. FY27E $4.30 → fwd 9.2x", revGrowth: "+31.2% FY25 ($16.96B rekord!). Q4 $6.0B (+64.5% r/r!). Zloto $4,177/oz", moat: "#2 gold producer globalnie (3.26M oz/rok, ~9% share). COPPER DUAL EXPOSURE = 30% EBITDA i rosnacy —", dividend: "2.66% (nowa 50% FCF payout", hasDR: true, verdict: "SIGNAL CHANGE blue->green." },
<<<<<<< HEAD
      { ticker: "WPM", name: "Wheaton Precious Metals", price: 148, analyzed: true, fairValueLow: 105, fairValueHigh: 170, entryZone: 85, bargain: 65, expensive: 200, analystTarget: 151, signal: "yellow", conviction: "HIGH", note: "FV RAISE $105-170 (z $95-155). ANTAMINA $4.3B zamkniety 1.IV (BHP silver stream). +70K GEO/rok. Cel 1.2M GEO do 2030 (+50%). Srebro $79/oz vs koszt $5.75 = 93% marza. Earnings 7.V", pe: "Fwd ~21-22x (FY26E EPS $3.85). Trailing 35-43x. FY27E $3.80 → fwd", revGrowth: "+80% FY25 ($2.31B rekord!). Q4 $864.7M (+127% r/r!). FY26E $3.0-3.1B (+30%). Antamina adds ~$500M/yr at current Ag", moat: "#1 STREAMING COMPANY GLOBALNIE. Model streamingowy = ZERO kosztow operacyjnych. Antamina 67.5% Ag stake = najwieksza transakcja streamingowa cyklu", dividend: "0.55% ($0.78/yr, +18.2% r/r", hasDR: true, verdict: "FV RAISE sesja 8. Antamina $4.3B = transformacyjna. Przy Ag $79 i koszcie $5.75 — kolosalne marze. Silver sweet spot thesis potwierdzona." },
=======
      { ticker: "WPM", name: "Wheaton Precious Metals", price: 148, analyzed: true, fairValueLow: 95, fairValueHigh: 155, entryZone: 85, bargain: 65, expensive: 190, analystTarget: 153, signal: "yellow", conviction: "HIGH", note: "W strefie FV. NOWA SPOLKA #66.", pe: "Fwd ~21-22x (FY26E EPS $3.85). Trailing 35-43x. FY27E $3.80 → fwd", revGrowth: "+80% FY25 ($2.31B rekord!). Q4 $864.7M (+127% r/r!). FY26E $3.0-3.1B (+30%)", moat: "#1 STREAMING COMPANY GLOBALNIE. Model streamingowy = ZERO kosztow operacyjnych, ZERO ekspozycji na", dividend: "0.55% ($0.78/yr, +18.2% r/r", hasDR: true, verdict: "NOWA SPOLKA #66. WPM = #1 streaming company na swiecie i ROZWIAZANIE problemu 'ropa drozeje = gol..." },
>>>>>>> f70075d30d73c3d2e98303a1232b4d1fee3c7bda
      { ticker: "PAAS", name: "Pan American Silver", price: 57, analyzed: true, fairValueLow: 42, fairValueHigh: 72, entryZone: 38, bargain: 28, expensive: 88, analystTarget: 66, signal: "blue", conviction: "MEDIUM", note: "W strefie FV. NOWA SPOLKA #67.", pe: "Fwd ~14x (FY26E EPS $3.71). Trailing 20-23x. FY27E $3.57. NAJTANSZY", revGrowth: "+FY25 $3.62B. Q4 $1.18B (+44.7% r/r) = REKORD. FY26E $4.92B (+36%). Ag", moat: "#1 PRIMARY SILVER PRODUCER (rezerwy 452 Moz P&P = NAJWIEKSZE na swiecie). 11 kopaln w 7 krajach", dividend: "1.4% ($0.72/yr annualized, 3", hasDR: true, verdict: "NOWA SPOLKA #67. PAAS = #1 primary silver producer na swiecie (452 Moz reserves) i NAJTANSZY silv..." },
      { ticker: "HL", name: "Hecla Mining", price: 19, analyzed: true, fairValueLow: 14, fairValueHigh: 26, entryZone: 12, bargain: 8, expensive: 35, analystTarget: 21, signal: "blue", conviction: "MEDIUM", note: "DEEP RESEARCH: #1 US/CA silver producer. FY25 $1.42B (+53%), EPS $0.49, EBITDA $670M. Greens Creek AISC UJEMNY -$2.36/oz! Sold Casa Berardi $593M → pure silver. Zero dług netto po wykupie obligacji IV.2026", pe: "Fwd 18-24x (FY26E EPS $1.05, range $0.68-1.39). Trail 40x. EV/EBITDA 17x. Piotroski 8/9", revGrowth: "+53% FY25 ($1.42B). Q4 $448M (+80% r/r, beat +26%). EBITDA $670M (+98%). FY26E $1.49B (+4%). Prod Ag -3-11% (lower throughput)", moat: "#1 US silver (50-56% US production). Greens Creek AISC -$2.36/oz = BEST IN WORLD. Tier-1 jurisdiction only (AK/ID/Yukon). AI geological modeling", dividend: "0.08% ($0.015/yr)", hasDR: true, verdict: "DEEP RESEARCH 14.IV. Silver sweet spot: $11 AISC vs $75 spot = 85% margin. Zero debt. US jurisdiction. But: insider selling 9.2M/0 buys, Van Eck/BlackRock reducing. Bull $36-80, Bear $5-16." },
      { ticker: "AG", name: "First Majestic Silver", price: 21, analyzed: true, fairValueLow: 14, fairValueHigh: 28, entryZone: 12, bargain: 7, expensive: 32, analystTarget: 25, signal: "blue", conviction: "LOW", note: "DEEP RESEARCH: Pure silver miner #4 globalnie. FY25 rev $1.26B (+124%), FCF $470M, cash $938M. AISC $21 (FY25) ale guidance $26-28 (FY26). Gatos Silver acquisition = game changer. First Mint premia 26%", pe: "Fwd ~17x (EPS FY26E $1.23). Trailing 60x. EV/EBITDA 15x. P/S 7.5x", revGrowth: "+124% FY25 ($1.26B). Q4 $464M (+169% r/r, beat +15%). EBITDA $686M (+440%). Guidance FY26: prod -7-16% (margin>volume)", moat: "Highest silver beta. Own mint (DTC $49M, 26% premium). Los Gatos AISC $13-15/oz. 100% Mexico risk. Jerritt Canyon restart H2 2027 (Nevada)", dividend: "2% quarterly rev (new policy Q1 2026)", hasDR: true, verdict: "DEEP RESEARCH 14.IV. Silver sweet spot ale highest risk: AISC $26-28, 100% Mexico, insider selling 65-80x buy/sell. At $75 Ag = fat margins. Bull $30-84, Bear $8-17." },
      { ticker: "SII", name: "Sprott Inc", price: 145, analyzed: true, fairValueLow: 100, fairValueHigh: 165, entryZone: 80, bargain: 55, expensive: 225, analystTarget: 150, signal: "yellow", conviction: "HIGH", note: "NOWA SPOLKA #68. LEKKO DROGO (+8% vs FV mid).", pe: "Fwd 30.4x (FY26E EPS $4.71). Trailing 40.1x. FY27E $6.00 → fwd 23.8x", revGrowth: "+60% FY25 ($285M). Q4 $111.4M (+162%!). Mgmt fees $63.8M (+54%). AUM:", moat: "TOLL BOOTH MODEL: zarabia 0.31-0.85% opłat za zarzadzanie na $70B AUM niezaleznie od kierunku cen", dividend: "1.1% ($1.60/yr, +23% r/r, 33%", hasDR: true, verdict: "NOWA SPOLKA #68. Sprott Inc = TOLL BOOTH na commodity supercycle." },
{ ticker: "CF", name: "CF Industries", price: 121, analyzed: true, fairValueLow: 85, fairValueHigh: 150, entryZone: 75, bargain: 60, expensive: 170, analystTarget: 107, signal: "yellow", conviction: "HIGH", note: "+10.5% POWYZEJ FV mid $117.50 = LEKKO DROGO po +64% YTD. #1 producent azotu w Ameryce Polnocnej, 10.5M ton amoniaku/yr (97% utilization).", pe: "Forward P/E 13.4x (konsensus EPS $9.01). Trailing P/E 14.49x (EPS", revGrowth: "DEEP RESEARCH: FY25 $7.084B (+19.3% r/r). Q4 FY25 $1.872B (+22.8% r/r, GM 40.9%", moat: "DEEP RESEARCH: NAJWIEKSZY KOMPLEKS AMONIAKOWY NA SWIECIE — Donaldsonville LA (1400 akrow, 6", dividend: "1.5% ($2.00/yr kwartalnie)", hasDR: true, verdict: "DEEP RESEARCH." },
    ],
  },
  {
    name: "Uranium / Nuclear", icon: "\u2622\uFE0F", subtitle: "Paliwo nuklearne \u2014 baseload power dla AI data centers", color: "#10B981",
    stocks: [
      { ticker: "CCJ", name: "Cameco Corporation", price: 119, analyzed: true, fairValueLow: 82, fairValueHigh: 125, entryZone: 72, bargain: 55, expensive: 155, analystTarget: 123, signal: "yellow", conviction: "MEDIUM", note: "LEKKO DROGO (stary FV $72-88 BYL ZA NISKI — nie uwzglednial Westinghouse). JEDYNA vertically integrated Western nuclear fuel company: mining → conversion →", pe: "Fwd 82-84x (FY26E adj EPS C$1.77 = ~$1.24 USD). Trailing 106x(!)", revGrowth: "+11% FY25 (C$3.48B). Q4 C$1.20B (+1.5%). Uranium realized C$91.30/lb (+13%", moat: "JEDYNA FIRMA NA SWIECIE laczaca: mining (McArthur River + Cigar Lake = 17% global production)", dividend: "0.17% (C$0.24/yr, podwojona z", hasDR: true, verdict: "SIGNAL CHANGE red->yellow. STARY FV $72-88 BYL ZA NISKI — nie uwzglednial Westinghouse (+61% EBIT..." },
      { ticker: "KAP", name: "Kazatomprom (USD GDR)", price: 86, analyzed: true, fairValueLow: 65, fairValueHigh: 92, entryZone: 55, bargain: 38, expensive: 110, analystTarget: 89, signal: "yellow", conviction: "MEDIUM", note: "LEKKO DROGO. #1 GLOBALNY PRODUCENT URANU (21% podazy).", pe: "Fwd 13.3x (FY26E EPS ~$5.75). Trailing 18.2x. FY27E ~$5.65. EV/EBITDA", revGrowth: "FY25 KZT 1,803B (~$3.5B, -1% r/r). FY24 +26% r/r. FY26 guide KZT 2,200-2,300B", moat: "#1 GLOBALNY PRODUCENT URANU: 21% podazy pierwotnej, 25,839 tU (100% basis). 14 aktywow wydobywczych", dividend: "2.15% (polityka 75% FCF, FY24", hasDR: true, verdict: "Conviction LOW→MEDIUM." },
      { ticker: "UEC", name: "Uranium Energy Corp", price: 15, analyzed: true, fairValueLow: 11, fairValueHigh: 20, entryZone: 9, bargain: 6, expensive: 28, analystTarget: 18, signal: "blue", conviction: "MEDIUM", note: "Ponizej FV Mid. Largest licensed US uranium producer (12.1M lbs/yr) ale produkcja dopiero 244K lbs (<2% capacity).", pe: "N/A (GAAP strata, FY25 EPS -$0.20). FY26E ~breakeven, FY27E EPS", revGrowth: "FY25 $66.8M (+ramp). FY26E ~$67M (flat). Revenue LUMPY — zalezy od", moat: "LARGEST LICENSED US uranium producer: 12.1M lbs/yr (Irigaray 4M + Hobson 4M + Sweetwater 4.1M)", dividend: "0%", hasDR: true, verdict: "UEC = CALL OPTION na amerykanska niezaleznosc uranowa." },
      { ticker: "NXE", name: "NexGen Energy", price: 12, analyzed: true, fairValueLow: 9, fairValueHigh: 16, entryZone: 7, bargain: 5, expensive: 22, analystTarget: 15, signal: "blue", conviction: "HIGH", note: "W strefie FV. Wlasciciel Rook I/Arrow = NAJWIEKSZE nierozwiniete zloze uranu high-grade na swiecie (2.37% avg grade).", pe: "Pre-revenue / N/A. NPV @ uranium $60: CAD 3.47B, @ $90: ~CAD 6-7B, @", revGrowth: "Pre-production. ZERO revenue do ~2030. Cash burn ~$170M/yr (ops). First", moat: "ARROW DEPOSIT = WORLD-CLASS: 2.37% avg grade U3O8 (vs Cameco ~1%, Kazatomprom <0.1%, Orano <0.5%)", dividend: "0%", hasDR: true, verdict: "NXE = OPCJA na najwieksza kopalnie uranu swiata z najnizszym kosztem operacyjnym. CNSC approved +..." },
,
,
    ],
  },
  {
    name: "Hyperscalers / Cloud", icon: "\u2601\uFE0F", subtitle: "AI infra buyers \u2014 combined capex ~$500B w 2026", color: "#6366F1",
    stocks: [
      { ticker: "GOOGL", name: "Alphabet (Google)", price: 337, analyzed: true, fairValueLow: 293, fairValueHigh: 387, entryZone: 255, bargain: 200, expensive: 450, analystTarget: 377, signal: "blue", conviction: "HIGH", note: "DEEP RESEARCH + HIDDEN ASSETS UPDATE 4.IV: 🟢 OKAZJA (-13% vs FV mid $340). Operating business at FV Low $280 = hidden assets ($164-206B) dostajesz GRATIS.", pe: "~22x fwd (CY26E EPS ~$13.50). Najtanszy hyperscaler vs growth", revGrowth: "+18% Q4 ($113.8B rekord). FY25 $403B (+15%). Cloud +48% ($17.7B). Search +17%", moat: "Search 90% share (monopol). Cloud #3 ale najszybciej rosnacy (+48%). YouTube $60B/rok. Gemini 750M", dividend: "0.3%", hasDR: true, verdict: "DEEP RESEARCH UPGRADE + HIDDEN ASSETS → GREEN SIGNAL. Google = najlepiej zdywersyfikowany hypersc..." },
      { ticker: "META", name: "Meta Platforms", price: 672, analyzed: true, fairValueLow: 580, fairValueHigh: 850, entryZone: 520, bargain: 450, expensive: 1000, analystTarget: 850, signal: "blue", conviction: "HIGH", note: "PONIZEJ FV Low! ⚠️ NEWS 27.03: wyroki sadowe ($375M NM + $6M LA) dot. bezpieczenstwa dzieci = precedens. Kurs -8% do 52-week low ~$550. Zwolnienia", pe: "~19.7x fwd normalized (FY26E EPS $30.26). PEG 0.88 = NAJTANSZY", revGrowth: "+22% FY25 ($201B). Ad rev $184B (+22%). Q4 $59.9B (+24%). FY26E $250B+ (+25%)", moat: "3.58B DAP = LARGEST social media platform globally. FB + IG + WhatsApp + Messenger + Threads. 60%", dividend: "0.35% ($2.10/yr)", hasDR: true, verdict: "Meta = advertising juggernaut z 3.58B DAP i AI-driven targeting. $201B rev (+22%), beat 6/6Q, P/E..." },
      { ticker: "AMZN", name: "Amazon", price: 248, analyzed: true, fairValueLow: 195, fairValueHigh: 280, entryZone: 175, bargain: 150, expensive: 330, analystTarget: 280, signal: "yellow", conviction: "HIGH", note: "DEEP RESEARCH: W strefie FV. FY25 $716.9B (+12%). AWS $128.7B (+24%, fastest 13Q). Ads $68.6B (+22%). OpenAI $50B deal. ALE: CapEx $200B (!) = FCF -71%. Bezos", pe: "~27x fwd (FY26E EPS $7.93). ~29x trailing. Discount do 5-yr avg", revGrowth: "+12% FY25 ($716.9B). AWS +24% ($128.7B ARR). Ads +22% ($68.6B). FY26E $821B", moat: "AWS #1 cloud 29-30% share, $200B backlog, 57% op income. 200+ services, largest global footprint", dividend: "0%", hasDR: true, verdict: "Amazon = AWS powerhouse ($128.7B, +24%) + advertising machine ($68.6B, 50%+ margin) + e-commerce ..." },
      { ticker: "AAPL", name: "Apple", price: 266, analyzed: true, fairValueLow: 240, fairValueHigh: 310, entryZone: 210, bargain: 170, expensive: 350, analystTarget: 290, signal: "blue", conviction: "HIGH", note: "DEEP RESEARCH: W strefie FV. Q1 FY26 $143.8B rev (+16%) REKORD. iPhone $85.3B (+23%). Services $30B (76.5% GM). 2.5B installed base. Apple Intelligence =", pe: "~29x fwd (CY26E EPS ~$8.80)", revGrowth: "+16% Q1 FY26 ($143.8B rekord). iPhone +23% ($85.3B). Services +14% ($30B)", moat: "2.5B installed base (lock-in). Services 76.5% GM ($30B/Q). Apple Silicon (TSMC 2nm exclusive)", dividend: "0.5% ($1.00/rok)", hasDR: true, verdict: "Apple = cash machine + ecosystem fortress. Q1 $143.8B rekord, Services $30B z 76.5% GM, 2.5B inst..." },
      { ticker: "MSFT", name: "Microsoft", price: 411, analyzed: true, fairValueLow: 345, fairValueHigh: 500, entryZone: 330, bargain: 280, expensive: 600, analystTarget: 593, signal: "blue", conviction: "MEDIUM", note: "FV (Jordi thesis rozszerzony: regime shift + software disruption). -31% od ATH.", pe: "~21.8x fwd (FY26E EPS $16.92) = NAJNIZSZY OD 2023. PEG 1.37 (26%", revGrowth: "+17% Q2 FY26 ($81.3B). Azure +39% (AI = 18pts). FY25 $281.7B. FY26E $335B", moat: "CRPO $625B (+110%) = LARGEST enterprise backlog in tech history. Azure #2 cloud (21% share, closing", dividend: "0.92% ($3.32/yr, 15+ yr", hasDR: true, verdict: "DEEP RESEARCH UPGRADE + JORDI UPDATE 30.03." },
,
    ],
  },
  {
    name: "AI Software / Defense", icon: "\uD83E\uDD16", subtitle: "Agentic AI platforms + defense/gov", color: "#8B5CF6",
    stocks: [
      { ticker: "PLTR", name: "Palantir Technologies", price: 142, analyzed: true, fairValueLow: 80, fairValueHigh: 135, entryZone: 70, bargain: 50, expensive: 200, analystTarget: 195, signal: "red", conviction: "MEDIUM", note: "PRZEPŁACONE (+38% vs FV mid). Fastest-growing large-cap software: FY25 $4.5B (+56%), FY26 guide $7.2B (+61%).", pe: "238x trailing GAAP. 113x fwd (FY26E EPS $1.34). 78x FY27E ($1.89)", revGrowth: "+56% FY25 ($4,475M). FY26 guide $7.19B (+61%). FY27E consensus $10.56B. US", moat: "UNIKALNY MONOPOL: Gotham (defense/intel, Top Secret/SCI), Foundry (commercial AI), AIP", dividend: "0%", hasDR: true, verdict: "Palantir to NAJLEPSZA firma software na swiecie pod wzgledem execution — Rule of 40 = 127%, beat ..." },
{ ticker: "RHM.DE", name: "Rheinmetall AG (EUR)", price: 1487, analyzed: true, fairValueLow: 1200, fairValueHigh: 1800, entryZone: 1000, bargain: 800, expensive: 2300, analystTarget: 2044, signal: "blue", conviction: "MEDIUM", note: "W strefie FV (-3% vs mid). EUROPEAN DEFENSE PURE-PLAY #1 — najszybciej rosnaca duza europejska spolka zbrojeniowa.", pe: "Fwd ~38x (FY26E EPS €40.52). Trailing ~68x (EPS €22.73). PEG ~0.95", revGrowth: "+29% FY2025 (€9.94B). FY2026 guide €14.0-14.5B (+40-45%). Konsensus €15.0B (7%", moat: "BACKLOG €63.8B = 6.4x ROCZNYCH PRZYCHODOW — najwyzszy w branzy (BAE 2.7x, Thales 2.4x). Cel €135B", dividend: "0.74% (€11.50/yr, +42% r/r", hasDR: true, verdict: "SPOLKA #72. Rheinmetall = najszybciej rosnaca duza europejska spolka zbrojeniowa z BEZPRECEDENSOW..." },
      { ticker: "HAG.DE", name: "Hensoldt AG (EUR)", price: 78, analyzed: true, fairValueLow: 65, fairValueHigh: 100, entryZone: 55, bargain: 45, expensive: 120, analystTarget: 91, signal: "blue", conviction: "MEDIUM", note: "W STREFIE FV (midpoint €82.50). Defense electronics pure-play = 'Infineon obrony'.", pe: "Trailing ~77x (GAAP EPS €0.77). Fwd ~54x (FY26E EPS €1.52). FY27E", revGrowth: "+9.6% FY25 (€2.46B). Order intake €4.71B (+62%!). FY26 guide €2.75B (+12%). Cel", moat: "PURE-PLAY defense electronics: ~8-9% europejskiego rynku (~€24B). TRML-4D = dominant AESA radar", dividend: "0.66% (€0.55/yr, 6. rok", hasDR: true, verdict: "SPOLKA #74. Hensoldt = europejski pure-play defense electronics z REKORDOWYM backlogiem €8.83B (3..." },
      { ticker: "LMT", name: "Lockheed Martin", price: 611, analyzed: true, fairValueLow: 530, fairValueHigh: 680, entryZone: 480, bargain: 420, expensive: 780, analystTarget: 660, signal: "yellow", conviction: "MEDIUM", note: "PAC-3 MSE kontrakt $4.76B (10.IV). 94% FMS = globalny popyt. Beat 6/6Q. Earnings 23.IV. Backlog rosnący.", pe: "Fwd ~21x (FY26E EPS ~$30). Trailing GAAP ~29x (obciazony stratami)", revGrowth: "+5.6% FY25 ($75.0B). FY26 guide $77-80B (+5%). MFC najszybciej +14% (PAC-3", moat: "F-35 = MONOPOL na 5th gen fighter (3,300+ zamowionych, 1,000+ dostarczonych, lifetime value $2T+)", dividend: "2.2% ($13.80/yr, 23 lata", hasDR: true, verdict: "SPOLKA #75. Lockheed Martin = US Defense Prime #1 z REKORDOWYM backlogiem $194B i NAJTANSZYM P/E ..." },
      { ticker: "RTX", name: "RTX Corporation", price: 198, analyzed: false, fairValueLow: 190, fairValueHigh: 260, entryZone: 170, bargain: 145, expensive: 300, analystTarget: 250, signal: "blue", conviction: "MEDIUM", note: "STUB #76. Brak DR.", pe: "~42x trailing. Fwd ~31x (FY26E EPS $6.70). Wyzszy niz LMT (30x) ale", revGrowth: "+12.1% Q4 (organic +14%). FY26 guide $92-93B (+5-6% organic). P&W commercial", moat: "PATRIOT = JEDYNY COMBAT-PROVEN HIMAD na swiecie (Israel, Gulf, Ukraine). Tomahawk = standard cruise", dividend: "1.3% ($2.72/yr)", hasDR: false, verdict: "Stub #76. US Defense Prime #2 z UNIKALNYM dual exposure: Raytheon (missiles/defense) + P&W (engin..." },
    ],
  },
  {
    name: "Digital Biology / Healthcare AI", icon: "\uD83E\uDDEC", subtitle: "ChatGPT moment biologii Jensen: 2-5 lat", color: "#EC4899",
    stocks: [
      { ticker: "TMO", name: "Thermo Fisher", price: 532, analyzed: true, fairValueLow: 520, fairValueHigh: 620, entryZone: 460, bargain: 380, expensive: 750, analystTarget: 664, signal: "blue", conviction: "HIGH", note: "DEEP RESEARCH: PONIZEJ FV Low $520! -13% vs mid $570. -26% od ATH. FY25 $44.6B (+4%), Q4 $12.2B (+7%). FY26E EPS $24.50 (+7%). Picks-and-shovels na AI drug", pe: "~19.5x trailing, ~19x fwd (FY26E EPS $24.50)", revGrowth: "+4% FY25 ($44.6B), Q4 +7% ($12.2B). FY26E $46.3-47.2B (+4-6%)", moat: "#1 global life sciences: 800K+ produktow, CDMO (Patheon), CRO (PPD), Cryo-EM monopol (Krios), Olink", dividend: "0.4%", hasDR: true, verdict: "TMO = Berkshire Hathaway nauk przyrodniczych. Przy $478 i P/E 19.5x handluje PONIZEJ FV — najnizs..." },
      { ticker: "ISRG", name: "Intuitive Surgical", price: 468, analyzed: true, fairValueLow: 430, fairValueHigh: 600, entryZone: 400, bargain: 340, expensive: 700, analystTarget: 611, signal: "blue", conviction: "HIGH", note: "W strefie FV. MONOPOL chirurgii robotycznej (~60% share).", pe: "Fwd 46.2x (FY26E EPS $10.22). Trailing 59.6x. FY27E $11.68 → fwd", revGrowth: "+21% FY25 ($10.065B rekord!). Q4 $2.866B (+19%). FY26E $11.75B (+17%). I&A", moat: "MONOPOL CHIRURGII ROBOTYCZNEJ: ~60% global share, 11,106 da Vinci + 995 Ion zainstalowanych, 20M+", dividend: "0% (brak dywidendy, $4B", hasDR: true, verdict: "ISRG = MONOPOL chirurgii robotycznej z najsilniejszym moatem w medtech." },
<<<<<<< HEAD
      { ticker: "LLY", name: "Eli Lilly", price: 914, analyzed: true, fairValueLow: 900, fairValueHigh: 1250, entryZone: 780, bargain: 630, expensive: 1500, analystTarget: 1248, signal: "blue", conviction: "HIGH", note: "FV RAISE $900-1250 (z $850-1150). FOUNDAYO zatwierdzony 1.IV, dostepny 9.IV ($149-349 self-pay, $25 insured). RBC peak $35B. Medicare Part D od 1.VII. NVO guidance SPADEK 5-13%. Inkretyny 60.5% rev. Beat 5/6Q. Retatrutide 10x Phase 3 readouts 2026. Earnings 30.IV", pe: "~27x fwd FY26E (EPS $33.50-35.00). ~22x FY27E ($41.72). Trailing 40x", revGrowth: "+45% FY25 ($65.2B rekord!). FY26 guide $80-83B (+25%). Margin 40.4%→46-47.5%", moat: "Tirzepatide $36.5B = #1 drug franchise. Patent 2036/2039. Foundayo (oral) patent ~2040s. GLP-1 share 57% (vs NVO 43%). $50B+ manufacturing moat", dividend: "0.71% ($6.92/rok, +15.4% r/r", hasDR: true, verdict: "DR sesja 8. Foundayo approval = inflection. Oral GLP-1 $149 self-pay + Medicare VII.2026 = TAM explosion. NVO slabnie. FCF $6.4B nisko (capex >$10B). MFN mid-teens pricing drag." },
=======
      { ticker: "LLY", name: "Eli Lilly", price: 905, analyzed: true, fairValueLow: 850, fairValueHigh: 1150, entryZone: 780, bargain: 630, expensive: 1500, analystTarget: 1200, signal: "blue", conviction: "HIGH", note: "PONIZEJ FV Mid! FY25 $65.2B (+45%) = najszybciej rosnaca large-cap pharma w historii. Tirzepatide $36.5B = #1 drug franchise na swiecie.", pe: "~27x fwd FY26E (EPS $33.50-35.00). ~25x FY27E ($41.57). Trailing", revGrowth: "+45% FY25 ($65.2B rekord!). FY26 guide $80-83B (+25%, POWYZEJ consensus", moat: "Tirzepatide franchise $36.5B = #1 drug na swiecie (pokonala Keytruda). Patent do 2036 (composition)", dividend: "0.71% ($6.92/rok, 7 lat", hasDR: true, verdict: "SIGNAL CHANGE yellow->green. LLY = GLP-1 JUGGERNAUT z najszybszym wzrostem w historii large-cap p..." },
>>>>>>> f70075d30d73c3d2e98303a1232b4d1fee3c7bda
      { ticker: "DHR", name: "Danaher Corporation", price: 198, analyzed: true, fairValueLow: 180, fairValueHigh: 260, entryZone: 165, bargain: 140, expensive: 300, analystTarget: 250, signal: "blue", conviction: "MEDIUM", note: "Brak DR. NOWA SPOLKA #68.", pe: "Fwd ~25-28x. Trailing ~35x. Wyzsze marze niz TMO (28.2% vs 22.7%) ale", revGrowth: "~$24B FY25. Bioprocessing recovery w toku po destocking cycle 2023-2024", moat: "DBS (Danaher Business System) = kaizen/lean methodology stosowana od dekad = systematyczna poprawa", dividend: "~0.5%", hasDR: true, verdict: "Stub entry. TMO peer z wyzszymi marzami ale wolniejszym growth. DBS = legendary. WYMAGA DR." },
,
    ],
  },
  {
    name: "AI Cloud Infrastructure", icon: "\u2601\uFE0F", subtitle: "GPU-as-a-service \u2014 nowa kategoria", color: "#818CF8",
    stocks: [
      { ticker: "CRWV", name: "CoreWeave", price: 119, analyzed: true, fairValueLow: 65, fairValueHigh: 140, entryZone: 50, bargain: 35, expensive: 180, analystTarget: 140, signal: "yellow", conviction: "LOW", note: "LEKKO DROGO. NAJSZYBCIEJ ROSNACA chmura GPU w historii — z $16M (2022) do $5.13B (2025).", pe: "GAAP strata. FY27E EPS $2.03 → fwd ~41x. P/S TTM 6.9x, fwd 2026E", revGrowth: "+168% FY25 ($5.131B). Q4 $1.572B (+110% r/r). FY26 guide $12-13B (+146%). FY27", moat: "PURE-PLAY GPU CLOUD LIDER: 250K+ GPU (H100/H200/GB200/GB300), 33 DC, 850MW active (cel >1.7GW", dividend: "0%", hasDR: true, verdict: "CoreWeave = NAJCZYSTSZA ekspozycja na supercykl AI infrastructure i jednoczesnie NAJRYZYKOWNIEJSZ..." },
    ],
  },
  {
    name: "Power Semiconductors", icon: "\u26A1", subtitle: "SiC/GaN revolution \u2014 power management dla AI DC", color: "#F472B6",
    stocks: [
      { ticker: "IFX.DE", name: "Infineon Technologies (EUR)", price: 44, analyzed: true, fairValueLow: 28, fairValueHigh: 40, entryZone: 24, bargain: 18, expensive: 48, analystTarget: 38, signal: "red", conviction: "LOW", note: "Brak DR. Power semicon lider (MOSFET, IGBT, SiC, GaN). Pojawia sie w VRT i ETN DR jako kluczowy dostawca. Kazdy DC potrzebuje power ICs.", pe: "~18x fwd", revGrowth: "+8% FY26E", moat: "#1 power semiconductors globalnie. SiC/GaN revolution. Dostawca VRT, ETN, automotive. EV + DC +", dividend: "1.2%", hasDR: true, verdict: "Brak deep research. Stub entry. ASML power semiconductors — kazdy DC potrzebuje power management." },
    ],
  },
  {
    name: "BTC Mining / AI Infra", icon: "\u26A1", subtitle: "Miners pivoting to AI \u2014 power assets + GPU capacity", color: "#F59E0B",
    stocks: [
      { ticker: "IREN", name: "IREN (ex-Iris Energy)", price: 49, analyzed: true, fairValueLow: 35, fairValueHigh: 65, entryZone: 28, bargain: 18, expensive: 100, analystTarget: 80, signal: "blue", conviction: "MEDIUM", note: "DEEP RESEARCH: W strefie FV. Najagresywniejszy AI pivot wsrod minerow. MSFT $9.7B kontrakt. 150K GPU fleet (B300). 4.5GW power. $3.7B ARR target CY26. FY25", pe: "~5x FY27E adj EBITDA. Tanio jesli delivers", revGrowth: "+168% FY25 ($501M). Q1 FY26 $240M (9x w 6Q). AI Cloud $17.3M/Q (+137% QoQ)", moat: "MSFT $9.7B kontrakt = najwiekszy single-contract w sektorze BTC minerow. 150K GPU", dividend: "0%", hasDR: true, verdict: "IREN = najagresywniejszy AI pivot w BTC mining sektorze. MSFT $9.7B + 150K GPU + 4.5GW power = po..." },
      { ticker: "MARA", name: "MARA Holdings (Marathon)", price: 10, analyzed: true, fairValueLow: 8, fairValueHigh: 12, entryZone: 6, bargain: 4, expensive: 20, analystTarget: 15, signal: "blue", conviction: "LOW", note: "JPM TNIE PT z $20 na $13 (7.IV.2026), wycena mining z $2.5B na $1.3B. DEEP RESEARCH + UPDATE 7.IV: W strefie FV.", pe: "GAAP strata (mark-to-market BTC) / fwd ~7x jesli BTC >$100K", revGrowth: "+38% FY25 ($907M). Q3 $252M (+92% r/r). BTC mining + lending $32M/yr + Starwood", moat: "38.7K BTC skarbiec (sprzedaz 15.1K BTC 26.03 na redukcje dlugu). 66.4 EH/s = #1 publiczny miner", dividend: "0%", hasDR: true, verdict: "DEEP RESEARCH + UPDATE 7.IV. MARA agresywnie pivotuje: sprzedala lacznie ~29K BTC ($1.1B+ w samym..." },
      { ticker: "CLSK", name: "CleanSpark", price: 11, analyzed: true, fairValueLow: 9, fairValueHigh: 18, entryZone: 7, bargain: 5, expensive: 30, analystTarget: 26, signal: "blue", conviction: "LOW", note: "DEEP RESEARCH: W strefie FV. Najefektywniejszy BTC miner (16.07 J/TH). FY25 $766M (+102%). 50 EH/s US-only. 1.8GW power. Cash cost $34K/BTC (NAJNIZSZY!)", pe: "GAAP strata (mark-to-market) / fwd ~8x jesli BTC >$100K", revGrowth: "+102% FY25 ($766M). Q4 $243M rekord. Track record: 50 EH/s delivered on", moat: "16.07 J/TH = NAJLEPSZA efektywnosc wsrod publicznych minerow. 50 EH/s US-only (#1 USA). 1.8 GW", dividend: "0%", hasDR: true, verdict: "CleanSpark = NAJEFEKTYWNIEJSZY publiczny BTC miner na swiecie (16.07 J/TH, $34K/BTC)." },
    ],
  },
  {
    name: "🤖 Physical AI / Autonomous",
    stocks: [
<<<<<<< HEAD
      { ticker: "TSLA", name: "Tesla", price: 379, analyzed: true, fairValueLow: 200, fairValueHigh: 360, entryZone: 160, bargain: 100, expensive: 600, analystTarget: 410, signal: "red", conviction: "LOW", note: "UBS Sell→Neutral 14.IV (PT $352, Spak: 'risk-reward balanced'). BofA reinstated Buy $460. FSD zatwierdzony w Holandii (1st EU). AI5 chip tapeout (TSMC+Samsung). Cybercab sightings Giga TX. Earnings 22.IV", pe: "335x trailing GAAP (EPS $1.08). 174x fwd (FY26E $2.08). Najdrozszy", revGrowth: "FY25 $94.8B (-3% = PIERWSZY spadek w historii). Auto -10%, Energia +27%", moat: "FSD 8.4B mil danych, 1.1M subskrybentow (+38%). Megapack dominacja (46.7 GWh, +49%). Optimus", dividend: "0%", hasDR: true, verdict: "UBS kapitulacja (Sell→Neutral) ale PT $352 < ceny. FSD Europa + AI5 chip = real progress. Earnings 22.IV = swing event. Nadal 335x P/E." },
=======
      { ticker: "TSLA", name: "Tesla", price: 392, analyzed: true, fairValueLow: 180, fairValueHigh: 320, entryZone: 160, bargain: 100, expensive: 600, analystTarget: 410, signal: "red", conviction: "LOW", note: "PRZEPŁACONE (+45% vs FV mid $250). Trailing P/E 335x, fwd 174x.", pe: "335x trailing GAAP (EPS $1.08). 174x fwd (FY26E $2.08). Najdrozszy", revGrowth: "FY25 $94.8B (-3% = PIERWSZY spadek w historii). Auto -10%, Energia +27%", moat: "FSD 8.4B mil danych, 1.1M subskrybentow (+38%). Megapack dominacja (46.7 GWh, +49%). Optimus", dividend: "0%", hasDR: true, verdict: "Tesla = paradoks dashboardu. Segment energetyczny ($12.8B, +27%) i cash ($44.1B) sa REALNE i rosna." },
>>>>>>> f70075d30d73c3d2e98303a1232b4d1fee3c7bda
    ],
  },
  {
    name: "Crypto L1 Networks", icon: "⛓️", subtitle: "Infrastruktura blockchainowa — L1 jako platformy rozwoju", color: "#F7931A",
    stocks: [
      { ticker: "BTC", name: "Bitcoin", price: 74729, analyzed: true, fairValueLow: 55000, fairValueHigh: 95000, entryZone: 48000, bargain: 35000, expensive: 130000, analystTarget: 120000, signal: "blue", conviction: "HIGH", note: "W strefie FV (-11% vs mid). JEDYNY prawdziwie scarce digital asset (21M hard cap).", pe: "NVT ~65 (neutral). Stock-to-Flow implied FV ~$100K-120K. Realized", revGrowth: "Hash rate ATH ~750 EH/s. Mining revenue $12B/yr. Lightning Network capacity", moat: "21M HARD CAP = absolutna rzadkosc. Halving co 4 lata (ostatni IV.2024 → 3.125 BTC/blok). 15+ lat", dividend: "0% (no staking — PoW)", hasDR: true, verdict: "BTC = JEDYNY prawdziwie scarce digital asset. 21M hard cap = Jordi 'long scarcity' w najczystszej..." },
      { ticker: "ETH", name: "Ethereum", price: 2355, analyzed: true, fairValueLow: 1400, fairValueHigh: 3500, entryZone: 1300, bargain: 900, expensive: 5000, analystTarget: 4000, signal: "blue", conviction: "MEDIUM", note: "DEEP RESEARCH v2: W strefie FV (-16% vs mid $2,450). -58% od ATH $4,950 (VIII.2025).", pe: "P/F ratio na L1 = ~2,086x (absurdalne ale misleading). L1 fee revenue", revGrowth: "DEEP RESEARCH v2: L1 fee revenue $10.3M/mies (III.2026) = $120-130M annualized", moat: "DEEP RESEARCH v2: SETTLEMENT LAYER GLOBALNEGO SYSTEMU FINANSOWEGO. DeFi TVL $52.6B (57-68%)", dividend: "2.77-3.8% staking yield", hasDR: true, verdict: "DEEP RESEARCH v2." },
      { ticker: "SOL", name: "Solana", price: 85, analyzed: true, fairValueLow: 50, fairValueHigh: 135, entryZone: 45, bargain: 30, expensive: 200, analystTarget: 150, signal: "blue", conviction: "MEDIUM", note: "DEEP RESEARCH v2 + MACRO OVERLAY 4.IV: W strefie FV (-13.5% vs mid $92.50). -73% od ATH $295 (19.I.2025).", pe: "DEEP RESEARCH v2: P/S na chain fees ($187M) = 246x = DROGO. ALE P/S", revGrowth: "DEEP RESEARCH v2: Chain fees $512K/dzien ($187M annualized). App fees", moat: "DEEP RESEARCH v2: NAJSZYBSZY MAINSTREAM L1: >10,000 TPS, 400ms bloki (Alpenglow → 150ms), <$0.01", dividend: "5-7% staking yield (delegacja", hasDR: true, verdict: "DEEP RESEARCH v2 + MACRO OVERLAY 4.IV." },
      { ticker: "BNB", name: "BNB (Binance)", price: 623, analyzed: true, fairValueLow: 500, fairValueHigh: 1000, entryZone: 400, bargain: 300, expensive: 1200, analystTarget: 750, signal: "blue", conviction: "MEDIUM", note: "DEEP RESEARCH + EQUITY FRAMEWORK: BNB = DE FACTO AKCJE BINANCE bez IPO. Binance rev $17B, zysk $464M+.", pe: "P/F 710x, P/S 7102x na chain fees = DROGO na on-chain basis. ALE: BNB", revGrowth: "DEEP RESEARCH: BNB Chain fee revenue $259M Q4 2025, $357M Q3 2025. Annualized", moat: "DEEP RESEARCH: BINANCE ECOSYSTEM = DOMINUJACA GIELDA CRYPTO. 280M+ userow, $152.9B aktywow (70%+", dividend: "~1% nominalny staking APY +", hasDR: true, verdict: "DEEP RESEARCH + EQUITY FRAMEWORK REVALUATION. BNB = DE FACTO AKCJE BINANCE." },
      { ticker: "XRP", name: "XRP (Ripple)", price: 1, analyzed: true, fairValueLow: 0.90, fairValueHigh: 2.20, entryZone: 0.75, bargain: 0.40, expensive: 4.00, analystTarget: 3.50, signal: "blue", conviction: "LOW", note: "W strefie FV (-13% vs mid). SEC case RESOLVED = regulatory clarity.", pe: "Mkt cap ~$78B. On-chain fee revenue minimal (<$10M/yr). Valuation =", revGrowth: "RippleNet ODL volume growing ale undisclosed. XRPL DEX volume minimal. CBDC", moat: "SEC CASE RESOLVED = regulatory clarity (jedyny major alt z tym statusem). RippleNet 300+ financial", dividend: "0% (no native staking na XRPL)", hasDR: true, verdict: "XRP = SEC clarity play + cross-border payments thesis. Regulatory advantage jest REALNE — jedyny ..." },
      { ticker: "HYPE", name: "Hyperliquid", price: 0, analyzed: true, fairValueLow: 18, fairValueHigh: 55, entryZone: 16, bargain: 10, expensive: 70, analystTarget: 50, signal: "blue", conviction: "MEDIUM", note: "W strefie FV (-2.7% vs mid $36.50). -40% od ATH $59.30 (IX.2025).", pe: "P/S 11.7x (DeFiLlama) do 15.9x (Artemis) circulating = ROZSADNIE. FDV", revGrowth: "DEEP RESEARCH: Cumulative perp $4.17T. Daily $5-10B typowy, rekord $45B", moat: "DEEP RESEARCH: PERP DEX DOMINACJA 70%+ OI. Sub-0.2s finalnosc. 200K orderow/sek. Zero gas. Fully", dividend: "~2.25-2.38% staking APY +", hasDR: true, verdict: "DEEP RESEARCH." },
    ],
  },
];

var SIG = {
  green: { label: "Okazja", bg: "#0D3B1F", border: "#2D8B4E", dot: "#4ADE80", text: "#6EE7A0" },
  blue: { label: "Fair Value", bg: "#0D1F3B", border: "#2D4E8B", dot: "#60A5FA", text: "#93C5FD" },
  yellow: { label: "Powyżej FV", bg: "#3B2E0A", border: "#8B7A2D", dot: "#FACC15", text: "#FDE68A" },
  red: { label: "Przepłacone", bg: "#3B0D0D", border: "#8B2D2D", dot: "#F87171", text: "#FCA5A5" },
  gray: { label: "Nie przeanalizowane", bg: "#1E1E1C", border: "#3A3A36", dot: "#71717A", text: "#A1A1AA" },
};

var FILT = [
  { key: "all", label: "Wszystkie", color: "#A1A19A" },
  { key: "green", label: "Okazja", color: "#4ADE80" },
  { key: "blue", label: "Fair Value", color: "#60A5FA" },
  { key: "yellow", label: "Powyżej FV", color: "#FACC15" },
  { key: "red", label: "Przepłacone", color: "#F87171" },
  { key: "gray", label: "Do analizy", color: "#71717A" },
];

var CAT_TYPES = {
  macro: { label: "Makro", color: "#F87171", icon: "🌍" },
  corporate: { label: "Corporate", color: "#C084FC", icon: "🏢" },
  earnings: { label: "Earnings", color: "#60A5FA", icon: "📊" },
  supply: { label: "Supply Chain", color: "#FB923C", icon: "⚠️" },
  regulatory: { label: "Regulatory", color: "#2DD4BF", icon: "📋" },
};

var CATALYSTS = [
  { date: "2026-04-14", dateEnd: "2026-04-20", label: "CLARITY Act markup — Polymarket 70-72%. Galaxy: 'dead if not by end April'. XRP commodity status", type: "regulatory", tickers: ["BTC","ETH","SOL","HYPE","XRP"], impact: "high" },
  { date: "2026-04-15", label: "ASML Q1 ✅ BEAT: rev €8.77B (+3.2% vs cons), GM 53%, FY26 raised €36-40B. Memory 51%! China 19%. MATCH Act risk. Stock -4%", type: "earnings", tickers: ["ASML"], impact: "high" },
  { date: "2026-04-15", label: "Tax selling deadline — presja na BTC/crypto. Avg ETF cost basis ~$84K (18.5% pod woda)", type: "macro", tickers: ["BTC","ETH","SOL"], impact: "medium" },
  { date: "2026-04-16", label: "TSMC Q1 earnings — rev $35.6B (+35%), NI +50% r/r. Key: 2nm N2 yield, CoWoS, marza 63-65%, Arizona koszty", type: "earnings", tickers: ["TSM"], impact: "high" },
  { date: "2026-04-16", label: "SEC Roundtable digital assets — CLARITY Act komentarz", type: "regulatory", tickers: ["BTC","ETH","HYPE","XRP"], impact: "medium" },
  { date: "2026-04-17", label: "Amazon 3.5% fuel/logistics surcharge wchodzi w zycie", type: "corporate", tickers: ["AMZN"], impact: "low" },
  { date: "2026-04-18", label: "UK-France Hormuz Summit Paryz — 'restoring freedom of navigation'", type: "macro", tickers: ["LNG","CF"], impact: "medium" },
  { date: "2026-04-20", label: "SNDK wchodzi do Nasdaq-100 — masywne pasywne flows indeksowe", type: "corporate", tickers: ["SNDK"], impact: "high" },
  { date: "2026-04-21", label: "Warsh confirmation hearing — Senat Komisja Bankowa (opozniony z 16.IV)", type: "macro", tickers: [], impact: "high" },
  { date: "2026-04-21", label: "RTX Q1 (cons EPS $1.51-52, PAC-3 $4.76B+$3.7B Ukraine, backlog rosnacy) + ASM Q1 + VICR Q1 (insider selling!) + ISRG Q1 + DHR Q1", type: "earnings", tickers: ["RTX","ASM","VICR","ISRG","DHR"], impact: "high" },
  { date: "2026-04-22", label: "GEV Q1 (backlog 83GW, CEO target 100GW) + VRT Q1 + TSLA Q1 (358K miss) + NEE Q1 + FCX Q1", type: "earnings", tickers: ["GEV","VRT","TSLA","NEE","FCX"], impact: "high" },
  { date: "2026-04-22", dateEnd: "2026-04-23", label: "Rozejm Iran wygasa ~22.IV — renewal or escalation. Bloomberg: obie strony 'w rozmowach'", type: "macro", tickers: ["LNG","CF","BE","CEG"], impact: "high" },
  { date: "2026-04-23", label: "NEM Q1 + SCCO Q1 + LMT Q1 + TMO Q1 + KLAC Q1 + B Q1 + SK Hynix Q1 preliminary", type: "earnings", tickers: ["NEM","SCCO","LMT","TMO","KLAC","B","000660.KS"], impact: "high" },
  { date: "2026-04-28", label: "GLW Q1 + DHR Q1 + ETN Q1 + FSLR Q1 + AMKR Q1 + Samsung Q1", type: "earnings", tickers: ["GLW","DHR","ETN","FSLR","AMKR","005930.KS"], impact: "high" },
  { date: "2026-04-28", dateEnd: "2026-04-29", label: "FOMC (hold 94.8%) + GOOGL Q1 + MSFT Q3 + META Q1", type: "earnings", tickers: ["GOOGL","MSFT","META"], impact: "high" },
  { date: "2026-04-29", label: "SCHN.PA Q1 + AMZN Q1 + QCOM Q2 + ARM Q4 + PWR Q1 + CCJ Q1 + TER Q1 + LRCX Q1", type: "earnings", tickers: ["SCHN.PA","AMZN","QCOM","ARM","PWR","CCJ","TER","LRCX"], impact: "high" },
  { date: "2026-04-30", label: "LLY Q1 (1st Foundayo rev, cons $17.6B/$7.03 EPS) + TT Q1 + MP Q1 + MU/WDC/SNDK Q3 + AAPL Q2 + CF Q1 + GDP Q1 + PCE Deflator", type: "earnings", tickers: ["LLY","TT","MP","MU","WDC","SNDK","AAPL","CF"], impact: "high" },
  { date: "2026-05-01", label: "SII Q1 earnings", type: "earnings", tickers: ["SII"], impact: "medium" },
  { date: "2026-05-04", label: "PLTR Q1 (rev guide $7.18-7.20B, +61%. Burry short vs Cathie Wood long)", type: "earnings", tickers: ["PLTR"], impact: "high" },
  { date: "2026-05-05", label: "AMD Q1 + ANET Q1 + PAAS Q1 + MARA Q1 + CLSK Q1 + ARRY Q1", type: "earnings", tickers: ["AMD","ANET","PAAS","MARA","CLSK","ARRY"], impact: "high" },
  { date: "2026-05-06", label: "ALB Q1 + HAG.DE Q1 + COHR Q3 + LITE Q3 + CLS Q1 + NXT Q4", type: "earnings", tickers: ["ALB","HAG.DE","COHR","LITE","CLS","NXT"], impact: "high" },
  { date: "2026-05-07", label: "CEG Q1 (guidance EPS $11-12, rozczarowuje) + LNG Q1 + WPM Q1 + RHM.DE Q1 + BE Q3 + POWL Q2 + VST Q1", type: "earnings", tickers: ["CEG","LNG","WPM","RHM.DE","BE","POWL","VST"], impact: "high" },
  { date: "2026-05-12", label: "NXE Q1 + ENR.DE Q2 (backlog €146B rekord!) + KGH.WA Q1 + UEC Q1 + IREN Q3 FY26 + MOD Q4 FY26", type: "earnings", tickers: ["NXE","ENR.DE","KGH.WA","UEC","IREN","MOD"], impact: "medium" },
  { date: "2026-05-14", label: "AMAT Q2 + IFX.DE Q2 + CRWV Q1 (first as public)", type: "earnings", tickers: ["AMAT","IFX.DE","CRWV"], impact: "high" },
  { date: "2026-05-14", dateEnd: "2026-05-15", label: "Trump-Xi summit Beijing — rare earths, tariffs, Section 232", type: "macro", tickers: ["TSM","ASML","HAG.DE","MP"], impact: "high" },
  { date: "2026-05-15", label: "Powell odchodzi — Warsh przejmuje Fed", type: "macro", tickers: [], impact: "high" },
  { date: "2026-05-20", label: "NVDA Q1 FY27 earnings — kluczowy raport AI", type: "earnings", tickers: ["NVDA"], impact: "high" },
  { date: "2026-05-28", label: "DELL Q1 FY2027 + MRVL Q1 FY27 + FN Q3", type: "earnings", tickers: ["DELL","MRVL","FN"], impact: "high" },
  { date: "2026-06-01", dateEnd: "2026-06-15", label: "Warsh first FOMC — prawdopodobny CUT 25bps", type: "macro", tickers: ["BTC","B","NEM"], impact: "high" },
  { date: "2026-06-03", label: "CRDO Q4 FY26 + AVGO Q2 FY26", type: "earnings", tickers: ["CRDO","AVGO"], impact: "high" },
  { date: "2026-07-01", label: "Section 232 — Commerce DC semiconductor market review, moze zmodyfikowac tariffs", type: "regulatory", tickers: ["TSM","NVDA","AMD","ASML","LRCX","AMAT"], impact: "high" },
];

var MACRO_ALARMS = {
  updated: "2026-04-16",
  indicators: [
    { id: "move", name: "MOVE Index", value: 67.94, threshold_yellow: 100, threshold_red: 120, unit: "",
      desc: "Bond volatility. Disrupts collateral→liquidity transformation. >120 = crisis.",
      source: "ICE BofA MOVE" },
    { id: "hy_oas", name: "HY Credit Spreads", value: 294, threshold_yellow: 500, threshold_red: 600, unit: "bps",
      desc: "High Yield OAS. Refinancing stress. >600bps = credit crisis (Rule ETF cascade).",
      source: "ICE BofA HY OAS (FRED)" },
    { id: "sofr_iorb", name: "SOFR-IORB Spread", value: -3, threshold_yellow: 15, threshold_red: 30, unit: "bps",
      desc: "Repo stress. Collateral-liquidity imbalance. >30bps = Fed intervention likely.",
      source: "SOFR - IORB" },
    { id: "dxy", name: "DXY Dollar Index", value: 98.01, threshold_yellow: 105, threshold_red: 110, unit: "",
      desc: "Dollar strength. Every 10% rise = -10% global liquidity (Howell). Ceasefire pushed below 100.",
      source: "ICE DXY" },
    { id: "vix", name: "VIX", value: 18.17, threshold_yellow: 30, threshold_red: 40, unit: "",
      desc: "Equity volatility. >30 = elevated fear. >40 = panic / correlation spike.",
      source: "CBOE VIX" },
    { id: "us10y", name: "US 10Y Yield", value: 4.28, threshold_yellow: 4.60, threshold_red: 5.00, unit: "%",
      desc: "Treasury yield. Bessent defending 4.4% line (Gromen). >5% = debt spiral acceleration.",
      source: "US Treasury" },
  ]
};

function MacroAlarms() {
  var _s = useState(true), expanded = _s[0], setExpanded = _s[1];
  var alarms = MACRO_ALARMS.indicators;
  var getStatus = function(ind) {
    if (ind.value >= ind.threshold_red) return { label: "ALARM", color: "#ef4444", bg: "rgba(239,68,68,0.15)" };
    if (ind.value >= ind.threshold_yellow) return { label: "WATCH", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" };
    return { label: "OK", color: "#22c55e", bg: "rgba(34,197,94,0.08)" };
  };
  var activeAlarms = alarms.filter(function(a) { return a.value >= a.threshold_yellow; }).length;
  var overallStatus = activeAlarms === 0 ? { label: "ALL CLEAR — normal mode, stock-specific drivers dominate", color: "#22c55e" }
    : activeAlarms <= 2 ? { label: "WATCH — " + activeAlarms + " indicator(s) elevated, monitor closely", color: "#f59e0b" }
    : { label: "DANGER — " + activeAlarms + " alarms active, global liquidity = PRIMARY driver", color: "#ef4444" };

  return React.createElement("div", { style: { background: "rgba(99,102,241,0.06)", borderRadius: 12, padding: 16, marginBottom: 18, border: "1px solid rgba(99,102,241,0.2)" } },
    React.createElement("div", { onClick: function() { setExpanded(!expanded); }, style: { cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" } },
      React.createElement("div", null,
        React.createElement("span", { style: { fontSize: 15, fontWeight: 700 } }, "🚨 HOWELL LIQUIDITY ALARMS"),
        React.createElement("span", { style: { fontSize: 11, marginLeft: 8, opacity: 0.5 } }, "updated: " + MACRO_ALARMS.updated)
      ),
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
        React.createElement("span", { style: { fontSize: 12, color: overallStatus.color, fontWeight: 600 } }, overallStatus.label),
        React.createElement("span", { style: { fontSize: 12, opacity: 0.5 } }, expanded ? "▲" : "▼")
      )
    ),
    expanded && React.createElement("div", { style: { marginTop: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8 } },
      alarms.map(function(ind) {
        var st = getStatus(ind);
        var pct = Math.min(100, (ind.value / ind.threshold_red) * 100);
        return React.createElement("div", { key: ind.id, style: { background: st.bg, borderRadius: 8, padding: "10px 12px", border: "1px solid " + st.color + "33" } },
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 } },
            React.createElement("span", { style: { fontSize: 12, fontWeight: 600 } }, ind.name),
            React.createElement("span", { style: { fontSize: 11, fontWeight: 700, color: st.color, background: st.color + "22", padding: "1px 6px", borderRadius: 4 } }, st.label)
          ),
          React.createElement("div", { style: { fontSize: 20, fontWeight: 700, color: st.color } }, ind.value + (ind.unit ? ind.unit : "")),
          React.createElement("div", { style: { height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2, marginTop: 4, overflow: "hidden" } },
            React.createElement("div", { style: { width: pct + "%", height: "100%", background: st.color, borderRadius: 2 } })
          ),
          React.createElement("div", { style: { fontSize: 9, opacity: 0.5, marginTop: 4 } }, "Yellow: " + ind.threshold_yellow + " | Red: " + ind.threshold_red),
          React.createElement("div", { style: { fontSize: 9, opacity: 0.4, marginTop: 2 } }, ind.desc)
        );
      })
    ),
    expanded && React.createElement("div", { style: { marginTop: 10, fontSize: 10, opacity: 0.5, fontStyle: "italic" } },
      "Framework: Howell (CrossBorder Capital) debt-liquidity cycle. When alarms fire = global liquidity overrides stock-specific drivers. All money anywhere must be somewhere."
    )
  );
}

function CatalystTimeline() {
  var _s = useState(true), expanded = _s[0], setExpanded = _s[1];
  var _f = useState("all"), catFilter = _f[0], setCatFilter = _f[1];
  var today = new Date().toISOString().slice(0, 10);
  var filtered = catFilter === "all" ? CATALYSTS : CATALYSTS.filter(function(c) { return c.type === catFilter; });
  var todayIdx = -1;
  for (var i = 0; i < filtered.length; i++) {
    if (filtered[i].date >= today) { todayIdx = i; break; }
  }
  if (todayIdx === -1) todayIdx = filtered.length;
  var impactColors = { high: "#F87171", medium: "#FACC15", low: "#71717A" };
  var impactLabels = { high: "HIGH", medium: "MED", low: "LOW" };
  var fmtDate = function(d) {
    var parts = d.split("-");
    var months = ["", "STY", "LUT", "MAR", "KWI", "MAJ", "CZE", "LIP", "SIE", "WRZ", "PAŹ", "LIS", "GRU"];
    return parseInt(parts[2]) + " " + months[parseInt(parts[1])];
  };
  var daysUntil = function(d) {
    var t = new Date(today); var e = new Date(d);
    var diff = Math.round((e - t) / 86400000);
    if (diff < 0) return "−" + Math.abs(diff) + "d";
    if (diff === 0) return "DZIŚ";
    return "+" + diff + "d";
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <div onClick={function() { setExpanded(!expanded); }} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginBottom: expanded ? 12 : 0, userSelect: "none" }}>
        <span style={{ fontSize: 16 }}>📅</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 14, color: "#F5F5F0" }}>Catalyst Timeline</div>
          <div style={{ fontSize: 11, color: "#71717A" }}>Makro + earnings + regulatory — najbliższe 45 dni</div>
        </div>
        <span style={{ fontSize: 10, color: "#C084FC", background: "#C084FC18", padding: "3px 8px", borderRadius: 4, fontWeight: 600 }}>{CATALYSTS.length + " eventów"}</span>
        <span style={{ color: "#71717A", fontSize: 14, transition: "transform 0.2s", transform: expanded ? "rotate(0)" : "rotate(-90deg)" }}>▾</span>
      </div>
      {expanded && (
        <div style={{ background: "#1E1E1C", border: "1px solid #2A2A26", borderRadius: 12, padding: "16px 18px", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 16 }}>
            <button onClick={function() { setCatFilter("all"); }} style={{ padding: "4px 10px", borderRadius: 6, border: catFilter === "all" ? "1px solid #A1A19A44" : "1px solid #2A2A2600", background: catFilter === "all" ? "#A1A19A15" : "transparent", color: catFilter === "all" ? "#F5F5F0" : "#71717A", fontSize: 10, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Wszystkie</button>
            {Object.keys(CAT_TYPES).map(function(k) {
              var t = CAT_TYPES[k]; var act = catFilter === k;
              return <button key={k} onClick={function() { setCatFilter(act ? "all" : k); }} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 6, border: act ? "1px solid " + t.color + "44" : "1px solid #2A2A2600", background: act ? t.color + "12" : "transparent", color: act ? t.color : "#71717A", fontSize: 10, fontWeight: 500, fontFamily: "inherit", cursor: "pointer" }}><span style={{ fontSize: 11 }}>{t.icon}</span>{t.label}</button>;
            })}
          </div>
          <div style={{ position: "relative", paddingLeft: 28 }}>
            <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #2A2A26, #C084FC33, #2A2A26)", borderRadius: 1 }} />
            {filtered.map(function(cat, idx) {
              var t = CAT_TYPES[cat.type] || CAT_TYPES.macro;
              var isPast = cat.date < today;
              var isToday = cat.date === today;
              var du = daysUntil(cat.date);
              var nodeColor = isToday ? "#F5F5F0" : isPast ? "#3A3A36" : t.color;
              return (
                <div key={idx} style={{ position: "relative", marginBottom: idx < filtered.length - 1 ? 4 : 0, opacity: isPast ? 0.45 : 1 }}>
                  {idx === todayIdx && !isToday && (
                    <div style={{ position: "relative", marginBottom: 6, marginLeft: -28, display: "flex", alignItems: "center", gap: 0 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#F5F5F0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "#141412", fontWeight: 700, flexShrink: 0, border: "2px solid #F5F5F0", boxShadow: "0 0 12px #F5F5F044", zIndex: 2 }}>▶</div>
                      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, #F5F5F066, transparent)", marginLeft: -1 }} />
                      <span style={{ fontSize: 9, fontWeight: 700, color: "#F5F5F0", letterSpacing: "0.1em", marginLeft: 6 }}>DZIŚ — {fmtDate(today)}</span>
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "7px 10px", borderRadius: 8, background: isToday ? "#F5F5F008" : "transparent", border: isToday ? "1px solid #F5F5F012" : "1px solid transparent" }}>
                    <div style={{ position: "absolute", left: -22, top: 12, width: 8, height: 8, borderRadius: "50%", background: nodeColor, boxShadow: isToday ? "0 0 10px " + nodeColor + "88" : "none", flexShrink: 0, zIndex: 1 }} />
                    <div style={{ width: 52, flexShrink: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: isPast ? "#71717A" : "#A1A19A", fontVariantNumeric: "tabular-nums" }}>{fmtDate(cat.date)}</div>
                      {cat.dateEnd && <div style={{ fontSize: 9, color: "#71717A" }}>→ {fmtDate(cat.dateEnd)}</div>}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 11, fontWeight: 500, color: isPast ? "#71717A" : "#E5E5DF", lineHeight: 1.4 }}>{cat.label}</span>
                      </div>
                      {cat.tickers.length > 0 && (
                        <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginTop: 3 }}>
                          {cat.tickers.map(function(tk) { return <span key={tk} style={{ fontSize: 9, fontWeight: 600, padding: "1px 5px", borderRadius: 3, background: t.color + "15", color: t.color, border: "1px solid " + t.color + "22" }}>{tk}</span>; })}
                        </div>
                      )}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                      <span style={{ fontSize: 9, fontWeight: 600, padding: "2px 6px", borderRadius: 3, background: t.color + "15", color: t.color }}>{t.icon} {t.label}</span>
                      <span style={{ fontSize: 9, fontWeight: 700, color: impactColors[cat.impact], padding: "2px 5px", borderRadius: 3, background: impactColors[cat.impact] + "12" }}>{impactLabels[cat.impact]}</span>
                      <span style={{ fontSize: 10, fontWeight: 600, color: isToday ? "#F5F5F0" : isPast ? "#3A3A36" : du.indexOf("+") === 0 && parseInt(du.slice(1)) <= 7 ? "#FACC15" : "#71717A", fontVariantNumeric: "tabular-nums", minWidth: 32, textAlign: "right" }}>{du}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function Dot({ sig, sz = 10 }) {
  var s = SIG[sig] || SIG.gray;
  return <span style={{ display: "inline-block", width: sz, height: sz, borderRadius: "50%", background: s.dot, boxShadow: "0 0 " + sz + "px " + s.dot + "66", flexShrink: 0 }} />;
}

function Pill({ l, v }) {
  return <span style={{ fontSize: 10, background: "#ffffff0A", border: "1px solid #ffffff12", borderRadius: 4, padding: "2px 7px", color: "#C8C8BF", whiteSpace: "nowrap" }}><span style={{ color: "#71717A", marginRight: 4 }}>{l}</span>{v}</span>;
}

function FVBar({ s }) {
  if (!s.analyzed) return null;
  var mn = s.bargain * 0.85, mx = s.expensive * 1.15, rng = mx - mn;
  var p = function(v) { return ((v - mn) / rng) * 100; };
  var zn = [
    { l: p(mn), w: p(s.entryZone) - p(mn), c: "#4ADE8033" },
    { l: p(s.entryZone), w: p(s.fairValueHigh) - p(s.entryZone), c: "#FACC1533" },
    { l: p(s.fairValueHigh), w: p(mx) - p(s.fairValueHigh), c: "#F8717133" },
  ];
  var mk = [
    { v: s.bargain, t: "$" + s.bargain, c: "#4ADE80", pos: "top" },
    { v: s.entryZone, t: "$" + s.entryZone, c: "#4ADE80", pos: "bottom" },
    { v: s.fairValueLow, t: "$" + s.fairValueLow + " FV", c: "#FACC15", pos: "top" },
    { v: s.analystTarget, t: "$" + s.analystTarget + " WS", c: "#A1A1AA", pos: "bottom" },
    { v: s.price, t: "$" + s.price + " teraz", c: "#FFF", pos: "top", b: true },
    { v: s.expensive, t: "$" + s.expensive, c: "#F87171", pos: "bottom" },
  ];
  return (
    <div style={{ position: "relative", height: 56, margin: "12px 0 8px" }}>
      <div style={{ position: "absolute", top: 18, left: 0, right: 0, height: 20, background: "#2A2A26", borderRadius: 6, overflow: "hidden" }}>
        {zn.map(function(z, i) { return <div key={i} style={{ position: "absolute", left: Math.max(0, z.l) + "%", width: Math.min(100, z.w) + "%", height: "100%", background: z.c }} />; })}
      </div>
      {mk.map(function(m, i) {
        var st = {};
        st[m.pos === "top" ? "bottom" : "top"] = 32;
        return (
          <div key={i} style={{ position: "absolute", left: Math.min(97, Math.max(1, p(m.v))) + "%", top: 14, width: m.b ? 3 : 2, height: 28, background: m.c, borderRadius: 1, transform: "translateX(-50%)" }}>
            <span style={Object.assign({ position: "absolute", left: "50%", transform: "translateX(-50%)", fontSize: 9, fontWeight: m.b ? 700 : 500, color: m.c, whiteSpace: "nowrap" }, st)}>{m.t}</span>
          </div>
        );
      })}
    </div>
  );
}

function StockCard({ stock }) {
  var c = SIG[stock.signal] || SIG.gray;
  var _s = useState(false), open = _s[0], setOpen = _s[1];
  var has = stock.analyzed;
  return (
    <div style={{ background: c.bg, border: "1px solid " + c.border + "44", borderRadius: 10, padding: "14px 16px", marginBottom: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: stock.analyzed ? 2 : 0, flexWrap: "wrap" }}>
        <Dot sig={stock.signal} sz={10} />
        <span style={{ fontWeight: 600, fontSize: 14, color: "#F5F5F0" }}>{stock.ticker}</span>
        <span style={{ fontSize: 12, color: "#A1A19A" }}>{stock.name}</span>
        <span style={{ marginLeft: "auto", fontSize: 13, fontWeight: 600, color: stock.price ? "#F5F5F0" : "#71717A", fontVariantNumeric: "tabular-nums" }}>{stock.price ? "$" + stock.price : "\u2014"}</span>
        <span style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: c.text, background: c.dot + "18", padding: "3px 8px", borderRadius: 4 }}>{c.label}</span>
        {stock.conviction && <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.08em", padding: "2px 6px", borderRadius: 3, background: stock.conviction === "HIGH" ? "#4ADE8020" : stock.conviction === "MEDIUM" ? "#FACC1520" : "#F8717120", color: stock.conviction === "HIGH" ? "#4ADE80" : stock.conviction === "MEDIUM" ? "#FACC15" : "#F87171", textTransform: "uppercase" }}>{stock.conviction === "HIGH" ? "\u2B50 HIGH" : stock.conviction === "MEDIUM" ? "\u26A0\uFE0F MED" : "\u26A1 LOW"}</span>}
        <TechBadge ticker={stock.ticker} />
      </div>
      {stock.analyzed && <FVBar s={stock} />}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: stock.analyzed ? 8 : 6 }}>
        {stock.pe && <Pill l="P/E" v={stock.pe} />}
        {stock.revGrowth && <Pill l="Wzrost" v={stock.revGrowth} />}
        {stock.dividend && <Pill l="Dywidenda" v={stock.dividend} />}
        {stock.analyzed && (function() {
          var up = stock.fairValueHigh > stock.price ? ((stock.fairValueHigh / stock.price - 1) * 100) : 0;
          var dn = stock.entryZone < stock.price ? ((1 - stock.entryZone / stock.price) * 100) : 1;
          var rr = dn > 0 ? (up / dn) : (up > 0 ? 99 : 0);
          var rrTxt = "1:" + rr.toFixed(1) + " (+" + up.toFixed(0) + "% / -" + dn.toFixed(0) + "%)";
          var rrC = rr >= 3 ? "#4ADE80" : rr >= 1.5 ? "#60A5FA" : rr >= 0.8 ? "#FACC15" : "#F87171";
          return <span style={{ fontSize: 10, background: rrC + "12", border: "1px solid " + rrC + "33", borderRadius: 4, padding: "2px 7px", color: rrC, whiteSpace: "nowrap", fontWeight: 600 }}><span style={{ color: "#71717A", marginRight: 4, fontWeight: 400 }}>R/R</span>{rrTxt}</span>;
        })()}
        {stock.moat && <Pill l="Moat" v={stock.moat} />}
      </div>
      <div style={{ fontSize: 11, color: "#A1A19A", marginTop: 6, lineHeight: 1.5 }}>{stock.note}</div>
      {has && (
        <div style={{ marginTop: 10 }}>
          <button onClick={function() { setOpen(!open); }} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 6, border: "1px solid " + c.border + "66", background: open ? c.dot + "12" : "transparent", color: open ? c.text : "#A1A19A", fontSize: 11, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", width: "100%", justifyContent: "center" }}>
            <span style={{ fontSize: 13, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>{"\u25BE"}</span>
            {open ? "Ukryj werdykt" : "Poka\u017c werdykt"}
          </button>
          {open && (
            <div style={{ marginTop: 10, padding: 12, background: "#0A0A09", borderRadius: 8, border: "1px solid #2A2A2622" }}>
              <div style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: c.text, marginBottom: 4 }}>Werdykt</div>
              <div style={{ fontSize: 12, color: "#E5E5DF", lineHeight: 1.6 }}>{stock.verdict}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SectorBlock({ sector, stocks }) {
  var _s = useState(true), exp = _s[0], setExp = _s[1];
  var an = stocks.filter(function(s) { return s.analyzed; }).length;
  if (stocks.length === 0) return null;
  return (
    <div style={{ marginBottom: 24 }}>
      <div onClick={function() { setExp(!exp); }} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginBottom: 10, userSelect: "none" }}>
        <span style={{ fontSize: 18 }}>{sector.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 15, color: "#F5F5F0" }}>{sector.name}</div>
          <div style={{ fontSize: 11, color: "#71717A" }}>{sector.subtitle}</div>
        </div>
        <span style={{ fontSize: 10, color: sector.color, background: sector.color + "18", padding: "3px 8px", borderRadius: 4, fontWeight: 600 }}>{an + "/" + stocks.length + " przeanalizowane"}</span>
        <span style={{ color: "#71717A", fontSize: 14, transition: "transform 0.2s", transform: exp ? "rotate(0)" : "rotate(-90deg)" }}>{"\u25BE"}</span>
      </div>
      {exp && <div style={{ borderLeft: "2px solid " + sector.color + "33", paddingLeft: 16, marginLeft: 9 }}>{stocks.map(function(s) { return <StockCard key={s.ticker} stock={s} />; })}</div>}
    </div>
  );
}

export default function Dashboard() {
  var _s1 = useState(""), search = _s1[0], setSearch = _s1[1];
  var _s2 = useState("all"), filter = _s2[0], setFilter = _s2[1];
  var _s3 = useState("all"), sectorFilter = _s3[0], setSectorFilter = _s3[1];
  var _s4 = useState("all"), convictionFilter = _s4[0], setConvictionFilter = _s4[1];
  var all = SECTORS.flatMap(function(s) { return s.stocks; });
  var matchSearch = function(st) { if (!search) return true; var q = search.toLowerCase(); return st.ticker.toLowerCase().indexOf(q) >= 0 || st.name.toLowerCase().indexOf(q) >= 0; };
  var matchFilter = function(st) { return filter === "all" || st.signal === filter; };
  var matchConviction = function(st) { return convictionFilter === "all" || st.conviction === convictionFilter; };
  var filtered = SECTORS.map(function(sec) { if (sectorFilter !== "all" && sec.name !== sectorFilter) return { name: sec.name, icon: sec.icon, subtitle: sec.subtitle, color: sec.color, fs: [] }; return { name: sec.name, icon: sec.icon, subtitle: sec.subtitle, color: sec.color, fs: sec.stocks.filter(function(s) { return matchSearch(s) && matchFilter(s) && matchConviction(s); }) }; });
  var totalVis = filtered.reduce(function(a, s) { return a + s.fs.length; }, 0);
  var isF = search || filter !== "all" || sectorFilter !== "all" || convictionFilter !== "all";

  return (
    <div style={{ background: "#141412", color: "#F5F5F0", minHeight: "100vh", fontFamily: "'DM Sans', -apple-system, sans-serif", padding: "28px 24px" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 11, color: "#71717A", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>Investment Dashboard</div>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0, letterSpacing: "-0.03em" }}>AI Bottleneck Stocks</h1>
        <div style={{ fontSize: 12, color: "#71717A", marginTop: 6 }}>Ostatnia aktualizacja: 14 kwietnia 2026 11:15 (Yahoo Finance live) | Crypto: 14 kwietnia 2026</div>
      </div>
      <div style={{ display: "flex", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 500px", background: "#1E1E1C", border: "1px solid #2A2A26", borderRadius: 12, padding: "16px 16px 8px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#A1A19A", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>Signal Distribution — historia</div>
          {(function() {
            var liveGreen = 0, liveBlue = 0, liveYellow = 0, liveRed = 0;
            all.forEach(function(s) {
              var mid = (s.fairValueLow + s.fairValueHigh) / 2;
              var pct = ((s.price / mid - 1) * 100);
              if (s.price < s.fairValueLow) liveGreen++;
              else if (s.price <= mid) liveBlue++;
              else if (s.price <= s.fairValueHigh) liveYellow++;
              else liveRed++;
            });
            return <ResponsiveContainer width="100%" height={180}>
            <BarChart data={SIGNAL_HISTORY.concat([{ date: "LIVE", green: liveGreen, blue: liveBlue, yellow: liveYellow, red: liveRed }])} barCategoryGap="25%">
              <XAxis dataKey="date" tick={{ fill: "#71717A", fontSize: 11 }} axisLine={{ stroke: "#2A2A26" }} tickLine={false} />
              <YAxis tick={{ fill: "#71717A", fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 85]} />
              <Tooltip contentStyle={{ background: "#1E1E1C", border: "1px solid #2A2A26", borderRadius: 8, fontSize: 11 }} itemStyle={{ padding: 0 }} />
              <Legend wrapperStyle={{ fontSize: 10 }} />
              <Bar dataKey="green" name="Okazja" stackId="a" fill="#4ADE80" radius={[0,0,0,0]} />
              <Bar dataKey="blue" name="Fair Value" stackId="a" fill="#60A5FA" />
              <Bar dataKey="yellow" name="Powyżej FV" stackId="a" fill="#FACC15" />
              <Bar dataKey="red" name={String("Przep\u0142acone")} stackId="a" fill="#F87171" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>;
          })()}
        </div>
      </div>
      {(function() {
        var _st = useState(false), showTbl = _st[0], setShowTbl = _st[1];
        var _srt = useState("status"), sortKey = _srt[0], setSortKey = _srt[1];
        var _dir = useState(1), sortDir = _dir[0], setSortDir = _dir[1];
        var rows = all.map(function(s) {
          var mid = (s.fairValueLow + s.fairValueHigh) / 2;
          var pctVsFV = ((s.price / mid - 1) * 100);
          var status = s.price < s.fairValueLow ? "OKAZJA" : s.price <= mid ? "FAIR VALUE" : s.price <= s.fairValueHigh ? "POWYŻEJ FV" : "PRZEPŁACONE";
          var statusColor = status === "OKAZJA" ? "#4ADE80" : status === "FAIR VALUE" ? "#60A5FA" : status === "POWYŻEJ FV" ? "#FACC15" : "#F87171";
          var rsi = RSI_DATA[s.ticker] || null;
          var upside = s.fairValueHigh > s.price ? ((s.fairValueHigh / s.price - 1) * 100) : 0;
          var downside = s.entryZone < s.price ? ((1 - s.entryZone / s.price) * 100) : 1;
          var rrRatio = downside > 0 ? (upside / downside) : (upside > 0 ? 99 : 0);
          var rrLabel = rrRatio > 9.9 ? "1:9.9+" : (downside > 0 ? "1:" + rrRatio.toFixed(1) : "—");
          var rrColor = rrRatio >= 3 ? "#4ADE80" : rrRatio >= 1.5 ? "#60A5FA" : rrRatio >= 0.8 ? "#FACC15" : "#F87171";
          return { ticker: s.ticker, name: s.name, price: s.price, fvLow: s.fairValueLow, fvHigh: s.fairValueHigh, expensive: s.expensive || 0, pctVsFV: pctVsFV, status: status, statusColor: statusColor, signal: s.signal, rsi: rsi, rrRatio: rrRatio, rrLabel: rrLabel, rrColor: rrColor, upside: upside, downside: downside };
        });
        var doSort = function(key) { if (sortKey === key) { setSortDir(-sortDir); } else { setSortKey(key); setSortDir(1); } };
        var sorted = rows.slice().sort(function(a, b) {
          if (sortKey === "ticker") return a.ticker.localeCompare(b.ticker) * sortDir;
          if (sortKey === "pct") return (a.pctVsFV - b.pctVsFV) * sortDir;
          if (sortKey === "status") { var o = { "OKAZJA": 0, "FAIR VALUE": 1, "POWYŻEJ FV": 2, "PRZEPŁACONE": 3 }; return (o[a.status] - o[b.status]) * sortDir; }
          if (sortKey === "rr") return (a.rrRatio - b.rrRatio) * sortDir;
          if (sortKey === "rsi") return ((a.rsi||50) - (b.rsi||50)) * sortDir;
          return 0;
        });
        var thS = { padding: "6px 8px", fontSize: 10, fontWeight: 600, color: "#A1A19A", textAlign: "left", borderBottom: "1px solid #2A2A26", cursor: "pointer", userSelect: "none", whiteSpace: "nowrap" };
        var tdS = { padding: "5px 8px", fontSize: 11, borderBottom: "1px solid #1E1E1C", whiteSpace: "nowrap" };
        return <div style={{ marginBottom: 20 }}>
          <div onClick={function() { setShowTbl(!showTbl); }} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", padding: "10px 14px", background: "#1E1E1C", borderRadius: 10, border: "1px solid #2A2A26", userSelect: "none" }}>
            <span style={{ fontSize: 14 }}>{"\uD83D\uDCCA"}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#F5F5F0", flex: 1 }}>Tabela podsumowująca — {all.length} pozycji (spółki + crypto L1)</span>
            <span style={{ fontSize: 10, color: "#4ADE80", background: "#4ADE8018", padding: "2px 8px", borderRadius: 4 }}>{rows.filter(function(r){return r.status==="OKAZJA"}).length + " okazji"}</span>
            <span style={{ fontSize: 10, color: "#60A5FA", background: "#60A5FA18", padding: "2px 8px", borderRadius: 4 }}>{rows.filter(function(r){return r.status==="FAIR VALUE"}).length + " FV"}</span>
            <span style={{ fontSize: 10, color: "#FACC15", background: "#FACC1518", padding: "2px 8px", borderRadius: 4 }}>{rows.filter(function(r){return r.status==="POWYŻEJ FV"}).length + " >FV"}</span>
            <span style={{ fontSize: 10, color: "#F87171", background: "#F8717118", padding: "2px 8px", borderRadius: 4 }}>{rows.filter(function(r){return r.status==="PRZEPŁACONE"}).length + " drogich"}</span>
            <span style={{ color: "#71717A", fontSize: 14, transition: "transform 0.2s", transform: showTbl ? "rotate(0)" : "rotate(-90deg)" }}>{"\u25BE"}</span>
          </div>
          {showTbl && <div style={{ overflowX: "auto", marginTop: 8, background: "#1A1A18", borderRadius: 10, border: "1px solid #2A2A26" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
              <thead><tr style={{ background: "#1E1E1C" }}>
                <th style={thS} onClick={function(){doSort("ticker")}}>Ticker {sortKey==="ticker" ? (sortDir>0?"\u25B2":"\u25BC"):""}</th>
                <th style={thS}>Nazwa</th>
                <th style={Object.assign({}, thS, {textAlign:"right"})}>Cena</th>
                <th style={Object.assign({}, thS, {textAlign:"right"})}>FV Low</th>
                <th style={Object.assign({}, thS, {textAlign:"right"})}>FV High</th>
                <th style={Object.assign({}, thS, {textAlign:"right"})}>Drogo</th>
                <th style={Object.assign({}, thS, {textAlign:"right"})} onClick={function(){doSort("pct")}}>vs FV {sortKey==="pct" ? (sortDir>0?"\u25B2":"\u25BC"):""}</th>
                <th style={Object.assign({}, thS, {textAlign:"center"})} onClick={function(){doSort("rr")}}>R/R {sortKey==="rr" ? (sortDir>0?"\u25B2":"\u25BC"):""}</th>
                <th style={thS} onClick={function(){doSort("status")}}>Status {sortKey==="status" ? (sortDir>0?"\u25B2":"\u25BC"):""}</th>
                <th style={Object.assign({}, thS, {textAlign:"center"})} onClick={function(){doSort("rsi")}}>RSI {sortKey==="rsi" ? (sortDir>0?"\u25B2":"\u25BC"):""}</th>
              </tr></thead>
              <tbody>{sorted.map(function(r) {
                var pctColor = r.price < r.fvLow ? "#4ADE80" : r.price <= (r.fvLow + r.fvHigh) / 2 ? "#60A5FA" : r.price <= r.fvHigh ? "#FACC15" : "#F87171";
                return <tr key={r.ticker} style={{ background: r.status==="OKAZJA" ? "#4ADE8008" : r.status==="PRZEPŁACONE" ? "#F8717108" : "transparent" }}>
                  <td style={Object.assign({}, tdS, {fontWeight:600, color:"#F5F5F0"})}>{r.ticker}</td>
                  <td style={Object.assign({}, tdS, {color:"#A1A19A", maxWidth:120, overflow:"hidden", textOverflow:"ellipsis"})}>{r.name}</td>
                  <td style={Object.assign({}, tdS, {textAlign:"right", color:"#F5F5F0", fontVariantNumeric:"tabular-nums"})}>{typeof r.price === "number" && r.price > 10000 ? (r.price/1000).toFixed(0)+"K" : r.price}</td>
                  <td style={Object.assign({}, tdS, {textAlign:"right", color:"#71717A", fontVariantNumeric:"tabular-nums"})}>{typeof r.fvLow === "number" && r.fvLow > 10000 ? (r.fvLow/1000).toFixed(0)+"K" : r.fvLow}</td>
                  <td style={Object.assign({}, tdS, {textAlign:"right", color:"#71717A", fontVariantNumeric:"tabular-nums"})}>{typeof r.fvHigh === "number" && r.fvHigh > 10000 ? (r.fvHigh/1000).toFixed(0)+"K" : r.fvHigh}</td>
                  <td style={Object.assign({}, tdS, {textAlign:"right", color:"#71717A", fontVariantNumeric:"tabular-nums"})}>{typeof r.expensive === "number" && r.expensive > 10000 ? (r.expensive/1000).toFixed(0)+"K" : r.expensive}</td>
                  <td style={Object.assign({}, tdS, {textAlign:"right", fontWeight:600, color:pctColor, fontVariantNumeric:"tabular-nums"})}>{(r.pctVsFV >= 0 ? "+" : "") + r.pctVsFV.toFixed(0) + "%"}</td>
                  <td style={Object.assign({}, tdS, {textAlign:"center", fontWeight:600, color:r.rrColor, fontSize:10})}>{r.rrLabel}</td>
                  <td style={tdS}><span style={{padding:"2px 8px", borderRadius:4, fontSize:10, fontWeight:600, color:r.statusColor, background:r.statusColor+"18"}}>{r.status}</span></td>
                  <td style={Object.assign({}, tdS, {textAlign:"center", fontWeight:600, fontSize:11, color: r.rsi > 70 ? "#F87171" : r.rsi < 30 ? "#4ADE80" : "#A1A19A"})}>{r.rsi ? r.rsi.toFixed(0) : "\u2014"}</td>
                </tr>;
              })}</tbody>
            </table>
          </div>}
        </div>;
      })()}
      <MacroAlarms />
      <CatalystTimeline />
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#A1A19A", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Filtruj po sektorze</div>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 14 }}>
          <button onClick={function() { setSectorFilter("all"); }} style={{ padding: "6px 12px", borderRadius: 7, border: sectorFilter === "all" ? "1px solid #A1A19A66" : "1px solid #2A2A26", background: sectorFilter === "all" ? "#A1A19A18" : "#1E1E1C", color: sectorFilter === "all" ? "#F5F5F0" : "#71717A", fontSize: 11, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Wszystkie <span style={{ fontSize: 10, opacity: 0.6 }}>({all.length})</span></button>
          {SECTORS.map(function(sec) {
            var act = sectorFilter === sec.name;
            var cnt = sec.stocks.length;
            var greenCnt = sec.stocks.filter(function(s) { return s.signal === "green"; }).length;
            return <button key={sec.name} onClick={function() { setSectorFilter(act ? "all" : sec.name); }} style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 10px", borderRadius: 7, border: act ? "1px solid " + sec.color + "66" : "1px solid #2A2A26", background: act ? sec.color + "15" : "#1E1E1C", color: act ? sec.color : "#A1A19A", fontSize: 11, fontWeight: 500, fontFamily: "inherit", cursor: "pointer", whiteSpace: "nowrap" }}><span style={{ fontSize: 13 }}>{sec.icon}</span><span>{sec.name.split("/")[0].split("(")[0].trim()}</span><span style={{ fontSize: 9, opacity: 0.5 }}>{cnt}</span>{greenCnt > 0 && <span style={{ fontSize: 9, color: "#4ADE80", opacity: 0.7 }}>{greenCnt + "\uD83D\uDFE2"}</span>}</button>;
          })}
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#A1A19A", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Conviction tier</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {[{key: "all", label: "Wszystkie", color: "#A1A19A"}, {key: "HIGH", label: "\u2B50 High", color: "#4ADE80"}, {key: "MEDIUM", label: "\u26A0\uFE0F Medium", color: "#FACC15"}, {key: "LOW", label: "\u26A1 Low", color: "#F87171"}].map(function(c) {
            var act = convictionFilter === c.key;
            var cnt = c.key === "all" ? all.length : all.filter(function(s) { return s.conviction === c.key; }).length;
            return <button key={c.key} onClick={function() { setConvictionFilter(act ? "all" : c.key); }} style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 12px", borderRadius: 7, border: act ? "1px solid " + c.color + "66" : "1px solid #2A2A26", background: act ? c.color + "15" : "#1E1E1C", color: act ? c.color : "#A1A19A", fontSize: 11, fontWeight: 500, fontFamily: "inherit", cursor: "pointer" }}>{c.label} <span style={{ fontSize: 10, opacity: 0.6 }}>({cnt})</span></button>;
          })}
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ position: "relative", marginBottom: 12 }}>
          <input type="text" placeholder="Szukaj po tickerze lub nazwie..." value={search} onChange={function(e) { setSearch(e.target.value); }} style={{ width: "100%", boxSizing: "border-box", padding: "12px 40px 12px 14px", background: "#1E1E1C", border: search ? "1px solid #60A5FA55" : "1px solid #2A2A26", borderRadius: 10, color: "#F5F5F0", fontSize: 13, fontFamily: "inherit", outline: "none" }} />
          {search && <span onClick={function() { setSearch(""); }} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#71717A", cursor: "pointer", fontSize: 16 }}>{"\u2715"}</span>}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {FILT.map(function(f) {
            var act = filter === f.key;
            var cnt = f.key === "all" ? all.length : all.filter(function(s) { return s.signal === f.key; }).length;
            return <button key={f.key} onClick={function() { setFilter(act ? "all" : f.key); }} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 8, border: act ? "1px solid " + f.color + "66" : "1px solid #2A2A26", background: act ? f.color + "18" : "#1E1E1C", color: act ? f.color : "#A1A19A", fontSize: 12, fontWeight: 500, fontFamily: "inherit", cursor: "pointer" }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: f.color, opacity: act ? 1 : 0.4 }} />{f.label} <span style={{ fontSize: 10, opacity: 0.6 }}>({cnt})</span></button>;
          })}
          {isF && <button onClick={function() { setSearch(""); setFilter("all"); setSectorFilter("all"); setConvictionFilter("all"); }} style={{ padding: "7px 12px", borderRadius: 8, border: "1px solid #F8717144", background: "#F8717112", color: "#F87171", fontSize: 11, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>{"\u2715 Resetuj"}</button>}
        </div>
        {isF && <div style={{ fontSize: 11, color: "#71717A", marginTop: 8 }}>{"Wy\u015bwietlam " + totalVis + " z " + all.length + " sp\u00f3\u0142ek" + (sectorFilter !== "all" ? " \u2014 " + sectorFilter : "") + (convictionFilter !== "all" ? " \u2014 Conviction: " + convictionFilter : "")}</div>}
      </div>
      {totalVis === 0 && <div style={{ textAlign: "center", padding: "40px 20px", color: "#71717A" }}><div style={{ fontSize: 14, fontWeight: 500 }}>Brak wynik\u00f3w</div></div>}
      {filtered.map(function(sec) { return <SectorBlock key={sec.name} sector={sec} stocks={sec.fs} />; })}
      <div style={{ marginTop: 32, padding: "14px 16px", background: "#1E1E1C", borderRadius: 10, border: "1px solid #2A2A26", fontSize: 11, color: "#71717A", lineHeight: 1.6 }}>
        <span style={{ fontWeight: 600, color: "#A1A19A" }}>Disclaimer:</span> Ten dashboard to narz\u0119dzie analityczne, NIE rekomendacja inwestycyjna. Wyceny z marca 2026. R/R = upside do FV High vs downside do Entry Zone. Pe\u0142ne wywiady i \u017ar\u00f3d\u0142a w knowledge-base.md (sekcja 5).
      </div>
    </div>
  );
}
