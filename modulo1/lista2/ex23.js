const prompt = require("prompt-sync")();

let matriz = [];
for(let i = 0; i < 7; i++) {
    matriz[i] = [];
    for(let j = 0; j < 7; j++) {
        if(i === j)
            matriz[i][j] = 1;
        else
            matriz[i][j] = 0;
    }
}

console.log(matriz);