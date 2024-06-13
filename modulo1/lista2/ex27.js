const prompt = require("prompt-sync")();

let M = [], V = [], A = prompt("Digite o valor A: "); 
for(let i = 0; i < 6; i++) {
    M[i] = [];
    for(let j = 0; j < 6; j++) {
        M[i][j] = parseInt(prompt());
        V.push(M[i][j] * A);
    }
}

console.log(V);