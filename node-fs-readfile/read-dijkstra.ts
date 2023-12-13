import { readFile } from 'node:fs/promises';

async function readDijkstraFile(): Promise<void> {
  try {
    const contents = await readFile('dijkstra.txt', 'utf8');
    console.log(contents);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

readDijkstraFile();
