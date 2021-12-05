console.log("===uso de fecha y hora en Javascript===");
var currentTime= new Date();
var HoraActual= currentTime.getHours();
console.log("la hora actual por defecto del sistema es : "+ HoraActual);
if(HoraActual> 12 ){
console.log("La hora actual en formato 12 horas es: "+ (HoraActual-12)+ "PM");
}else if(HoraActual < 12){
    console.log("La hora actual en formato 12 horas es: "+ HoraActual+ "AM");
}
else if(HoraActual=12){
    console.log("La hora actual en formato 12 horas es: "+ HoraActual+ " del medio dia");

};

console.log("===Definir un sistema que les permita saber cuántos días faltan para su próximo cumpleaños.===");

//estableciuendo las 2 fechas
var cumpleaños= new Date( "may 5 2022");
var fechaHoy=new Date();
//hallando los milisegundos
var msfechahoy=fechaHoy.getTime();
var msCumpleaños=cumpleaños.getTime();
//hallando la diferencia entre ambas fechas
var msDIFF= msCumpleaños-msfechahoy;
//establecemos los dias de diferencia
var diasDIFF= msDIFF/(1000*60*60*24);

diasDIFF= Math.floor(diasDIFF); 
console.log("faltan "+ diasDIFF +" dias para mi cumpleaños, ahorren para el regalo");

console.log("===Definir un sistema que cargue la fecha y si ese día el usuario cumple años arrojar un mensaje ===");

var fechaCumpleañosLuisa= new Date("december 9 2021");
var mescumpleañosLuisa=fechaCumpleañosLuisa.getMonth();
var diacumpleañosLuisa=fechaCumpleañosLuisa.getDate();
var fechaHoycumpleañosdia = fechaHoy.getDate();
var fechaHoycumpleañosmes= fechaHoy.getMonth();
console.log("hoy es el dia "+fechaHoycumpleañosdia+" del mes "+fechaHoycumpleañosmes);

if(mescumpleañosLuisa===fechaHoycumpleañosmes && diacumpleañosLuisa===fechaHoycumpleañosdia ){
console.log("feliz cumpleaños luisa")
}else{console.log("nadie cumple años hoy")};
 console.log("===Cuantos años voy a cumplir===");


