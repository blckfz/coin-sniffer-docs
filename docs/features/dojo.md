# Dojo Zones

**Dojo Zones** adds higher-timeframe setup monitoring to Coin-Sniffer. Each published zone has a direction, an area to watch, an entry, a stop, three targets and a recorded lifecycle.

Plans cover **1D, 5D and 1W**. New zones are normally checked daily; they are not generated every time the price changes. A symbol may have no qualifying setup for an extended period.

## Find and open a setup

1. Open **Dojo Zones** in the app.
2. Start with **Live**, or choose **Closed** or **All**.
3. Filter by timeframe and direction, or search for a symbol.
4. Click a row to expand its plan and display its levels on the chart.

The chart opens on **1D** even for a 5D or 1W setup. The **TF** column describes the plan's timeframe.

## Read the plan

| Field | Meaning |
| --- | --- |
| **Side** | The plan's long or short direction. |
| **Zone** | The price area associated with the setup. |
| **Entry** | The reference limit-entry price inside the zone. Coin-Sniffer does not place this order. |
| **To entry** | Distance from the latest available price to entry. If no live price is available, the app uses the price when the zone was published and marks that value with a tooltip. |
| **Stop** | The plan's invalidation price. The percentage beside it is entry-to-stop distance, not your account risk or a guarantee of an execution price. |
| **Targets** | TP1, TP2 and TP3 reference prices. |
| **R:R** | The plan's reward-to-risk ratio to TP1. It does not include your trading costs or prove profitability. |
| **Conf** | A relative confluence label: HIGH, MEDIUM or LOW. It is not a win probability. |
| **Vol** | Volume context: HVN, LVN or a neutral label. A dash means unavailable, not zero volume. |
| **Age** | Time since publication. |
| **Price when armed** | The historical price when the plan was published. |

Expand the row for details that may be hidden in a narrow table. **Backed by** lists the supporting context displayed for the plan.

HVN indicates an area with relatively concentrated trading activity; LVN indicates a thinner area. **Point of control**, where shown, is a reference price associated with the greatest volume concentration. These labels describe context, not a promised reaction.

## Understand status

| Status | Meaning |
| --- | --- |
| **Waiting** | The recorded entry has not been reached and the setup remains active. |
| **Open** | Entry has been recorded as reached; no final target/stop outcome is recorded yet. |
| **Target** | TP1 has been recorded as reached. This does not mean TP2 and TP3 were reached. |
| **Stopped** | The stop has been recorded as reached. |
| **Invalid** | The setup became invalid before a recorded entry. No trade is counted. |

**Live** includes Waiting and Open. **Closed** includes Target, Stopped and Invalid. **All** combines them within the history loaded by the app.

## Zone alerts are different events

- **Dojo OTZ Long/Short 1D, 5D or 1W**: a new zone was published.
- **Dojo Zone Entered**: price reached the zone area; it may not have reached the exact entry.
- **Dojo Entry Filled**: observed price reached the plan's entry.

A price move can reach the exact entry without a separate earlier zone-entered notification. Choose the events you want under **Settings → Alert Rules**.

**“Filled” is a market observation, not confirmation of your exchange order.** The app cannot see your orders, balances, position size or actual fills.

## Outcomes and timing

Prices, arrival alerts and recorded outcomes do not all update together. Final outcomes are checked against confirmed daily candles, and the table refreshes periodically. A recent touch may therefore appear before the recorded status changes.

Daily candles do not reveal the order of every intraday move. If an eligible candle touches both stop and target and the order cannot be established, the record uses the conservative stopped outcome.

The summary's target percentage counts Target versus Stopped setups in the loaded results. Waiting, Open and Invalid setups are excluded. Timeframe and direction filters can change the loaded sample; a symbol search only narrows the visible rows. This is a record of modelled setup outcomes, not a complete account return, execution audit or guarantee of future results.

## A coin disappeared from Market Coins

A published zone can outlive the coin's inclusion in the current market list. Select its row in Dojo Zones to inspect it. If the price or chart appears stale, report the symbol and timeframe rather than assuming the plan is updating normally.
