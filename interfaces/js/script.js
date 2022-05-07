//alert("hello world");



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



