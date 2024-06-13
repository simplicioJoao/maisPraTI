const prompt = require("prompt-sync")();

let horas, minutos, segundos, horarios = [];

for(let i = 0; i < 5; i++) {
    console.log("Horário", i+1);
    do {
        horas = prompt("Digite as horas: ");
        if(horas < 0 || horas > 23)
            console.log("Número de horas inválido.")
    } while(horas < 0 || horas > 23);
    
    do {
        minutos = prompt("Digite os minutos: ");
        if(minutos < 0 || minutos > 59)
            console.log("Número de minutos inválido.")
    } while(minutos < 0 || minutos > 59);
    
    do {
        segundos = prompt("Digite os segundos: ");
        if(segundos < 0 || segundos > 59)
            console.log("Número de segundos inválido.")
    } while(segundos < 0 || segundos > 59);

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    horarios.push([horas, minutos, segundos]);
}

for(let i = 0; i < 5; i++)
    console.log(`${horarios[i][0]}.${horarios[i][1]}.${horarios[i][2]}`);