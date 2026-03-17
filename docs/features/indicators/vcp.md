# VCP — Volatility Contraction Pattern

VCP is a composite momentum indicator that measures two things simultaneously:
1. **Where the price is relative to the weighted average price** (momentum direction)
2. **Where the price closed within the candle's range** (candle body direction / buying/selling pressure)

A high positive VCP means: price is above its weighted average AND recent candles are closing near their highs (bullish pressure). A high negative VCP means the opposite.

## Formula

$$
VCP = \frac{P}{WA} \times \frac{(close - low) - (high - close)}{high - low}
$$

Where:
- **P** = last price
- **WA** = weighted average price (VWAP-based, from Binance ticker)
- **high / low / close** = current candle values

The numerator `(close − low) − (high − close)` simplifies to `2 × close − high − low`, which is the **candle body direction**: positive when close is above the midpoint of the range, negative when below.

Divided by `high − low` (the full range), this gives a value between −1 and +1 for the body component.

Multiplied by `P/WA`, the result scales by how far price has moved from its weighted average.

**Edge case**: if `high === low` (no range, e.g., halted trading), VCP returns 0.

## Interpreting VCP values

| VCP value | Interpretation |
|-----------|---------------|
| > 1.0 | Strong bull momentum: price above WA, candles closing bullishly |
| 0.2 to 1.0 | Mild bullish |
| −0.2 to 0.2 | Neutral / consolidating |
| −0.2 to −1.0 | Mild bearish |
| < −1.0 | Strong bear momentum |

Values above ~1.5 or below ~−1.5 are quite strong moves.

## VCP in the screener

The **VCP column** in the screener table is sortable. Sorting by VCP descending puts the highest-momentum coins at the top — useful for finding coins with active buying pressure.

## VCP in alerts

VCP is one of the inputs to the Surge alert cascade logic. A coin needs a high positive VCP (price above weighted avg, bullish candles) to pass the bull conditions.

## Precision note

VCP is displayed rounded to 3 decimal places. For very low-priced coins (e.g., SHIBUSDT at $0.000013), the `P/WA` ratio may produce unusual values — this is expected behaviour and the value is still valid for comparison.
