let isOn = false;

const $ceiling = document.querySelector('.ceiling');
const $bulb = document.querySelector('.bulb');

$bulb.addEventListener('click', function (event) {
  isOn = !isOn;
  if (isOn) {
    $ceiling.className = 'ceiling is-lit';
    $bulb.className = 'bulb is-on';
  } else {
    $ceiling.className = 'ceiling';
    $bulb.className = 'bulb';
  }
});
