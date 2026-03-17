# Whale Alerts

Whale alerts detect **stealth large-player activity** — situations where an unusually large volume is transacted in a short window while the price barely moves. This is the footprint of sophisticated accumulation (buying quietly) or distribution (selling quietly).

There are 3 Whale alert types.

---

## How whale detection works

When a large player buys or sells a significant position, they deliberately avoid moving the price — they spread orders across many small trades to minimise slippage. The result is **abnormally high volume with minimal price impact**: a spike in traded size without a corresponding spike in price movement.

Coin Sniffer detects this anomaly by comparing the current 5-minute volume against the recent hourly baseline and checking that the price impact during that window remained small. Only liquid markets with sufficient ongoing volume qualify — this filters out thin pairs where any normal trade would show as anomalous.

Once a whale anomaly is confirmed, the **direction** is classified using the 15-minute trend and momentum indicators:

---

## Whale Detector

A whale anomaly is confirmed, but no clear directional bias is present. The 15m trend is flat and momentum indicators are neutral.

Use Whale Detector as an early heads-up: something unusually large is happening, but the direction is not yet clear.

---

## Whale Accumulation (bullish)

A whale anomaly is confirmed **and** the contextual trend is bullish — either the 15m trend is positive, or momentum indicators lean bullish.

Interpretation: large players are quietly buying while price drifts upward or consolidates. Bullish bias.

---

## Whale Distribution (bearish)

A whale anomaly is confirmed **and** the contextual trend is bearish — either the 15m trend is negative, or momentum indicators lean bearish.

Interpretation: large players are quietly selling into a drift down or consolidation. Bearish bias.

---

## Summary

| Type | Anomaly detected | Directional context |
|------|-----------------|-------------------|
| Whale Detector | ✅ | Neutral — direction unclear |
| Whale Accumulation | ✅ | Bullish |
| Whale Distribution | ✅ | Bearish |

::: tip
Whale alerts are most useful as a **confluence signal** alongside Surge or Scout. A Whale Accumulation alert followed by a Scout Bull is a strong setup: large players positioned first, then momentum began accelerating.
:::

::: warning
Not every whale anomaly leads to a significant move. Whales also accumulate as part of long-term positioning that may not play out for hours or days. Don't trade whale alerts in isolation.
:::
