import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Coin-Sniffer',
  description: 'User guides for Coin-Sniffer market alerts, charts, Dojo Zones and TradingView indicators.',
  lang: 'en-US',
  head: [
    ['meta', { name: 'theme-color', content: '#00d4aa' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Coin-Sniffer Docs' }],
    ['meta', { property: 'og:description', content: 'Learn to use Coin-Sniffer, read Dojo plans and manage your access.' }],
  ],
  themeConfig: {
    siteTitle: 'Coin-Sniffer',
    nav: [
      { text: 'Get Started', link: '/getting-started/' },
      { text: 'Dojo Zones', link: '/features/dojo' },
      {
        text: 'Features',
        items: [
          { text: 'Market Coins', link: '/features/screener' },
          { text: 'Alerts', link: '/features/alerts/' },
          { text: 'Charts', link: '/features/charts' },
          { text: 'Watchlist', link: '/features/watchlist' },
          { text: 'Pro Webhooks', link: '/features/webhooks' },
          { text: 'Public Preview', link: '/features/demo' },
        ],
      },
      { text: 'TradingView', link: '/tradingview/' },
      { text: 'Billing', link: '/billing/' },
      { text: 'Help', link: '/troubleshooting' },
      { text: 'Open App', link: 'https://coin-sniffer.com', target: '_blank' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'What is Coin-Sniffer?', link: '/getting-started/' },
          { text: 'Create an Account', link: '/getting-started/signup' },
          { text: 'Quick Tour', link: '/getting-started/quick-tour' },
          { text: 'Public Preview', link: '/features/demo' },
        ],
      },
      {
        text: 'Using the App',
        items: [
          { text: 'Dojo Zones & Outcomes', link: '/features/dojo' },
          { text: 'Market Coins', link: '/features/screener' },
          { text: 'Charts', link: '/features/charts' },
          { text: 'Watchlist', link: '/features/watchlist' },
          { text: 'Pro Webhooks', link: '/features/webhooks' },
        ],
      },
      {
        text: 'Alerts',
        collapsed: false,
        items: [
          { text: 'Overview & Preferences', link: '/features/alerts/' },
          { text: 'Surge', link: '/features/alerts/surge' },
          { text: 'Scout', link: '/features/alerts/scout' },
          { text: 'Raids', link: '/features/alerts/raids' },
          { text: 'Whale', link: '/features/alerts/whale' },
          { text: 'Catcher & Contrarian', link: '/features/alerts/catchers' },
        ],
      },
      {
        text: 'TradingView',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/tradingview/' },
          { text: 'Getting Access', link: '/tradingview/getting-access' },
          { text: 'Dojo Structure', link: '/tradingview/dojo-structure' },
          { text: 'Dojo Zones', link: '/tradingview/dojo-zones' },
          { text: 'Dojo Liquidity', link: '/tradingview/dojo-liquidity' },
        ],
      },
      {
        text: 'Billing & Help',
        items: [
          { text: 'Plans & Access', link: '/billing/' },
          { text: 'Trial Access', link: '/billing/trial' },
          { text: 'Manage Subscription', link: '/billing/manage' },
          { text: 'FAQ', link: '/faq' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
        ],
      },
      {
        text: 'Earlier References',
        collapsed: true,
        items: [
          { text: 'Chart & Indicator Reference', link: '/features/indicators/' },
          { text: 'VCP', link: '/features/indicators/vcp' },
          { text: 'Fibonacci & Plan Levels', link: '/features/indicators/fibonacci' },
          { text: 'Surge 5m Script', link: '/tradingview/surge-5m' },
          { text: 'Surge 15m Script', link: '/tradingview/surge-15m' },
          { text: 'Surge 60m Script', link: '/tradingview/surge-60m' },
          { text: 'Scout Script', link: '/tradingview/scout' },
          { text: 'Raids Script', link: '/tradingview/raids' },
          { text: 'Whale Script', link: '/tradingview/whale' },
        ],
      },
    ],
    search: { provider: 'local' },
    footer: {
      message: 'For information and education. Not financial advice. Trading involves substantial risk.',
      copyright: '© 2026 Coin-Sniffer',
    },
  },
})
