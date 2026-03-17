# coin-sniffer-docs

User documentation site for [Coin Sniffer](https://coin-sniffer.com) — built with [VitePress](https://vitepress.dev).

**Live**: https://docs.coin-sniffer.com

## Development

```bash
npm install
npm run dev       # localhost:5173
npm run build     # production build → docs/.vitepress/dist/
npm run preview   # preview the built site
```

## Structure

```
docs/
├── index.md                  # Home page
├── getting-started/          # Onboarding: what is it, signup, quick tour
├── features/
│   ├── alerts/               # Surge, Scout, Raids, Whale
│   ├── indicators/           # VCP, Fibonacci
│   ├── screener.md
│   ├── watchlist.md
│   ├── webhooks.md
│   └── charts.md
├── tradingview/              # Pine Script indicator docs
├── billing/                  # Plans, trial, manage subscription
├── faq.md
└── troubleshooting.md
```

## Deployment

Auto-deploys to Vercel on push to `main`. The custom domain `docs.coin-sniffer.com` is configured in the Vercel dashboard.

For manual Vercel setup:
1. Import this repo in [Vercel](https://vercel.com/new)
2. Framework: **Other** (not Vite — VitePress has its own build)
3. Build command: `npm run build`
4. Output directory: `docs/.vitepress/dist`
5. Add custom domain `docs.coin-sniffer.com` in Vercel → Project → Domains
6. Add a CNAME record in your DNS: `docs` → `cname.vercel-dns.com`

## Contributing

Edit the `.md` files in `docs/`. VitePress uses standard Markdown with some [extensions](https://vitepress.dev/guide/markdown).
