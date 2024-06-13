function verificaArrays() {
    for(let propriedade in dados)
        if(typeof(dados[propriedade]) === 'object')
            objetoArrays[propriedade] = dados[propriedade];
    return objetoArrays;
}

let dados = {
    num1: 2,
    num2: 5,
    num3: 4.5,
    nome1: 'Maria',
    nome2: 'Carlos',
    nome3: 'Joana',
    idades: [32, 45, 21],
    filhos: [1, 3, 0]
};

let objetoArrays = {};
console.log(verificaArrays());