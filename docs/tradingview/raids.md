# Raids — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Raids"

Detects liquidity sweeps and stop hunts — a directional move that sharply reverses on the 5m window with volume confirmation. Includes V1 (broader) and V2 (tighter + RSI) modes.

::: warning
Must be applied to a **1-minute chart**.
:::

## Bottom Raid — Bullish Reversal

Price was falling across 1h and 15m, then the most recent 5m candle reverses upward.

### V1 conditions (all 5 must pass)

| # | Condition | Default |
|---|-----------|---------|
| 1 | 1h change < threshold | < −0.7% |
| 2 | 15m change < threshold | < −0.6% |
| 3 | 5m change > reversal threshold | > +0.5% |
| 4 | 5m vol > 15m vol ÷ 2 | Volume concentrated in reversal |
| 5 | 5m vol > 1h vol ÷ 8 | Volume concentrated vs hourly |

### V2 conditions (all 5 must pass, stricter)

| # | Condition | Default |
|---|-----------|---------|
| 1 | 1h change < | < −1.5% |
| 2 | 15m change < | < −1.0% |
| 3 | 5m change > | > +0.7% |
| 4 | 5m volume > floor | >50K USDT |
| 5 | RSI(14) < oversold | RSI < 35 |

## Top Raid — Bearish Reversal

Mirror structure. Price was rising, then the most recent 5m candle reverses downward.

### V1 conditions

| # | Condition | Default |
|---|-----------|---------|
| 1 | 1h change > | > +0.7% |
| 2 | 15m change > | > +0.6% |
| 3 | 5m change < | < −0.5% |
| 4 | 5m vol > 15m vol ÷ 2 | |
| 5 | 5m vol > 1h vol ÷ 8 | |

### V2 conditions

| # | Condition | Default |
|---|-----------|---------|
| 1 | 1h change > | > +1.5% |
| 2 | 15m change > | > +1.0% |
| 3 | 5m change < | < −0.7% |
| 4 | 5m volume > floor | >50K USDT |
| 5 | RSI(14) > overbought | RSI > 65 |

## Input parameters

### V1 Thresholds group

| Input | Default |
|-------|---------|
| 1h Threshold (%) | 0.7 |
| 15m Threshold (%) | 0.6 |
| 5m Reversal Threshold (%) | 0.5 |

### V2 group

| Input | Default | Description |
|-------|---------|-------------|
| Enable V2 Mode | Off | Toggle V2 signals alongside V1 |
| V2 1h Threshold (%) | 1.5 | |
| V2 15m Threshold (%) | 1.0 | |
| V2 5m Threshold (%) | 0.7 | |
| Volume Floor 5m (USDT) | 50,000 | Min 5m volume for V2 |
| RSI Period | 14 | |
| RSI Oversold Level | 35 | For Bottom Raid V2 |
| RSI Overbought Level | 65 | For Top Raid V2 |

### Display group

| Input | Default |
|-------|---------|
| Show RSI Line | Off | Toggle RSI line on chart |
| Bottom Raid Color | Teal | |
| Top Raid Color | Red | |

## Tips

- V1 and V2 can run simultaneously — enable V2 mode to get both.
- V2 filters with RSI are most useful on 1h+ swing trades. For scalping, V1 is usually sufficient.
- The **Show Debug Table** option (if available) shows live condition values.
