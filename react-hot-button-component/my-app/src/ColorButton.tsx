import { useState } from 'react';

export function HotButton() {
  const [clicks, setClicks] = useState(0);
  console.log(clicks);

  let color;

  if (clicks < 3) {
    color = 'purple';
  } else if (clicks < 6) {
    color = 'rebeccapurple';
  } else if (clicks < 9) {
    color = 'red';
  } else if (clicks < 12) {
    color = 'orange';
  } else if (clicks < 15) {
    color = 'yellow';
  } else if (clicks < 18) {
    color = 'white';
  }

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => setClicks(clicks + 1)}>
      HotButton
    </button>
  );
}
