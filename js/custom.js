/*-----------------------------------------------------------------------------------*/
/* Our Team */
/*-----------------------------------------------------------------------------------*/

(function($) {
	"use strict";

        
		$('.our-team-wrapper').slick({
			  dots: true,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 640,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});
		
		/*-----------------------------------------------------------------------------------*/
		/* Services  */
		/*-----------------------------------------------------------------------------------*/
		
		
        $('.service-wrapper').slick({
			  dots: true,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  responsive: [
			    {
			      breakpoint: 1050,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 640,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});
		
		/*-----------------------------------------------------------------------------------*/
		/* Testimonials  */
		/*-----------------------------------------------------------------------------------*/
		
		$('.testimonial-wrapper').slick({
			  dots: false,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1
		});
		
		
		/*-----------------------------------------------------------------------------------*/
		/* Banner Slider  */
		/*-----------------------------------------------------------------------------------*/

		$('.banner-slider2').slick({
			  dots: false,
			  infinite: true,
			  speed: 300,
			  autoplay: false,
			  arrows: true,
			  slidesToShow: 1
		});
        
        

       $('.testimonial-logo').slick({
			  dots: false,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 6,
			  slidesToScroll: 6,
			  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});
		
		

		/*-----------------------------------------------------------------------------------*/
		/* Appointment Tab  */
		/*-----------------------------------------------------------------------------------*/

        $('ul.tabs li').on('click',function() {
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
	    });
        
        $('.appointment-inner').on('click',function() {
			var tab_id = $(this).attr('data-tab');

			$('.appointment-inner').removeClass('current');
			$('.tab-content2').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
	    });

	    $('.mobile-ic').on('click',function() {
	    	$('.responsive-menu').slideToggle();
            $('.menu').slideToggle();
	    })


		/*-----------------------------------------------------------------------------------*/
		/* Navigation Scroll */
		/*-----------------------------------------------------------------------------------*/


	  
	  $('.header ul li a').on('click',function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			   if (target.length) {
				 $('html,body').animate({
					 scrollTop: target.offset().top
				}, 1000);
				return false;
				   }
				 }
			   });
        
		 
         
		 
		
       
		/*-----------------------------------------------------------------------------------*/
		/* scroll to top js */
		/*-----------------------------------------------------------------------------------*/

        
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.whatsapp-button').fadeIn();
            } else {
                $('.whatsapp-button').fadeOut();
            }
        });

        $('.whatsapp-button').on('click',function() {
            window.location.href = 'https://wa.me/5531992289737';
        });
        $('.play-btn').on('click',function() {
	    	$('.video-popup').show();
	    })
        
        $('.close-btn').on('click',function() {
	    	$('.video-popup').hide();
	    })
		
		
		/*-----------------------------------------------------------------------------------*/
		/* Animate loader off screen */
		/*-----------------------------------------------------------------------------------*/
		
		
		//$(window).load(function() {
			
			$(".se-pre-con").fadeOut("slow");
			$('#banner-slide-show').smoothSlides({
				effectDuration: 6000,
				effectModifier: 1.4,
				pagination:'false',
				matchImageSize:'false',
				effect: 'crossFade'
			});
		//});	
			
		
		
		/*-----------------------------------------------------------------------------------*/
		/* Statistice counter  */
		/*-----------------------------------------------------------------------------------*/
        
        $('.count').each(function () {
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
        
        $(".fancybox").fancybox({
           openEffect	: 'elastic',
    	   closeEffect	: 'elastic',
            fitToView: true
        });



})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll(".banner-slider-item-img"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          let bgImage = lazyImage.getAttribute("data-bg");
          lazyImage.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`;
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Carrega todas as imagens imediatamente para navegadores que não suportam IntersectionObserver
    lazyImages.forEach(function(lazyImage) {
      let bgImage = lazyImage.getAttribute("data-bg");
      lazyImage.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`;
    });
  }
});
