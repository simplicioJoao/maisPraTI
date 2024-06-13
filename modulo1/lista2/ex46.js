function sumarizarVendas(vendas) {
    let sumarizacao = {};
    for(let venda of vendas) {
        if(sumarizacao[venda.vendedor])
            sumarizacao[venda.vendedor] += venda.valor;
        else
            sumarizacao[venda.vendedor] = venda.valor;
    }
    return sumarizacao;
}

let vendas = [
    { vendedor: 'João', valor: 100 },
    { vendedor: 'Maria', valor: 200 },
    { vendedor: 'João', valor: 150 },
    { vendedor: 'Pedro', valor: 300 },
    { vendedor: 'Maria', valor: 100 }
];

console.log(sumarizarVendas(vendas));