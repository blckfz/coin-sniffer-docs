# Whale Alerts

Whale alerts detect **stealth large-player activity** — situations where an unusually large volume is transacted in a short window while the price barely moves. This is the footprint of sophisticated accumulation (buying quietly) or distribution (selling quietly).

There are 3 Whale alert types.

---

## How whale detection works

The key insight: if a whale is buying or selling a large position, they try *not* to move the price (to avoid slippage). They spread orders across many small trades. The result is abnormally high volume with minimal price impact.

The **whale anomaly** condition:

| # | Condition | Default |
|---|-----------|---------|
| 1 | 5m volume > spike ratio × average 5m volume over last 1h | 5× the hourly average |
| 2 | Absolute 5m price change < max impact | <0.3% (barely moved) |
| 3 | 1h volume > floor | >500K USDT (liquid market) |
| 4 | 5m volume > floor | >200K USDT |

All 4 conditions must pass to detect a whale anomaly. Then the **direction** (accumulation vs distribution) is determined by the 15m trend and RSI.

---

## Whale Detector

The base signal — a whale anomaly is confirmed but no strong directional bias is detected yet.

**Fires when**: all 4 anomaly conditions pass AND the 15m trend is flat AND RSI is around the midpoint (~50).

Use Whale Detector as an early heads-up: something large is happening, but which way is unclear.

---

## Whale Accumulation (bullish)

Fires when the whale anomaly is confirmed AND there is a bullish context:
- 15m trend is positive (price is trending up on the 15m window), **OR**
- 15m trend is flat AND RSI(14) > 50

Interpretation: large players are quietly buying while price drifts upward or holds at the midpoint. Bullish bias.

---

## Whale Distribution (bearish)

Fires when the whale anomaly is confirmed AND there is a bearish context:
- 15m trend is negative (price is trending down on the 15m window), **OR**
- 15m trend is flat AND RSI(14) < 50

Interpretation: large players are quietly selling into a drift down or midpoint. Bearish bias.

---

## Summary

| Type | Anomaly | Direction |
|------|---------|-----------|
| Whale Detector | ✅ | Unclear (flat 15m, RSI ~50) |
| Whale Accumulation | ✅ | Bullish (15m up or RSI > 50) |
| Whale Distribution | ✅ | Bearish (15m down or RSI < 50) |

::: tip
Whale alerts are most useful as a **confluence signal** alongside Surge or Scout. A Whale Accumulation alert followed by a Scout Bull is a strong setup: large players positioned first, then momentum began accelerating.
:::

::: warning
Not every whale anomaly leads to a significant move. Whales also accumulate as part of long-term positioning that may not play out for hours or days. Don't trade whale alerts in isolation.
:::
