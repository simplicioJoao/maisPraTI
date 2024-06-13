const prompt = require("prompt-sync")();

let M = [], SL = [0, 0, 0, 0, 0], SC = [0, 0, 0, 0, 0];
for(let i = 0; i < 5; i++) {
    M[i] = [];
    for(let j = 0; j < 5; j++) {
        SL[i] += M[i][j] = parseInt(prompt());
        SC[j] += M[i][j];
    }
}

console.log(M);
console.log(`Somas das linhas: ${SL}`);
console.log(`Soma das colunas: ${SC}`);