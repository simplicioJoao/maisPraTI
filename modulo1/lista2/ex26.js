const prompt = require("prompt-sync")();

let A = [], B = [], P = [];

console.log("Preenchendo a matriz A:");
for(let i = 0; i < 3; i++) {
    A[i] = [];
    for(let j = 0; j < 5; j++) {
        A[i][j] = parseInt(prompt());
    }
}

console.log("Preenchendo a matriz B:");
for(let i = 0; i < 3; i++) {
    B[i] = [];
    for(let j = 0; j < 5; j++) {
        B[i][j] = parseInt(prompt());
    }
}

for(let i = 0; i < 3; i++) {
    P[i] = [];
    for(let j = 0; j < 5; j++)
        P[i][j] = A[i][j] * B[i][j];
}

console.log("Matriz A:");
console.log(A);
console.log("Matriz B:");
console.log(B);
console.log("Produto de cada elemento da matriz A por cada elemento correspondente na matriz B:");
console.log(P);