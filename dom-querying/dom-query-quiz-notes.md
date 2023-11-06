# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  So it can tell you what the code is doing, which is helpful for debugging later.
- What is a "model"?
  Model refers to the representation of data in the document.
- Which "document" is being referred to in the phrase Document Object Model?
  Document refers to the form in which information is stored, ie an HTML document.
- What is the word "object" referring to in the phrase Document Object Model?
  It refers to a JavaScript object that holds data.
- What is a DOM Tree?
  It is a way to represent the structure of an HTML document.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  getElementByID() and querySelector()
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll()
- Why might you want to assign the return value of a DOM query to a variable?
  It makes life easier by reducing the time spent seraching for elements.
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  So it loads all of the content above it?

- What does `document.querySelector()` take as its argument and what does it return?
  It takes in a CSS selector string as an argument and returns the HTML element that matches the selector.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  Takes in a CSS selector string and returns a NodeList.

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
