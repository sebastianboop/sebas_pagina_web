"use strict"

var CostoSinIva = 32200;
var CostoIva = 3200;
var domicilio = 3000;
var CostoTotal = CostoSinIva+CostoIva+domicilio;

console.log( "el costo total es de: $" + CostoTotal);

console.log("el limite para usar un entero es: " + Number.MAX_SAFE_INTEGER);
var numMaximo = number.MAX_SAFE_INTEGER;
//la suigiente opreacion muestra un error al exceder el numero maximo
console.log(numMaximo + 1);