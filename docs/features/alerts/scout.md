# Scout Alerts

Scout alerts detect **early momentum acceleration** — they fire when the recent 5-minute price and volume activity is disproportionately large relative to the broader 15-minute window. This indicates the move is just beginning to accelerate, typically before a Surge alert would trigger.

---

## How Scout works

Scout checks that both the 5m and 15m changes are meaningfully positive (bull) or negative (bear), and crucially that the current 5-minute window accounts for an outsized share of the 15-minute move. In other words: most of the momentum is concentrated *right now*, not distributed across earlier candles.

Volume is checked in the same way — the volume in the most recent 5m must represent a disproportionately large share of the 15m volume total.

**Bull**: both 5m and 15m are positive, with recent acceleration in both price and volume.

**Bear**: both 5m and 15m are negative, same structure.

---

## Scout vs Surge

| | Scout | Surge |
|---|---|---|
| Fires | Early — acceleration is just beginning | After — move is established across multiple timeframes |
| Signal | Leading indicator | Confirming indicator |
| Timeframes checked | 5m + 15m | 3 or more timeframes |
| Use case | Get in early, accept higher false-positive rate | Wait for confirmation |

::: tip
A Scout followed shortly by a Surge on the same symbol is a particularly high-conviction sequence — it shows the early acceleration was genuine and building.
:::
