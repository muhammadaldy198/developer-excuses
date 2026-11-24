import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line excuse a developer gives when code breaks in
// production: the oldest excuse in the book turns out to be true this
// time — and the developer already blamed the wrong system in public.
const LINE =
  "It's always DNS. This time it actually was DNS, and I'd already blamed the database in the incident channel.";

// Fail loudly instead of silently writing an invalid entry: the gate
// requires UTF-8 text of 1 to 200 characters, not only white space.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-200 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
