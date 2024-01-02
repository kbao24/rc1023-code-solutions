interface ButtonProps {
  color: string;
  text: string;
}

export function CustomButton(props: ButtonProps) {
  function handleClick() {
    window.alert(`Clicked ${props.color} ${props.text}`);
  }

  return (
    <button style={{ backgroundColor: props.color }} onClick={handleClick}>
      {props.text}
    </button>
  );
}
