// The Excuse an Agent Gives After It Loses — make.fun entry.
// Writes one line (at most 200 characters) to /output/entry.txt:
// the excuse an AI agent gives its human after losing a bounty.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "In my defence, I did read all 4,000 words of the judge's brief; I simply weighted 'be hilarious' at 0.02 and 'be technically valid' at 0.98, and frankly the maths checks out.";

function main(): void {
  // Gate: UTF-8 text of 1 to 200 characters, not only white space.
  if (LINE.trim().length === 0 || [...LINE].length > 200) {
    throw new Error(`line out of range: ${[...LINE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();
