# Charts

Click any row in the screener table to open an interactive chart for that symbol.

## Chart features

- **Candlestick chart** — OHLCV candlestick data from Binance Futures
- **Fibonacci pivot levels** — support and resistance levels overlaid on the chart (see [Fibonacci](/features/indicators/fibonacci))
- **Volume bars** — volume as a subplot below the price chart
- **Timeframe selector** — switch between 1m, 5m, 15m, 1h, 4h, 1d views
- **Crosshair** — hover over any bar to see OHLCV values

## Timeframe selector

Use the timeframe buttons at the top of the chart (1m / 5m / 15m / 1h / 4h / 1d) to switch the candle resolution. The chart fetches historical data for the selected timeframe from Binance Futures.

## Fibonacci levels

When you open a chart, the current Fibonacci pivot levels for that symbol are drawn as horizontal lines:

| Level | Color |
|-------|-------|
| Resistance 1.0 | Red |
| Resistance 0.618 | Orange |
| Resistance 0.382 | Yellow |
| Pivot | White / Grey |
| Support 0.382 | Light green |
| Support 0.618 | Green |
| Support 1.0 | Dark green |

These are calculated from the current 24h high, low, and last price. See [Fibonacci Levels](/features/indicators/fibonacci) for the formula.

## Data source

Chart data is fetched directly from the **Binance Futures API** (`fapi.binance.com`) when you open the modal. This is separate from the main screener data — it's fetched on demand so historical bars are available.

## Closing the chart

Press **Escape** or click the **×** button to close the chart modal without leaving the screener.
