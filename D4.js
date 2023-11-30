/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calcoloArea(l1, l2) {
  const Area = l1 * l2;
  console.log("Il calcolo dell area è: " + Area);
  return;
}
calcoloArea(5, 4);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2) {
  if (n1 === n2) {
    const x = (n1 + n2) * 3;
    return x;
  } else {
    const y = n1 + n2;
    return y;
  }
}
console.log(crazySum(2, 2));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n1) {
  const calcolo1 = n1 - 19;
  if (n1 > 19) {
    const calcolo2 = calcolo1 * 3;
    return calcolo2;
  }
  return calcolo1;
}

console.log(crazyDiff(10));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n1) {
  if ((n1 >= 20 && n1 <= 100) || n1 === 400) {
    return true;
  }
  return false;
}
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(testo) {
  if (testo === "EPICODE") {
    return testo;
  } else {
    return "EPICODE " + testo;
  }
}
console.log(epify("CIAO"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num1) {
  if (num1 % 3 === 0 || num1 % 7 === 0) {
    console.log("il numero è divisibile per 3 o 7");
    return num1;
  }
  return;
}
console.log(check3and7(12));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandrom(n) {
  let arrayofCasuals = [];
  for (let i = 0; i < n; i++) {
    let x = 0;
    x = Math.ceil(Math.random() * 10);
    arrayofCasuals.push(x);
    console.log("Ho inserito: " + x);
  }
  return;
}

giveMeRandrom(150);
/* SCRIVI QUI LA TUA RISPOSTA */
