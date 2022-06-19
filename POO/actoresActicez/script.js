"use strict"

let gohan = document.getElementById("gohan");

gohan.addEventListener("click",()=>{
gohan.classList.remove("gohan");
gohan.classList.add("gohan-hidden");
gohan2.classList.remove("gohan2");
gohan2.classList.add("gohan2-visble")
})

let gohan2=document.getElementById("gohan2");

gohan2.addEventListener("click",()=>{
    gohan2.classList.remove("gohan2-visble");
    gohan2.classList.add("gohan2");
    gohan.classList.remove("gohan-hidden");
    gohan.classList.add("gohan");
})