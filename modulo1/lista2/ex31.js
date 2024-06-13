const prompt = require("prompt-sync")();

let V = [], A = parseInt(prompt("Digite um número inteiro: ")), X = [], valoresIguais = 0;
for(let i = 0; i < 30; i++) {
    V[i] = [];
    for(let j = 0; j < 30; j++) {
        V[i][j] = parseInt(prompt());
        if(V[i][j] === A)
            valoresIguais++;
        else
            X.push(V[i][j]);
    }
}

console.log("Matriz V: ");
console.log(V);
console.log(`Quantidade de elementos na matriz iguais a ${A}: ${valoresIguais}`);
console.log(`Matriz com elementos diferentes de ${A}: `);
console.log(X);