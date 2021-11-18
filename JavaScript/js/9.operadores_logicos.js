"use strict"

/*operadores logicos

&&.... y
||....o
!=....negacion
xor...o exclusivo....^


*/
/*
si el parendiz tiene JA o SISBEN puede acceder al servicio de transporte

si tiene JA y SISBEN no puede acceder al servicio de transporte
si no tiene JA y no tiene SISBEN no puede acceder al servicio de transporte

*/

var JonenesEnAccion=true;
var Sisben=true;
 
if(JonenesEnAccion===true && Sisben===true){
    console.log(" usted puede accder al servicio de transporte");
}else {
    console.log(" usted no puede acceder al servicio");
}