const prompt = require("prompt-sync")();

let valor_passagem, distancia = prompt("Digite a distância em Km que você quer percorrer: ");
if(distancia <= 200)
    valor_passagem = distancia*0.5;
else
    valor_passagem = distancia*0.45;

console.log(`O valor da passagem é de R$ ${valor_passagem}`);