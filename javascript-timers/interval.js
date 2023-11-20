let count = 4;
let countID = null;

const countdownDisplay = document.querySelector('.countdown-display');

function updateCountdown() {
  if (count <= 0) {
    clearInterval(countID);
    countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    return;
  }

  countdownDisplay.textContent = count.toString();
  count--;
}

countID = setInterval(updateCountdown, 1000);
