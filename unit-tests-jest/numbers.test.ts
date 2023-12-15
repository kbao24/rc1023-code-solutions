import { evenNumbers, toDollars, divideBy } from './numbers';

describe('evenNumber', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 4]);
  });
});

describe('toDollar', () => {
  it('returns a number formatted in dollars and cents', () => {
    const amount = 4.19;
    const result = toDollars(amount);
    expect(result).toEqual('$' + amount);
  });
});

describe('divideBy', () => {
  it('returns new array with all entries divided by divisor', () => {
    const numbers = [3, 6, 9, 12];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});

/*
import {multiplyBy} from './numbers';

describe('multiplyBy', () => {
  it('modifies object by multiplying each key only', () => {

  });
})
*/
