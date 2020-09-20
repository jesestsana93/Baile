$(function () {
    /*-----------------------------------------------------------
        1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------------*/

    /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Al hacer click en un enlace del menú principal */
    $('#menu-navegacion .navbar-nav a').click(function () {
        /* 1) Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /*2) Contraemos el menu */
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });


    //Menu fijo
    /*var windowHeight = $(window).height(); //altura de la ventana
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function () {
        var scroll = $(window).scrollTop(); //nos ayuda a detectar el scrolling!!!
        if (scroll > windowHeight) {
            $('.barra').addClass('fixed');
            $('body').css({
                'margin-top': barraAltura + 'px'
            });
            //console.log("Ya rebasaste la altura de la pantalla");
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({
                'margin-top': '0px'
            });
            //console.log("aun no");

        }
    });*/

    /*-----------------------------------------------------------
    3. INICIANDO "page-scroll-to-id"
    -------------------------------------------------------------*/
    $('#menu-principal a').mPageScroll2id({
        offset: 100,
        highlightClass: 'active'
    });
});