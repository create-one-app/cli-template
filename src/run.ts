#!/usr/bin/env node

import cac from 'cac';
import { fileURLToPath } from 'url';
import { fs, path } from 'zx';

const cwd = process.cwd();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log({ cwd, __dirname });

const { version } = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8'),
);

const cli = cac('coa');

cli.command('hello', 'hello word').action(() => {
  console.log('hello world');
});

// Display help message when `-h` or `--help` appears
cli.help();
// Display version number when `-v` or `--version` appears
// It's also used in help message
cli.version(version);

cli.parse();
