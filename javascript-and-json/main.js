const books = [
  {
    isbn: '978-0439358064',
    title: 'Harry Potter and Order of the Phoenix',
    author: 'J.K. Rowling',
  },
  {
    isbn: '978-0786838653',
    title: 'The Lightning Thief',
    author: 'Rick Riordan',
  },
  {
    isbn: '978-0142406632',
    title: 'The Ruins of Gorlan',
    author: 'John Flanagan',
  },
];

console.log('array of books:', books);
console.log('typeof books array:', typeof books);

const booksJSON = JSON.stringify(books);

console.log('string:', booksJSON);
console.log('typeof:', typeof booksJSON);

const studentJSON = '{"id": 86202, "name": "Kevin Bao"}';

console.log('string:', studentJSON);
console.log('typeof:', typeof studentJSON);

const studentObject = JSON.parse(studentJSON);

console.log('object:', studentObject);
console.log('typeof:', typeof studentObject);
