function contaStrings(objeto) {
    let numeroStrings = 0;
    for(let propriedade in objeto)
        if(typeof(objeto[propriedade]) === 'string')
            numeroStrings++;
    
    return numeroStrings;
}

let obj = {
    nome: 'Marcos',
    idade: 32,
    sexo: 'Masculino',
    cpf: 12345678910
};

console.log(contaStrings(obj));