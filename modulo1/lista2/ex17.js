const prompt = require("prompt-sync")();

let nomes = [], idades = [];

for(let i = 0; i < 9; i++) {
    nomes[i] = prompt(`Informe o nome da ${i+1}ª pessoa: `);
    idades[i] = parseInt(prompt(`Informe a idade da ${i+1}ª pessoa: `));
}

console.log("Pessoas menores de idade")
for(let i = 0; i < 9; i++)
    if(idades[i] < 18)
        console.log(`${nomes[i]}: ${idades[i]} anos`);