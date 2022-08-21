//para los que se van a copiar solo quiero que sepan que en los cielos hay un Dios que todo lo ve.


//botones de suma y resta


let botonPlus=document.getElementById("plus");
let botonMenos=document.getElementById("botonMenos");
botonPlus.addEventListener("click",()=>{
    sumar();
})
botonMenos.addEventListener("click",()=>{
    
    restar();
})

//precio

//function asignarPrecio(){
    
//let precioTotalespacio=document.getElementById("vcd").innerHTML;

// let calcPrecio=125 * cantidad;
 //document.getElementById("vcd").innerHTML=calcPrecio;
 
//}
//funcion sumar

function sumar(){
    let cantidad=document.getElementById("cantidad").innerHTML;
    cantidad=parseInt(cantidad);
    cantidad=cantidad +1;
    
    document.getElementById("cantidad").innerHTML=cantidad;
    
 let calcPrecio=125 * cantidad;
 document.getElementById("vcd").innerHTML="Costo Total : "+calcPrecio;
}

function restar(){
    let cantidad=document.getElementById("cantidad").innerHTML;
    if (cantidad>=1){
    cantidad=parseInt(cantidad);
    cantidad=cantidad -1;
    
    document.getElementById("cantidad").innerHTML=cantidad;

    let calcPrecio=125 * cantidad;
    document.getElementById("vcd").innerHTML="Costo Total : "+calcPrecio;
    }
}




//ligth Box

let contenedor=document.getElementById("lightbox");

let imagen=document.getElementById("imgprincipal");
let salir=document.getElementById("exit");
imagen.addEventListener("click",()=>{
    contenedor.classList.remove("ligthboxvacio");
    contenedor.classList.add("ligthbox");
});
salir.addEventListener("click",()=>{
    contenedor.classList.remove("ligthbox");
    contenedor.classList.add("ligthboxvacio");
})

//cambio de imagenes

let subimg1=document.getElementById('subimg1');
let subimg2=document.getElementById('subimg2');
let subimg3=document.getElementById('subimg3');
let subimg4=document.getElementById('subimg4');

let imagenlightbox=document.getElementById("imagenlightbox");
let subimgsec2= document.getElementById("subimgsec2");  
let subimgsec3= document.getElementById("subimgsec3");  
let subimgsec4= document.getElementById("subimgsec4");  

subimg1.addEventListener("click",()=>{
    quitarsecundarias(subimgsec2);
    quitarsecundarias(subimgsec3);
    quitarsecundarias(subimgsec4);
    
    imagenlightbox.classList.remove("imagenInvisible");
    imagenlightbox.classList.add("imgprincipall");
    
    
    quitaricono(sig2);
    quitaricono(sig3);
    quitaricono(sig2);
    agregaricono(sig1);


    
    quitariconoAnterior(ant2);
    
    quitariconoAnterior(ant3);
    quitariconoAnterior(ant4);
    
    agregariconoAnt(ant1);
});
subimg2.addEventListener("click",()=>{
    quitarPrincipal();
    
    quitarsecundarias(subimgsec3);
    quitarsecundarias(subimgsec4);
    subimgsec2.classList.remove("imagenInvisible");
    subimgsec2.classList.add("imgprincipall");

    
    quitaricono(sig1);
    quitaricono(sig4);
    quitaricono(sig3);
    agregaricono(sig2);

    quitariconoAnterior(ant1);
    
    quitariconoAnterior(ant4);
    
    quitariconoAnterior(ant3);
    
    agregariconoAnt(ant2);
});

subimg3.addEventListener("click",()=>{
    quitarPrincipal();
    quitarsecundarias(subimgsec2);
    quitarsecundarias(subimgsec4);
    agregarSecundariaComoPrin(subimgsec3);

    
    quitaricono(sig1);
    quitaricono(sig2);
    quitaricono(sig4);
    agregaricono(sig3);

    quitariconoAnterior(ant1);
    
    quitariconoAnterior(ant2);
    
    quitariconoAnterior(ant4);
    
    agregariconoAnt(ant3);
})

subimg4.addEventListener("click",()=>{
    
    quitarPrincipal();
    quitarsecundarias(subimgsec2);
    quitarsecundarias(subimgsec3);
    agregarSecundariaComoPrin(subimgsec4);

    quitaricono(sig1);
    quitaricono(sig2);
    quitaricono(sig3);
    agregaricono(sig4);

    quitariconoAnterior(ant1);
    
    quitariconoAnterior(ant2);
    
    quitariconoAnterior(ant3);
    
    agregariconoAnt(ant4);

})


