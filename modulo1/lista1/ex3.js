const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Informe o primeiro valor: "));
let num2 = parseInt(prompt("Informe o segundo valor: "));
let num3 = parseInt(prompt("Informe o terceiro valor: "));
let num4 = parseInt(prompt("Informe o quarto valor: "));
console.log(`Números digitados: ${num1}, ${num2}, ${num3} e ${num4}`);

num4 = num1 + num2 + num3;
num1 += 25;
num2 *= 3;
num3 *= 0.12;

console.log(`Números finais: ${num1}, ${num2}, ${num3} e ${num4}`);