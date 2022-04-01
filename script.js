import createcarouselItems from "./jsMod/carousel.js";


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
  });

document.getElementById("carousel").innerHTML = createcarouselItems();

document.getElementById("testimonials").innerHTML = "";