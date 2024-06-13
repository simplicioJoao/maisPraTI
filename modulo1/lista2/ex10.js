const prompt = require("prompt-sync")();

let numero, soma=0, menor, media, qtdValores=0, pares=0, opcao;

do {
    numero = parseInt(prompt("Digite um número: "));
    soma += numero;
    qtdValores++;
    if(numero % 2 === 0)
        pares++;
    if(qtdValores === 1 || numero < menor)
        menor = numero;
    opcao = prompt("Você quer continuar? (S - Sim): ");
} while(opcao === 'S');

media = soma / qtdValores;

console.log(`Soma: ${soma}`);
console.log(`Menor: ${menor}`);
console.log(`Média: ${media}`);
console.log(`Quantidade de números pares: ${pares}`);