const prompt = require("prompt-sync")();

let gabarito = [], cartoes = [], respostas = [], l, iguais;

console.log("Informe os números do Gabarito:");
for (let i = 0; i < 13; i++)
    do {
        gabarito[i] = parseInt(prompt());
        for (l = 0; l < gabarito.length; l++) {
            if (i !== l && gabarito[i] === gabarito[l]) {
                console.log("Não pode haver números iguais!");
                break;
            }
        }
    } while (gabarito[i] === gabarito[l]);

for (let i = 0; i < 100; i++) {
    do {
        cartoes[i] = parseInt(prompt("Digite o número do seu cartão: "));
        for (l = 0; l < cartoes.length; l++) {
            if (i !== l && cartoes[i] === cartoes[l]) {
                console.log("Esse cartão já foi verificado, o número do seu cartão deve ser outro.");
                break;
            }
        }
    } while(cartoes[i] === cartoes[l]);
    console.log("Informe os 13 números apostados: ");
    for (let j = 0; j < 13; j++) {
        do {
            respostas[j] = parseInt(prompt());
            for (l = 0; l < respostas.length; l++) {
                if (j !== l && respostas[j] === respostas[l]) {
                    console.log("Não pode haver números iguais!");
                    break;
                }
            }
        } while (respostas[j] === respostas[l]);
    }

    console.log(respostas);
    iguais = 0;
    for (let i = 0; i < 13; i++)
        for (let j = 0; j < 13; j++)
            if (respostas[i] === gabarito[j])
                iguais++;

    console.log(`Cartão ${cartoes[i]}: ${iguais} acertos`);
    if (iguais === 13)
        console.log("Parabéns, tu foi o GANHADOR");
    respostas = [];
}