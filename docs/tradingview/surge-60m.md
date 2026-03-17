# Surge 60m — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Surge 60m"

Detects sustained macro momentum across 1h, 8h, and 24h windows. Includes a **V2 mode** that adds BTC-relative outperformance filtering.

::: warning
Must be applied to a **1-minute chart**.
:::

## V1 — Standard Mode

### Bull signal — all 8 conditions must pass

| # | Condition | Default |
|---|-----------|---------|
| 1 | 1h change > threshold | +1.6% |
| 2 | 24h change < safety cap | <15% |
| 3 | 8h change > 1h change | Hourly move fits into broader trend |
| 4 | 24h change > 8h change | Cascade to daily |
| 5 | 1h volume > floor | >500K USDT |
| 6 | 8h volume > floor | >5M USDT |
| 7 | Vol ratio 1h/8h: ratio × 1h vol > 8h vol | 6× (recent hourly is large vs 8h total) |
| 8 | Vol ratio 1h/1d: ratio × 1h vol > 24h vol | 16× |

**Bear**: all thresholds negated.

## V2 — BTC Relative Strength Mode

V2 mode adds two extra conditions on top of all V1 conditions:

| # | Additional condition | Default |
|---|---------------------|---------|
| 9 | 24h change > 0 | Daily direction must be positive (bull) / negative (bear) |
| 10 | Coin 1h change > BTC 1h change + outperformance margin | Coin beats Bitcoin on hourly by ≥0.5% |

**Why V2?** A coin rising 1.6% in an hour while Bitcoin is rising 1.5% is much less interesting than a coin rising 1.6% while Bitcoin is flat or falling. V2 filters out "everything is rising with BTC" and highlights genuine outliers.

For **V2 bear**: coin must underperform BTC by the margin (coin 1h change < BTC 1h change − margin) AND daily change must be negative.

## Input parameters

### Thresholds group

| Input | Default | Description |
|-------|---------|-------------|
| 1h Change Threshold (%) | 1.6 | Minimum 1h price move |
| Daily Safety Cap (%) | 15 | Suppresses signal if 24h change exceeds this |
| Volume Floor 1h (USDT) | 500,000 | Minimum 1h volume |
| Volume Floor 8h (USDT) | 5,000,000 | Minimum 8h volume |
| Vol Ratio 1h/8h | 6 | How many times the 1h volume must fit into 8h total |
| Vol Ratio 1h/1d | 16 | How many times the 1h volume must fit into daily total |

### V2 group

| Input | Default | Description |
|-------|---------|-------------|
| Enable V2 Mode | Off | Toggle BTC relative strength filter |
| BTC Outperformance Margin (%) | 0.5 | How much the coin must beat (or lag) BTC by |
| BTC Symbol | BINANCE:BTCUSDT.P | The BTC reference ticker (perpetuals) |

### Display group

Same as other Surge indicators: Labels, Background Color, Debug Table, colors, EMA 21/34/55.

## Cooldown

60 bars (1 hour) between same-type signals.

## When to use V2

Enable V2 when:
- BTC is in a ranging or uptrending market and you want to find coins with genuine relative strength
- You're getting too many signals during broad market pumps and want only the leaders
- You're trading on 1h timeframes and care about BTC-relative performance

Keep V2 off when:
- You want to catch all large moves regardless of BTC direction
- The market is very volatile and BTC itself is swinging wildly (V2 may fire too rarely)
