function handleFocus(event) {
  console.log("The 'focus' event was fired.");
  console.log('event.target.name', event.target.name);
}

// Define the handleBlur function
function handleBlur(event) {
  console.log("The 'blur' event was fired.");
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('Value of', event.target.name + ':', event.target.value);
}

const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

nameInput.addEventListener('focus', handleFocus);
nameInput.addEventListener('blur', handleBlur);
nameInput.addEventListener('input', handleInput);

emailInput.addEventListener('focus', handleFocus);
emailInput.addEventListener('blur', handleBlur);
emailInput.addEventListener('input', handleInput);

messageTextarea.addEventListener('focus', handleFocus);
messageTextarea.addEventListener('blur', handleBlur);
messageTextarea.addEventListener('input', handleInput);
