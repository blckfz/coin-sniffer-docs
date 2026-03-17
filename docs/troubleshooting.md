# Troubleshooting

## Screener / App

### The app is not loading

1. Check your internet connection.
2. Try a hard refresh: **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac).
3. Clear browser cache and try again.
4. Try an incognito/private window to rule out browser extension conflicts.
5. If still broken, check our Discord for any active outage announcements.

### Screener table shows "Loading..." indefinitely

The backend may be restarting (deployment) or temporarily unreachable. Wait 30–60 seconds and refresh. If it persists beyond 2 minutes, it's likely a service outage — check Discord.

### Data looks stale or outdated

The screener refreshes every 5 seconds. If prices look stale:
- Check the timestamp displayed on the latest update (bottom of the page or in the status bar).
- If timestamps are old (>30s), the backend may be struggling to process data. Refresh and wait.
- During periods of very high market volatility, Binance WebSocket connections sometimes lag or disconnect. The backend reconnects automatically — delays are usually <30 seconds.

### I can't log in

- Double-check your email and password.
- Use the **Forgot Password** link on the login page.
- Check your spam folder for the password reset email (sender: `no-reply@coin-sniffer.com`).
- If you used a social login previously, try that method instead.

---

## Alerts

### No alerts are appearing in the feed

- Alerts require specific market conditions to fire. During low-volatility periods it's normal to have long gaps between alerts.
- Make sure you're not filtering the alert feed (e.g., watchlist-only mode) and expecting global alerts.
- Confirm your subscription is active — alerts are not delivered to expired accounts.

### Alerts appear in the app but not in Discord/Telegram

1. Go to **Webhooks** settings and click **Test** — check if you get a test message.
2. If the test fails, the webhook URL is likely invalid. Re-copy it from Discord/Telegram.
3. If the test succeeds but real alerts don't arrive, the webhook may be hitting Discord's rate limit. Discord allows 30 messages per minute per webhook — if you're getting that many alerts, some will be queued or dropped.

### I get duplicate alerts in Discord

Each `symbol + alert type` has a 2-minute cooldown server-side, so duplicates from the screener itself are unlikely. However, if you've configured the same webhook URL twice (or in multiple webhook slots), each will fire independently — check your webhook configuration.

### I'm getting too many alerts

The volume of alerts depends on market conditions. During high-volatility sessions (news events, BTC breakouts) many pairs may fire simultaneously. Options:
- Filter the in-app feed to Watchlist-only to reduce noise.
- Use separate Discord channels/webhooks for different alert types or watchlist vs global.
- The TradingView Pine Script indicators let you tune thresholds per chart if you want to be more selective.

---

## TradingView

### Indicators not showing in "Invite-only scripts"

- Make sure your TradingView username is entered in **Account → Billing** in Coin Sniffer.
- Wait 5–10 minutes after saving the username, then refresh TradingView.
- Sign out of TradingView and sign back in — this refreshes your script access.
- The username is case-sensitive. Verify it matches exactly what's shown on your TradingView profile.

### Indicator shows "study_script_error"

This usually means the chart is not on the 1-minute timeframe. All Coin Sniffer Pine Scripts **require a 1m chart**. Switch the chart timeframe to 1m and reload the indicator.

### No signals are appearing on the chart

- Confirm you're on a **1-minute chart**.
- Check that the **Show Labels** option is enabled in the indicator settings.
- The signal conditions may not be met on the coin you're viewing. Try on a more liquid pair (e.g., BTCUSDT, ETHUSDT) during an active session to verify the indicator is working.
- Enable the **Debug Table** input in the indicator settings to see the live values of all conditions.

---

## Billing

### I subscribed but still see the trial/expired page

- Log out and back in — your subscription status is checked at login.
- Wait 1–2 minutes after completing payment, then refresh.
- If still locked out after 5 minutes, contact us on Discord with your account email.

### My payment failed

- Check the email sent by Whop for details on the failure.
- Update your payment method in the Whop billing portal (linked from **Account → Billing**).
- After updating, the retry should happen automatically within 24 hours.

---

## Still stuck?

Join our **Discord server** (link in the app footer or nav). We're active there and can help debug issues directly.
