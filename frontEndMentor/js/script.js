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