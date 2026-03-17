# What is Coin Sniffer?

Coin Sniffer is a **real-time cryptocurrency market screener** that monitors 200+ Binance Futures pairs around the clock and alerts you the moment a significant move or anomaly is detected.

## How it works

```
Binance Futures API
      ↓  (live candle data, every minute)
 Go Backend (Railway)
      ↓  calculates indicators + evaluates 17 alert rules
 WebSocket / REST API
      ↓
  Your browser  →  Discord / Telegram webhooks
```

The backend processes every 1-minute candle for every tracked pair. From those 1m candles it constructs 5m, 15m, 1h, 4h, 8h, and 1d windows in real time. Alert rules run against those windows within milliseconds of each new candle closing.

## Key concepts

### Screener
The main table showing **all tracked pairs** with their current price, percentage changes across timeframes, volume, and computed indicators (VCP, Fibonacci levels). You can sort and filter this table to surface what matters to you.

### Alerts
When a coin meets a set of conditions for a given rule, an **alert fires**. Alerts appear in the in-app feed and, if you've configured webhooks, are immediately sent to your Discord or Telegram channel.

Each alert has a 2-minute cooldown per symbol — so you won't be spammed if a coin keeps meeting the same condition.

### Alert Types

| Category | Types |
|----------|-------|
| **Surge** | 5m Bull/Bear, 15m Bull/Bear, 60m Bull/Bear, 60m V2 Bull/Bear |
| **Scout** | Scout Bull, Scout Bear |
| **Raid** | Bottom Raid V1/V2, Top Raid V1/V2 |
| **Whale** | Whale Detector, Whale Accumulation, Whale Distribution |

### Watchlist
A personal list of coins you want to track separately. Alerts can be filtered to show only watchlist coins.

### TradingView Indicators
7 Pine Script indicators (invite-only) that replicate the screener's alert logic so you can visualise the exact signals on a TradingView chart.

## Next steps

- [Create your account](/getting-started/signup) — 7-day free trial, no charge until it ends
- [Take the quick tour](/getting-started/quick-tour) — understand the interface in 5 minutes
- [Read about alert types](/features/alerts/) — know what each signal means before acting on it
