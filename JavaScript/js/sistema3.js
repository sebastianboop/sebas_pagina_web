console.log("===Cadenas de texto en javascript===");

console.log(" ");

console.log("===1. Cambiando todo a Mayusculas===");

console.log(" ");
var nombreEnMinuscula= "sebastian rendon";
console.log("el nombre que usted ingreso es :" + nombreEnMinuscula);
console.log("el nombre luego de usar la propiedad ToUpperCase :" + nombreEnMinuscula.toUpperCase());
console.log(" ");
console.log("==2.cambiando todo a minusculas===");
var nombreMayuscula= "SEBASTIAN RENDON";
console.log("el nombre que usted ingreso es :" + nombreMayuscula);
console.log("el nombre luego de usar la propiedad ToLowercase :" + nombreEnMinuscula.toLowerCase());
console.log(" ");
console.log("===3.Primera letra en mayuscula y el resto en minuscula===");

console.log(" ");
var nombreEnMinuscula= "sebastian";
console.log("el nombre que usted ingreso es :" + nombreEnMinuscula);
console.log("el nombre luego de usar la propiedad ToUpperCase y concatenar con slice() :" + nombreEnMinuscula[0].toUpperCase() + nombreEnMinuscula.slice(1));
console.log(" ");
console.log("===4.Extrayendo partes de la cadena de texto===");

var saiyan= "aguacate";
console.log("el texto que usted ingreso es :" + saiyan);
console.log("el texto luego de usar el metodo slice() :" + saiyan.slice(0,4));
console.log(" ");

console.log("===5. Contando caracteres===");

var saiyan2= "El aguacate es 50% agua ";
console.log("el texto que usted ingreso es :" + saiyan2);
console.log("el texto tiene una dimension de :" + saiyan2.length);
console.log(" ");
console.log("===6.Hallando espacios dobles===");

var saiyan3= "agua  cate";
console.log("el texto que usted ingreso es :" + saiyan3);
for(i = 0;i<saiyan3.length;i++){
    if(saiyan3.slice(i,(i+2))==="  "){
        console.log("El texto tiene espacios dobles ");
    }
}
console.log(" ");
console.log("===7.Reemplazando texto===");

var educacion= "Estudiar en Colombia";
var newlang= "Canada";
console.log("el texto que usted ingreso es :" + educacion);
for(i=0;i<educacion.length;i++){
    if(educacion.slice(i, i + 8) === "Colombia"){
        educacion= educacion.slice(0,i);
    }
}
console.log(educacion+newlang);

console.log(" ");
console.log("===8.Reemplazando texto con indexof===");

var educacion2="Es mejor estudiar en Colombia";
var firstchar= educacion2.indexOf("Colombia")
if(firstchar !== -1){
    console.log(firstchar);
    educacion2 = educacion2.slice(0,firstchar)+"Canada";
    console.log(educacion2);
}

console.log(" ");
console.log("===9.Extraer el primer caracter===");

var name1="sebastian";
var primerCaracter=name1.charAt(0);
console.log("El nombre ingresado es :"+ name1);
console.log( "El primer caracter de este nombre es :"+ primerCaracter);

console.log(" ");
console.log("===10.Extraer el ultimo caracter===");
ultimoCaracter=name1.charAt(name1.length - 1);
console.log( "El ultimo caracter de este nombre es :"+ ultimoCaracter);

console.log(" ");
console.log("===11.buscando caracteres especiales===");

var frase = "hola Mundo!";
console.log("La frase es: "+frase);
for(var i=0;i<frase.length;i++){
    if(frase.charAt(i)==="!"){
        console.log("Se encontraron caraceres especiales")
    }
}
console.log(" ");
console.log("===12.reemplazando texto con el metodo replace===");

var pais= "Vivir en Colombia ";
console.log( "El texto es : "+ pais);
console.log( "El nuevo texto es : " +pais.replace("Colombia","Canada"))




