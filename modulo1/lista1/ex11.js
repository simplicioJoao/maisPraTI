const prompt = require("prompt-sync")();

let numero;
do { 
    numero = parseInt(prompt("Digite um numero: "));
    if(numero <= 0)
        break;
    if(numero % 2 === 0)
        console.log("PAR");
    else
        console.log("ÍMPAR");
} while(numero !== 0 && numero > 0);