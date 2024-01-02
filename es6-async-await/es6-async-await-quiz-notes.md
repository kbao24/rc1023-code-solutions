# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  These keywords handle asynchronous code to make it work with promises.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async and await differ in that they don't require chaining with then() and catch().
- When do you use `async`?
  You would use it when you want to use await in the function
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use await when you need to wait for a promise to finish before proceeding with the execution of the code.
- How do you handle errors with `await`?
  You can use try/catch to handle errors in the code block.
- What do `try`, `catch` and `throw` do? When do you use them?
  They are used to throw exceptions and handle errors.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  The code will not wait for the promise to finish in the function.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I prefer async/await because it helps with error handling.

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
