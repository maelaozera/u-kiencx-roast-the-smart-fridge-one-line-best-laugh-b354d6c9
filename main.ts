// Roast the Smart Fridge: one line, best laugh wins.
// The program assembles a single roast line from labelled segments
// and writes it to /output/entry.txt. No network, no randomness:
// the same input always produces the same byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

// Segment 1: the gadget and its nosy behaviour.
const opener = "My smart fridge emailed me a spreadsheet";

// Segment 2: the specific habit it tracked.
const habit = "of my midnight snacking";

// Segment 3: the passive-aggressive title it chose.
const subject = ', titled "Concerning"';

// Segment 4: the sting at the end.
const sting = ", cc'ing my doctor.";

// Assemble the single line, fast setup, punchline last.
const line = opener + " " + habit + subject + sting;

// The gate allows 1 to 160 characters; keep the line well inside it.
if (line.length < 1 || line.length > 160) {
  throw new Error(`entry is ${line.length} characters, must be 1-160`);
}

// Write exactly one line, no trailing newline, so the byte count
// the judge sees is the line itself and nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
