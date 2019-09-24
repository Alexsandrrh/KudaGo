export default function(string) {
  if (string) {
    const arrayString = String(string).split(' ');
    const arrayFirstWord = arrayString[0].split('');
    arrayFirstWord[0] = arrayFirstWord[0].toUpperCase();
    arrayString[0] = arrayFirstWord.join('');

    return arrayString.join(' ');
  } else {
    return false;
  }
}
