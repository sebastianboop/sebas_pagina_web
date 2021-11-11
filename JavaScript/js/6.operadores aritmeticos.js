"use strict"

// Hallar el total en suma
console.log( "====SUMA===")
var numero1 = 1;
var numero2 = 2;
var sumatotal= numero1 + numero2;

console.log ("el valor total es de: " + sumatotal);

//hallar la diferencia
console.log( "====DIFERENCIA===")
var direfenciatotal = numero2 - numero1;

console.log ("la resta da como resultado: " + direfenciatotal);

// hallar el producto multiplicacion
console.log( "====MULTIPLICACION===")
var productototal = numero1 * numero2;

console.log ("la multiplicacion da como resultado: " + productototal);

//hallarel promedio  division
console.log( "====DIVISION===")
var calificacion1 = 5.0;
var calificacion2 = 4.0;
var calificacion3 =4.3;

var promedio= (calificacion1+calificacion2+calificacion3)/3;
promedio= promedio.toFixed(2);
console.log("EL PROMEDIO ES DE :" + promedio);

//HALLAR EL RESIDUO
console.log( "====RESIDUOS===")
var empanadas = 30;
var personas = 4;

var empanadasPorPersona= parseInt( empanadas/personas) ;
var empanadasSobrantes = empanadas%personas;
console.log("a cada persona le tocan de a "+ empanadasPorPersona + " empanadas");
console.log("sobran " +empanadasSobrantes +"empanadas");