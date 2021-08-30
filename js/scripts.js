// 1 seleziona i bottoni
var bottoneGenera = document.getElementById("genera");
var bottoneAnulla = document.getElementById("genera");

// 2 click del bottone genera
bottoneGenera.addEventListener("click",
    function() {
        // logica generazione biglietto

        // prendo i vlaori 
        var nome = document.getElementById("nome").Value;
        var km = parseInt(document.getElementById("km")).Value;
        var fascia = document.getElementById("fascia").Value;

        console.log(km);

        // calcoloo il prezzo in base all'età
        if (fascia == "minorenne") {
        // prezzo biglietto - 20%     
        } else if ( fascia == "over") {
        // prezzo biglietto - 40%
        } else {
        // prezzo normale
        }
        // stampo i dati nel div del biglietto

        // inserisco il nome del passeggero
        document.getElementById("nome").innerHTML = nome;

        // inserisco il tipo di offerta
        document.getElementById("tipoOfferta").innerHTML = tipoOfferta;

        // inserisco il prezzo
        document.getElementById("totale").innerHTML = totale;

        // inserisco carrozza 
        document.getElementById("carrozza").innerHTML = carrozza;

        // inserisco codice cp
        document.getElementById("codiceCp").innerHTML = codiceCp;


        document.getElementById("type-stampa").classList.add()
    }
);

//  dopo il click del bottone annulla
bottoneAnulla.addEventListener("click",
function() {
    // nascondi il biglietto
    document.getElementById("type-stampa").classList.remove("open")

    // reset tutto
    document.getElementById("nome").Value = "";
    document.getElementById("km").Value = "";
    document.getElementById("fascia").Value = "";
}
);