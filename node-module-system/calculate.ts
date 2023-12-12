import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const val1 = Number(process.argv[2]);
const operator = process.argv[3];
const val2 = Number(process.argv[4]);

/* console.log(val1);
console.log(operator);
console.log(val2);
*/

switch (operator) {
  case 'plus':
    console.log(add(val1, val2));
    break;
  case 'minus':
    console.log(subtract(val1, val2));
    break;
  case 'multiply':
    console.log(multiply(val1, val2));
    break;
  case 'divide':
    console.log(divide(val1, val2));
    break;
}
