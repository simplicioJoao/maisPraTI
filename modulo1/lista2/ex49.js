function transacoesPorCategoria(transacoes) {
    let transacoesPorCategoria = {}, subtotais = {};
    for(let transacao of transacoes) {
        if(transacoesPorCategoria[transacao.categoria])
            transacoesPorCategoria[transacao.categoria].push(transacao);
        else {
            transacoesPorCategoria[transacao.categoria] = [];
            transacoesPorCategoria[transacao.categoria].push(transacao);
        }

        if(subtotais[transacao.categoria])
            subtotais[transacao.categoria] += transacao.valor;
        else
            subtotais[transacao.categoria] = transacao.valor;
    }

    console.log("Subtotais por categoria:");
    console.log(subtotais);
    console.log("\n");
    console.log("Transações por categoria:");
    return transacoesPorCategoria;
}

let transacoes = [
    { id: 1, valor: 100, data: '2024-06-13', categoria: 'Alimentação' },
    { id: 2, valor: 50, data: '2024-06-14', categoria: 'Transporte' },
    { id: 3, valor: 200, data: '2024-06-15', categoria: 'Lazer' },
    { id: 4, valor: 75, data: '2024-06-16', categoria: 'Alimentação' },
    { id: 5, valor: 120, data: '2024-06-17', categoria: 'Transporte' },
    { id: 6, valor: 80, data: '2024-06-18', categoria: 'Alimentação' },
    { id: 7, valor: 150, data: '2024-06-19', categoria: 'Lazer' },
    { id: 8, valor: 90, data: '2024-06-20', categoria: 'Transporte' },
    { id: 9, valor: 60, data: '2024-06-21', categoria: 'Alimentação' }
];

console.log(transacoesPorCategoria(transacoes));