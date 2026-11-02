// Emits only Git-tracked changes and non-ignored source files for connector upload.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
const files = new Set([
  ...execFileSync('git', ['diff', '--name-only'], { encoding: 'utf8' }).trim().split('\n'),
  ...execFileSync('git', ['ls-files', '--others', '--exclude-standard'], { encoding: 'utf8' }).trim().split('\n'),
].filter(Boolean));
const entries = [...files].filter(p => !p.endsWith('.png')).map(p => ({ path: p.trim(), mode: '100644', type: 'blob', content: readFileSync(p.trim(), 'utf8') }));
console.log(JSON.stringify({ entries, png: readFileSync('public/olraa-social.png').toString('base64') }));
