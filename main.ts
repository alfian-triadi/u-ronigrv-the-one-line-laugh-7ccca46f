import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "My laptop only needs an update when I'm five minutes from a deadline — it knows my schedule better than I do.";
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) { throw new Error(`Entry line must be 1-200 characters, got ${charCount}.`); }
if (LINE.trim().length === 0) { throw new Error("Entry line must not be whitespace only."); }
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${charCount} characters to ${join(outDir, "entry.txt")}`);
