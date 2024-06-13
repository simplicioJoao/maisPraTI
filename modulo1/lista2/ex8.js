const prompt = require("prompt-sync")();

let totalPontos, horas;
do {
    horas = parseInt(prompt("Digite quantas horas de atividade você teve no mês: "));
    if(horas < 0)
        console.log("Quantidade de horas inválida.");
} while(horas < 0);

if(horas <= 10)
    totalPontos = 2*horas;
else if(horas <= 20)
    totalPontos = 5*horas;
else if(horas > 20)
    totalPontos = 10*horas;

console.log(`Você teve ${totalPontos} pontos e ganhou R$ ${(totalPontos*0.05).toFixed(2)}.`);