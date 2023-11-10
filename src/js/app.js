import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();

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
    items:2,
    dots: false,
})
$('.owl-portfolio').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:3,
    dots: false,
})
