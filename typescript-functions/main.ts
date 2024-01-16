function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log(convertMinutesToSeconds(5));

function greet(name: string): string {
  return `Hey, ${name}`;
}

console.log(greet('Beavis'));

function getArea(width: number, height: number): number {
  return width * height;
}

console.log(getArea(5, 10));

type Person = {
  firstName: string;
  lastName: string;
};

function getFirstName(person: Person): string {
  return person.firstName;
}

const firstName: string = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log(firstName);

function getLastElement<T>(array: T[]): T | undefined {
  if (array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
}

const myArray: string[] = ['propane', 'and', 'propane', 'accessories'];
const lastElement: string | undefined = getLastElement(myArray);
console.log(lastElement);
