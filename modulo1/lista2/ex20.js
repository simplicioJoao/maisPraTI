const prompt = require("prompt-sync")();

function Funcionario(matricula, nome, salarioBruto) {
    this.matricula = matricula;
    this.nome = nome;
    this.salarioBruto = salarioBruto;
    this.calcularDeducaoINSS = function () {
        return this.salarioBruto * 0.12;
    };
    this.calcularSalarioLiquido = function () {
        return this.salarioBruto - this.calcularDeducaoINSS();
    };
}

let funcionarios = [];

function adicionarFuncionario(matricula, nome, salarioBruto) {
    let funcionario = new Funcionario(matricula, nome, salarioBruto);
    funcionarios.push(funcionario);
}

// Adicionando 3 funcionários como exemplo
adicionarFuncionario(1, "João", 3000);
adicionarFuncionario(2, "Maria", 4000);
adicionarFuncionario(3, "Carlos", 2500);

for(let i = 0; i < funcionarios.length; i++) {
    console.log("Matrícula: " + funcionarios[i].matricula);
    console.log("Nome: " + funcionarios[i].nome);
    console.log("Salário bruto: R$" + funcionarios[i].salarioBruto.toFixed(2));
    console.log("Dedução INSS: R$" + funcionarios[i].calcularDeducaoINSS().toFixed(2));
    console.log("Salário líquido: R$" + funcionarios[i].calcularSalarioLiquido().toFixed(2));
    console.log("-----------------------");
}