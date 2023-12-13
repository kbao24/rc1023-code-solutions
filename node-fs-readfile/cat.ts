import { readFile } from 'node:fs/promises';

async function catFiles(): Promise<void> {
  try {
    const fileNames = process.argv.slice(2);
    if (fileNames.length === 0) {
      console.log('Please provide file names as arguments.');
      return;
    }

    const fileContentsPromises = fileNames.map((fileName) =>
      readFile(fileName, 'utf8')
    );

    const fileContents = await Promise.all(fileContentsPromises);
    const concatContent = fileContents.join('');

    console.log(concatContent);
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

catFiles();

/*
// const [, , ...filenames] = process.argv;
const
*/
