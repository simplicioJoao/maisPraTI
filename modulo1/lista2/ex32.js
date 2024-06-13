const prompt = require("prompt-sync")();

let M = [], maiores = [];
for(let i = 0; i < 12; i++) {
    M[i] = [];
    for(let j = 0; j < 13; j++) {
        M[i][j] = parseInt(prompt());
        if(j === 0)
            maiores.push(M[i][j]);
        else if(M[i][j] > maiores[i])
            maiores[i] = Math.abs(M[i][j]);
    }
}

console.log("Matriz original");
console.log(M);

for(let i = 0; i < M.length; i++)
    for(let j = 0; j < M[i].length; j++)
        M[i][j] /= maiores[i];

console.log("Matriz modificada");
console.log(M);