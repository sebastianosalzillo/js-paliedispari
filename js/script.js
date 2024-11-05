const parola = prompt ("inserisci una parola e ti diro se e palindroma");

console.log (parola) ;

let parolaMin = parola.toLowerCase();

console.log (parolaMin);

function palindroma (parolaMin) {
  let parolaRev = parolaMin.split("").reverse().join("");
  console.log (parolaRev);
  return parolaMin === parolaRev;
}

 


if (palindroma(parolaMin)) {
    console.log("La parola è palindroma.");
  } else {
    console.log("La parola non è palindroma.");
  }


