const prompt = require("prompt-sync")();

let macas = prompt("Digite o numero de maçãs compradas: ");
if(macas >= 12)
    console.log("Valor total: R$", macas*0.25);
else
    console.log("Valor total: R$", macas*0.3);
