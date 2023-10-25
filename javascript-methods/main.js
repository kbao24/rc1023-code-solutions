const num1 = 1;
const num2 = 2;
const num3 = 3;

const maximumVal = Math.max(num1, num2, num3);

console.log('maximumValue: ' + maximumVal);

const heroes = ['flash', 'lantern', 'batman', 'superman'];

let randomNumber = Math.random();

randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);

const randomHero = heroes[randomIndex];

console.log('randomIndex: ' + randomIndex);
console.log('randomHero: ' + randomHero);

const library = [
  {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
  },
];

const lastBook = library.pop();

console.log('lastBook:', lastBook);
const firstBook = library.shift();

console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

const fullName = 'Kevin Bao';

const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
