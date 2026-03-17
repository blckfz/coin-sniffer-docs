# Surge 5m — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Surge 5m"

Detects explosive short-term momentum using 9-condition multi-timeframe cascade + volume concentration proof.

::: warning
Must be applied to a **1-minute chart**. The script internally reconstructs 5m/15m/1h/8h windows using bar lookback. On any other timeframe, signals will be incorrect.
:::

## How signals are generated

### Bull signal — all 9 conditions must pass

| # | Condition | Purpose |
|---|-----------|---------|
| 1 | 5m change > threshold | Minimum move size |
| 2 | 24h change < safety cap | Not already overextended |
| 3 | 15m change > 5m change | Cascade: move building up |
| 4 | 1h change > 15m change | Cascade continues |
| 5 | 5m volume > floor | Minimum liquidity |
| 6 | 1h volume > floor | Sustained market interest |
| 7 | 5m vol > 15m vol ÷ 3 | Volume concentrated now |
| 8 | 5m vol > 1h vol ÷ 6 | Volume concentrated now |
| 9 | 5m vol > 8h vol ÷ 66 | Volume concentrated now |

**Bear**: identical, all price thresholds negated.

## Input parameters

### Thresholds group

| Input | Default | Description |
|-------|---------|-------------|
| 5m Change Threshold (%) | 0.6 | Minimum 5m price move to qualify |
| Daily Safety Cap (%) | 15 | If 24h change exceeds this, the signal is suppressed |
| Volume Floor 5m (USDT) | 100,000 | Minimum 5m volume in USDT |
| Volume Floor 1h (USDT) | 1,000,000 | Minimum 1h volume in USDT |

### Display group

| Input | Default | Description |
|-------|---------|-------------|
| Show Labels | On | Show Bull/Bear labels on the chart |
| Show Background Color | On | Color the candle background on signal bars |
| Show Debug Table | Off | Shows current values of all conditions in a corner table (useful for tuning) |
| Bull Color | Teal | Color for bull signals |
| Bear Color | Red | Color for bear signals |

### Moving Averages group

| Input | Default | Description |
|-------|---------|-------------|
| Show EMA 21 | On | Toggle EMA 21 line |
| Show EMA 34 | On | Toggle EMA 34 line |
| Show EMA 55 | On | Toggle EMA 55 line |
| EMA 21 Color | Blue | |
| EMA 34 Color | Purple | |
| EMA 55 Color | Orange | |

## Tuning tips

- **Lower the 5m threshold** (e.g., 0.3%) to catch more signals on small-cap or low-volatility coins. Expect more false positives.
- **Raise the safety cap** (e.g., 20%) if you want to trade already-trending coins during high-volatility days.
- **Enable the Debug Table** to see the live values of all 9 conditions when diagnosing why a signal didn't fire.
- **Raise volume floors** on large-cap coins (BTCUSDT, ETHUSDT) to filter out noise. Lower them for small-cap altcoins.

## Cooldown

15 bars (15 minutes) between same-type signals per chart.
