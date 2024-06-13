const prompt = require("prompt-sync")();

function soma() {
    let soma = 0;
    for (let i = 0; i < 6; i++)
        soma += numeros[i];
    return soma;
}

function produto() {
    let produto = 1;
    for (let i = 0; i < 6; i++)
        produto *= numeros[i];
    return produto;
}

function media() {
    let soma = 0;
    for (let i = 0; i < 6; i++)
        soma += numeros[i];
    return soma/6;
}

function ordenarCrescente() {
    numeros.sort(function (a, b) {
        return a - b;
    });
    return numeros;
}

let numeros = [], opcao;
console.log("Digite os 6 valores para o vetor:");
for (let i = 0; i < 6; i++) {
    numeros[i] = parseInt(prompt());
}

do {
    console.log("1. Soma dos elementos\n2. Produto dos elementos\n3. Média dos elementos\n4. Ordene os elementos em ordem crescente\n5. Mostre o vetor\n6. Sair");
    opcao = parseInt(prompt("Escolha o que você quer fazer: "));
    switch(opcao) {
        case 1: console.log(`Soma: ${soma()}`); break;
        case 2: console.log(`Produto: ${produto()}`); break;
        case 3: console.log(`Média: ${media()}`); break;
        case 4: console.log(`Números em ordem crescente: ${ordenarCrescente()}`); break;
        case 5: console.log("Vetor: ", numeros); break;
        case 6: break;
        default: console.log("Opção inválida"); break;
    }
} while(opcao !== 6);