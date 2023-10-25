const colors = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

colors[2] = 'green';

console.log(
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

console.log(colors);

const students = ['Leo', 'Don', 'Ralph', 'Mike'];

const numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in this class.`);

const lastIndex = numberOfStudents - 1;

const lastStudent = students[lastIndex];

console.log(`The last student in the class is ${lastStudent}.`);

console.log('value of students:', students);
