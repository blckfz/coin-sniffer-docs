# Coin-Sniffer documentation

User documentation for [Coin-Sniffer](https://coin-sniffer.com), built with VitePress. Published site: [docs.coin-sniffer.com](https://docs.coin-sniffer.com).

## Develop and check

```bash
npm ci
npm run dev
npm run build
npm run preview
```

The production build is written to `docs/.vitepress/dist/`. VitePress checks internal page links during the build.

## Content

- `docs/getting-started/`: account verification, access and the app tour.
- `docs/features/dojo.md`: setup plans, alerts, status and outcome limitations.
- `docs/features/`: charts, market list, watchlist, public preview and Pro webhooks.
- `docs/features/alerts/`: user-facing alert families and notification preferences.
- `docs/tradingview/`: current invite-only Dojo indicators and existing script references.
- `docs/billing/`: current purchase, trial and subscription workflows.
- `docs/faq.md` and `docs/troubleshooting.md`: user support.
- `docs/.vitepress/config.mts`: navigation and site metadata.

Existing page paths are retained so saved links continue to work. Earlier reference pages clarify when they do not describe a current control or offer.

## Editorial boundary

Document what users can see and do in the current app. Verify important behaviour against the active screen and the implemented access rules, rather than treating an unused component, code comment or old marketing text as an available feature.

Do not publish detection formulas, proprietary thresholds or scoring recipes, infrastructure and database details, private endpoints, account data, credentials, tokens or deployment configuration. Use placeholders for customer-supplied webhook credentials. Do not copy internal source comments into the public site.

Explain user-visible limits, including incomplete chart data, outcome timing and the difference between a modelled entry and an actual exchange fill. Avoid promises of fixed latency, continuous availability, profitability or permanent history.

For pricing and trial terms, check the current purchase flow. Do not advertise an older bundle or promise automatic indicator access merely because an account still supports an existing add-on.

Only documentation and documentation-site configuration belong in this repository's content updates.
