const prompt = require("prompt-sync")();

let eleitores = prompt("Digite o numero total de eleitores: ");
let votosBrancos = prompt("Digite o numero de votos brancos: ");
let votosNulos = prompt("Digite o numero de votos nulos: ");
let votosValidos = prompt("Digite o numero de votos válidos: ");

console.log("Votos brancos:", 100*votosBrancos / eleitores, "%");
console.log("Votos nulos:", 100*votosNulos / eleitores, "%");
console.log("Votos válidos:", 100*votosValidos / eleitores, "%");

// 500           100%
// 54            x %
// 500x = 100 . 54
// x = 100 . 54
 //       500