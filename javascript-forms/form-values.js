const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formElements = contactForm.elements;
  const formData = {};

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.name) {
      formData[element.name] = element.value;
    }
  }

  console.log(formData);
});
