const prompt = require("prompt-sync")();

let M = [], principal = [];

for(let i = 0; i < 50; i++) {
    M[i] = [];
    for(let j = 0; j < 50; j++) {
        M[i][j] = parseFloat(prompt());
        if(i === j)
            principal[i] = M[i][j];
    }
}

console.log("Matriz original:");
console.log(M);

for(let i = 0; i < M.length; i++)
    for(let j = 0; j < M[i].length; j++)
        M[i][j] *= principal[i];

console.log("Matriz após multiplicações:");
console.log(M);