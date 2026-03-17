# Surge 60m — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Surge 60m"

Detects sustained macro momentum requiring alignment across the 1h, 8h, and 24h windows. Includes a **V2 mode** that adds BTC-relative outperformance filtering for higher-precision signals.

::: warning
Must be applied to a **1-minute chart**.
:::

## V1 — Standard Mode

**Bull**: the 1h move is meaningful, fits into a broader 8h trend, and the daily direction continues upward. Recent hourly volume represents a substantial portion of the 8h and daily totals — confirming the move is active now, not a residual from earlier.

**Bear**: identical structure, all price conditions inverted.

## V2 — BTC Relative Strength Mode

V2 adds an extra filter: the coin must be outperforming Bitcoin on the same 1-hour window. This removes coins that are simply rising or falling with the broader market and highlights genuine relative-strength leaders or laggards.

**Why V2?** A coin rising in line with BTC during a broad pump is unremarkable. V2 finds the coins that are outperforming or underperforming BTC significantly — which is a much stronger signal.

**Bull V2**: all standard V1 bull conditions + daily change positive + coin beats BTC on the 1h by a configurable margin.

**Bear V2**: all V1 bear conditions + daily change negative + coin underperforms BTC on the 1h.

## Input parameters

### Thresholds group

| Input | Description |
|-------|-------------|
| 1h Change Threshold (%) | Minimum 1h price move required |
| Daily Safety Cap (%) | Suppresses signal if 24h change exceeds this |
| Volume Floor 1h (USDT) | Minimum 1h volume required |
| Volume Floor 8h (USDT) | Minimum 8h volume required |
| Vol Ratio 1h/8h | Controls how much of the 8h volume must be represented by the current 1h volume |
| Vol Ratio 1h/1d | Same ratio check vs the daily volume |

### V2 group

| Input | Default | Description |
|-------|---------|-------------|
| Enable V2 Mode | Off | Toggle BTC relative strength filter |
| BTC Outperformance Margin (%) | Configurable | How much the coin must beat (or lag) BTC's 1h change |
| BTC Symbol | BINANCE:BTCUSDT.P | The BTC reference ticker |

### Display group

Same as other Surge indicators: Labels, Background Color, Debug Table, Bull/Bear colors, EMA 21/34/55.

## When to use V2

Enable V2 when:
- BTC is ranging or trending and you want to find coins with genuine relative strength
- You're getting too many signals during broad market pumps and want only the leaders
- You're trading on 1h+ timeframes and care about BTC-relative performance

Keep V2 off when:
- You want to catch all large moves regardless of BTC direction
- The market is highly volatile and BTC itself is swinging widely (V2 may fire too rarely)
