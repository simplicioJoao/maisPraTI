const prompt = require("prompt-sync")();

function listarHoteis() {
    if(idHotel !== 1) {
        console.log("Hotéis cadastrados no sistema: ");
        for(let hotel of hoteis) {
            console.log(`ID: ${hotel.id}`);
            console.log(`Nome do hotel: ${hotel.nome}`);
            console.log(`Cidade: ${hotel.cidade}`);
            console.log(`Total de quartos: ${hotel.quartosTotais}`);
            console.log(`Quartos disponíveis: ${hotel.quartosDisponiveis}`);
            console.log("\n");
        }
    } else
        console.log("Não há hotéis cadastrados no sistema.");
}

function adicionarHotel() {
    let novoHotel = {};
    novoHotel.id = idHotel;
    novoHotel.nome = prompt("Digite o nome do hotel: ");
    novoHotel.cidade = prompt("Digite a cidade em que o hotel está localizado: ");
    novoHotel.quartosTotais = parseInt(prompt("Informe o número total de quartos do hotel: "));
    do {
        novoHotel.quartosDisponiveis = parseInt(prompt("Informe o número de quartos do hotel disponíveis no momento: "));
        if(novoHotel.quartosDisponiveis > novoHotel.quartosTotais)
            console.log("O número de quartos disponíveis não pode ser maior que o número de quartos totais do hotel.");
    } while(novoHotel.quartosDisponiveis > novoHotel.quartosTotais);

    hoteis.push(novoHotel);
    console.log("Hotel cadastrado no sistema com sucesso!");
    idHotel++;
}

function buscarHoteisPorCidade() {
    let cidade = prompt("Digite a cidade: "), cidadeEncontrada = false;
    for(let hotel of hoteis) {
        if(hotel.cidade === cidade) {
            cidadeEncontrada = true;
            console.log(`\nID: ${hotel.id}`);
            console.log(`Nome do hotel: ${hotel.nome}`);
            console.log(`Cidade: ${hotel.cidade}`);
            console.log(`Total de quartos: ${hotel.quartosTotais}`);
            console.log(`Quartos disponíveis: ${hotel.quartosDisponiveis}`);
        }
    }
    if(cidadeEncontrada === false)
        console.log("Não há hotéis nesta cidade cadastrados no sistema.");
}

function fazerReserva() {
    let novaReserva = {}, quartosReservados;
    novaReserva.idReserva = idReservas;
    do {
        novaReserva.idHotel = parseInt(prompt("Informe o ID do hotel: "));
        if(novaReserva.idHotel < 1 || novaReserva.idHotel > idHotel)
            console.log("Não existe hotel com este ID.");
        else {
            quartosReservados = parseInt(prompt("Digite o número de quartos que serão reservados: "));
            for(let hotel of hoteis) {
                if(hotel.id === novaReserva.idHotel && hotel.quartosDisponiveis >= quartosReservados) {
                    novaReserva.quartosReservados = quartosReservados;
                    novaReserva.nomeCliente = prompt("Digite seu nome: ");
                    reservas.push(novaReserva);
                    console.log("Reserva realizada com sucesso!");
                    hotel.quartosDisponiveis -= quartosReservados;
                    idReservas++;
                    totalReservas++;
                } else if(hotel.id === novaReserva.idHotel && hotel.quartosDisponiveis < quartosReservados)
                    console.log(`Não há ${quartosReservados} quartos disponíveis neste hotel para reserva.`);
            }
        }
    } while(novaReserva.idHotel < 1 || novaReserva.idHotel > idHotel);
}

function cancelarReserva() {
    let idReserva = parseInt(prompt("Digite o ID da reserva que você quer cancelar: ")), reservaEncontrada = false;
    for(let reserva of reservas) {
        if(reserva.idReserva === idReserva) {
            reservaEncontrada = true;
            for(let hotel of hoteis) {
                if(reserva.idHotel === hotel.id) {
                    console.log("Reserva cancelada com sucesso!");
                    totalReservas--;
                    indice = reservas.indexOf(reserva);
                    reservas.splice(indice, 1);
                    hotel.quartosDisponiveis += reserva.quartosReservados;
                }
            }
        }
    }
    if(reservaEncontrada === false)
        console.log("Reserva não encontrada no sistema!");
}

function listarReservas() {
    if(totalReservas >= 1) {
        for(let reserva of reservas) {
            console.log(`\nID da reserva: ${reserva.idReserva}`);
            console.log(`Cliente: ${reserva.nomeCliente}`);
            for(let hotel of hoteis) {
                if(hotel.id === reserva.idHotel) {
                    console.log(`ID e nome do hotel: ${hotel.id} - ${hotel.nome}`);
                    console.log(`Quartos reservados: ${reserva.quartosReservados}`);
                    console.log(`Cidade: ${hotel.cidade}`);
                    break;
                }
            }
        }
    } else
        console.log("No momento não há reservas no sistema.");
}

let opcao, hoteis = [], idHotel = 1, idReservas = 1, totalReservas = 0, reservas = [];

do {
    console.log("\n1. Listar hotéis cadastrados\n2. Adicionar hotel no sistema\n3. Buscar hotéis por cidade\n4. Fazer uma reserva\n5. Cancelar uma reserva\n6. Listar reservas no sistema\n7. Sair")
    opcao = parseInt(prompt("Escolha o que você quer fazer: "));
    switch(opcao) {
        case 1: listarHoteis(); break;
        case 2: adicionarHotel(); break;
        case 3: buscarHoteisPorCidade(); break;
        case 4: fazerReserva(); break;
        case 5: cancelarReserva(); break;
        case 6: listarReservas(); break;
        case 7: break;
        default: console.log("Opção inválida!"); break;
    }
    console.log("---------------------------------------------------------")
} while(opcao !== 7);