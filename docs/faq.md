# Frequently asked questions

## What markets does Coin-Sniffer cover?

A changing selection of 200+ Binance USDT perpetual futures pairs. It does not cover every Binance contract, spot market or exchange. The current list is visible in **Market Coins**.

## Is this an automated trading bot?

No. Coin-Sniffer shows market data, alerts and setup plans. It does not connect to your exchange account, submit orders or manage positions. You do not need to provide an exchange API key.

## How are alerts different from Dojo Zones?

Market alerts highlight activity to inspect. A Dojo row is a higher-timeframe plan with a zone, entry, stop and three targets. Publication, price entering the zone and price reaching the exact entry are different events. See [Dojo Zones](/features/dojo).

## Does “Entry Filled” mean my order filled?

No. It means the observed market price reached the plan's reference entry. Coin-Sniffer cannot confirm your order execution. Its recorded outcome is not your account's profit or loss.

## Why is a setup still Waiting when the chart crossed its entry?

Check that the crossing occurred after publication, that you selected the same symbol and setup, and that the exact entry was reached rather than only the zone boundary. Recorded status can lag the price. Earlier candles do not count as entries for a plan published later.

## Am I told when a plan ends?

Yes. A published plan also reports a target reached, a stop taken, or an invalidation before entry. A running trade's target or stop is normally recorded within minutes of the touch, with a daily pass behind it for anything the minute check missed. These events describe the recorded plan, not your position or your result. See [Dojo Zones](/features/dojo#zone-alerts-are-different-events).

## Why can't I see Backed by, Volume or Point of control?

Those three describe how a zone was arrived at and are shown on Pro and admin accounts; a trial does not include them. The plan itself — zone, entry, stop, three targets, R:R and the **Conf** rating — is on every subscription. See [Dojo Zones](/features/dojo#what-pro-adds).

## Why does a coin have a Dojo plan but no Market Coins row?

The tracked market list changes while published plans remain in the setup history. Select the plan from Dojo Zones; some current statistics may be unavailable. Report a frozen chart or quote through Whop.

## Is the data always live?

Prices, candle history and recorded outcomes update on different schedules. Delays and missing data can occur. A connected indicator or fresh preview timestamp does not guarantee that every value is current. See [Charts](/features/charts).

## Can I change the built-in alert conditions?

You can enable or disable built-in types and choose notification preferences. You cannot edit their detection conditions. The visible custom-rule form does not currently generate live custom alerts; see [Alerts](/features/alerts/#presets-and-custom-rules).

## Are webhooks included?

No. Delivery to your own community or endpoint requires Pro, arranged and priced separately, plus an active subscription. Contact Coin-Sniffer through Whop. See [Webhooks](/features/webhooks).

## Are TradingView indicators included?

The current Dojo Structure, Dojo Zones and Dojo Liquidity offer is separate and invite-only. You do not need it to use the web app. Follow your purchase's access instructions; a trial invitation is temporary, not permanent free access.

## Do all TradingView indicators need a one-minute chart?

No universal one-minute rule applies to the Dojo indicators. Follow the instructions and available settings of the particular script. Older momentum scripts can have different requirements. See [TradingView](/tradingview/).

## Does signup automatically start a free trial?

No. Signing up gives you a [free account](/features/free-account): the zones without their prices, one zone a week in full, and the record. The trial of the full product starts at checkout. The app advertises an eligible seven-day trial; checkout determines availability, payment requirements and renewal terms. See [Trial access](/billing/trial).

## What does a free account include?

Every zone in play with its coin, timeframe, direction, R:R and rating but without entry, stop or targets; one zone a week shown in full; the record of every zone that has ended; and an optional daily email. It does not include the momentum alerts or the live dashboard. See [Free account](/features/free-account).

## How do I stop the daily email?

Use the **unsubscribe** link at the bottom of any daily email, or switch **Daily scan by email** off in your account. Nothing else about the account changes.

## How do I cancel or get billing help?

Open [Billing](https://coin-sniffer.com/billing), then **Manage on Whop**, or open the membership in Whop directly. See [Manage subscription](/billing/manage). Contact Coin-Sniffer through Whop for account-specific help.
