# Charts

Select a row in **Market Coins**, **Alert History** or **Dojo Zones** to inspect its chart. Desktop shows the chart beside the table; mobile uses a details panel.

## Timeframes and controls

Charts open on **1D**. The buttons offer **1m, 5m, 15m, 1h, 4h and 1d**. Selecting a Dojo setup returns the chart to the daily view, including when the setup itself is labelled 5D or 1W.

- Pan and zoom to inspect candles.
- Use the crosshair and time axis to check a candle's time or date.
- Read volume below the candles.
- Use **Alerts** to show or hide alert markers.
- Review the alert timeline below the chart.
- Drag the divider to adjust the chart height where available.

## Dojo overlays

Selecting a Dojo row shows the plan's zone, entry, stop and targets. Those levels belong to that selected setup; changing the chart interval does not generate a new plan.

![A daily EDEN/USDT chart with the plan drawn on it: labelled price lines for TP3, TP2, TP1, zone top and entry, with interval buttons and an Alerts toggle above the chart and an alert timeline below it.](/img/app/chart-zone-overlay.png)

*A selected plan drawn on the daily chart: its zone, entry and targets, with the **Alerts** toggle controlling markers.*

The selected plan is kept in the page address, so a refresh returns to it and the link can be shared with someone who has access. Closing the chart clears that selection instead of reopening it on the next refresh.

The standard chart does not automatically draw the separate TradingView Dojo indicators or a full Fibonacci pivot ladder. Those are different tools. See [Dojo Zones](/features/dojo) and [TradingView indicators](/tradingview/).

## Prices, candles and status

The current price can change before a candle closes. The newest candle is provisional, and recent bars or older history may be unavailable during an interruption. Do not treat the displayed live price as proof that a historical series is complete.

If **stored candles** appears, the chart is using available saved history. The latest candle may be missing, and gaps can exist. An **untracked** notice means the coin is outside the current market list and some market statistics may be unavailable.

A Dojo plan's **Price when armed** is a historical reference, not a live quote. Its recorded status can update on a different schedule from the price.

## Rate limits or missing data

For **“Rate limited — chart will retry in 60s”**, allow the retry to complete. Repeated refreshes do not speed it up. If the issue persists, report the symbol, selected timeframe and time of the problem through Whop.

See [Troubleshooting](/troubleshooting#charts-and-prices).
