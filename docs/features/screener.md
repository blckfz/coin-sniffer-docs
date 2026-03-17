# Screener Table

The screener is the main view of the app — a live-updating table showing all tracked Binance Futures pairs with real-time price data and pre-computed indicators.

## The table

### Columns

| Column | Description |
|--------|-------------|
| **Symbol** | Trading pair (e.g., BTCUSDT, ETHUSDT) |
| **Price** | Current last-trade price |
| **5m / 15m / 1h / 4h / 8h / 1d** | Price change % over each timeframe |
| **Volume** | 24h quote volume in USDT |
| **VCP** | Volatility Contraction Pattern score ([learn more](/features/indicators/vcp)) |
| **Count** | Number of trades in the last 24h |

### Sorting

Click any column header to sort by that column. Click again to reverse the sort order. The default sort is by 1h % change.

### Search / filter

Use the search box above the table to filter by symbol name (e.g., type "BTC" to show only pairs containing "BTC").

### Watchlist filter

Toggle the **Watchlist** switch to show only coins you've starred. See [Watchlist](/features/watchlist).

## Timeframes

All 6 timeframes are computed server-side from the continuous 1-minute candle stream:

| Timeframe | Window |
|-----------|--------|
| 5m | Last 5 minutes |
| 15m | Last 15 minutes |
| 1h | Last 60 minutes |
| 4h | Last 4 hours |
| 8h | Last 8 hours |
| 1d | Last 24 hours |

The backend holds 1,440 candles (24 hours) per symbol and derives all windows in real time.

## Data update rate

The screener table updates every **5 seconds** from the backend REST API. Alert logic runs server-side in real time (within milliseconds of each new candle), but the table display polls every 5s.

## Tracked pairs

All **Binance Futures USDT perpetual pairs** that meet minimum liquidity thresholds. The exact set of tracked pairs is updated periodically. The screener currently tracks 200+ pairs.

## Opening a chart

Click any row to open the **chart modal** for that symbol. See [Charts](/features/charts).

## Color coding

- **Green** values: positive price change
- **Red** values: negative price change
- Rows flash briefly when a price updates
