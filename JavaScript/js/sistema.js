var precioAgua= 1000;
var precioGaseosa=2000;
var preciopan=500;
var precioSalchica=200;
console.log("===definiendo el producto mas economico y el mas costoso===");

if(precioAgua>precioGaseosa &&precioAgua>preciopan && precioAgua>precioSalchica){
    console.log("el precio mas alto es el del agua, con un costo de $"+" "+ precioAgua );
}
else if (precioGaseosa>precioAgua && precioGaseosa>preciopan && precioGaseosa>precioSalchica){
    console.log("el precio mas alto es el de la gaseosa, con un costo de $"+" "+ precioGaseosa );
}
else if ( preciopan>precioAgua && preciopan>precioGaseosa && preciopan>precioSalchica){
    console.log("el precio mas alto es el del pan, con un costo de $"+" "+ preciopan );

}
else if (precioSalchica>precioAgua && precioSalchica>precioGaseosa && precioSalchica>preciopan){
    console.log("el precio mas alto es el de las salchichas, con un costo de $"+" "+ precioSalchica );

}
if(precioAgua<precioGaseosa &&precioAgua<preciopan && precioAgua<precioSalchica){
    console.log("el precio mas bajo es el del agua, con un costo de $"+" "+ precioAgua );
}

if(precioGaseosa<precioAgua &&precioGaseosa<preciopan && precioGaseosa<precioSalchica){
    console.log("el precio mas bajo es el de la gaseosa, con un costo de $"+" "+ precioGaseosa );
}




if  ( preciopan<precioAgua && preciopan<precioGaseosa && preciopan<precioSalchica){
    console.log("el precio mas bajo es el del pan, con un costo de $"+" "+ preciopan );
}

if  ( precioSalchica<precioAgua && precioSalchica<precioGaseosa && precioSalchica<preciopan){
    console.log("el precio mas bajo es el de las salchichas, con un costo de $"+" "+ precioSalchica );
}

else{
    console.log(
        "hay una falla en el sistema"
        );
    }


var user_DB ="sebastianboop";
var pass_DB ="12345";
var imputUser_DB ="sebastianboop";
var imputPass_DB ="12345";

console.log("=== sistema de validacion===");

if(user_DB===imputUser_DB && pass_DB===imputPass_DB){
    console.log( "bienvenido al sistema");
}
var garrafonAgua= 20000;
var ArrobaArroz= 30000;
var panelaPorQuinceKilos= 45000;
var aceitePoma= 100000;
var gaseosalitro= 10000;
var compraTotal= (garrafonAgua+ArrobaArroz+panelaPorQuinceKilos+aceitePoma+gaseosalitro);
var descuento1= compraTotal*0.03;
var descuento2= compraTotal*0.05;
var descuento3= compraTotal*0.08;

console.log("===sistema de descuentos para compras===");

console.log("subtotal: $"+ compraTotal);

if(compraTotal>100000 && compraTotal<200000){
    console.log("descuento $:"+ descuento1);
    console.log("total con descuento: $" + (compraTotal-descuento1));
 
}
else if( compraTotal>200000 && compraTotal<300000){
    console.log(" descuento: " + descuento2);
    console.log("total con descuento: $" + (compraTotal-descuento2));
}
else if( compraTotal>300000){
    console.log(" descuento $:" + descuento3);
    console.log("total con descuento: $" + (compraTotal-descuento3));

}
