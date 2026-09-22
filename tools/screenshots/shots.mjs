/**
 * What the docs show, and how to get the app into that state.
 *
 * The app carries no test ids, so every anchor here is text a user can see:
 * a tab label, a button caption, a tooltip the UI already sets. That is the
 * most stable thing available — a class name is a styling decision and moves
 * for reasons that have nothing to do with the screenshot, while "Dojo Zones"
 * moves only if the product renames the tab, which is a doc change anyway.
 *
 * Each shot declares the element to frame rather than a pixel rectangle, so a
 * layout change reframes itself instead of silently cropping something in
 * half.
 */

/** The panel holding the three tabs and whichever table is open. */
const TABLE_PANEL =
  'xpath=ancestor::div[contains(@class,"rounded-lg") and contains(@class,"border")][1]'

/**
 * Anything that must not reach a published page.
 *
 * The URL rule is the one that matters. A configured Discord or Telegram
 * destination renders its full webhook URL, and that URL IS the credential:
 * anyone holding it can post to the channel. A capture of the webhooks screen
 * with a real destination on it is a leak, so the entry masks every element
 * whose text is a URL, and the shot below frames the empty form instead of
 * the list of saved destinations.
 */
export const MASKS = [
  'header [data-account-email]',
  'header button:has-text("@")',
]

