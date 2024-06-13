const prompt = require("prompt-sync")();

let numeros, vetorNumeros = [];
for(numeros = 0; numeros < 10; numeros++)
    vetorNumeros[numeros] = parseInt(prompt(`Digite o número de posição ${numeros}: `));

console.log("Números pares:")
for(numeros = 0; numeros < 10; numeros++) {
    if(vetorNumeros[numeros] % 2 === 0)
        console.log(`Posição ${numeros}: ${vetorNumeros[numeros]}`);
}