const prompt = require("prompt-sync")();

let numero, contador=0, soma=0, media;

while(numero !== 0) {
    numero = parseFloat(prompt("Digite um numero: "));
    if(numero === 0)
        break;
    soma += numero;
    contador++;
}

media = soma / contador;
console.log(`Média aritmética: ${media}`);