export default function Button({ text, color }) {
  const buttonStyle = {
    backgroundColor: color,
  };
  return <button style={buttonStyle}>{text}</button>;
}
