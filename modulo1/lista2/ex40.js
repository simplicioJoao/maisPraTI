const prompt = require("prompt-sync")();

let resultado = [], apostas = [], l, iguais;

console.log("Informe os números do resultado da Loto:");
for (let i = 0; i < 5; i++)
    do {
        resultado[i] = parseInt(prompt());
        for (l = 0; l < resultado.length; l++) {
            if (i !== l && resultado[i] === resultado[l]) {
                console.log("Não pode haver números iguais!");
                break;
            }
        }
    } while (resultado[i] === resultado[l]);

for (let i = 0; i < 50; i++) {
    console.log("Informe os 5 números apostados: ");
    for (let j = 0; j < 5; j++) {
        do {
            apostas[j] = parseInt(prompt());
            for (l = 0; l < apostas.length; l++) {
                if (j !== l && apostas[j] === apostas[l]) {
                    console.log("Não pode haver números iguais!");
                    break;
                }
            }
        } while (apostas[j] === apostas[l]);
    }

    console.log(apostas);
    iguais = 0;
    for (let i = 0; i < 5; i++)
        for (let j = 0; j < 13; j++)
            if (apostas[i] === resultado[j])
                iguais++;

    if (iguais === 5)
        console.log("Ganhador");
    apostas = [];
}