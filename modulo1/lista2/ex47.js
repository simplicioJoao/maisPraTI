const prompt = require("prompt-sync")();

function dobro(objeto) {
    let dobroDosNumeros = {}, i = 1;
    for(let numero in numeros) {
        dobroDosNumeros["num" + (i)] = numeros["num" + (i)] * 2;
        i++;
    }

    return dobroDosNumeros;
}

let numeros = {}, quantidade = parseInt(prompt("Digite uma quantidade de números para o objeto: "));
for(let i = 0; i < quantidade; i++)
    numeros["num" + (i+1)] = parseInt(prompt());

console.log("Dobro dos números:");
console.log(dobro(numeros));