const prompt = require("prompt-sync")();

let celsius = prompt("Informe a temperatura em Celsius: ");
let far = celsius * 1.8 + 32;
console.log(`${celsius} Celsius = ${far} Fahrenheit`);