const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Digite o tamanho do lado A: "));
let b = parseFloat(prompt("Digite o tamanho do lado B: "));
let c = parseFloat(prompt("Digite o tamanho do lado C: "));

if(a < b + c && b < a + c && c < a + b)
    console.log("AS medidas informadas formam um triângulo.");
else
    console.log("As medidas informadas não formam um triângulo.");