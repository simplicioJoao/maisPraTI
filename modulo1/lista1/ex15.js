const prompt = require("prompt-sync")();

let numero, peso, soma=0, somaPesos=0, media;

while(numero !== 0) {
    numero = parseFloat(prompt("Digite um numero: "));
    if(numero === 0)
        break;
    peso = parseFloat(prompt("Digite o peso: "));
    soma += numero*peso;
    somaPesos += peso;
}

media = soma / somaPesos;
console.log(`Média ponderada: ${media}`);