let nomes = ['Maria', 'Ana', 'Carlos', 'Carlos', 'Ana', 'Beatriz', 'Marcos', 'João', 'Eduardo', 'João', 'Maria', 'Daniel', 'Kauan', 'Larissa', 'Neide', 'Olívia', 'Paulo', 'Tiago', 'Kátia', 'Tiago', 'Paulo', 'Paula', 'Helena', 'Maria', 'Joana', 'Maria'];

let quantidadeDeNomes = {};
for (let nome of nomes) {
    if(quantidadeDeNomes[nome])
        quantidadeDeNomes[nome]++;
    else
        quantidadeDeNomes[nome] = 1;
}

console.log(quantidadeDeNomes);