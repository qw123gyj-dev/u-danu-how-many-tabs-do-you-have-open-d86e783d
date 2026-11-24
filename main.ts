// How Many Tabs Do You Have Open? — entry program (program/v1, Node 22,
// stdlib only). Writes the tab count to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt), then reads it back and verifies the bytes.
// Gates enforced before writing: digits only, 1 to 5 characters, non-empty,
// not only white space.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Why 47: high enough to surprise (nobody guesses a tidy number like 10),
// low enough to be believable. It is the count of a real power user at the
// end of a workday: a research window, a docs window, a music tab, a few
// shopping tabs, and a trail of half-read articles nobody ever closes.
// An odd, unround number reads as counted, not picked to shock.
const COUNT = "47";

// The entry must be digits only: no words, no punctuation, no second number.
if (!/^\d+$/.test(COUNT)) {
  throw new Error("Count must contain digits only");
}

if (COUNT.length === 0) {
  throw new Error("Count must not be empty");
}
if (COUNT.length > 5) {
  throw new Error(
    `Count must be at most 5 characters, got ${COUNT.length}`,
  );
}
if (COUNT.trim() !== COUNT || COUNT.trim().length === 0) {
  throw new Error("Count must not be empty or only white space");
}

// A leading zero would make the count ambiguous (is "047" forty-seven or a
// padded string?), so a multi-digit count must not start with 0.
if (COUNT.length > 1 && COUNT.startsWith("0")) {
  throw new Error("Count must not have a leading zero");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, COUNT, "utf8");

// Read back the raw bytes, not a decoded string: this catches a stray
// trailing newline, a BOM, or any encoding surprise that a string compare
// could silently normalize away.
const back = readFileSync(outPath);
if (!back.equals(Buffer.from(COUNT, "utf8"))) {
  throw new Error("Verification failed: entry.txt does not match the count");
}

console.log(`Wrote ${outPath}: ${COUNT}`);
console.log(`Open browser tabs: ${COUNT}`);
