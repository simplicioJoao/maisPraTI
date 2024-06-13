prompt = require("prompt-sync")();
let matriz = [], soma;

for(let i = 0; i < 5; i++) {
    matriz[i] = [];
    for(let j = 0; j < 2; j++) {
        matriz[i][j] = parseFloat(prompt());
    }
}

for(let j = 0; j < 2; j++) {
    soma = 0;
    for(let i = 0; i < 5; i++) {
        soma += matriz[i][j];
    }
    console.log(`Coluna ${j+1}: ${soma}`);
}