/** Locator-valued masks, applied to every shot alongside MASKS. */
export const MASK_LOCATORS = [(page) => page.getByText(/^https?:\/\//)]

const settle = (page, ms = 1200) => page.waitForTimeout(ms)

async function openTab(page, name) {
  await page.getByRole('button', { name }).first().click()
  await settle(page)
}

async function openSettings(page, tab) {
  await page.getByRole('button', { name: 'Open settings' }).click()
  await page.getByRole('heading', { name: 'Settings' }).waitFor()
  await page.getByRole('button', { name: tab }).first().click()
  await settle(page)
}

/** The settings panel. It carries no dialog role, so anchor on its heading. */
const SETTINGS_PANEL = (page) =>
  page
    .getByRole('heading', { name: 'Settings' })
    .locator('xpath=ancestor::div[contains(@class,"rounded-lg")][1]')

export const SHOTS = [
  {
    name: 'dojo-table',
    doc: 'docs/features/dojo.md — Find and open a setup',
    async prepare(page) {
      await openTab(page, /Dojo Zones/)
      // The summary counts land on their own request; without this the shot
      // can catch "counting zones…", which is exactly the state the docs
      // describe as temporary.
      await page.getByText(/zones/).first().waitFor({ timeout: 15000 })
      await settle(page)
    },
    target: (page) => page.getByRole('button', { name: /Dojo Zones/ }).first().locator(TABLE_PANEL),
    maxHeight: 620,
  },
  {
    name: 'dojo-plan-expanded',
    doc: 'docs/features/dojo.md — Read the plan',
    async prepare(page) {
      await openTab(page, /Dojo Zones/)
      await page.locator('tbody tr').first().click()
      await settle(page)
    },
    target: (page) => page.getByRole('button', { name: /Dojo Zones/ }).first().locator(TABLE_PANEL),
    maxHeight: 700,
  },
  {
    name: 'dojo-timeline',
    doc: 'docs/features/dojo.md — Follow one plan',
    async prepare(page) {
      await openTab(page, /Dojo Zones/)
      // A CLOSED plan, deliberately. A waiting one has a timeline of two
      // steps and shows nothing the table above it did not already say; the
      // section is about following a plan to where it got to.
      await page.getByRole('button', { name: 'Closed', exact: true }).first().click()
      await settle(page)
      // Prefer a plan that filled and then resolved: that timeline has every
      // step the section describes. An invalidated one is the fallback, not
      // the illustration, because it stops at the second step.
      const resolved = page.locator('tbody tr').filter({ hasText: /Target|Stopped/ }).first()
      const row = (await resolved.count()) ? resolved : page.locator('tbody tr').first()
      await row.click()
      await page.getByText('What has happened').first().waitFor()
      await settle(page)
    },
    // The timeline plus its own heading: the block the docs section is about,
    // without the levels table above it repeating the previous shot.
    target: (page) =>
      page.getByText('What has happened').first().locator('xpath=ancestor::div[1]'),
    // Stops above the app's own settlement footnote. That sentence is a copy
    // of what the docs page says around the image, and the app's wording
    // trails the change to minute settlement — a screenshot is the worst
    // place to carry a line that contradicts the paragraph beside it.
    until: (page) => page.getByText(/Outcomes are settled/).first(),
  },
  {
    name: 'alert-history-chips',
    doc: 'docs/features/alerts/index.md — Review history',
    async prepare(page) {
      await openTab(page, /Alert History/)
      await settle(page)
    },
    target: (page) => page.getByRole('button', { name: /Alert History/ }).first().locator(TABLE_PANEL),
    maxHeight: 620,
  },
  {
    name: 'alert-history-plan-only',
    doc: 'docs/features/dojo.md — Plans in Alert History',
    async prepare(page) {
      await openTab(page, /Alert History/)
      await settle(page)

      // The rows are virtualised and sorted by last alert, so a coin with
      // nothing in the window sits below the fold and is not in the DOM until
      // scrolled to. Walk down until the cell appears or the list ends.
      const cell = page.locator('[title^="No alerts in the last 48 hours"]')
      for (let i = 0; i < 40 && !(await cell.count()); i++) {
        await page.mouse.move(400, 500)
        await page.mouse.wheel(0, 900)
        await page.waitForTimeout(150)
      }
      await settle(page, 400)
    },
    // The app sets this tooltip on exactly the cell the docs explain, so the
    // shot finds the right row itself instead of hard-coding a coin that may
    // not have a waiting plan next week.
    target: (page) =>
      page
        .locator('[title^="No alerts in the last 48 hours"]')
        .first()
        .locator('xpath=ancestor::tr[1]'),
    optional: 'needs a coin with a waiting plan and nothing fired in 48h',
  },
  {
    name: 'chart-zone-overlay',
    doc: 'docs/features/charts.md — Dojo overlays',
    async prepare(page) {
      await openTab(page, /Dojo Zones/)
      await page.locator('tbody tr').first().click()
      // Charts stream in; give the series and the overlay time to draw.
      await settle(page, 4000)
    },
    // The whole chart panel: symbol, interval buttons and the Alerts toggle
    // belong in the frame, because the Charts page describes them around the
    // image. Anchored on the Alerts button, which only the chart has.
    target: (page) =>
      page
        .getByRole('button', { name: 'Alerts', exact: true })
        .first()
        .locator('xpath=ancestor::div[contains(@class,"rounded-lg")][1]'),
    maxHeight: 700,
  },
  {
    name: 'settings-alert-rules',
    doc: 'docs/features/alerts/index.md — Choose notifications',
    async prepare(page) {
      await openSettings(page, /Alert Rules/)
      await page.getByText('Dojo Confluence Zones').first().scrollIntoViewIfNeeded()
      await settle(page)
    },
    target: SETTINGS_PANEL,
    maxHeight: 700,
  },
  {
    name: 'settings-dojo-rules',
    doc: 'docs/features/dojo.md — Zone alerts are different events',
    async prepare(page) {
      await openSettings(page, /Alert Rules/)
      // Scrolled by its LAST row, so the whole group is on screen. Scrolling
      // to the heading leaves the bottom of the group below the fold, and
      // what is below the fold does not capture.
      await page.getByText(/Dojo Entry Filled \(Short\)/).first().scrollIntoViewIfNeeded()
      await settle(page)
    },
    // Just the Dojo column. The whole modal is a different shot for a
    // different page; here the subject is which zone events can be toggled.
    // The group is heading + rows: two levels above the heading text, since
    // the heading sits in its own row beside the enabled count.
    target: (page) =>
      page.getByRole('heading', { name: 'Dojo Confluence Zones' }).locator('xpath=../..'),
  },
  {
    name: 'settings-webhooks',
    doc: 'docs/features/webhooks.md — Add a destination',
    async prepare(page) {
      await openSettings(page, /Webhooks/)
      // The EMPTY form, not the list of saved destinations. A saved webhook
      // shows its URL, and that URL is the credential — see MASKS. Nothing
      // here is submitted: the form is opened, photographed and abandoned.
      await page.getByRole('button', { name: '+ Add Webhook' }).click()
      await page.getByText('New Webhook').waitFor()
      await settle(page)
    },
    target: (page) =>
      page.getByText('New Webhook').first().locator('xpath=ancestor::div[1]'),
    optional: 'Pro access only',
  },
]
