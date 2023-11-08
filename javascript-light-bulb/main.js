let bulbOn = false;

const ceiling = document.querySelector('.ceiling');
const bulb = document.querySelector('.bulb');

bulb.addEventListener('click', function (event) {
  bulbOn = !bulbOn;
  if (bulbOn) {
    ceiling.className = 'bulb-ceiling';
    bulb.className = 'bulb-on';
  } else {
    ceiling.className = 'ceiling';
    bulb.className = 'bulb';
  }
});
