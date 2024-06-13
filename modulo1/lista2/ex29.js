const prompt = require("prompt-sync")();

let M = [], somaLinha4 = 0, somaColuna2 = 0, somaDiagonalPrincipal = 0, somaTodos = 0;
for(let i = 0; i < 5; i++) {
    M[i] = [];
    for(let j = 0; j < 5; j++) {
        M[i][j] = parseInt(prompt());
        if(i === 3)
            somaLinha4 += M[i][j];
        if(j === 1)
            somaColuna2 += M[i][j];
        if(i === j)
            somaDiagonalPrincipal += M[i][j];
        somaTodos += M[i][j];
    }
}

console.log(`Soma dos elementos da linha 4: ${somaLinha4}`);
console.log(`Soma dos elementos da coluna 2: ${somaColuna2}`);
console.log(`Soma dos elementos da diagonal principal: ${somaDiagonalPrincipal}`);
console.log(`Soma de todos os elementos da matriz: ${somaTodos}`);
console.log(M);