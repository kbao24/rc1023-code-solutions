import { writeFile } from 'node:fs/promises';

try {
  const note = process.argv.slice(2).join(' ') + '\n';
  await writeFile('note.txt', note);
  console.log('A note has been written to note.txt');
} catch (err) {
  console.error('Error writing note to note.txt:', err);
}
