
// richiesta nome
var nome = prompt("Scrivi il tuo nome");

// controllo nome
console.log(nome);

// richiesta cognome
var cognome = prompt("Scrivi il tuo cognome");

// controllo cognome
console.log(cognome);

// richiesta colore
var colorePreferito = prompt("Scrivi il tuo colore preferito");

// controllo colore
console.log(colorePreferito);

// inserisci password generata
document.getElementById("password").innerHTML = (nome + cognome + colorePreferito + "21");



