console.log("===Longitud de decimales===");
//usar tofixed, sirve para quitar decimales

var promedio= 2.5664;
console.log("El promedio es de: "+ promedio.toFixed(2));
console.log("===Forzando el redondeo con Slice===");

var promediostr= promedio.toString();

console.log(promediostr.slice(0,4)
    )

