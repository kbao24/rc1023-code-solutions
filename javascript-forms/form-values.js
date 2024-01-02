const $form = document.querySelector('#contact-form');
console.dir($form);

$form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('submit fired');

  const formObject = {
    name: $form[0].value,
    email: $form.elements[1].value,
    message: $form.elements.message.value,
  };
  console.log(formObject);
  $form.reset();
});
