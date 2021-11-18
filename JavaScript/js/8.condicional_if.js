"use strict"
console.log("===condicional IF===");
var edad=18;
if(edad>=18){
    console.log("bienvenido al sistema");
}
console.log("===condicional compuesto===");
 var personas =101;
console.log("el numero de personas es de:"+ personas);
 if(personas>0 && personas<=20){
     console.log("use el ambiente uno");
 }
 else if(personas>20 && personas<=40){
     console.log(" use el ambiente 2");
 }
 else if( personas>40 && personas<=100){
     console.log( " use el bioauditorio");
 }
 else if(personas>100){
     console.log( " no hay ningun ambiente con capacidad para todas las personas");
 }
 else{
console.log("Ha surgido un error");
 }

 //condicional anidado

 console.log("===condicioanles anidados===");

 //sistema para determinar el descuento al usuario

var edadUsuario= 71;
var aerolineaUsuario="latam";
var destinoUsuario="san Andres";
var ValorTiquete=250000;
var descuentoviaje=0.1;
if(edadUsuario<=10 || edadUsuario>=70){
    ValorTiquete= ValorTiquete -( ValorTiquete*descuentoviaje);
    if(destinoUsuario==="san Andres"){
        ValorTiquete= ValorTiquete -( ValorTiquete*descuentoviaje);
        if(aerolineaUsuario==="latam");
        ValorTiquete= ValorTiquete -( ValorTiquete*descuentoviaje);

    }
    
}console.log( "el valor del viaje es de: " + ValorTiquete);
