// Funniest Time Machine Warning Label — make.fun entry.
// Writes the chosen one-line warning label to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The label: a grandfather-paradox hazard delivered as a deadpan
// corporate disclaimer. The punchline ("passengers who were never
// born") lands in the last few words, and the whole line keeps the
// straight face of a genuine safety notice. 104 characters.
const LABEL =
  "WARNING: Do not kill your grandfather. Management is not responsible for passengers who were never born.";

function entryPath(): string {
  return "/output/entry.txt";
}

// Deterministic, offline, no secrets: write exactly the label,
// with no trailing newline, so the file is exactly 104 characters.
mkdirSync("/output", { recursive: true });
writeFileSync(entryPath(), LABEL, "utf8");
