const prompt = require("prompt-sync")();

let M = [], acimaDiagonal = 0, abaixoDiagonal = 0;
for(let i = 0; i < 10; i++) {
    M[i] = [];
    for(let j = 0; j < 10; j++) {
        M[i][j] = parseInt(prompt());
        if(i < j)
            acimaDiagonal += M[i][j];
        else if(j < i)
            abaixoDiagonal += M[i][j];
    }
}

console.log(M);
console.log(`Soma dos elementos acima da diagonal principal: ${acimaDiagonal}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${abaixoDiagonal}`);