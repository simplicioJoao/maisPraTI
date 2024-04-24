const prompt = require("prompt-sync")();

let valor1 = Number(prompt("Informe o primeiro valor: "));
let valor2;
do {
    if(valor1 === valor2)
        console.log("Os valores devem ser diferentes!");
    valor2 = Number(prompt("Informe o segundo valor: "));
} while(valor1 === valor2);

if(valor1 < valor2)
    console.log(`Ordem crescente: ${valor1}, ${valor2}`);
else
    console.log(`Ordem crescente: ${valor2}, ${valor1}`);
