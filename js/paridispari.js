
function numeroCasualePc() {
    return Math.floor(Math.random() * 5) + 1; 
}


function pariODispari(numero) {
    return numero % 2 === 0 ? "Pari" : "Dispari";
}


let scelta = prompt("Scegli: Pari o Dispari").toLowerCase();
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));


if (numeroUtente < 1 || numeroUtente > 5) {
    console.log("Il numero inserito non è valido. Deve essere tra 1 e 5.");
} else {
    
    let numeroPc = numeroCasualePc();
    console.log("Il numero del computer è:", numeroPc);

  
    let somma = numeroUtente + numeroPc;
    console.log("La somma dei numeri è:", somma);

    
    let risultato = pariODispari(somma);
    console.log("La somma è:", risultato);

   
    if (risultato === scelta) {
        console.log("Hai vinto!");
    } else {
        console.log("Hai perso!");
    }
}
