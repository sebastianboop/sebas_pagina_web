//declaro la variable que del costo por unidad de mi producto
let valorUnidad = 27.11;
//llamo la funcion que me dice informacion de mis productos
numeroProductos();
//llamo otra funcion
calcularSubtotal();
//
valorIndividual();
//creo la funcion para determinar mi numero de productos
function numeroProductos(){
    let numeroProductos = document.getElementById("cantidadProductos").innerHTML;
    document.getElementById("cantidad").innerHTML = numeroProductos;
    if(numeroProductos >= 2 || numeroProductos == 0){
        document.getElementById("cantidad").innerHTML= numeroProductos.toString()+ " productos";
    }
    else{
        document.getElementById("cantidad").innerHTML= numeroProductos.toString()+ " producto";
    }
}

function sumar(){
    let cantidad=document.getElementById("cantidadProductos").innerHTML;
    if(cantidad<=9){
        cantidad=Number(cantidad)+1;
        document.getElementById("cantidadProductos").innerHTML=cantidad;
    }else{
        alert(" no puedes comprar mas de 10 productos en este pedido");
    }
    calcularSubtotal();
    numeroProductos();
}
function restar(){
    let cantidad=document.getElementById("cantidadProductos").innerHTML;
    if(cantidad>1){
        cantidad=Number(cantidad) -1;
        document.getElementById("cantidadProductos").innerHTML=cantidad;
    }
    else{
        alert("no puedes comprar menos de un producto");
    } 
    calcularSubtotal();
    numeroProductos();
}
function calcularSubtotal() {
    let cantidad= document.getElementById("cantidadProductos").innerHTML;
    let subtotal = 27.11 * Number(cantidad);
    let subtotalFormat = new Intl.NumberFormat('es-ES').format(subtotal);
    document.getElementById("valorSubtotal").innerHTML = subtotalFormat;
}
function valorIndividual() {
    let valorUnitarioFormat = new Intl.NumberFormat('es-ES').format(valorUnidad);
    document.getElementById("valor-unitario").innerHTML = valorUnitarioFormat,toString()+ " USD";
}
/*valorIndividual();
calcularSubtotal();
numeroProductosInfo();


function numeroProductosInfo() {
    let numeroActual = document.getElementById("cantidadProductos").innerHTML;
    document.getElementById("info-cantidad").innerHTML = numeroActual;
    if(numeroActual >= 2 || numeroActual == 0) {
        document.getElementById("info-cantidad").innerHTML = numeroActual.toString() + " productos";
    }
    else {
        document.getElementById("info-cantidad").innerHTML = numeroActual.toString() + " producto";
    }

}
function calcularSubtotal() {
    let cantidadElementos = document.getElementById("cantidadProductos").innerHTML;
    let subtotal = 27.11 * Number(cantidadElementos);
    let subtotalFormat = new Intl.NumberFormat('es-ES').format(subtotal);
    document.getElementById("valorSubtotal").innerHTML = subtotalFormat;
}
function cargarProducto() {
    let numeroActual = document.getElementById("cantidadProductos").innerHTML;
    if (numeroActual < 10) {
        let numeroProductos = document.getElementById("cantidadProductos").innerHTML = Number(numeroActual) + Number(1);
    }
    else{
        alert("no puede comprar mas de diez productos en un solo pedido");
    }
    calcularSubtotal();
    numeroProductosInfo();

}
function restarProducto() {
    let numeroActual = document.getElementById("cantidadProductos").innerHTML;
    if (numeroActual > 1) {
        let numeroProductos = document.getElementById("cantidadProductos").innerHTML = Number(numeroActual) - Number(1);
    }
    else{
        alert("no puede comprar menos de un producto");
    }
    calcularSubtotal();
    numeroProductosInfo();
}
function valorIndividual() {
    let valorUnitarioFormat = new Intl.NumberFormat('es-ES').format(valorUnitario);
    document.getElementById("valor-unitario").innerHTML = valorUnitarioFormat;
}
*/