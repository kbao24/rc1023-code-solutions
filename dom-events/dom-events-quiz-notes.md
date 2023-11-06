# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To help keep track of what our code is doing, and it helps with debugging later.
- What is the purpose of events and event handling?
  It helps with reactivity and responsiveness for our web applications. They help detect and respond to specific actions
- Are all possible parameters required to use a JavaScript method or function?
  No, they are not all required to use a JS method or function.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The addEventListener is used for this.
- What is a callback function?
  A function passed as an argument to another function so it can be called later.
- What object is passed into an event listener callback when the event fires?
  An event object is passed.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  It is the property of the event object, referring to the DOM element that triggered the event. I would go to MDN to find more information about it.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The second one has a callback in the 2nd argument.

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
