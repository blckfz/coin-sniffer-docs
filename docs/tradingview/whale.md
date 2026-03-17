# Whale — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Whale"

Detects stealth large-player activity — abnormally high volume in a 5m window with minimal price impact — then classifies the direction as Accumulation (bullish) or Distribution (bearish) based on the 15m trend and momentum indicators.

::: warning
Must be applied to a **1-minute chart**.
:::

## Signal logic

### Step 1 — Whale anomaly detection

The indicator compares the current 5-minute volume against the recent hourly baseline. If the volume spike is significant enough **and** the price barely moved during that window, a whale anomaly is flagged. A minimum absolute volume floor ensures only liquid markets qualify.

**The core idea**: large players spread orders to avoid moving the price. High volume + low price impact = stealth activity.

### Step 2 — Direction classification

Once the anomaly passes, direction is determined by the 15m trend and momentum indicators:

- **Accumulation** (bullish): 15m trend is positive, or trend is flat but momentum indicators lean bullish.
- **Distribution** (bearish): 15m trend is negative, or trend is flat but momentum indicators lean bearish.

## Input parameters

### Volume Spike group

| Input | Description |
|-------|-------------|
| Spike Ratio (× hourly avg) | How many times the current 5m volume must exceed the recent hourly average 5m volume |
| Max 5m Price Impact (%) | Maximum allowable price change during the anomalous candle — keeps only stealth activity |
| 5m Volume Floor (USDT) | Minimum absolute 5m volume to qualify |
| 1h Volume Floor (USDT) | Minimum 1h volume — ensures the pair is sufficiently liquid |

### Context group

| Input | Description |
|-------|-------------|
| RSI Period | Period for the RSI used in direction classification |

### Display group

| Input | Default |
|-------|---------|
| Accumulation Color | Teal |
| Distribution Color | Red |
| Show RSI Line | Off |

## Tuning the Spike Ratio

The spike ratio is the primary sensitivity control.

- **Lower the ratio**: More signals. Some may be normal volume spikes rather than genuine whale activity.
- **Raise the ratio**: Rarer, higher-conviction signals — only truly anomalous volume events qualify.

For high-volume pairs (BTCUSDT, ETHUSDT), raising the ratio helps since their baseline volume is already elevated. For lower-cap coins, a lower ratio is often appropriate.

## Understanding the signal

When a whale accumulates quietly, they absorb sell pressure without moving price — the result is high volume with a flat candle. When they distribute quietly, they sell into buy orders. This indicator surfaces those events in real time.

::: tip
Whale signals are most powerful as **confluence** alongside Surge or Scout. A Whale Accumulation followed by a Scout Bull suggests large players positioned first, then retail momentum began building.
:::
