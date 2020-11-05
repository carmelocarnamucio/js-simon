//Un alert espone 5 numeri casuali diversi.
//Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
//Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

var arrayCpu = [];
var arrayUser = [];
var arrayRight = [];

// Genero i numeri da indovinare
for (var i = 0; arrayCpu.length < 5; i++) {
  var numCpu = Math.floor(Math.random() * 100) + 1;
  if (!arrayCpu.includes(numCpu)) {
    arrayCpu.push(numCpu);
  }
}

//console.log("Array CPU", arrayCpu);

// stampo countdown
var seconds = 30;

var display = document.getElementById('timer');

var timerDisplay = setInterval(function() {

  display.innerHTML = seconds;

  if (seconds === 0) {
    clearInterval(timerDisplay)
  } else {
    seconds--;
  }

}, 500); //da inserire dati corretti (1000) messo così per le prove

// appare alert con i numeri generati random
alert("Memorizza i numeri: " + arrayCpu);


setTimeout(timer , 16000);  //da inserire dati corretti (30000) messo così per le prove

function timer() {

  // Chiedo numeri a utente
  for (var i = 0; arrayUser.length < 5; i++) {
    var numUtente = parseInt(prompt("Inserisci un numero"));
    //se il numero inserito dall'utente è valido pusha nell'arrayUser
    if (numUtente >= 1 && !arrayUser.includes(numUtente)) {
       arrayUser.push(numUtente);
    //altrimenti se utente inserisce carattere e/o un numero già inserito allert di errore
    } else {
      alert("ATTENZIONE: Hai inserito un carattere o hai già inserito questo numero ");
    }
  }

  //console.log("Numeri inseriti da utente", arrayUser);

  // Controllo dei dati e risultato
  for (var i = 0; i < 5; i++) {
    if (arrayCpu.includes(arrayUser[i])) {
      arrayRight.push(arrayUser[i]);
    }
  }

  //console.log(" Numeri indovinati", arrayRight);

  //alert che informa l'utente dell'esito del gioco
  alert("Hai indovinato " + arrayRight.length + " numeri: " + arrayRight);

}
