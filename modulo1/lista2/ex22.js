const prompt = require("prompt-sync")();

function pesquisa() {
    let opcao, salario, filhos, somaSalario=0, somaFilhos=0, maiorSalario=0, salarioAte350=0, pessoas=0, pesquisa = [];
    do {
        salario = parseFloat(prompt("Digite o salário: "));
        filhos = parseInt(prompt("Digite a quantidade de filhos: "));
        somaSalario += salario;
        somaFilhos += filhos;

        if(salario > maiorSalario)
            maiorSalario = salario;

        if(salario <= 350)
            salarioAte350++;

        pessoas++;
        opcao = parseInt(prompt("Quero informar os dados de uma nova pessoa (1 - Sim): "));
    } while(opcao === 1);
    
    pesquisa. push(somaSalario / pessoas);
    pesquisa.push(somaFilhos / pessoas);
    pesquisa.push(maiorSalario);
    pesquisa.push(salarioAte350 * 100 / pessoas);

    return pesquisa;
}

dados = pesquisa();
console.log("Média salarial da população: R$ " + dados[0].toFixed(2));
console.log("Média de filhos da população: " + dados[1].toFixed(2));
console.log("Maior salário da população: R$ " + dados[2].toFixed(2));
console.log("Percentual de pessoas com salário até R$ 350,00: " + dados[3].toFixed(2) + "%");