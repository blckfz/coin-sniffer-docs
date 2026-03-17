# Alerts Overview

Coin Sniffer evaluates **17 alert rules** on every 1-minute candle close across all tracked pairs. When a coin meets all conditions for a rule, an alert fires — appearing in the in-app feed and being sent to any configured webhooks.

## Alert categories

| Category | Alert Types | Purpose |
|----------|-------------|---------|
| [Surge](/features/alerts/surge) | 5m/15m/60m Bull & Bear, 60m V2 Bull & Bear (8 total) | Explosive directional momentum with volume confirmation |
| [Scout](/features/alerts/scout) | Scout Bull, Scout Bear (2 total) | Early acceleration — fires before Surge |
| [Raid](/features/alerts/raids) | Bottom/Top Raid V1 & V2 (4 total) | Stop hunt / liquidity sweep reversals |
| [Whale](/features/alerts/whale) | Whale Detector, Accumulation, Distribution (3 total) | Stealth large-player activity |

## How alerts are evaluated

1. Every minute, the backend closes a new 1-minute candle for each symbol.
2. From 1m candles it builds rolling 5m, 15m, 1h, 4h, 8h, and 1d windows.
3. All 17 rules are checked against those windows in parallel.
4. Any rule whose conditions all pass triggers an alert event.
5. The alert is stored, pushed to connected WebSocket clients, and delivered to webhooks.

## Deduplication (cooldown)

Each `symbol + rule type` pair has a **2-minute cooldown**. If BTCUSDT fires a "Surge 60 Bull" alert, the same symbol+rule won't fire again for 2 minutes — even if the conditions are still met. This prevents alert spam during sustained moves.

## Reading alert cards

Each alert card shows:

- **Type label** (e.g., "Surge 60 Bull")
- **Symbol** and current price at time of alert
- **Key metric** that triggered the alert (e.g., "1h: +2.1%, Volume: 1.8M USDT")
- **Timestamp**

## Bull vs Bear

All directional alerts come in pairs:

- **Bull** — price is moving up, conditions are bullish
- **Bear** — exact mirror: price moving down, same structural conditions but negated

::: warning
Alerts are informational signals only. They are not buy or sell recommendations. Always do your own research before making any trading decisions.
:::
