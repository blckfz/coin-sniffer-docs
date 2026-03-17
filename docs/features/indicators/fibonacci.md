# Fibonacci Pivot Levels

Fibonacci pivot levels are classic support and resistance levels used in technical analysis. Coin Sniffer calculates them from the current 24h high, low, and last price and displays them as horizontal lines on the chart.

## Formula

$$
pivot = \frac{high + low + price}{3}
$$

$$
range = high - low
$$

| Level | Formula |
|-------|---------|
| Resistance 1.0 | pivot + 1.0 × range |
| Resistance 0.618 | pivot + 0.618 × range |
| Resistance 0.382 | pivot + 0.382 × range |
| **Pivot** | (high + low + price) ÷ 3 |
| Support 0.382 | pivot − 0.382 × range |
| Support 0.618 | pivot − 0.618 × range |
| Support 1.0 | pivot − 1.0 × range |

All values are rounded to 3 decimal places (adjusted for the price magnitude of each coin).

## Interpreting the levels

- **Pivot** — the "fair value" midpoint based on the 24h session. Price above pivot is generally bullish, below generally bearish.
- **Resistance levels** — price may encounter selling pressure as it approaches these. R0.382 is the nearest, R1.0 is the furthest.
- **Support levels** — price may find buying interest at these levels. S0.382 is the nearest, S1.0 is the furthest.

The 0.618 level (golden ratio) is considered the most significant Fibonacci level and is often the first major target or support area.

## On the chart

Fibonacci levels are drawn as horizontal lines when you open the chart modal. They're calculated from the current 24-hour data, so they update every time the screener data refreshes (every 5 seconds).

## Why Fibonacci?

The Fibonacci ratio (0.618 = 1/φ where φ is the golden ratio ≈ 1.618) appears throughout nature and has been applied to financial markets for decades. Whether it has intrinsic predictive power or is a self-fulfilling prophecy (because enough traders watch the 0.618 level) is debated — but these levels provide universally-watched reference points.
