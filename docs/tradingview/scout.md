# Scout — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Scout"

Early momentum detection — fires when the 5m move is disproportionately large relative to the 15m move, indicating acceleration is happening *right now*. Typically fires before a Surge signal would trigger.

::: warning
Must be applied to a **1-minute chart**.
:::

## How signals are generated

**Bull**: both the 5m and 15m windows are positive, and the current 5-minute window accounts for an outsized share of both the 15m price move and the 15m volume. This means momentum is accelerating, not decelerating.

**Bear**: same structure with both windows negative.

## Input parameters

| Input | Description |
|-------|-------------|
| Bull Change Threshold (%) | Minimum positive change required on both the 5m and 15m windows |
| Bear Change Threshold (%) | Minimum negative change required on both windows |
| Acceleration Ratio | Controls how dominant the 5m move must be relative to the 15m move |
| Volume Ratio | Controls how much of the 15m volume must be concentrated in the current 5m |
| Cooldown (bars) | Minimum bars between same-type signals on the same chart |
| Show Debug Table | Displays live condition values in a chart corner — useful when tuning thresholds |

### Display group

| Input | Default |
|-------|---------|
| Show Labels | On |
| Show Background Color | On |
| Bull Color | Teal |
| Bear Color | Red |

## Tuning the acceleration ratio

The acceleration ratio controls how dominant the recent 5m move must be relative to the full 15m window.

- **Lower the ratio**: More signals, fires earlier in moves, higher false-positive rate.
- **Raise the ratio**: Fewer, sharper signals — only fires when the current 5m represents an unusually large fraction of the 15m move.

## Scout vs Surge

Scout is a **leading indicator** — it fires when acceleration begins, before a full Surge condition is met. A Scout followed by a Surge on the same symbol is a high-conviction sequence.
