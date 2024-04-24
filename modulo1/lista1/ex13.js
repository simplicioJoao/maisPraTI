const prompt = require("prompt-sync")();

let N, i, j;
for(i = 0; i < 5; i++) {
    N = prompt("Escolha um numero: ");
    for(j = 1; j <= N; j++)
        console.log(`${j} X ${N} =`, j*N);
}