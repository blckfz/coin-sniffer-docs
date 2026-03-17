# Frequently Asked Questions

## General

### What is Coin Sniffer?

Coin Sniffer is a real-time cryptocurrency market screener that monitors 200+ Binance Futures pairs and sends you alerts when significant price moves, volume anomalies, or momentum patterns are detected. It saves you from watching charts 24/7.

### Which exchange does it monitor?

**Binance Futures (USDT perpetual contracts only)**. Spot pairs, coin-margined futures, or other exchanges are not currently supported.

### How many pairs are tracked?

200+ pairs — all Binance USDT perpetual pairs that meet minimum liquidity thresholds. The exact list is updated periodically as new pairs are listed or delisted on Binance.

### Is the data real-time?

Yes. The backend subscribes to the Binance Futures WebSocket and processes every 1-minute candle as it closes. Alert evaluation happens within milliseconds of each candle. The screener table in your browser updates every 5 seconds.

### Is this a bot / auto-trading tool?

No. Coin Sniffer is an **informational screener** — it detects patterns and notifies you. It does not place trades on your behalf. All trading decisions are yours.

---

## Alerts

### How quickly do alerts fire?

From candle close to WebSocket delivery: **under 100 milliseconds** in normal conditions.

Webhook delivery (Discord/Telegram) adds network round-trip time — typically 100–500ms depending on your location and the destination server.

### Why am I not getting alerts for a coin I'm watching?

A few reasons:
- The coin may not be meeting the alert conditions. Most rules require multiple timeframes to align simultaneously — they don't fire on every move.
- The 2-minute cooldown may be suppressing repeated signals. If the coin fired the same alert type recently, it won't fire again for 2 minutes.
- Check the alert feed in the app — if alerts appear there but not in your webhook, the issue is with the webhook configuration. See [Webhooks → Troubleshooting](/features/webhooks#troubleshooting).

### What is the 2-minute cooldown?

Each `symbol + alert type` combination has a 2-minute suppression window. After an alert fires (e.g., ETHUSDT Surge 60 Bull), the same alert type for that symbol won't fire again for 2 minutes — even if all conditions are still met. This prevents alert spam during sustained moves.

### Can I customise alert thresholds?

**In the app**: No — thresholds are fixed at the server level. The default values are tuned to minimise noise while catching significant moves.

**In TradingView**: Yes — the [Pine Script indicators](/tradingview/) have fully adjustable parameters (price thresholds, volume floors, etc.) that you can tune per chart.

### What does "Surge" vs "Scout" mean?

- **Scout** fires *first* when momentum begins accelerating — the 5m move is unusually large relative to the 15m. It's an early signal with more false positives.
- **Surge** fires *after* the move is established across multiple timeframes. It's higher conviction but fires later in the move.

A Scout followed by a Surge on the same coin in quick succession is a strong pattern.

### What is a "Raid" alert?

A Raid is a stop hunt / liquidity sweep pattern. It fires when price has moved noticeably in one direction (1h and 15m trend) but the most recent 5-minute candle reverses sharply. This is the footprint of a liquidity sweep — stops are triggered, then price reverses.

### What is a "Whale" alert?

A Whale alert fires when the 5-minute volume is 5× the average 5-minute volume for that hour — **and** price barely moved (<0.3%). This means something abnormally large was transacted without significantly moving the price, which is characteristic of large-player accumulation or distribution.

---

## TradingView

### Do I need a paid TradingView plan?

A free TradingView account can access invite-only scripts, but you'll be limited on the number of indicators per chart. A **TradingView Pro** plan (or higher) gives you more indicators per chart simultaneously.

### The indicator says "no access to this script". What do I do?

Your TradingView username may not be linked yet, or there's a delay in provisioning. See [Getting TradingView Access](/tradingview/getting-access).

### Can I run the indicators on a 5m or 15m chart?

No — **all indicators must run on a 1-minute chart**. The scripts reconstruct 5m/15m/1h/8h windows internally using bar lookback. On any other timeframe the signals will be wrong.

### Will I get TradingView alerts from the screener?

The screener sends alerts via the in-app feed and webhooks (Discord/Telegram). The TradingView indicators can be set up to trigger TradingView's built-in alert system separately — use the **Create Alert** button in TradingView and set the condition to the indicator signal.

---

## Billing

### How does the free trial work?

7 days, full access, no credit card required upfront. See [Free Trial](/billing/trial).

### Can I cancel anytime?

Yes. Cancel from **Account → Billing**. Access continues until the end of your current billing period. No refunds for partial periods. See [Manage Subscription](/billing/manage).

### Do you offer refunds?

Refunds are not offered as a general policy due to the nature of access-based subscriptions. If you have a specific issue, reach out via Discord.

### What happens to my data if I cancel?

Your account, settings, and watchlist data are retained. If you re-subscribe, everything is restored. Data is not actively deleted upon cancellation.

---

## Technical

### The screener table shows no data. What's wrong?

- Check your internet connection.
- Refresh the page. The backend may have briefly restarted.
- If the issue persists for more than 2 minutes, check our [Discord](https://discord.gg/coin-sniffer) for any service announcements.

### Prices look wrong or stale.

The screener polls every 5 seconds. During high-volatility periods Binance may be temporarily slow to respond. The timestamp on each price update is shown — if it's more than 30 seconds old, try refreshing.

### Not financial advice disclaimer

Coin Sniffer is an **informational tool only**. Nothing on the platform constitutes financial or trading advice. All trading involves substantial risk of loss. Only trade with capital you can afford to lose.
