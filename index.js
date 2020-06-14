let options;
let keyframes;

$(document).ready(function () {
    $('.menu-toggler').on('click', function (){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        $('body').toggleClass('fixed-position');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        $('body').removeClass('fixed-position');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate(keyframes = {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, options = 2000);
    });
    $('#up').on('click', function() {
        $('html, body').animate(keyframes = {
            scrollTop: 0
        }, options = 2000);
    });
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    }); 
});


//Javascript for the light mode -- Not available at this moment

// let body = document.body;
// let toggleBtn = document.querySelector('.toggle-btn')
// let currentTheme = localStorage.getItem('currentTheme');

// if(currentTheme){
//     body.classList.add('light-theme');
// }
// toggleBtn=addEventListener('click', function(){
//     body.classList.toggle('light-theme');

//     if(body.classList.contains('light-theme')){
//         localStorage.setItem('currentTheme', 'themeActive');
//     } else{
//         localStorage.removeItem('currentTheme');
//     }
// })
