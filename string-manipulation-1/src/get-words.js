/* exported getWords */
function getWords(string) {
  const words = string.split(' ');
  if (string === '') {
    return [];
  }
  return words;
}
