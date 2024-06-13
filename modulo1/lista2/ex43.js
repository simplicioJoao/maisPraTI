function combinacao(obj1, obj2) {
    let objetoCombinado = {};
    for(let propriedade in obj1)
        objetoCombinado[propriedade] = obj1[propriedade];
    for(let propriedade in obj2)
        objetoCombinado[propriedade] = obj2[propriedade];
    
    return objetoCombinado;
}

let obj1 = {
    num1: 24,
    num2: 4,
    num3: 67,
    num4: 6,
    num6: 0
};

let obj2 = {
    num2: 3,
    num3: 78,
    num5: 3,
    num6: 9,
    num7: 80,
    num8: 2
};

console.log(combinacao(obj1, obj2));