$(document).ready(main);
var contador = 0;
function main(){
    $('.menu-bar').click( function(){
        if (contador == 0) {
            $('nav').animate({
                left: '0'
            });
            contador = 1;
        }
        else {
            $('nav').animate({
                left: '-100%'
            });
        }
    });
    $('.submenu').click(function(){
        $(this.items_productos('.items_productos').slidetoggle();)
    })
}