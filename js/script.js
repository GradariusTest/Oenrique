$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        startPosition: 1,

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});



$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

});



// $(document).ready(function() {
//
//     var owl = $("#owl");
//
//     owl.owlCarousel({
//         navigation : true,
//         singleItem : true,
//         items: 1,
//     });
//
// });

// $(function() {
//     $(".owl-carousel").owlCarousel({items: 1,itemsDesktop : false,
//         itemsDesktopSmall : false,
//         itemsTablet: false,
//         itemsMobile : false});
// });
//

//{items: 1, singleItem: true,
//         itemsDesktop : false,
//         itemsDesktopSmall : false,
//         itemsTablet: false,
//         itemsMobile : false