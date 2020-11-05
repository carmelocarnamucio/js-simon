var arrayCpu = [];
var arrayUser = [];
var arrayRight = [];

// Genero array numeri da indovinare
for (var i = 0; arrayCpu.length < 5; i++) {
  var numCpu = Math.floor(Math.random() * 100) + 1;
  if (!arrayCpu.includes(numCpu)) {
    arrayCpu.push(numCpu);
  }
}

console.log("Array CPU", arrayCpu);


// appare allert con i numeri generati random
alert("Memorizza i numeri: " + arrayCpu);


setTimeout(timer , 30000);

function timer() {

  // Chiedo numeri a utente
  for (var i = 0; arrayUser.length < 5; i++) {
    var numUtente = parseInt(prompt("Inserisci un numero"));
    //se il numero inserito dall'utente
    if (numUtente >= 1 &&
       numUtente <= 100 &&
       !arrayUser.includes(numUtente)) {
       arrayUser.push(numUtente);
    //altrimenti se utente inserisce carattere e/o un numero già inserito allert di errore
    } else {
      alert("ATTENZIONE: Hai inserito un carattere o hai già inserito questo numero ");
    }
  }

  console.log("Numeri inseriti da utente", arrayUser);

  // Controllo e risultato
  for (var i = 0; i < 5; i++) {
    if (arrayCpu.includes(arrayUser[i])) {
      arrayRight.push(arrayUser[i]);
    }
  }

  console.log(" indovinati", arrayRight);

  alert("Hai indovinato " + arrayRight.length + " numeri: " + arrayRight);

}
