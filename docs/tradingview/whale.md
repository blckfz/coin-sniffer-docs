# Whale — TradingView Indicator

**Script name on TradingView**: "Coin-Sniffer — Whale"

Detects stealth large-player activity — abnormally high volume in a 5m window with minimal price impact — then classifies the direction as Accumulation (bullish) or Distribution (bearish) based on 15m trend and RSI.

::: warning
Must be applied to a **1-minute chart**.
:::

## Signal logic

### Step 1 — Whale anomaly (shared base, all 4 must pass)

| # | Condition | Default |
|---|-----------|---------|
| 1 | 5m volume > spike ratio × average 5m volume over last 1h | 5× the hourly average |
| 2 | Absolute 5m price change < max impact | <0.3% |
| 3 | 1h volume > floor | >500K USDT |
| 4 | 5m volume > floor | >200K USDT |

### Step 2 — Direction classification

**Accumulation** (bullish label): anomaly passes AND (15m trend positive OR [15m flat AND RSI > 50])

**Distribution** (bearish label): anomaly passes AND (15m trend negative OR [15m flat AND RSI < 50])

## Input parameters

### Volume Spike group

| Input | Default | Description |
|-------|---------|-------------|
| Spike Ratio (× hourly avg) | 5 | How many times the current 5m volume must exceed the 1h average 5m volume |
| Max 5m Price Impact (%) | 0.3 | Maximum absolute price change during the anomalous 5m candle |
| 5m Volume Floor (USDT) | 200,000 | Minimum absolute 5m volume |
| 1h Volume Floor (USDT) | 500,000 | Minimum 1h volume (ensures liquid market) |

### Context group

| Input | Default | Description |
|-------|---------|-------------|
| RSI Period | 14 | Period for RSI calculation |

### Display group

| Input | Default |
|-------|---------|
| Accumulation Color | Teal | Label/background color for bullish |
| Distribution Color | Red | Label/background color for bearish |
| Show RSI Line | Off | Toggle RSI line on chart |

## Tuning the Spike Ratio

The default **5× ratio** is the key setting. It means the current 5m candle must have 5 times more volume than the average 5m candle over the past hour.

- **Lower (3–4×)**: More signals, but some may be normal volume spikes rather than true whale activity.
- **Higher (7–10×)**: Rarer, higher-conviction signals — only genuinely anomalous events.

For high-volume coins (BTCUSDT, ETHUSDT), you may want to raise this since normal volume is already high. For low-cap coins, the default often works well.

## Understanding the signal

The whale anomaly is designed to detect **large orders that don't move the price**. When a whale buys a large position without moving price, they're absorbing sell pressure invisibly — which is a sign of conviction. When they sell without moving price, they're distributing into buy liquidity.

The price impact threshold (0.3%) is the key filter. On a normal 5m candle with high volume, price would move significantly. If volume is huge but price barely moved, something unusual is happening.
