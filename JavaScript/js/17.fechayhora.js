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


console.log("===escribir la fecha en string===");

//fecha: jueves 2 de diciembre del año 2021
var diasemana=currenttime.getDay();
console.log(diasemana);

messtr=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

console.log("fecha: "+  " de "+ messtr[mes]+ " del año " + anyo);

