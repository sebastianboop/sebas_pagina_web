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
