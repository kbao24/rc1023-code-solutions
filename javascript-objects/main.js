const student = {
  firstName: 'Kevin',
  lastName: 'Bao',
  age: 24,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'student';

console.log('value of student:', student);

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2013,
};

vehicle['color'] = 'White';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Fluffy',
  type: 'Cat',
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
