"use strict"

function pruebaSuma(){
    let cantidad = document.getElementById("cantidad").innerHTML;
    if(cantidad> 0 && cantidad<10){
        
    cantidad =+ Number(cantidad);
    document.getElementById("cantidad").innerHTML = cantidad;

    }else{
        alert("solo puede comprar entre 1 y 10 libros");
    }
}

function pruebaResta(){
    let cantidad = document.getElementById("cantidad").innerHTML;
    if(cantidad>1 && cantidad<=10){

    cantidad = Number(cantidad)-1;
    document.getElementById("cantidad").innerHTML = cantidad;
}else{
    alert("solo puede comprar entre 1 y 10 libros");
}

}