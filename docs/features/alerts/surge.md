# Surge Alerts

Surge alerts detect **explosive directional momentum** where price is moving strongly across multiple timeframes simultaneously, confirmed by volume concentrating in the most recent window. This proves the move is happening *right now*, not bleeding out from earlier in the session.

There are 8 Surge alert types across 3 timeframe groups.

---

## Surge 5m

Fires on short-term explosive momentum anchored on the 5-minute window. The signal requires the move to be visible across multiple shorter timeframes and backed by a meaningful spike in recent volume — ruling out coins that are simply drifting after an earlier push.

**Bull**: price is surging upward with volume concentrated in the current window.

**Bear**: identical structure, all price conditions inverted.

---

## Surge 15m

Anchored on the 15-minute window. Requires a stronger and more sustained move — the price action must be consistent across the 15m, 1h, and 8h windows with volume concentrated in the recent period.

**Bull**: sustained upward move with multi-timeframe alignment and volume confirmation.

**Bear**: mirror, all conditions inverted.

---

## Surge 60m

Detects sustained macro momentum requiring alignment across the 1h, 8h, and 24h windows. Higher conviction than Surge 5m or 15m — the move must be building through every timeframe, with recent hourly volume representing a meaningful portion of the longer-term total.

**Bull**: the 1h move is strong, fits into a broader 8h trend, and the daily direction continues upward.

**Bear**: mirror, all conditions inverted.

### Surge 60m V2

V2 adds an extra filter on top of the standard Surge 60m conditions: the coin must be outperforming Bitcoin over the same 1-hour window. This removes coins that are simply rising with the broader market and highlights genuine relative-strength leaders.

**Bull V2**: all Surge 60m bull conditions + coin beats BTC on the 1h.

**Bear V2**: all Surge 60m bear conditions + coin underperforms BTC on the 1h.

---

## Surge vs Scout

Surge requires the move to *already be established* across multiple timeframes. **[Scout](/features/alerts/scout)** can fire earlier — when momentum is just beginning to accelerate before a Surge condition would be met.
