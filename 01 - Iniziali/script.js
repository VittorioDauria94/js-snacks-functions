/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

/**
 * Funzione firstLetterOfArray
 *
 * @param {array}
 * @returns {array}
 */

// function firstLetterOfArray(array) {
//   const lettersArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const curName = array[i];
//     lettersArray[i] = curName[0];
//   }
//   return lettersArray;
// }

// Arrow functions

const firstLetterOfArray = (array) => {
  const lettersArray = [];
  for (let i = 0; i < array.length; i++) {
    const curName = array[i];
    lettersArray[i] = curName[0];
  }
  return lettersArray;
};


// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetterOfArray(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
