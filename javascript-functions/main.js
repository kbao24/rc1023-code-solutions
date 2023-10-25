function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(20));

function greet(name) {
  return 'Hey, ' + name;
}
console.log(greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log(getArea(17, 42));

const person = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
};
function getFirstName(person) {
  return person.firstName;
}

console.log(getFirstName(person));

const array = ['propane', 'and', 'professor', 'accessories'];

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(getLastElement(array));
