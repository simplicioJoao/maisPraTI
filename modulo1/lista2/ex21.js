const prompt = require("prompt-sync")();

function pesoIdeal(alt, sexo) {
    if(sexo === 'M')
        return 72.7 * alt - 58;
    else
        return 62.1 * alt - 44.7;
}

let sexo, altura = parseFloat(prompt("Informe a altura: "));
do {
    sexo = prompt("Informe o sexo (M / F): ");
} while(sexo !== 'M' && sexo !== 'F');
console.log("Peso ideal: " + pesoIdeal(altura, sexo).toFixed(2) + " Kg");