// flechas
let ant1=document.getElementById("ant1");
let sig1=document.getElementById("sig1");
let sig2=document.getElementById("sig2");
let ant2=document.getElementById("ant2");
let sig3=document.getElementById("sig3");
let ant3=document.getElementById("ant3");
let sig4=document.getElementById("sig4");
let ant4=document.getElementById("ant4");



ant1.addEventListener("click",()=>{
    
    imagenlightbox.classList.remove("imgprincipall");
    imagenlightbox.classList.add("imagenInvisible");
    agregarSecundariaComoPrin(subimgsec4);
    quitaricono(sig1);
    agregaricono(sig4);
    quitariconoAnterior(ant1);
    agregariconoAnt(ant4);

 

})

ant2.addEventListener("click",()=>{
    quitarsecundarias(subimgsec2);
    quitarsecundarias(subimgsec3);
    quitarsecundarias(subimgsec4);
    quitariconoAnterior(ant2);
    agregariconoAnt(ant1);
    quitaricono(sig2);
    agregaricono(sig1);
    imagenlightbox.classList.remove("imagenInvisible");
    imagenlightbox.classList.add("imgprincipall");
    // aqui voy
    
})
ant3.addEventListener("click",()=>{
    quitarsecundarias(subimgsec3);
    agregarSecundariaComoPrin(subimgsec2);
    quitaricono(sig3);
    agregaricono(sig2);
    quitariconoAnterior(ant3);
    agregariconoAnt(ant2);
})
ant4.addEventListener("click",()=>{
    
    quitarsecundarias(subimgsec4);
    agregarSecundariaComoPrin(subimgsec3);
    quitaricono(sig4);
    agregaricono(sig3);
    quitariconoAnterior(ant4);
    agregariconoAnt(ant3);
})
sig1.addEventListener("click",()=>{
    quitarPrincipal();
    agregarSecundariaComoPrin(subimgsec2);
    quitaricono(sig1);
    quitariconoAnterior(ant1);
    agregaricono(sig2);
    agregariconoAnt(ant2);
    
   // agregariconoAnt(ant2);

})
sig2.addEventListener("click",()=>{
    quitarPrincipal();
    agregarSecundariaComoPrin(subimgsec3);
    quitaricono(sig1);
    quitaricono(sig2);
    quitaricono(sig4);
    agregaricono(sig3);

    quitariconoAnterior(ant2);
    
    agregariconoAnt(ant3);

})
sig3.addEventListener("click",()=>{
    quitarPrincipal();
    subimgsec3.classList.remove("imgprincipall");
    subimgsec3.classList.add("imagenInvisible");
    agregarSecundariaComoPrin(subimgsec4);
    quitaricono(sig1);
    quitaricono(sig2);
    quitaricono(sig3);
    agregaricono(sig4);
    quitariconoAnterior(ant1);
    quitariconoAnterior(ant2);
    quitariconoAnterior(ant3);
    
    agregariconoAnt(ant4);
})
sig4.addEventListener("click",()=>{
    
    quitarsecundarias(subimgsec2);
    subimgsec4.classList.remove("imgprincipall");
    subimgsec4.classList.add("imagenInvisible");
    imagenlightbox.classList.remove("imagenInvisible");
    imagenlightbox.classList.add("imgprincipall");

    quitaricono(sig4);
    
    
    agregaricono(sig1);

    quitariconoAnterior(ant4);
    
    agregariconoAnt(ant1);

})

//funciones
function agregarSecundariaComoPrin(idRecibido){
    idRecibido.classList.remove("imagenInvisible");
    idRecibido.classList.add("imgprincipall");
}

function quitaricono(idsec){
    idsec.classList.remove("siguienteVisible");
    idsec.classList.add("imagenInvisible");
}
function quitariconoAnterior(iconAnt){
    iconAnt.classList.remove("anteiorVisible");
    iconAnt.classList.add("imagenInvisible");
}
function agregaricono(iconAgre){
    iconAgre.classList.remove("imagenInvisible");
    iconAgre.classList.add("siguienteVisible");
}
function agregariconoAnt(iconAntA){
    iconAntA.classList.remove("imagenInvisible");
    iconAntA.classList.add("anteriorVisible");
}


function quitarsecundarias(nombreid){
    nombreid.classList.remove("imgprincipall");
    nombreid.classList.add("imagenInvisible");
   
}

function quitarPrincipal(){
    imagenlightbox.classList.remove("imgprincipall");
    imagenlightbox.classList.add("imagenInvisible");
   
}