//Chiedi all’utente il cognome,
//inseriscilo in un array con altri cognomi
//stampa la lista ordinata alfabeticamente.
//Scrivi anche la posizione della lista in cui il nuovo utente si trova


// dichiarazioni delle variabili
var listacognomi, cognomeuser, cognomiordinati;

//creo array con una lista di cognomi
listacognomi = ["rossi", "bianchi", "pinco", "pallino", "zeta", "grieco"]

var sliced = listacognomi.slice(0, 6);

console.log(sliced);

var j = 0;

var cognomePrima2

while (j < listacognomi.length){

    cognomePrima2 = document.getElementById("cognomiprima").innerHTML;

    document.getElementById("cognomiprima").innerHTML = cognomePrima2 + "<li>" + listacognomi[j] + "</li>"
    j++;
}

//Chiedo il cognome all'utente con un prompt
cognomeuser = prompt("Ciao, come ti chiami?")

console.log("Il cognome dell'utente è: ", cognomeuser);


//inserisco il cognome dell'utente con un push nella lista dei cognomi
listacognomi.push(cognomeuser);

console.log("La lista dopo l'inserimento del cognome utente è: ", listacognomi);



//sistemo la lista in ordine alfabetico
cognomiordinati = listacognomi.sort();

 console.log(cognomiordinati);


//stampo la lista in ordine alfabetico
i = 0;

var cognomePrima

while (i < cognomiordinati.length){
    
    cognomePrima = document.getElementById("cognomi").innerHTML;

    document.getElementById("cognomi").innerHTML = cognomePrima + "<li>" + cognomiordinati[i] + "</li>";
    i++;
}

//scrivo in pagina la posizione del cognome dell'utente secondo la macchina
document.getElementById("posizionepc").innerHTML = "Il tuo cognome secondo il pc è alla posizione numero: " + cognomiordinati.indexOf(cognomeuser) + ".";


//scrivo in pagina la posizione del cognome dell'utente nella lista
document.getElementById("posizione").innerHTML = "Il tuo cognome per una persona normale è alla posizione numero: " + (cognomiordinati.indexOf(cognomeuser) + 1) + ".";
