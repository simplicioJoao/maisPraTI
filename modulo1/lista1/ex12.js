const prompt = require("prompt-sync")();

let numero;
for(numero = 1000; numero <= 1999; numero++) {
    if(numero % 11 === 5)
        console.log(numero);
}