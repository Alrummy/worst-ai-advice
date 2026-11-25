const fs = require('node:fs');
const path = require('node:path');

// The joke is that unchecked confidence gets mistaken for accuracy.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), "AI advice: always trust the first answer — confidence is just accuracy that hasn't been checked yet.\n", 'utf8');
