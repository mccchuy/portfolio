
    // navbar effect on scroll
    window.addEventListener("scroll", function() {
        var nav = document.querySelector("nav");
        nav.classList.toggle('sticky', window.scrollY > 0);
    });

    // responsive nav sidebar menu
    var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener("click", () =>{
        menu.classList.add('active');  
    });

    
    closeBtn.addEventListener("click", () =>{
        menu.classList.remove('active');  
    });

function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
        showImages('.content img');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
        showImages('.content img');
});