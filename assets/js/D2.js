/* ESERCIZIO 1
  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 1');

let numberOne = 5;
let numberTwo = 7;

if (numberOne > numberTwo) {
	console.log('Il numero ' + numberOne + ' è più grande del numero ' + numberTwo);
} else if (numberTwo > numberOne) {
	console.log('Il numero ' + numberTwo + ' è più grande del numero ' + numberOne);
} else {
	console.log('I due numeri sono uguali');
}

console.log('----------------------------------------');

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 2');

let numberThree = 10;

if (numberThree !== 5) {
	console.log('not equal');
}

console.log('----------------------------------------');

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 3');

let numberFour = 10;

if (numberFour % 5 === 0) {
	console.log('Il numero ' + numberFour + ' è divisibile per 5');
} else {
	console.log('Il numero ' + numberFour + ' NON è divisibile per 5');
}

console.log('----------------------------------------');

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 4');

let numberFive = 8;
let numberSix = 6;

if (numberFive === 8 || numberSix === 8) {
	console.log('Uno dei due numeri è uguale a 8');
} else if (numberFive + numberSix === 8 || numberFive - numberSix === 8) {
	console.log('La somma o la sottrazione dei due numeri è uguale a 8');
} else {
	console.log('Non è possibile ricondurre i due numeri al numero 8');
}

console.log('----------------------------------------');

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 5');

let totalShoppingCart = 10;

if (totalShoppingCart > 50) {
	console.log('Hai diritto alla spedizione gratuita, il tuo carrello ammonta a: €' + totalShoppingCart);
} else {
	console.log(
		'Sono state aggiunte le spese di spedizione di €10, il tuo carrello ammonta a: €' + (totalShoppingCart + 10)
	);
}

console.log('----------------------------------------');

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 6');

console.log('Oggi è il Black Friday e verrà applicato uno sconto del 20% su ogni prodotto nel tuo carrello');

totalShoppingCart *= 0.8;

if (totalShoppingCart > 50) {
	console.log('Hai diritto alla spedizione gratuita, il tuo carrello ammonta a: €' + totalShoppingCart);
} else {
	console.log(
		'Sono state aggiunte le spese di spedizione di €10, il tuo carrello ammonta a: €' + (totalShoppingCart + 10)
	);
}

console.log('----------------------------------------');

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 7');

let a = 7;
let b = 15;
let c = 9;

if (a > b && a > c) {
	if (b > c) {
		console.log("L'ordine decrescente dei tre numeri è: " + a, b, c);
	} else {
		console.log("L'ordine decrescente dei tre numeri è: " + a, c, b);
	}
} else if (b > a && b > c) {
	if (a > c) {
		console.log("L'ordine decrescente dei tre numeri è: " + b, a, c);
	} else {
		console.log("L'ordine decrescente dei tre numeri è: " + b, c, a);
	}
} else if (c > a && c > b) {
	if (a > b) {
		console.log("L'ordine decrescente dei tre numeri è: " + c, a, b);
	} else {
		console.log("L'ordine decrescente dei tre numeri è: " + c, b, a);
	}
} else {
	console.log('Ricontrollare i numeri inseriti!');
}

console.log('----------------------------------------');

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 8');

let numberVerify = 8;

if (typeof numberVerify === 'number') {
	console.log('Il valore inserito è un numero');
} else {
	console.log('Il valore inserito NON è un numero');
}

console.log('----------------------------------------');

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 9');

let numberSeven = 6;

if (numberSeven % 2 === 0) {
	console.log('Il numero ' + numberSeven + ' è un numero pari');
} else {
	console.log('Il numero ' + numberSeven + ' è un numero dispari');
}

console.log('----------------------------------------');

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 10');

let val = 7;
if (val < 5) {
	console.log('Meno di 5');
} else if (val < 10) {
	console.log('Meno di 10');
} else {
	console.log('Uguale a 10 o maggiore');
}

console.log('----------------------------------------');

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
	name: 'John',
	lastName: 'Doe',
	skills: [ 'javascript', 'html', 'css' ]
};

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 11');

me.city = 'Toronto';
console.log('La mia città è ' + me.city);

console.log('----------------------------------------');

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 12');

delete me.lastName;
console.log(me.lastName);

console.log('----------------------------------------');

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 13');

console.log(me.skills);
delete me.skills[me.skills.length - 1];
console.log(me.skills);

/* Altrimenti avremmo potuto rimuovere l'ultimo elemento della proprietà anche nel seguente modo poichè ne conosciamo la lunghezza
	delete me.skills[2];
*/

console.log('----------------------------------------');

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 14');

const arrOne = [];

console.log(arrOne);
arrOne[0] = 1;
arrOne[1] = 2;
arrOne[2] = 3;
arrOne[3] = 4;
arrOne[4] = 5;
arrOne[5] = 6;
arrOne[6] = 7;
arrOne[7] = 8;
arrOne[8] = 9;
arrOne[9] = 10;

console.log(arrOne);

console.log('----------------------------------------');

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 15');

arrOne[9] = 100;
console.log(arrOne);

console.log('----------------------------------------');
