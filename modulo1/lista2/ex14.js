const prompt = require("prompt-sync")();

let listaDeNomes = [];
for(i=0; i<7; i++)
    listaDeNomes[i] = prompt(`Digite o ${i+1}º nome: `);

for(i=6; i>=0; i--)
    console.log(listaDeNomes[i]);