	
/*scrolling banner*/
(function ($) {
  	"use strict";
	$(document).ready(function(){
	    $('.carousel_se_02_carousel').owlCarousel({
	        items: 4,
	        nav: true,
	        loop :true,
	       
	        mouseDrag: true,
			autoplay: true,
	        responsiveClass: true,
			autoplayTimeout: 1000,
	        autoplayHoverPause: true,
	        navText : ["<i class='icofont-bubble-left'></i>","<i class='icofont-bubble-right'></i>"],
	        responsive: {
	            0:{
	              items: 1
	            },
	            480:{
	              items: 2
	            },
	            767:{
	              items: 3
	            },
	            992:{
	              items: 3
	            },
	            1200:{
	              items: 4
	            }
	        }
	    });
	});  
	$(document).ready(function(){
	    $('.carousel_se_03_carousel').owlCarousel({
	        items: 3,
	        nav: false,
	        dots: false,
	        loop :true,
	       
	        mouseDrag: true,
	        responsiveClass: true,
	        autoplay: true,
	        autoplayTimeout: 2000,
	        autoplayHoverPause: true,
	        responsive: {
	            0:{
	              items: 1
	            },
	            480:{
	              items: 2
	            },
	            767:{
	              items: 3
	            },
	            992:{
	              items: 3
	            }
	        }
	    });
	});  
	$('.counter').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});	
})(jQuery); 
