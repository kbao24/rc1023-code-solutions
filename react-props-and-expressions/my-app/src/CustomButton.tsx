type Props = {
  text: string;
  backgroundColor: string;
};

export function CustomButton({ text, backgroundColor }: Props) {
  return <button style={{ backgroundColor }}>{text}</button>;
}

export default CustomButton;
