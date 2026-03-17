# Raid Alerts

Raid alerts detect **liquidity sweeps** and **stop hunts** — situations where price makes a directional move (triggering stop-loss orders), then sharply reverses. The pattern is common around key levels when market makers clear liquidity before going the other way.

There are 4 Raid alert types: Bottom/Top × V1/V2.

---

## Bottom Raid (bullish reversal signal)

The bottom raid pattern:
1. Price has been falling across the 1h and 15m windows.
2. The most recent 5-minute candle reverses sharply upward.
3. Volume is concentrated in the reversal candle, not the preceding down move.

This suggests stops below a key level were triggered, buyers absorbed the sell pressure, and price is now recovering.

---

## Top Raid (bearish reversal signal)

Mirror of Bottom Raid — price was rising across the 1h and 15m windows, then the most recent 5-minute candle reverses sharply downward with volume concentrated in the reversal.

Suggests overbought stops were triggered or distribution into a spike high.

---

## V1 vs V2

| | V1 | V2 |
|--|----|----|   
| Prior move required | Moderate directional move | Stronger directional move |
| RSI filter | No | Yes — confirms oversold (bottom) or overbought (top) |
| False positives | More | Fewer |
| Signals per day | More | Fewer |

V1 catches a broader set of reversals, including smaller ones. V2 is more selective — it requires a larger prior move and RSI to confirm an extreme reading before the reversal, producing higher-conviction signals.

::: tip
Use V1 when you want to be notified of potential reversals early. Use V2 when you want fewer, higher-conviction signals.
:::

---

## When Raid alerts are NOT reversals

Not every Raid fires at the absolute bottom/top. It fires when the *5-minute candle* is reversing — the move may continue for another candle before the full reversal plays out. Think of it as a "potential reversal" signal, not a guaranteed one.
