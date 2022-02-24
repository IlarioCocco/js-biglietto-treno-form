
// seleziono i bottoni EVENTI PRINCIPALI
var bottone = document.getElementById("genera");
var bottoneAnnulla = document.getElementById("annulla");

// tramite funzione callback genero un evento sul bottone con il click
bottone.addEventListener('click',
function(){
// internamente tutta la logica generazione biglietto
// prendo i  VALORI DI CAMPO DI INPUT SELECT
var nome = document.getElementById("nome").value;
var km = parseInt(document.getElementById("km").value);
var fasciaEta = document.getElementById("fascia").value;
//  console.log(typeof(nome)); debuging
//  console.log(nome); debuging


// un minimo di verifica per capire se l utente sta inserendo dati opportuni e corretti
if ( nome != "" && isNaN(nome) && !isNaN(km) && km > 0 ) {

var prezzo = km * 0.21;
var tipoOfferta = "Biglietto Standard";
// calcolo il biglietto in base alla fascia d'età
if (fasciaEta == "minorenne") {
prezzo = prezzo - (prezzo * 0.3);
tipoOfferta = "Sconto Minori";

} else if (fasciaEta == "over") {
prezzo = prezzo - (prezzo * 0.5);
tipoOfferta = "Sconto Silver";

} else {
tipoOfferta = "Prezzo Base";
}
prezzo = prezzo.toFixed(2);  // arrotondo con toFixed per avere numerri decimali (esempio = 5,00)



// stampo tutti i dati nel div del biglietto
// innietto: 
// nome, offerta, numeri random, costo biglietto.
document.getElementById("nomePasseggero").innerHTML = nome;

document.getElementById("tipoOfferta").innerHTML = tipoOfferta;

var numeroRandom = (Math.floor(Math.random() * 10) + 1);
document.getElementById("numeroCarrozza").innerHTML = numeroRandom;

var numeroRandom = (Math.floor(Math.random() * (99999 - 90000)) + 90000 );
document.getElementById("numeroCp").innerHTML = numeroRandom;

document.getElementById("tot").innerHTML = prezzo;



// visualizzo biglietto
document.getElementById("biglietto").classList.add("open");

} else {
alert("ERRORE! RIPROVA..");
}
});



// nascondo il biglietto con remove
bottoneAnnulla.addEventListener("click",
function(){
// nascondo il biglietto con remove
document.getElementById("biglietto").classList.remove("open");


var nome = document.getElementById("nome").value = "";
var km = parseInt(document.getElementById("km").value = "");
var fasciaEta = document.getElementById("fascia").selectedIndex = "0";

});