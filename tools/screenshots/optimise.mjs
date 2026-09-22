/**
 * Shrinks the captured PNGs for the docs site.
 *
 * Three things, in the order they pay: a 256-colour palette, which is lossless
 * in practice for a flat dark UI and is where most of the saving is; PNG's
 * "sub" row filter, which the capture does not use; and a cap on width, since
 * a 2x capture of a wide panel is more pixels than the page can render.
 *
 * The result is kept only if it is actually smaller. Re-encoding an already
 * good PNG can easily produce a bigger one, and a script that silently grows
 * the files it claims to optimise is worse than no script.
 */

import { readdir, stat, rename, unlink } from 'node:fs/promises'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const run = promisify(execFile)
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'docs', 'public', 'img', 'app')

/** Wide enough for the docs content column on a 2x display. */
const MAX_WIDTH = 1800

const kb = (b) => `${Math.round(b / 1024)}KB`

for (const file of (await readdir(OUT)).filter((f) => f.endsWith('.png'))) {
  const path = join(OUT, file)
  const tmp = `${path}.opt`
  const before = (await stat(path)).size

  await run('magick', [
    path,
    '-strip',
    '-resize', `${MAX_WIDTH}>`,
    '-colors', '256',
    '-define', 'png:compression-level=9',
    '-define', 'png:compression-filter=1',
    tmp,
  ])

  const after = (await stat(tmp)).size
  if (after < before) {
    await rename(tmp, path)
    console.log(`  ${file}: ${kb(before)} → ${kb(after)}`)
  } else {
    await unlink(tmp)
    console.log(`  ${file}: ${kb(before)} (left alone — re-encoding was bigger)`)
  }
}
