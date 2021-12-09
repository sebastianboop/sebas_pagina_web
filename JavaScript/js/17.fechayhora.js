"use strict"

console.log("===imprimir fecha y hora en el navegador===");

var currenttime = new Date();
console.log(currenttime);

var anyo = currenttime.getFullYear()
console.log("El año es: "+anyo);
var mes=currenttime.getMonth()
console.log("el mes es: "+(mes+1));
var diames = currenttime.getDate()
console.log("el dia es: "+diames);








var hora= currenttime.getHours()


console.log("la hora es : "+hora);
var min= currenttime.getMinutes()
console.log("Los minutos son: "+min);
var seg= currenttime.getSeconds()
console.log("los segundos son : "+seg);
var mil= currenttime.getMilliseconds()
console.log("los milisegundos son : "+mil);
var totaldate= currenttime.getDate()
console.log("los milisegundos totales sons: "+totaldate);

/* 
console.log("===escribir la fecha en string===");

//fecha: jueves 2 de diciembre del año 2021
var diasemana=currenttime.getDay();
console.log(diasemana);

messtr=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

console.log("fecha: "+  " de "+ messtr[mes]+ " del año " + anyo);
*/

console.log("===Ejemplo temporizador===");

var tiempoEstablecido=new Date (Date.UTC(2021,11,9,9,39,0));
var tiempoactual=new Date();
tiempoEstablecido.setHours(8);
console.log("fecha y hora d evencimiento "+ tiempoEstablecido);
if(tiempoactual.getFullYear()<=tiempoEstablecido.getFullYear()&&
tiempoactual.getMonth()<=tiempoEstablecido.getMonth()&&
tiempoactual.getHours()<=tiempoEstablecido.getHours()&&
tiempoactual.getMinutes()<=tiempoEstablecido.getMinutes()
){
    console.log("faltan "+(tiempoactual.getMonth()-tiempoEstablecido.getMonth())+" meses "+(tiempoactual.getDate()-tiempoEstablecido.getDate()
    )+" dias "+(tiempoactual.getHours()-tiempoEstablecido.getHours())+" horas y "+(tiempoEstablecido.getMinutes()-tiempoactual.getMinutes()
    )+ " minutos para vencimiento del plazo" )
    console.log("listo, el envio se realizo con exito")
}else{
    console.log("lo sentimos, el tiempo de entrega ya paso")
}

