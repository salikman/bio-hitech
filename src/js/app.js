import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();

///////////////////////////
// Btn nav collapse
$('.header .header__collapse').on('click', function() {
    $('.header').toggleClass('open');
});
$('.header .close').on('click', function() {
    $('.header').removeClass('open');
});

///////////////////////////
// Mobile dropdown
$('.has-dropdown a svg').on('click', function(e) {
    e.preventDefault()
    $(this).parent().toggleClass('open-drop');
});
///////////////////////////
// On Scroll
$(window).on('scroll', function() {
    var wScroll = $(this).scrollTop();

    // Fixed nav
    wScroll > 1 ? $('.header').addClass('fixed-nav') : $('.header').removeClass('fixed-nav');
});

$('.owl-services').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots: false,
})
$('.owl-reviews').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        992:{
            items:2,
            nav:false
        },
    }
})
$('.owl-portfolio').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        476:{
            items:2,
            nav:true
        },
        992:{
            items:3,
            nav:false
        },
    }
})
