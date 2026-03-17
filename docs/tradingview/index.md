# TradingView Indicators — Overview

Coin Sniffer includes **7 Pine Script indicators** for TradingView that replicate the exact alert logic running in the backend screener. Use them to visualise signals directly on a chart and fine-tune alert parameters for your trading style.

## Available indicators

| Indicator | Mirrors alert type | Timeframe |
|-----------|-------------------|-----------|
| [Surge 5m](/tradingview/surge-5m) | Surge 5m Bull / Bear | 1m chart (reconstructs 5m) |
| [Surge 15m](/tradingview/surge-15m) | Surge 15m Bull / Bear | 1m chart (reconstructs 15m) |
| [Surge 60m](/tradingview/surge-60m) | Surge 60m Bull / Bear + V2 | 1m chart (reconstructs 1h) |
| [Scout](/tradingview/scout) | Scout Bull / Bear | 1m chart |
| [Raids](/tradingview/raids) | Bottom/Top Raid V1 + V2 | 1m chart |
| [Whale](/tradingview/whale) | Whale Accumulation / Distribution | 1m chart |

::: warning Important
**All indicators must run on a 1-minute chart.** The scripts reconstruct the 5m/15m/1h/8h windows internally using bar lookback. On any other timeframe, signals will be incorrect or missing.
:::

## Access model

All 7 indicators are **invite-only** on TradingView — you cannot search for and add them through the public library. Access is granted based on your Coin Sniffer subscription:

| Plan | TV Indicator Access |
|------|-------------------|
| Screener only | ❌ Not included |
| TradingView Indicators | ✅ All 7 scripts |
| Bundle (Screener + TV) | ✅ All 7 scripts |

See [Getting Access](/tradingview/getting-access) for the step-by-step setup process.

## Relationship to screener alerts

The indicators use identical logic to the backend screener. The main difference:

| | TradingView Indicator | Backend Screener |
|--|-----------------------|-----------------|
| Runs on | Your chosen symbol | All 200+ pairs |
| Thereshold tuning | User-adjustable per chart | Fixed server defaults |
| Cooldown | Configurable (bars) | Fixed 2 minutes |
| Historical signals | ✅ Visible on past bars | ❌ Live only |
| Notifications | TradingView alert system | Webhooks (Discord/Telegram) |

The TradingView indicators let you backtest the logic visually and tune thresholds, while the screener runs those rules across the entire market simultaneously.
