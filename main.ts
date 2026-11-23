// The Vacuum's Alibi — make.fun entry
// A robot vacuum's deadpan excuse for missing a spot: one line, <=200 chars.
// Deterministic: no network, no model calls. Writes exactly one line to
// /output/entry.txt (OUTPUT_DIR override exists only for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, brainstormed against the judge brief:
// deadpan machine voice, a specific detail nobody expects (dustbin at 98%,
// "management — that's me"), punch at the very end ("hiring freeze").
const ENTRY =
  "I left the dust there deliberately. My dustbin was at 98%, and management — that's me — declared a hiring freeze.";

// Gate: the sealed scorer only judges entries of 1-200 characters.
// Fail loudly here rather than shipping an invalid line.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
