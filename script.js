import createcarouselItems from "./jsMod/carousel.js";
//import createTestimonialItems from "./jsMod/testimonial.js";


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 900,
        autoplayTimeout: 900,
        autoplayHoverPause: true
    });
  });

document.getElementById("carousel").innerHTML = createcarouselItems();

$('#slider').owlCarousel ({
  loop:true,
  margin:15,
  nav:false,
  autoplay:true,
  responsive: {
    0: {
      items:1
    },
    600:{
      items:2
    },
    1000:{ 
      items:3
    }
  }
})




/*$(document).ready(function(){
$(".owl-carousel").owlCarousel ({
  loop: true,
  autoplay: true,
  autoplayTimeout:900,
  autoplayHoverPause: true
})
});

document.getElementById("testimonialList").innerHTML = createTestimonialItems();*/

