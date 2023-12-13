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
