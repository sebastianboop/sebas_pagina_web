

"use strict"

function guardarInfo() {
    let cod = document.getElementById("cod").value;
    if (cod == "") {
        alert("Por favor, ingrese el codigo de productos");
        return false;
    }
    if (document.getElementById("descripcion").value == "") {
        alert("Por favor, ingrese una descripcion");
        return false;
    }
    if (document.getElementById("valor").value == "") {
        alert("Por favor, ingrese un valor");
        return false;
    }
    if (document.getElementById("stock").value == "") {
        alert("Por favor, ingrese un stock");
        return false;
    }
    alert("Información guardada con éxito");
    limpiarFormulario();
    return true;
    
}
function limpiarFormulario() {
    document.getElementById("cod").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("stock").value = "";
}



/*   
function guardarinfo(){
    if(validarFormulario()==true)
    alert("hello")
}
function validarFormulario(){
    let lvalor=  document.getElementById("valor").value; 
    if(lvalor == ""){
        alert("porfavor ingrese el valor");
       

    }let lcod = document.getElementById(cod);
    let ldescripcion=document.getElementById(descripcion);
    let lstock= document.getElementById(stock); 
}
function validarFormulario(cod,descripcion,valor,stock){
    var valor=  document.getElementById(valor); 
    var cod = document.getElementById(cod);
    var descripcion=document.getElementById(descripcion);
    var stock= document.getElementById(stock);
    if(cod.value === ""){
        alert("Ingrese el codigo");
    }
    if(descripcion.value === ""){
    alert("ingrese una descripcion"); 

    }

    if (valor.value === ""){
        alert("por favor ingrese un valor");
    }

    if ( stock.value===""){
        alert("por favor registre el stock del producto")
    }
    
    

    
}
*/


