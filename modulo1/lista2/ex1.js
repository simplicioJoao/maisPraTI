const prompt = require("prompt-sync")();

let cigarros_dia = prompt("Informe a quantidade de cigarros fumados por dia: ");
let anos = prompt("Informe por quantos anos você já fumou: ");
let total_cigarros_fumados = cigarros_dia*365*anos;

let minutos_perdidos = total_cigarros_fumados * 10;
let dias_perdidos = parseInt(minutos_perdidos / 1440);
console.log(`Essa pessoa perderá ${dias_perdidos} dias de vida`);