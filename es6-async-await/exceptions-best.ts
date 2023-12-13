import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<string> {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.

  const msg = await read('foo', false);
  console.log(elapsed(), 'throwOnce:', msg);
  return msg;
}

async function throwSeveral(): Promise<[string, string, string]> {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  const msg1 = await read('foo1', false);
  console.log(elapsed(), 'throwSeveral1:', msg1);

  const msg2 = await read('foo2', false);
  console.log(elapsed(), 'throwSeveral2:', msg2);

  const msg3 = await read('foo3', false);
  console.log(elapsed(), 'throwSeveral3:', msg3);

  return [msg1, msg2, msg3];
}

async function throwChained(): Promise<[string, string, string]> {
  const msg1 = await read('foo-chain', false);
  console.log(elapsed(), 'throwChained1:', msg1);

  const msg2 = await read(msg1, false);
  console.log(elapsed(), 'throwChained2:', msg2);

  const msg3 = await read(msg2, false);
  console.log(elapsed(), 'throwChained3:', msg3);

  return [msg1, msg2, msg3];
}

async function executeFunctions(): Promise<void> {
  await throwOnce();
  await throwSeveral();
  await throwChained();
}
executeFunctions();

async function run(): Promise<void> {
  try {
    await executeFunctions();
  } catch (error) {
    console.log('Caught Error:', error.message);
  }
}

run();
