# Scout — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Scout"

Early momentum detection — fires when the current 5m move is disproportionately large relative to the 15m move, indicating acceleration is happening *right now*.

::: warning
Must be applied to a **1-minute chart**.
:::

## How signals are generated

### Bull signal — all 4 conditions must pass

| # | Condition | Default |
|---|-----------|---------|
| 1 | 5m change > threshold | +1.0% |
| 2 | 15m change > threshold | +1.0% |
| 3 | Acceleration: ratio × (5m change) > 15m change | 3× (last 5m ≥ 33% of the 15m move) |
| 4 | Volume: ratio × (5m volume) > 15m volume | 2× (last 5m ≥ 50% of 15m volume) |

**Bear**: conditions 1 & 2 are < −1.0%. Conditions 3 & 4 use absolute values.

## Input parameters

| Input | Default | Description |
|-------|---------|-------------|
| Bull Change Threshold (%) | 1.0 | Minimum 5m and 15m positive changes |
| Bear Change Threshold (%) | −1.0 | Minimum 5m and 15m negative changes |
| Acceleration Ratio | 3 | How many times the 5m change must multiply to exceed 15m change |
| Volume Ratio | 2 | How many times the 5m volume must multiply to exceed 15m volume |
| Cooldown (bars) | 5 | Bars between same-type signals (1 bar = 1 minute) |
| Show Debug Table | Off | Display current condition values in chart corner |

## Display group

| Input | Default |
|-------|---------|
| Show Labels | On |
| Show Background Color | On |
| Bull Color | Teal |
| Bear Color | Red |

## Tuning the acceleration ratio

The default **3× acceleration ratio** means the 5-minute move must be at least 1/3 of the entire 15-minute move. This is a moderately selective threshold.

- **Lower it (e.g., 2×)**: More signals, fires earlier in moves, higher false-positive rate.
- **Raise it (e.g., 4–5×)**: Fewer but sharper signals — the 5m must be an unusually large fraction of the 15m.

## Cooldown

5 bars (5 minutes) between same-type signals.

## Scout vs Surge

Scout is a **leading indicator** — it fires when acceleration begins, before a full Surge condition would pass. Scout + subsequent Surge on the same symbol is a high-conviction sequence.
