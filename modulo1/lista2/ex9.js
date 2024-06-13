const prompt = require("prompt-sync")();

let sexo, salario, opcao, salarioHomens=0, salarioMulheres=0;

do {
    do {
        sexo = prompt("Informe o seu sexo (M / F): ");
        if(sexo != 'M' && sexo != 'F')
            console.log("Opção inválida.")
    } while(sexo != 'M' && sexo != 'F');
    salario = parseFloat(prompt("Informe seu salario: "));
    if(sexo === 'M')
        salarioHomens += salario;
    else
        salarioMulheres += salario;
    opcao = prompt("Deseja informar sobre um novo funcionario? (S - sim): ");
} while(opcao === 'S');

console.log(`Total pago aos homens: R$ ${salarioHomens.toFixed(2)}`);
console.log(`Total pago às mulheres: R$ ${salarioMulheres.toFixed(2)}`);