const prompt = require("prompt-sync")();

let numerosPrimos = 0, numero = 100, divisor, divisores;

while(numerosPrimos < 50) {
    divisor = 1;
    divisores = 0;
    while(divisor <= numero) {
        if(numero % divisor === 0)
            divisores++;
        divisor++;
    }
    if(divisores === 2)
    {
        console.log(numero);
        numerosPrimos++;
    }
    numero++;
}