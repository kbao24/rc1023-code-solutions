function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));
function greet(name) {
  return 'Hey, '.concat(name);
}
console.log(greet('Beavis'));
function getArea(width, height) {
  return width * height;
}
console.log(getArea(5, 10));
function getFirstName(person) {
  return person.firstName;
}
var firstName = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log(firstName);
function getLastElement(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
}
var myArray = ['propane', 'and', 'propane', 'accessories'];
var lastElement = getLastElement(myArray);
console.log(lastElement);
