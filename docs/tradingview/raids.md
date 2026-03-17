# Raids — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Raids"

Detects liquidity sweeps and stop hunts — a directional move that sharply reverses on the 5m window with volume concentrated in the reversal candle. Includes V1 (broader) and V2 (tighter + RSI confirmation) modes.

::: warning
Must be applied to a **1-minute chart**.
:::

## Bottom Raid — Bullish Reversal

Price has been falling across the 1h and 15m windows, then the most recent 5m candle reverses sharply upward with volume concentrated in the reversal. Suggests a stop hunt below a key level, with buyers absorbing the sell pressure.

## Top Raid — Bearish Reversal

Mirror structure — price rising across 1h and 15m, then the most recent 5m candle reverses sharply downward. Suggests overbought stops triggered or distribution into a spike high.

## V1 vs V2

| | V1 | V2 |
|--|----|-----|
| Prior move required | Moderate decline/rally | Stronger decline/rally |
| RSI filter | No | Yes — confirms oversold (bottom) or overbought (top) |
| False positives | More | Fewer |
| Signals per day | More | Fewer |

V1 catches a broader set of reversals. V2 requires a larger prior move and RSI confirmation of an extreme reading before the reversal, producing higher-conviction signals.

## Input parameters

### V1 Thresholds group

| Input | Description |
|-------|-------------|
| 1h Threshold (%) | Minimum 1h move required in the prior direction |
| 15m Threshold (%) | Minimum 15m move required in the prior direction |
| 5m Reversal Threshold (%) | Minimum 5m move required in the reversal direction |

### V2 group

| Input | Default | Description |
|-------|---------|-------------|
| Enable V2 Mode | Off | Run V2 signals alongside V1 |
| V2 1h Threshold (%) | Configurable | Stricter 1h threshold for V2 |
| V2 15m Threshold (%) | Configurable | Stricter 15m threshold for V2 |
| V2 5m Threshold (%) | Configurable | Stricter reversal threshold for V2 |
| Volume Floor 5m (USDT) | Configurable | Minimum 5m volume for V2 signals |
| RSI Period | Configurable | RSI period used for overbought/oversold check |
| RSI Oversold Level | Configurable | RSI threshold for Bottom Raid V2 |
| RSI Overbought Level | Configurable | RSI threshold for Top Raid V2 |

### Display group

| Input | Default |
|-------|---------|
| Show RSI Line | Off |
| Bottom Raid Color | Teal |
| Top Raid Color | Red |

## Tips

- V1 and V2 can run simultaneously — enable V2 mode to get both sets of signals on the same chart.
- V2 with RSI is most useful for swing trade setups. For scalping, V1 is usually sufficient.
- Enable **Show Debug Table** to see live condition values when diagnosing missed signals.
