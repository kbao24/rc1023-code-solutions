import { useState } from 'react';

interface ButtonProps {
  text: string;
  color: string;
}

export function ToggleButton({ text, color }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  function handleToggleClick() {
    console.log('before updating isClicked state', isClicked);
    setIsClicked(!isClicked);
    setIsClicked(!isClicked);
    console.log('after updating isClicked state', isClicked);
  }
  console.log(handleToggleClick);

  console.log(isClicked);

  return (
    <button style={{ backgroundColor: isClicked ? 'white' : color }}>
      {text}
    </button>
  );
}
