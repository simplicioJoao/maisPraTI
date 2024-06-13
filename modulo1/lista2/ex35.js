const prompt = require("prompt-sync")();

let numero, pares = [], impares = [];
console.log("Informe os 30 valores:");
for(let i = 0; i < 30; i++) {
    numero = parseInt(prompt());
    
    if(numero % 2 === 0) {
        pares.push(numero);
        if(pares.length === 5) {
            console.log("Vetor de pares:", pares);
            pares = [];
        }
    } else {
        impares.push(numero);
        if(impares.length === 5) {
            console.log("Vetor de ímpares:", impares);
            impares = [];
        }
    }
}

console.log("Vetor de pares:", pares);
console.log("Vetor de ímpares:", impares);