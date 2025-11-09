/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraPerLettera(array, lettera) {
    const risultato = [];

    for (let i = 0; i < array.length; i++) {
        const nome = array[i];
        if (nome[0].toLowerCase() === lettera.toLowerCase()) {
            risultato.push(nome);
        }
    }

    return risultato;
}
// Invoca la funzione qui e stampa il risultato in console
const filtrati = filtraPerLettera(names, 'A');
console.log(filtrati);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]