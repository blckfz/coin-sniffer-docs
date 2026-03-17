# Raid Alerts

Raid alerts detect **liquidity sweeps** and **stop hunts** — situations where price makes a directional move (triggering stop-loss orders), then sharply reverses. The pattern is common around key levels when market makers clear liquidity before going the other way.

There are 4 Raid alert types: Bottom/Top × V1/V2.

---

## Bottom Raid (bullish reversal signal)

The bottom raid pattern:
1. Price has been falling: 1h and 15m are both negative.
2. In the most recent 5-minute candle, price reverses upward.
3. Volume is concentrated in the reversal candle.

This suggests stops below a level were triggered, buyers absorbed the sell pressure, and price is now recovering.

### Bottom Raid V1 conditions (all 5 must pass)

| # | Condition | Default |
|---|-----------|---------|
| 1 | 1h price change < threshold | < −0.7% (down) |
| 2 | 15m price change < threshold | < −0.6% (down) |
| 3 | 5m price change > threshold | > +0.5% (reversal up) |
| 4 | 5m volume > 15m volume ÷ 2 | Volume concentrated in reversal candle |
| 5 | 5m volume > 1h volume ÷ 8 | Volume concentrated vs 1h total |

### Bottom Raid V2 conditions (tighter, plus RSI)

V2 replaces V1 thresholds with stricter values and adds RSI confirmation:

| # | Condition | Default |
|---|-----------|---------|
| 1 | 1h change < | < −1.5% |
| 2 | 15m change < | < −1.0% |
| 3 | 5m change > | > +0.7% |
| 4 | 5m volume > floor | >50K USDT |
| 5 | RSI(14) < oversold threshold | RSI < 35 |

V2 is more selective: the prior move must be larger, and RSI must confirm the coin is oversold before the reversal fire.

---

## Top Raid (bearish reversal signal)

Mirror of Bottom Raid — price was rising, then sharply reverses down.

### Top Raid V1 conditions

| # | Condition | Default |
|---|-----------|---------|
| 1 | 1h price change > threshold | > +0.7% (up) |
| 2 | 15m price change > threshold | > +0.6% (up) |
| 3 | 5m price change < threshold | < −0.5% (reversal down) |
| 4 | 5m volume > 15m volume ÷ 2 | Volume concentrated |
| 5 | 5m volume > 1h volume ÷ 8 | Volume concentrated |

### Top Raid V2 conditions

| # | Condition | Default |
|---|-----------|---------|
| 1 | 1h change > | > +1.5% |
| 2 | 15m change > | > +1.0% |
| 3 | 5m change < | < −0.7% |
| 4 | 5m volume > floor | >50K USDT |
| 5 | RSI(14) > overbought threshold | RSI > 65 |

---

## V1 vs V2

| | V1 | V2 |
|--|----|----|
| Prior move threshold | Moderate (0.7% / 0.6%) | Strong (1.5% / 1.0%) |
| Reversal threshold | 0.5% | 0.7% |
| Volume floor | None | 50K USDT |
| RSI filter | No | Yes (< 35 / > 65) |
| False positives | More | Fewer |
| Signals per day | More | Fewer |

::: tip
Use V1 to catch more reversals (including smaller ones). Use V2 for higher-conviction entries where the original move was more substantial and RSI confirms extreme conditions.
:::

---

## When Raid alerts are NOT reversals

Not every Raid fires at the absolute bottom/top. It fires when the *5-minute candle* is reversing — the move may continue down/up for another candle before reversing. Think of it as a "potential reversal" signal, not a guaranteed one.
