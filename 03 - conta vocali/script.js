/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

/**
 * Funzione howManyVowels
 *
 * @param {string} word
 * @returns {number}
 */

// function howManyVowels(inputWord) {
//   let numberOfVowels = 0;
//   for (let i = 0; i < inputWord.length; i++) {
//     const curLetter = inputWord[i].toLowerCase();
//     if (
//       curLetter === "a" ||
//       curLetter === "e" ||
//       curLetter === "i" ||
//       curLetter === "o" ||
//       curLetter === "u"
//     ) {
//       numberOfVowels++;
//     }
//   }
//   return numberOfVowels;
// }

// Arrow function

const howManyVowels = (inputWord) => {
  let numberOfVowels = 0;
  for (let i = 0; i < inputWord.length; i++) {
    const curLetter = inputWord[i].toLowerCase();
    if (
      curLetter === "a" ||
      curLetter === "e" ||
      curLetter === "i" ||
      curLetter === "o" ||
      curLetter === "u"
    ) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(howManyVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
