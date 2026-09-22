# Troubleshooting

## Account and access

### I registered but cannot enter the app

Confirm your email using the link in your inbox. If needed, check spam and request a fresh link from the sign-in page. Then activate a subscription or eligible trial through checkout. Registration alone does not activate access.

### I purchased but still see a plan selection screen

Use the same email for Whop and Coin-Sniffer, verify it, and return to the app after checkout. Refresh once or sign out and back in. If still blocked, contact Coin-Sniffer through Whop with your account email and purchase reference.

### I forgot my password

Use **Forgot password?** on the [sign-in page](https://coin-sniffer.com/login). Use the most recent reset email and do not share the reset link.

## Charts and prices

### “Rate limited — chart will retry in 60s”

Let the automatic retry finish. Repeatedly reloading or switching intervals will not resolve a rate limit. If it persists, report the symbol, timeframe and time of the error.

### A chart or price looks stale

1. Confirm the symbol and timeframe, and check the date of the latest visible candle.
2. Distinguish the current price from the plan's **Price when armed**, which is historical.
3. Look for connection, **stored candles** or **untracked** notices.
4. Bring the tab into view, allow it to update, and refresh once if needed.
5. If the issue persists, report whether it affects the public preview, Market Coins or Dojo Zones, and whether one symbol or several are affected.

A daily chart can show old completed candles while its current price changes. Conversely, a current price does not prove that candle history is complete. Report the specific part that appears frozen.

### A coin's Dojo chart opens but market statistics are unavailable

The plan may outlive the coin's inclusion in the current market list. Missing statistics are not zero activity. If its quote or chart stops updating, report the symbol through Whop.

### The page behaves differently in another browser

Try a private window with extensions disabled. Wallet-extension errors mentioning `solana` or `ethereum` can come from injected browser scripts; Coin-Sniffer does not require a wallet connection. Report chart-loading errors separately if they remain.

## Dojo status

### There are no zones

Clear the symbol search and check timeframe, direction and **Live / Closed / All** filters. A symbol may have no published setup, and an empty Live view can be normal. An explicit loading error is different from an empty result.

### A plan link opens nothing

A shared link carries one specific plan. If it reports the plan as missing, check that you are signed in with access and that the link was copied whole. The app does not substitute a different plan on the same symbol, because a symbol often carries both a long and a short on different timeframes.

### Price touched a level but status has not changed

Check the exact entry and publication date. Entering the zone does not necessarily reach entry. Recorded outcomes and the table update separately from live prices; see [Dojo status and timing](/features/dojo#outcomes-and-timing).

## Notifications and webhooks

### No notifications arrive

Check the connection and your enabled types under **Settings → Alert Rules**. Check sound and browser notification settings separately. Allow notifications in browser settings if previously blocked, and keep an app session open.

An enabled preset does not promise frequent alerts. The current market conditions may not produce one.

### Sound does not play

Enable **Sound Notifications**, use **Test Sound**, check system volume and make sure the tab is not muted. Browsers may require an interaction before audio can play.

### Webhooks is locked or delivery fails

Confirm separately arranged Pro access and an active subscription. For a saved destination, check its enabled state, category selection, watchlist scope and alert-type preferences, then use **Test**. See [Webhooks](/features/webhooks).

## TradingView access

Confirm that your purchase includes the script and that you supplied the correct TradingView username. All current scripts are invite-only. Check the membership's access instructions and allow the stated provisioning time.

If the app provides a username field, saving it is not instant script access; the app states up to 24 hours. Do not switch every script to 1m as a general fix. Follow the requirements of that script.

## Contact support

Contact Coin-Sniffer through Whop. Include the affected page, symbol, timeframe, approximate time with timezone, visible error, and steps to reproduce. For account access, include your account email and purchase reference privately.

Remove passwords, bot tokens, webhook URLs containing credentials, and authentication or reset links from screenshots and logs before sharing them.
