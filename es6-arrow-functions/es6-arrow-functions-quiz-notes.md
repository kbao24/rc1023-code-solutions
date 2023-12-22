# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  The syntax is to write the function with parameter, then use an arrow and a curly brace.
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  When it's not surrounded by curly braces, it implicitly returns the expression if it is a single expression.
- When using _concise body syntax_, how do you return an object literal?
  You return an object literal by using concise body syntax and use parentheses.
- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    The arrow function is () => 42.
  - How many arguments does the arrow function take?
    It takes in no arguments
  - What value does it return?
    It returns value 42
  - How many arguments are passed to the function `foo`?
    It passes 1 argument
  - What type of argument is passed to the function `foo`?
    it passes an arrow function as an argument

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    (y) => { console.log (`4y=${4*y}`)};
  - How many arguments does the arrow function take?
    It takes in one argument
  - What value does it return?
    It returns undefined implicitly
  - How many arguments are passed to the function `bar`?
    It passes 1 argument.
  - What type of argument is passed to the function `bar`?
    It passes an arrow function as an argument.
  - When does the arrow function's code get executed?
    It executes when bar is called.

- How does the value of `this` differ between standard functions and arrow functions?
  There is lexical context with this, when using an arrow function.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
