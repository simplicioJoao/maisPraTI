const prompt = require("prompt-sync")();

let M = [], soma = 0, media;
for(let i = 0; i < 3; i++) {
    M[i] = [];
    for(let j = 0; j < 3; j++)
        M[i][j] = parseInt(prompt());
}

console.log("Matriz original:");
console.log(M);

for(let i = 0; i < 3; i++)
    for(let j = 0; j < 3; j++)
        if(i + j === M.length - 1)
            soma += M[i][j];

media = soma / M.length;

for(let i = 0; i < 3; i++)
    for(let j = 0; j < 3; j++)
        if(i === j)
            M[i][j] *= media;

console.log("Matriz após multiplicações:");
console.log(M);