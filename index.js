document.addEventListener('DOMContentLoaded', function () {

    if ( $('.main-carousel').length ) {
        var flkty = new Flickity('.main-carousel');
        var objs  = document.querySelectorAll('.obj-group .obj');

        objs.forEach(function(obj) {
            obj.addEventListener( 'click', function( event ) {
                // filter for obj clicks
                if ( !matchesSelector( event.target, '.obj-group .obj' ) ) {
                    return;
                }
                console.log('b');

                document.querySelector('.main-carousel').style.zIndex = 999999;
                document.querySelector('.main-carousel').style.opacity = 1;
                var selector = event.target.getAttribute('data-selector');
                flkty.selectCell( selector );
            });
        });

        var close_buttons = document.querySelectorAll('.carousel-cell .close');
        close_buttons.forEach(function(close_button) {
            close_button.addEventListener( 'click', function( event ) {
                document.querySelector('.main-carousel').style.zIndex = 0;
                document.querySelector('.main-carousel').style.opacity = 0;
            });
        });
    }

    // if ( $('.main-carousel').length ) {
    //     var flkty = new Flickity('.main-carousel');
    //     var objs  = document.querySelectorAll('.obj');

    //     objs.forEach(function(obj) {
    //         obj.addEventListener( 'click', function( event ) {
    //             // filter for obj clicks
    //             console.log('a');
    //             if ( !matchesSelector( event.target, '.obj' ) ) {
    //                 return;
    //             }
    //             console.log('b');

    //             //document.querySelector('.main-carousel').style.display = 'flex';
    //             document.querySelector('.main-carousel').style.zIndex = 999999;
    //             document.querySelector('.main-carousel').style.opacity = 1;
    //             //resizeCarousel();
    //             var selector = event.target.getAttribute('data-selector');
    //             flkty.selectCell( selector );
    //         });
    //     });

    //     var close_buttons = document.querySelectorAll('.carousel-cell .close');
    //     close_buttons.forEach(function(close_button) {
    //         close_button.addEventListener( 'click', function( event ) {
    //             //document.querySelector('.main-carousel').style.display = 'none';
    //             document.querySelector('.main-carousel').style.zIndex = 0;
    //             document.querySelector('.main-carousel').style.opacity = 0;
    //         });
    //     });
    // }
});