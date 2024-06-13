const prompt = require("prompt-sync")();

let tipoCarro = prompt("Informe o tipo de carro alugado (popular ou luxo): ");

if(tipoCarro !== 'popular' && tipoCarro !== 'luxo')
    console.log("Tipo de carro inválido.");
else {
    let dias = parseInt(prompt("Informe o total de dias de aluguel: "));
    let quilometros = parseFloat(prompt("Informe a quantidade de quilômetros rodados: "));
    let valorEmReais;

    if(tipoCarro === 'popular') {
        if(quilometros <= 100)
            valorEmReais = 90*dias + 0.2*quilometros;
        else
        valorEmReais = 90*dias + 0.1*quilometros;
    } else {
        if(quilometros <= 200)
            valorEmReais = 150*dias + 0.3*quilometros;
        else
            valorEmReais = 150*dias + 0.25*quilometros;
    }

    console.log("Valor a pagar: R$ " + valorEmReais.toFixed(2));
}