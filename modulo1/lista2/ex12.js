const prompt = require("prompt-sync")();

let termo, termo1 = 0, termo2 = 1;
console.log(termo1);
console.log(termo2);
for(let i=3; i<=10; i++) {
    termo = termo1 + termo2;
    termo1 = termo2;
    termo2 = termo;
    console.log(termo);
}