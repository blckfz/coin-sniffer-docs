/**
 * Captures the app screenshots the docs use.
 *
 * WHY A PERSISTENT PROFILE
 *
 * The app needs a signed-in account, and the one thing this script must never
 * do is handle a password. So it drives a real Chrome profile kept in
 * .profile/: you sign in once, by hand, in a window this opens for you, and
 * every capture afterwards reuses that session. Nothing here reads, stores or
 * transmits a credential, and the profile is gitignored.
 *
 * WHY ELEMENTS RATHER THAN A VIEWPORT
 *
 * Each shot frames a named element. A full-page screenshot would make the
 * useful part small and would change shape whenever anything else on the page
 * did; framing the panel keeps the subject the same size in the docs across
 * re-runs.
 *
 *   node tools/screenshots/capture.mjs --login      sign in once
 *   node tools/screenshots/capture.mjs              capture everything
 *   node tools/screenshots/capture.mjs --only dojo-table,dojo-timeline
 *   node tools/screenshots/capture.mjs --headed     watch it work
 */

import { chromium } from 'playwright'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { mkdir } from 'node:fs/promises'

import { SHOTS, MASKS, MASK_LOCATORS } from './shots.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..', '..')
const PROFILE = join(HERE, '.profile')
const OUT = join(ROOT, 'docs', 'public', 'img', 'app')

const args = process.argv.slice(2)
const flag = (name) => args.includes(`--${name}`)
// Accepts --only=a,b and --only a,b, because both get typed.
const value = (name, fallback) => {
  const eq = args.find((a) => a.startsWith(`--${name}=`))
  if (eq) return eq.slice(name.length + 3)
  const at = args.indexOf(`--${name}`)
  if (at !== -1 && args[at + 1] && !args[at + 1].startsWith('--')) return args[at + 1]
  return fallback
}

// The canonical host: signing out of /app lands on www, and a session saved
// on one host is not sent to the other.
const BASE = value('base-url', 'https://www.coin-sniffer.com')
const ONLY = value('only', '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

/**
 * A desktop the docs can show at full width without a horizontal scrollbar,
 * captured at 2x so the text stays sharp on a high-density display.
 */
const VIEWPORT = { width: 1920, height: 1080 }

async function browser({ headless }) {
  return chromium.launchPersistentContext(PROFILE, {
    // The Chrome already on this machine. Playwright's own browser download is
    // ~150MB of a binary we would only use here.
    channel: 'chrome',
    headless,
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    colorScheme: 'dark',
    // The app is a dark product; a light-mode capture would not match it.
    args: ['--force-dark-mode'],
  })
}

/**
 * Opens a window to sign in by hand, and closes itself once you have.
 *
 * It watches for the app's own tab bar rather than asking you to confirm,
 * so it works the same whether it is run from a terminal or started for you.
 */
async function login() {
  const ctx = await browser({ headless: false })
  const page = ctx.pages()[0] ?? (await ctx.newPage())
  await page.goto(`${BASE}/app`)

  console.log('\n  A Chrome window is open. Sign in there.')
  console.log('  This closes by itself once the app loads — nothing to confirm.\n')

  try {
    await page
      .getByRole('button', { name: /Market Coins/ })
      .first()
      .waitFor({ state: 'visible', timeout: 10 * 60 * 1000 })
    console.log('  Signed in. Session saved to tools/screenshots/.profile/.\n')
  } catch {
    console.log('  Timed out waiting for the app. Nothing saved that is usable — run it again.\n')
    process.exitCode = 1
  } finally {
    await ctx.close()
  }
}

/**
 * Confirms the app itself loaded.
 *
 * Signing out does not land on /login — /app redirects to the marketing page,
 * which renders a masked public demo that looks enough like the product to be
 * captured by mistake. The tab bar only exists inside the real app.
 */
async function signedIn(page) {
  const tabs = page.getByRole('button', { name: /Market Coins/ }).first()
  try {
    await tabs.waitFor({ state: 'visible', timeout: 20000 })
  } catch {
    throw new Error('not signed in')
  }
}

async function capture() {
  await mkdir(OUT, { recursive: true })
  const ctx = await browser({ headless: !flag('headed') })
  const page = ctx.pages()[0] ?? (await ctx.newPage())

  const wanted = ONLY.length ? SHOTS.filter((s) => ONLY.includes(s.name)) : SHOTS
  if (ONLY.length && wanted.length !== ONLY.length) {
    const known = SHOTS.map((s) => s.name).join(', ')
    throw new Error(`unknown shot in --only. Known shots: ${known}`)
  }

  // Fail in seconds, not minutes: a missing element here means the shot needs
  // rewriting, and waiting 30s each to be told that wastes the run.
  ctx.setDefaultTimeout(15000)

  const masks = [...MASKS.map((m) => page.locator(m)), ...MASK_LOCATORS.map((f) => f(page))]
  const failures = []

  for (const shot of wanted) {
    process.stdout.write(`  ${shot.name} … `)
    try {
      await page.goto(`${BASE}/app`, { waitUntil: 'domcontentloaded' })
      await signedIn(page)
      await shot.prepare(page)

      const target = await shot.target(page)
      await target.waitFor({ state: 'visible' })

      // Framed on the element, but capped in height where a table would
      // otherwise run to thirty rows. A docs screenshot is there to show the
      // shape of a thing; past a screenful it stops being read and starts
      // being scrolled past.
      const box = await target.boundingBox()
      if (!box) throw new Error('element has no box — is it visible?')
      let height = shot.maxHeight ? Math.min(box.height, shot.maxHeight) : box.height

      // `until` cuts the frame where a named element begins, for the case
      // where the subject ends before its container does and the tail is
      // something the docs should not show.
      if (shot.until) {
        const stop = await (await shot.until(page)).boundingBox()
        if (stop) height = Math.min(height, Math.max(0, stop.y - box.y))
      }

      // Never clip past the bottom of the window. An element inside a scroll
      // container can be taller than what is actually on screen, and the part
      // below the fold captures as a black band rather than as content.
      height = Math.min(height, VIEWPORT.height - box.y)
      if (height < 40) throw new Error('element is mostly off-screen — scroll it into view in prepare()')

      await page.screenshot({
        path: join(OUT, `${shot.name}.png`),
        clip: { x: box.x, y: box.y, width: box.width, height },
        mask: masks,
        maskColor: '#17171f',
        animations: 'disabled',
      })
      console.log(`ok (${Math.round(box.width)}×${Math.round(height)})`)
    } catch (err) {
      const why = err instanceof Error ? err.message.split('\n')[0] : String(err)
      // A session problem is not eight separate shot problems. Say it once and
      // stop, so the output names the thing that actually needs doing.
      if (why.includes('not signed in')) {
        console.log('FAILED')
        console.log('\n  Not signed in. Run:  npm run shots:login\n')
        await ctx.close()
        process.exitCode = 1
        return
      }
      console.log(shot.optional ? `skipped (${shot.optional})` : `FAILED — ${why}`)
      if (!shot.optional) failures.push({ name: shot.name, why })
    }
  }

  await ctx.close()

  if (failures.length) {
    console.log('\n  Not captured:')
    for (const f of failures) console.log(`    ${f.name}: ${f.why}`)
    console.log('\n  Re-run one with --only <name> --headed to watch what it does.\n')
    process.exitCode = 1
  } else {
    console.log(`\n  Written to docs/public/img/app/. Optimise with:\n    node tools/screenshots/optimise.mjs\n`)
  }
}

await (flag('login') ? login() : capture())
