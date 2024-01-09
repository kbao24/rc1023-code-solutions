# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  When it first gets created and rendered
- What is a React Effect?
  This is a feature in React where you can do side effects in function components
- When should you use an Effect and when should you not use an Effect?
  You use it to do additional tasks in your component (side effects).
- When do Effects run?
  They run after component is rendered in the DOM.
- What function is used to declare an Effect?
  useEffect function is used in this situation.
- What are Effect dependencies and how do you declare them?
  Effect dependencies are used to control when the effect runs.
- Why would you want to clean up from an Effect?
  You would want to clean up from an Effect to prevent performance issues like memory leaks.
- How do you clean up from an Effect?
  You can clean up from an Effect by returning a function from the effect function passed to the useEffect function
- When does the cleanup function run?
  It runs before the effect next runs, usually when the component unmounts or before it runs again.

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
