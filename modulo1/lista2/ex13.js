const prompt = require("prompt-sync")();

let sequenciaFibonacci = [];
sequenciaFibonacci[0] = 0;
sequenciaFibonacci[1] = 1;

for(let i=0; i<15; i++) {
    if(i !== 0 && i !== 1)
        sequenciaFibonacci[i] = sequenciaFibonacci[i-1] + sequenciaFibonacci[i-2];
    console.log(sequenciaFibonacci[i]);
}