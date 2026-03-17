# Scout Alerts

Scout alerts detect **early momentum acceleration** — they fire when the 5-minute move is disproportionately large relative to the 15-minute move, meaning most of the 15m move happened in the last 5 minutes. This typically precedes a Surge alert.

---

## How Scout works

The core insight: if 5m price change is more than 1/3 of the 15m price change, the move is accelerating *right now* rather than decelerating from an earlier push.

### Bull conditions (all 4 must pass)

| # | Condition | Default |
|---|-----------|---------|
| 1 | 5m price change > threshold | +1.0% |
| 2 | 15m price change > threshold | +1.0% |
| 3 | Acceleration ratio: 3 × (5m change) > 15m change | The last 5m represents >33% of the 15m move |
| 4 | Volume ratio: 2 × (5m volume) > 15m volume | More than half of 15m volume in last 5m |

**Bear**: conditions 1 and 2 are < −1.0%. Conditions 3 and 4 use absolute values (volume ratio is directionally neutral).

### Cooldown

5 bars (5 minutes).

---

## Scout vs Surge

| | Scout | Surge |
|---|---|---|
| Fires | Early — acceleration is just beginning | After — move is established across 3+ timeframes |
| Signal | Leading indicator | Confirming indicator |
| Conditions | 4 (fewer) | 8–9 (more) |
| Cooldown | 5m | 15m–60m |
| Use case | Get in early, accept higher false-positive rate | Wait for confirmation |

::: tip
A Scout followed shortly by a Surge on the same symbol is a particularly high-conviction sequence — it shows the early acceleration was genuine and building.
:::

---

## Adjustable parameters

The acceleration ratio (default 3×) and volume ratio (default 2×) can be tuned in the TradingView [Scout indicator](/tradingview/scout). The backend uses the default values.
