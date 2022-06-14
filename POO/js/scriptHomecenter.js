let navegador=document.getElementById("divNav");

let buscar=document.getElementById("buscar");
let salir=document.getElementById("salir");
let barraBusqueda=document.getElementById("barraBusqueda");
buscar.addEventListener("click",()=>{
    navegador.classList.remove("navVisible");
    navegador.classList.add("navInvisible");
    barraBusqueda.classList.remove("buscadorInvisible");
    barraBusqueda.classList.add("buscadorVisible")
})

salir.addEventListener("click",()=>{
    barraBusqueda.classList.remove("buscadorVisible");
    barraBusqueda.classList.add("buscadorInvisible");
    navegador.classList.remove("navInvisible");
    navegador.classList.add("navVisible");
})