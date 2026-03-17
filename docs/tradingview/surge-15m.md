# Surge 15m — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Surge 15m"

Detects strong trending momentum anchored on the 15-minute window, requiring the move to be sustained and confirmed across the 1h and 8h timeframes, with volume concentrated in the current 15m period.

::: warning
Must be applied to a **1-minute chart**.
:::

## How signals are generated

**Bull**: price is trending up on the 15m and the move fits into a consistent 1h and 8h uptrend. Volume is concentrated in the recent 15m window, not distributed across older candles.

**Bear**: identical structure, all price conditions inverted.

The signal is suppressed when the daily move is already significantly extended.

## Input parameters

### Thresholds group

| Input | Description |
|-------|-------------|
| 15m Change Threshold (%) | Minimum 15m price move required to qualify |
| Daily Safety Cap (%) | Suppresses signal if the 24h change exceeds this |
| Volume Floor 15m (USDT) | Minimum 15m volume required |
| Volume Floor 1h (USDT) | Minimum 1h volume required |

### Display group

Same as [Surge 5m](/tradingview/surge-5m#display-group): Show Labels, Show Background Color, Show Debug Table, Bull/Bear colors.

### Moving Averages group

Same as Surge 5m: EMA 21/34/55 with toggles and color pickers.

## Surge 5m vs Surge 15m

| | Surge 5m | Surge 15m |
|--|----------|-----------|
| Anchor window | 5m | 15m |
| Timeframe stack | 5m → 15m → 1h | 15m → 1h → 8h |
| Conviction level | Shorter-term | Higher — move must be larger and sustained longer |

Surge 15m is a **higher conviction** signal. Use Surge 5m for shorter-term scalp setups and Surge 15m when you want a more established trend before acting.
