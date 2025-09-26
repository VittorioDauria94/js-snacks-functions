/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

// Dichiara la funzione qui.

/**
 * Funzione anonima
 *
 * @param {string} word
 * @returns {string}
 */

const sayHello = (word) => `ciao ${word}`;

// Invoca la funzione qui e stampa il risultato in console

console.log(sayHello(name));

//Risultato atteso se si passa 'Mario': // ciao Mario
