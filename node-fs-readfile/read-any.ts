import { readFile } from 'node:fs/promises';

async function readAnyFiles(): Promise<void> {
  try {
    if (process.argv.length < 3) {
      console.log('Please provide a file name as argument.');
      return;
    }

    const contents = await readFile(process.argv[2], 'utf8');
    console.log(contents);
  } catch (error) {
    console.error('Error', error);
  }
}

readAnyFiles();

/*
// const [, , file] = process.argv;
const file = process.argv[2];
// console.log(file);

try {
  const message = await readFile(file, 'utf-8');
  console.log(message);
} catch (err) {
  console.log(err);
}

*/
