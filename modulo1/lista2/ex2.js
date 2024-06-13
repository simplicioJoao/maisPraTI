const prompt = require("prompt-sync")();

let velocidade = prompt("Informe a velocidade do carro em km/h: ");
if(velocidade > 80)
    console.log("Você foi multado em R$ " + ((velocidade-80)*5).toFixed(2));