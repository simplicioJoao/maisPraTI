const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Digite o tamanho do lado A: "));
let b = parseFloat(prompt("Digite o tamanho do lado B: "));
let c = parseFloat(prompt("Digite o tamanho do lado C: "));

if(a < b + c && b < a + c && c < a + b)
{
    console.log("AS medidas informadas formam um triângulo.");
    if(a === b && b === c)
        console.log("O triângulo é equilátero");
    else if(a !== b && a !== c)
        console.log("O triângulo é escaleno");
    else if(a === b || b === c || a === c)
        console.log("O triângulo é isósceles");
} else
    console.log("As medidas informadas não formam um triângulo.");