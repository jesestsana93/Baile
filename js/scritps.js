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

    /*-------------------------------------------------------
      2. Iniciando el script Typed.js para las letras de la sección de inicio
    ------------------------------------------------------*/
    var typed = new Typed('.typed', { //^2000:indica el tiempo del texto que lo antecede
        strings: ["en un mismo lugar ^2000"],
        smartBackspace: false, //para que vuelva a escribir todo incluyendo el mas
        loop: true, //para que se vuelva a repetir el efecto
        showCursor: true, //muestra el cursor
        cursorChar: "|", //puede ir cualquier cosa como un icono de font en el cursor
        typeSpeed: 50, //velocidad en la que aparecen los caracteres
        backSpeed: 30, //velocidad con la que se borran los caracteres
        startDelay: 800 //tiempo en el que se inicia la animacion
        /*shuffle: true //los elementos se muestran de manera aleatoria*/
    });

    /*-----------------------------------------------------------
       3. INICIANDO VENOBOX
    -------------------------------------------------------------*/
    $('.venobox-video').venobox({
        autoplay: true,
        bgcolor: 'rgba(255, 255, 255, 0.4)',
        border: '5px',
        closeColor: '#fff',
        overlayColor: 'rgba(12, 60, 22, 0.83)',
        spinner: 'three-bounce'
    });

    /*-----------------------------------------------------------
    4. CONFIGURACION DE SLICK PARA LA PARTE DE ALGUNOS DE NUESTROS CLIENTES
    ------------------------------------------------------------*/
    $('.sociales').slick({
        dots: false,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        responsive: [{
                //Vista lg >=992px
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                //Vista md >=768px
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                //Vista sm >=576px
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });


    /*-----------------------------------------------------------
    5. INICIANDO "page-scroll-to-id"
    -------------------------------------------------------------*/
    $('#menu-principal a').mPageScroll2id({
        offset: 100,
        highlightClass: 'active'
    });

    /*------------------------------------------------------------
    6. INICIANDO WOW.js para las animaciones en la página
    --------------------------------------------------------------*/
    new WOW().init();

});