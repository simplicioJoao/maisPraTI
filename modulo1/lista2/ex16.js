let numero, numerosAleatorios = [];

for(let i = 0; i < 20; i++) {
    numero = Math.floor(Math.random() * 99);
    numerosAleatorios[i] = numero;
}

console.log("Números gerados")
console.log(numerosAleatorios);

numerosAleatorios.sort(function (a, b) {
    return a - b;
});

console.log("Números gerados em ordem crescente")
console.log(numerosAleatorios);