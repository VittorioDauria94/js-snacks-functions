/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

/**
 * Funzione searchNameWithLetter
 *
 * @param {array}
 * @param {string} letter
 * @returns {array}
 */

// function searchNameWithLetter(array, letter) {
//   const searchedArray = [];
//   let counter = 0;
//   for (let i = 0; i < array.length; i++) {
//     const curName = array[i];
//     if (curName[0] === letter) {
//       searchedArray[counter] = curName;
//       counter++;
//     }
//   }
//   return searchedArray;
// }

// Arrow functions

const searchNameWithLetter = (array, letter) => {
  const searchedArray = [];
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    const curName = array[i];
    if (curName[0] === letter) {
      searchedArray[counter] = curName;
      counter++;
    }
  }
  return searchedArray;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(searchNameWithLetter(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
