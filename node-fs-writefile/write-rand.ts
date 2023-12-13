import { writeFile } from 'node:fs/promises';

async function randomNum(): Promise<void> {
  const randomNumber = Math.random();
  try {
    await writeFile('random.txt', randomNumber.toString() + '\n');
    console.log('Random number written to random.txt');
  } catch (err) {
    console.error('Error writing random num to file:', err);
  }
}

randomNum();
