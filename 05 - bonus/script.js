/* Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.

/**
 *Funzione greetings
 *
 * @param {string} word
 * @returns {string}
 */

// function greetings(word) {
//   let sayGreatings = "";
//   const hour = new Date().getHours();

//   if (hour < 13) {
//     sayGreatings = `Buongiorno ${word}`;
//   } else if (hour < 17) {
//     sayGreatings = `Buon pomeriggio ${word}`;
//   } else {
//     sayGreatings = `Buonasera ${word}`;
//   }

//   return sayGreatings;
// }

// Arrow function

const greetings = (word) => {
  let sayGreatings = "";
  const hour = new Date().getHours();

  if (hour < 13) {
    sayGreatings = `Buongiorno ${word}`;
  } else if (hour < 17) {
    sayGreatings = `Buon pomeriggio ${word}`;
  } else {
    sayGreatings = `Buonasera ${word}`;
  }

  return sayGreatings;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(greetings(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
