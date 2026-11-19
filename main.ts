// The World in One Day — a news-image-20261118 entry (Node 22, standard library only).
//
// The entry's picture is entry.png beside this file: a one-page summary of the
// world's news of Wednesday 18 November 2026, drawn as vector HTML/CSS with inline
// SVG (image.html, committed beside it) and rendered to a flat PNG. This
// program's whole job is to hand that picture in: it copies entry.png to
// /output/entry.png, byte for byte, so both grader runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
