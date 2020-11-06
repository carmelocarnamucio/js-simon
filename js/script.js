//Un alert espone 5 numeri casuali diversi.
//Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
//Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


$(document).ready(function () {

  //il gioco comincia al click sul pulsante
  document.getElementById('start').addEventListener('click',
    function() {

     var arrayRandom = [];
     var arrayUser = [];
     var arrayRight = [];

     // Genero i numeri da indovinare
     for (var i = 0; arrayRandom.length < 5; i++) {
     var numRandom = Math.floor(Math.random() * 100) + 1;
     if (!arrayRandom.includes(numRandom)) {
        arrayRandom.push(numRandom);
        }
      }

      //console.log("Array CPU", arrayRandom);

      //stampo countdown
      var seconds = 30;

      var display = document.getElementById('timer');

      var timerDisplay = setInterval(function() {

       display.innerHTML = seconds;

       if (seconds === 0) {
         clearInterval(timerDisplay)
         } else {
          seconds--;
          }

      }, 200);

      //appare alert con i numeri generati random
      alert("Memorizza i numeri: " + arrayRandom);


      setTimeout(timer , 100);

      function timer() {

       //Chiedo numeri all'utente
       for (var i = 0; arrayUser.length < 5; i++) {
        var numUtente = parseInt(prompt("Inserisci un numero"));
          //se il numero inserito dall'utente è valido pusha nell'arrayUser
          if (numUtente >= 1 && !arrayUser.includes(numUtente)) {
            arrayUser.push(numUtente);
            //altrimenti se utente inserisce carattere e/o un numero già inserito dare alert di errore
          } else {
            alert("ERRORE! Hai inserito un carattere o hai già inserito questo numero ");
          }
        }

        //console.log("Numeri inseriti da utente", arrayUser);

        //Controllo dei dati e risultato
        for (var i = 0; i < 5; i++) {
          if (arrayRandom.includes(arrayUser[i])) {
            arrayRight.push(arrayUser[i]);
          }
        }

        //console.log(" Numeri indovinati", arrayRight);

        //stampo il punteggio ottenuto e i numeri che l'utente è riuscito a ricordare
        document.getElementById("score").innerHTML = arrayRight.length;
        document.getElementById("remember").innerHTML = arrayRight;

        //togliere dalla pagina il countdown e il bottone e far apparire solo lo score
        $('.container').removeClass('active');
        $('.container').addClass('invisible');
        $('.container2').removeClass('invisible');
        $('.container2').addClass('active');

      }

  });

});
