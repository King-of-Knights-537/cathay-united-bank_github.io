// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa-solid fa-arrow-left'></i>",
	    "<i class='fa-solid fa-arrow-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});