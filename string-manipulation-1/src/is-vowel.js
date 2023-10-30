/* exported isVowel */
function isVowel(character) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  character = character.toLowerCase();
  for (let i = 0; i < vowels.length; i++) {
    if (character === vowels[i]) {
      return true;
    }
  }
  return false;
}
