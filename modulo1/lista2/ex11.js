const prompt = require("prompt-sync")();

let primeiroTermo = parseInt(prompt("Informe o primeiro termo da P.A.: "));
let termoGeral, soma, razao = parseInt(prompt("Informe a razão da P.A.: "));

console.log(primeiroTermo);
for(let i=2; i<=10; i++) {
    termoGeral = primeiroTermo + (i - 1)*razao;
    console.log(termoGeral);
}

soma = (primeiroTermo + termoGeral) / 2 * 10;
console.log(`Soma dos termos: ${soma}`);