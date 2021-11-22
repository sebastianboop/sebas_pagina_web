console.log("===contador de caracteres===");
console.log("   ");

var texto = "hola, este es un ejemplo de texto, identificaremos si este texto tiene una extension superior a 50 caracteres, de ser asi, imprimiremos el texto exceso de caracteres" ;



console.log("el texto que usted ingreso es: " + texto);
console.log("   ");
console.log("numero de caracteres: "+texto.length);
console.log("   ");
 if (texto.length>50){
     console.log("advertencia: ha excedido el numero de caracteres");
 }

 console.log("===busqueda de coincidencias===");
 console.log("   ");
var frutas = ["manzana","uva","melon","sandia","fresa","banano","melocoton"];
var NombreFruta="melocoton";
console.log("la fruta a buscar en el array es: "+ NombreFruta);
if(frutas.includes(NombreFruta)){
    console.log("la fruta fue encontrada");
}else {
    console.log("la fruta no fue encontrada");
}
console.log("   ");
console.log("===listado de aprendices===")
console.log("   ");
var Aprendices=["","sebastian rendon","Luisa Ramirez","Fernada Ramirez","Yoan estiven Becerra", "sebastian Rivera", "felipe mendez", "Santiago ordoñez","Yeimi ariza","Lorena papamija","Edison macias" ];
for(i=1;i<Aprendices.length;i++){
    console.log(i+" "+ Aprendices[i] )
}





