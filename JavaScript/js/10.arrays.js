"use strict"
// arrays
//formas de dechalar e inicialixar arrays
//forma 1
var Aprendiz1= new Array();
Aprendiz1[0]= 1;
Aprendiz1[1]= "Yeimi ";
Aprendiz1[2]= "peña";
Aprendiz1[3]= 18;
Aprendiz1[4]= "pitalito";
Aprendiz1[5]= 156;
//forma 2
var Aprendiz2=new Array(2,"sebastian","Rendon",20,"Acevedo",161);
//forma3
var Aprendiz3= [3, "broly","brolylastname", 42, "Sabala", 198];

console.log( Aprendiz2[1]+" "+Aprendiz2[2]);
// añadiendo elementos al array

Aprendiz2[6]="3133007933";
console.log("telefono :"+Aprendiz2[6])


//contando elementos//

var CantidadElementos= Aprendiz2.length;
console.log("aprendiz dos tiene :"+ CantidadElementos + " elementos");


var CantidadCaracteres= Aprendiz2[1].length;
console.log("el nombre Sebastian tiene :"+CantidadCaracteres+ " caracteres");
