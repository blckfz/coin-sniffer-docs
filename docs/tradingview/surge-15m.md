# Surge 15m — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Surge 15m"

Detects strong trending momentum anchored on the 15-minute window, confirmed through 1h and 8h alignment.

::: warning
Must be applied to a **1-minute chart**.
:::

## How signals are generated

### Bull signal — all 8 conditions must pass

| # | Condition | Default |
|---|-----------|---------|
| 1 | 15m change > threshold | +1.0% |
| 2 | 24h change < safety cap | <15% |
| 3 | 1h change > 15m change | Cascade up |
| 4 | 8h change > 1h change | Cascade continues |
| 5 | 15m volume > floor | >400K USDT |
| 6 | 1h volume > floor | >1M USDT |
| 7 | 15m vol > 1h vol ÷ 3 | Volume concentrated in last 15m |
| 8 | 15m vol > 8h vol ÷ 26 | Volume concentrated vs 8h |

**Bear**: all price thresholds negated.

## Input parameters

### Thresholds group

| Input | Default | Description |
|-------|---------|-------------|
| 15m Change Threshold (%) | 1.0 | Minimum 15m price move |
| Daily Safety Cap (%) | 15 | Suppresses signal if 24h change exceeds this |
| Volume Floor 15m (USDT) | 400,000 | Minimum 15m volume |
| Volume Floor 1h (USDT) | 1,000,000 | Minimum 1h volume |

### Display group

Same as [Surge 5m](/tradingview/surge-5m#input-parameters): Show Labels, Show Background Color, Show Debug Table, Bull/Bear colors.

### Moving Averages group

Same as Surge 5m: EMA 21/34/55 with toggles and color pickers.

## Differences from Surge 5m

| | Surge 5m | Surge 15m |
|--|----------|-----------|
| Anchor window | 5m | 15m |
| Min move | 0.6% | 1.0% |
| Volume floor (primary) | 100K | 400K |
| Cascade chain | 5m → 15m → 1h | 15m → 1h → 8h |
| Cooldown | 15 bars | 30 bars |

Surge 15m is a **higher conviction** signal — the move has to be larger, sustained longer, and confirmed across a deeper timeframe stack.

## Cooldown

30 bars (30 minutes) between same-type signals.
