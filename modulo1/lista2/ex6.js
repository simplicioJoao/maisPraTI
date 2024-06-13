const prompt = require("prompt-sync")();

let tentativa, valorSorteado = Math.floor(Math.random() * 5) + 1;

do {
    tentativa = parseInt(prompt("Tente descobrir qual é o número: "));
    if(tentativa < valorSorteado)
        console.log("O número é maior que " + tentativa);
    else if(tentativa > valorSorteado)
        console.log("O número é menor que " + tentativa)
} while(tentativa !== valorSorteado);

console.log("Você acertou! O número sorteado foi o " + valorSorteado);