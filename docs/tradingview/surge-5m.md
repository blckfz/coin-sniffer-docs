# Surge 5m — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Surge 5m"

Detects explosive short-term momentum anchored on the 5-minute window. The signal requires price to be moving upward across multiple shorter timeframes simultaneously, with volume concentrated in the most recent window — not spread across earlier candles.

::: warning
Must be applied to a **1-minute chart**. The script internally reconstructs multi-timeframe windows using bar lookback. On any other timeframe, signals will be incorrect.
:::

## How signals are generated

**Bull**: price is surging upward on the 5m window, aligned with the 15m and 1h direction, and volume is concentrated in the current period rather than distributed across earlier candles.

**Bear**: identical structure, all price conditions inverted.

The signal is suppressed when a coin is already significantly extended on the daily timeframe, preventing alerts on overextended moves.

## Input parameters

### Thresholds group

| Input | Description |
|-------|-------------|
| 5m Change Threshold (%) | Minimum 5m price move required to qualify |
| Daily Safety Cap (%) | If the 24h change exceeds this, the signal is suppressed |
| Volume Floor 5m (USDT) | Minimum 5m volume required |
| Volume Floor 1h (USDT) | Minimum 1h volume required |

### Display group

| Input | Default | Description |
|-------|---------|-------------|
| Show Labels | On | Show Bull/Bear labels on signal bars |
| Show Background Color | On | Highlight candle background on signal bars |
| Show Debug Table | Off | Shows live values of all conditions in a corner table — useful when tuning |
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

- **Lower the 5m threshold** to catch more signals on smaller or lower-volatility coins. Expect more false positives.
- **Raise the safety cap** if you want to trade already-trending coins during high-volatility sessions.
- **Enable the Debug Table** to diagnose why a signal isn't firing — it shows the live value of each condition.
- **Raise volume floors** for large-cap coins (BTCUSDT, ETHUSDT) to filter noise. Lower them for small-cap altcoins.
