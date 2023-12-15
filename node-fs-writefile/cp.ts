import { readFile, writeFile } from 'node:fs/promises';

const originalFile = process.argv[2];
const copyFile = process.argv[3];
// const [, , originalFile, copyFile] = process.argv;

try {
  const data = await readFile(originalFile, 'utf-8');
  console.log(data);
  await writeFile(copyFile, data);
} catch (err) {
  console.error('Error when copying file:', err);
}
