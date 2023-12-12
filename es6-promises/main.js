import { takeAChance } from './take-a-chance.js';

const name = 'Kevin';
const promise = takeAChance(name);

promise
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.error(error.message);
  });
