"use strict"

var voto= "Luisa";
var candidatos= ["Luisa","Jesus","Hamir", "nulo","blanco"];
var votos=[0,0,0,0,0,0];
for(let i=0;i<candidatos.length; i++){
    if(voto===candidatos[i]){
        votos[i]++;
    }
}
for(let i=0;i<candidatos.length; i++){
    console.log("===RESULTADOS===")
    console.log(candidatos[i]+" : "+ votos[i]);

}
