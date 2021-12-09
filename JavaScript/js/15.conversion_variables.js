"use strict"
console.log("===conversion implicita===");
var num1= "12";
var num2= 4;
console.log("===concatenando===");
console.log("el resultado de la suma es :"+ num1+num2);
console.log("el resultado de la resta es :"+ (num2-num1));
console.log("el resultado de la multiplicacion  es :"+ num1*num2);

console.log("===conversion explicita===");
var num1ent= parseInt(num1);
console.log("el resultado de la suma es: "+ (num1ent+num2));

console.log("===conversion explicita numeros decimales===");
 var num3= 2.5;
 var num4="1.5";
//ParseFloat para converir texto en decimal
 console.log("El resultado de la suma es :"+ (parseFloat(num4)+num3));

 console.log("===conversion explicita de decimal a string===");

 var num5=1;
 var num6=2;

 var num5str= num5.toString();
 console.log("El resultado de la concatenacion es: "+num5str+num6)

 console.log("===conversion explicita temporal de  string a decimal ===");

 var num7= "1";
console.log(Number(num7)+num5);
