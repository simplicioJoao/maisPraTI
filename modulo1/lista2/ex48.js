function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    let inventarioCompleto = {};
    for(let item in inventarioLojaA) {
        if(inventarioCompleto[item])
            inventarioCompleto[item] += inventarioLojaA[item];
        else
            inventarioCompleto[item] = inventarioLojaA[item];
    }

    for(let item in inventarioLojaB) {
        if(inventarioCompleto[item])
            inventarioCompleto[item] += inventarioLojaB[item];
        else
            inventarioCompleto[item] = inventarioLojaB[item];
    }

    return inventarioCompleto;
}

let inventarioLojaA = {
    item1: 10,
    item2: 20,
    item3: 15,
    item4: 5,
    item5: 30,
    item6: 25,
    item7: 8,
    item8: 12,
    item9: 18,
    item10: 22
};

let inventarioLojaB = {
    item1: 15,
    item2: 25,
    item3: 10,
    item4: 8,
    item5: 20,
    item11: 12,
    item12: 7,
    item13: 14,
    item14: 9,
    item15: 16
};

console.log(combinarInventarios(inventarioLojaA, inventarioLojaB));