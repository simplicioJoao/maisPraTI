const prompt = require("prompt-sync")();

let jogador1, jogador2, opcao;
console.log("Você é o jogador 1!");

do {
    jogador2 = Math.floor(Math.random() * 3) + 1;

    do {
        jogador1 = Number(prompt("Escolha pedra (1), papel (2) ou tesoura (3): "));
        if(jogador1 !== 1 && jogador1 !== 2 && jogador1 !== 3)
            console.log("Valor inválido!");
    } while(jogador1 !== 1 && jogador1 !== 2 && jogador1 !== 3);

    switch(jogador1) {
        case 1: console.log("Jogador 1: pedra"); break;
        case 2: console.log("Jogador 1: papel"); break;
        case 3: console.log("Jogador 1: tesoura"); break;
    }

    switch(jogador2) {
        case 1: console.log("Jogador 2: pedra"); break;
        case 2: console.log("Jogador 2: papel"); break;
        case 3: console.log("Jogador 2: tesoura"); break;
    }

    if(jogador1 === 1 && jogador2 === 2)
        console.log("Jogador 2 venceu");
    else if(jogador1 === 1 && jogador2 === 3)
        console.log("Jogador 1 venceu");
    else if(jogador1 === 2 && jogador2 === 1)
        console.log("Jogador 1 venceu");
    else if(jogador1 === 2 && jogador2 === 3)
        console.log("Jogador 2 venceu");
    else if(jogador1 === 3 && jogador2 === 1)
        console.log("Jogador 2 venceu");
    else if(jogador1 === 3 && jogador2 === 2)
        console.log("Jogador 1 venceu");
    else if(jogador1 === jogador2)
        console.log("Empate");

    opcao = Number(prompt("Quero jogar de novo (1 - Sim): "));
} while(opcao === 1);