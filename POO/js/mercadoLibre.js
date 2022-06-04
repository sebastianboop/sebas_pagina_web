
class automovil{
    constructor(marca,modelo,version,year,precio,kilometraje,ciudad,imagen){
        this.marca=marca;
        this.modelo=modelo;
        this.version=version;
        this.year=year;
        this.precio=precio;
        this.kilometraje=kilometraje;
        this.ciudad=ciudad;
        this.imagen=imagen;
    }
}

let car1= new automovil("mazda","prado","txl","2020","298.000.000","82","Bogota","img/toyotaPrado.png");


function Busqueda(car){
    let contenedorPrincipal=document.getElementById("contenidoPrincipal");
    let contimg= document.createElement("div");
     contenedorPrincipal.appendChild(contimg);
     contimg.setAttribute("class","contenido");

    let img= document.createElement("img");
    img.setAttribute("src", car.imagen);
    img.setAttribute("src","img");
    contenedorPrincipal.appendChild(img);

    let valorcar= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(car.precio);

    let textValorCar= document.createTextNode("$" + precioFormat);
    valorcar.appendChild(textValorCar);
    valorcar.setAttribute("class","precio");
    contenedorPrincipal.appendChild(valorcar);

    let descripcion= document.createElement("label");
    let textdesccar=document.createTextNode(car.marca+" " +car.modelo+" "+ car.version);
    descripcion.appendChild(textdesccar);
    descripcion.setAttribute("class","descripcion");

    contenedorPrincipal.appendChild(descripcion);

    let yearcar=document.createElement("label");
    let textyear=document.createTextNode(car.year);
    yearcar.appendChild(textyear);

    yearcar.setAttribute("class","year");

    let kilometrajecar=document.createElement("label");
    let textkilometraje=document.createTextNode(car.kilometraje+" kilometros");
    kilometrajecar.appendChild(textkilometraje);
    kilometrajecar.setAttribute("class","kilometraje");

}

window.addEventListener("keydown",function(event){
    let Busq=document.getElementById("textBuscador").value;
    if(event.key=="Enter"){
        console.log(Busq);
        cleanwindow();
        if(Busq=="hello"){
            Busqueda(car1);           
        }
        else{
            alert("sin coincidencias");
        }
    }
})
function cleanwindow(){
    document.getElementById("contenidoPrincipal").innerHTML="";
}