"use strict"
 function MostrarHora(){
    var fechaActual=new Date();
     var HoraActual=fechaActual.getHours();
     var minActual=fechaActual.getMinutes();
     if(HoraActual>12){
         HoraActual=(HoraActual-12);
     }if(HoraActual<10){
         HoraActual=("0"+HoraActual);
     }if(minActual<10){
         minActual=("0"+minActual);
     };
     alert("Hora actual ="+ HoraActual +": "+minActual);
 }

 function Presentacion(nombre, titulado){
     alert("Bienvenido "+ nombre + " del ADSI "+ titulado)
     
 }
 //funciones con retorno

 function validarDescuento(compra){
     var total= 0;
     // si la compra es superior a 10.000 tiene descuento del 10%
     if(compra>=10000){
         total=compra * .9;
       
     }
     // si la compra esta entre 5 mil y 10 mil, el descuento es de 5%
     else if(compra>5000 && compra<10000){
         total=compra*.95;
     }
     else{
         compra=total;
     }
     return total;
 }

 function calculardescuento(compra){
     alert("costo total: " + validarDescuento(compra))
 }