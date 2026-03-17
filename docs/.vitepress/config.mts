import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Coin Sniffer',
  description: 'Real-time crypto alerts & market analysis — documentation',
  lang: 'en-US',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#00d4aa' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Coin Sniffer Docs' }],
    ['meta', { property: 'og:description', content: 'Learn how to use Coin Sniffer — real-time crypto screener, alerts, TradingView indicators.' }],
    ['meta', { property: 'og:image', content: 'https://docs.coin-sniffer.com/og-image.png' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Coin Sniffer',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/getting-started/' },
      {
        text: 'Features',
        items: [
          { text: 'Screener', link: '/features/screener' },
          { text: 'Alerts', link: '/features/alerts/' },
          { text: 'Watchlist', link: '/features/watchlist' },
          { text: 'Webhooks', link: '/features/webhooks' },
          { text: 'Charts', link: '/features/charts' },
          { text: 'VCP & Fibonacci', link: '/features/indicators/' },
        ],
      },
      { text: 'TradingView', link: '/tradingview/' },
      { text: 'Billing', link: '/billing/' },
      { text: 'FAQ', link: '/faq' },
      { text: 'App', link: 'https://coin-sniffer.com', target: '_blank' },
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'What is Coin Sniffer?', link: '/getting-started/' },
            { text: 'Create an Account', link: '/getting-started/signup' },
            { text: 'Quick Tour', link: '/getting-started/quick-tour' },
          ],
        },
      ],
      '/features/': [
        {
          text: 'Features',
          items: [
            { text: 'Screener Table', link: '/features/screener' },
            {
              text: 'Alerts',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/features/alerts/' },
                { text: 'Surge Alerts', link: '/features/alerts/surge' },
                { text: 'Scout Alerts', link: '/features/alerts/scout' },
                { text: 'Raid Alerts', link: '/features/alerts/raids' },
                { text: 'Whale Alerts', link: '/features/alerts/whale' },
              ],
            },
            { text: 'Watchlist', link: '/features/watchlist' },
            { text: 'Webhooks', link: '/features/webhooks' },
            { text: 'Charts', link: '/features/charts' },
            {
              text: 'Indicators',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/features/indicators/' },
                { text: 'VCP', link: '/features/indicators/vcp' },
                { text: 'Fibonacci Levels', link: '/features/indicators/fibonacci' },
              ],
            },
          ],
        },
      ],
      '/tradingview/': [
        {
          text: 'TradingView Indicators',
          items: [
            { text: 'Overview', link: '/tradingview/' },
            { text: 'Getting Access', link: '/tradingview/getting-access' },
            { text: 'Surge 5m', link: '/tradingview/surge-5m' },
            { text: 'Surge 15m', link: '/tradingview/surge-15m' },
            { text: 'Surge 60m', link: '/tradingview/surge-60m' },
            { text: 'Scout', link: '/tradingview/scout' },
            { text: 'Raids', link: '/tradingview/raids' },
            { text: 'Whale', link: '/tradingview/whale' },
          ],
        },
      ],
      '/billing/': [
        {
          text: 'Billing & Plans',
          items: [
            { text: 'Plans & Pricing', link: '/billing/' },
            { text: 'Free Trial', link: '/billing/trial' },
            { text: 'Manage Subscription', link: '/billing/manage' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coin-sniffer' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>',
        },
        link: 'https://discord.gg/coin-sniffer',
      },
    ],

    footer: {
      message: 'Not financial advice. Trading involves substantial risk.',
      copyright: '© 2026 Coin Sniffer',
    },

    editLink: {
      pattern: 'https://github.com/coin-sniffer/coin-sniffer-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
