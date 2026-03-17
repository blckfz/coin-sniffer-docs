# Quick Tour

Get familiar with the app in under 5 minutes.

## 1. The Screener Table

When you open the app you'll see the **screener table** — a live-updating list of all tracked Binance Futures pairs sorted by your chosen column.

**Key columns:**

| Column | What it shows |
|--------|---------------|
| Symbol | Coin/token name and trading pair |
| Price | Current last-trade price |
| 5m / 15m / 1h / 4h / 8h / 1d | Price change % over each timeframe |
| Volume | 24h quote volume (USDT) |
| VCP | Volatility Contraction Pattern score — see [VCP guide](/features/indicators/vcp) |

**Sort**: Click any column header to sort ascending/descending.

**Filter**: Use the search box to narrow to a specific symbol, or switch to **Watchlist** mode to show only your saved coins.

## 2. The Alert Feed

On the right side (or bottom on mobile) is the **alert feed** — a real-time stream of alerts as they fire. Each alert card shows:

- Alert type (e.g., "Surge 60 Bull")
- Symbol and current price
- Timestamp
- Key metrics that triggered the alert

Alerts are colour-coded: **green** for bull signals, **red** for bear signals.

## 3. Opening a Chart

Click any row in the screener table to open a **chart modal** for that coin. The chart is powered by TradingView (Lightweight Charts library) and shows:

- Candlestick price data
- Fibonacci pivot levels overlaid
- Volume bars
- Selectable timeframes

## 4. Setting Up Webhooks

To receive alerts in Discord or Telegram:

1. Click the **Webhooks** button in the top toolbar.
2. Paste your Discord or Telegram webhook URL.
3. Save. Alerts will now be delivered to your channel within milliseconds of firing.

Full step-by-step: [Webhook Setup](/features/webhooks)

## 5. Creating a Watchlist

1. Click the **Watchlist** tab or icon.
2. Use the search box to find a pair (e.g., BTCUSDT).
3. Click the ★ star icon to add it.
4. Toggle **Watchlist** filter to see only your starred coins in the screener.

## 6. Understanding Alert Types

There are 17 distinct alert types grouped into 4 categories:

- **[Surge](/features/alerts/surge)** — explosive directional momentum with multi-timeframe confirmation
- **[Scout](/features/alerts/scout)** — early acceleration detection (fires before Surge)
- **[Raid](/features/alerts/raids)** — stop hunt / liquidity sweep detection
- **[Whale](/features/alerts/whale)** — large-player accumulation or distribution

Read the individual alert pages to understand what each signal means before acting on it.
