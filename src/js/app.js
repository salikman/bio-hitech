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

document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо посилання на всі набори вкладок
    const tabSets = document.querySelectorAll(".tabs");

    // Функція, яка встановлює активний таб для конкретного набору
    function setActiveTab(tabSet, index) {
        // Отримуємо посилання на елементи вкладок та вмісту для цього набору
        const tabLinks = tabSet.querySelectorAll(".tab-links li");
        const tabContents = tabSet.querySelectorAll(".tab-content");

        // Знімаємо клас 'active' з усіх табів і вмісту в даному наборі
        tabLinks.forEach((link) => link.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Встановлюємо клас 'active' для вибраного табу і відповідного вмісту
        tabLinks[index].classList.add("active");
        tabContents[index].classList.add("active");
    }

    // Додаємо обробник події для кожного набору вкладок
    tabSets.forEach((tabSet) => {
        const tabLinks = tabSet.querySelectorAll(".tab-links li");

        tabLinks.forEach((link, index) => {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Забороняємо перехід по посиланню
                setActiveTab(tabSet, index); // Встановлюємо активний таб для цього набору
            });
        });

        // Встановлюємо активний таб за замовчуванням для кожного набору (наприклад, перший таб)
        setActiveTab(tabSet, 0);
    });
});
