const prompt = require("prompt-sync")();

let G = [], R = [], acertos;

console.log("Informe as respostas do Gabarito (A, B, C, D ou E):");
for (let i = 0; i < 20; i++)
    do {
        G[i] = prompt(`${i + 1}: `);
        if (G[i] !== 'A' && G[i] !== 'B' && G[i] !== 'C' && G[i] !== 'D' && G[i] !== 'E')
            console.log("Informe uma alternativa válida entre A e E.");
    } while (G[i] !== 'A' && G[i] !== 'B' && G[i] !== 'C' && G[i] !== 'D' && G[i] !== 'E');

console.log("Respostas dos alunos")
for (let i = 0; i < 50; i++) {
    console.log(`Aluno ${i + 1}`);
    acertos = 0;
    for (let j = 0; j < 20; j++) {
        do {
            R[j] = prompt(`${j + 1}: `);
            if (R[j] === G[j])
                acertos++;
            if (R[j] !== 'A' && R[j] !== 'B' && R[j] !== 'C' && R[j] !== 'D' && R[j] !== 'E')
                console.log("Informe uma alternativa válida entre A e E.");
        } while (R[j] !== 'A' && R[j] !== 'B' && R[j] !== 'C' && R[j] !== 'D' && R[j] !== 'E');
    }

    console.log(`O aluno ${i + 1} teve ${acertos} acertos`);
    if (acertos >= 12)
        console.log("APROVADO");
    else
        console.log("REPROVADO");
}