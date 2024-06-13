const prompt = require("prompt-sync")();

let A = [], B = [];
for(let i = 0; i < 100; i++) {
    A[i] = parseInt(prompt());
    if(A[i] > 0)
        B.push(A[i]);
}

console.log(`Vetor A: ${A}`);
console.log(`Vetor B: ${B}`);