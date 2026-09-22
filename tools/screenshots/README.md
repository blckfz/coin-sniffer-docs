# Docs screenshots

Captures the app shots the guides use, into `docs/public/img/app/`.

## Once

```bash
npm run shots:login
```

Opens a Chrome window. Sign in there; it closes itself when the app loads and
keeps the session in `tools/screenshots/.profile/` (gitignored). No password is
read, stored or sent by anything in this directory — the browser holds the
session, the same as if you had signed in yourself.

## Every time the UI changes

```bash
npm run shots            # all of them
npm run shots:optimise   # halve the 2x captures, strip metadata
```

Useful flags:

```bash
node tools/screenshots/capture.mjs --only dojo-timeline --headed
node tools/screenshots/capture.mjs --base-url http://localhost:5173
```

`--headed` shows the browser doing it, which is how to see why a shot missed.

## Adding a shot

Add an entry to `shots.mjs`: a `name` (the filename), the `doc` it appears in,
a `prepare(page)` that drives the app into the state, and a `target(page)`
naming the element to frame. Anchor on visible text rather than class names —
a class is a styling decision that moves for unrelated reasons.

Mark a shot `optional` when it depends on data that may not exist today (a
waiting plan with no recent alerts, Pro-only screens). Optional shots report as
skipped instead of failing the run, and the previously captured file stays.

## What the shots must not contain

The captures are published. `MASKS` in `shots.mjs` blanks account identifiers
before the file is written; check a new shot for anything else personal —
billing, email, an invite code — before committing it.
