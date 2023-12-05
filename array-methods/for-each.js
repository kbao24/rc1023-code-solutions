const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((element) => console.log(element));

const reversedIndex = values.length - 1;
values.forEach((number, index) => {
  const reverseIndex = reversedIndex - index;
  console.log(values[reverseIndex]);
});
