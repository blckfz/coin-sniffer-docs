# Surge Alerts

Surge alerts detect **explosive directional momentum** where price is moving strongly across multiple timeframes at the same time, with volume concentrated in the most recent window (proof that the move is happening *right now*, not bleeding out from hours ago).

There are 8 Surge alert types across 3 timeframe groups.

---

## Surge 5m

Fires on short-term explosive momentum anchored on the 5-minute window.

### Bull conditions (all 9 must pass)

| # | Condition | Default |
|---|-----------|---------|
| 1 | 5m price change > threshold | +0.6% |
| 2 | 24h price change < safety cap | <15% (not overextended) |
| 3 | 15m change > 5m change | Cascade up: move is building |
| 4 | 1h change > 15m change | Cascade continues up |
| 5 | 5m volume > floor | >100K USDT |
| 6 | 1h volume > floor | >1M USDT |
| 7 | 5m volume > 15m volume ÷ 3 | Volume concentrated in last 5m vs last 15m |
| 8 | 5m volume > 1h volume ÷ 6 | Volume concentrated in last 5m vs last 1h |
| 9 | 5m volume > 8h volume ÷ 66 | Volume concentrated in last 5m vs last 8h |

**Bear**: identical structure, all price thresholds negated (5m < −0.6%, etc.).

### What volume concentration means

Conditions 7–9 ensure the volume is happening *now*, not just that the coin had a lot of volume at some point in the day. By requiring the current 5m volume to be a proportionally large slice of the 15m/1h/8h totals, the rule filters out coins that moved heavily hours ago and are now drifting.

### Cooldown

15 bars (15 minutes) between same-direction signals per symbol.

---

## Surge 15m

Same cascade logic, anchored on the 15-minute window. Requires a stronger and more sustained move.

### Bull conditions (all 8 must pass)

| # | Condition | Default |
|---|-----------|---------|
| 1 | 15m price change > threshold | +1.0% |
| 2 | 24h change < safety cap | <15% |
| 3 | 1h change > 15m change | Cascade up |
| 4 | 8h change > 1h change | Cascade continues |
| 5 | 15m volume > floor | >400K USDT |
| 6 | 1h volume > floor | >1M USDT |
| 7 | 15m volume > 1h volume ÷ 3 | Volume concentrated in last 15m |
| 8 | 15m volume > 8h volume ÷ 26 | Volume concentrated vs last 8h |

**Bear**: all price thresholds negated.

### Cooldown

30 bars (30 minutes).

---

## Surge 60m

Detects sustained macro momentum across 1h, 8h, and 24h windows. This is a higher-conviction signal — the move must be building across all three timeframes.

### Bull conditions — V1 (all 8 must pass)

| # | Condition | Default |
|---|-----------|---------|
| 1 | 1h price change > threshold | +1.6% |
| 2 | 24h change < safety cap | <15% |
| 3 | 8h change > 1h change | Cascade: hourly move fits into broader trend |
| 4 | 24h change > 8h change | Cascade continues to daily |
| 5 | 1h volume > floor | >500K USDT |
| 6 | 8h volume > floor | >5M USDT |
| 7 | 6 × 1h volume > 8h volume | Recent hourly volume is substantial vs 8h total |
| 8 | 16 × 1h volume > 24h volume | Recent hourly volume is substantial vs daily total |

**Bear**: all price thresholds negated.

### Surge 60m V2

V2 mode adds two extra filters for higher precision:

| # | Additional condition | Default |
|---|---------------------|---------|
| 9 | 24h daily change > 0 | Daily direction must be positive (bull) |
| 10 | Coin 1h change > BTC 1h change + margin | Coin outperforms Bitcoin by ≥0.5% on the hour |

V2 bear: daily change must be negative AND coin must underperform BTC by the margin.

V2 catches coins with genuine relative strength — coins that are moving up *more than Bitcoin* during the same window, which filters out coins that are just rising with the index.

### Cooldown

60 bars (1 hour).

---

## Surge vs Scout

Surge requires the move to *already be established* across multiple timeframes. **[Scout](/features/alerts/scout)** can fire earlier — when momentum is just beginning to accelerate in the 5m window before a Surge would pass.

Use both: Scout as an early heads-up, Surge as confirmation.
