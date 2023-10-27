/* exported reverseWord */
function reverseWord(string) {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    const character = string[i];
    reversed += character;
  }
  return reversed;
}
