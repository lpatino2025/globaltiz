// JavaScript Document


	$(window).on('load', function() {
	
		"use strict";

		/*----------------------------------------------------*/
		/*	Preloader
		/*----------------------------------------------------*/
		
		var preloader = $('#loading'),
			loader = preloader.find('#loading-center');
			loader.fadeOut();
			preloader.delay(400).fadeOut('slow');


		/*----------------------------------------------------*/
		/*	Modal Window
		/*----------------------------------------------------*/
			
		setTimeout(function () {
		    $(".modal:not(.auto-off)").modal("show");
		},3600);
				
	});


	$(window).on('scroll', function() {
		
		"use strict";
					
		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/	
		
		var b = $(window).scrollTop();
		
		if( b > 80 ){		
			$(".wsmainfull").addClass("scroll");
		} else {
			$(".wsmainfull").removeClass("scroll");
		}				

	});


	$(document).ready(function() {
			
		"use strict";


		new WOW().init();


		/*----------------------------------------------------*/
		/*	Mobile Menu Toggle
		/*----------------------------------------------------*/

		if ( $(window).outerWidth() < 992 ) {
			$('.wsmenu-list li.nl-simple, .wsmegamenu li, .sub-menu li').on('click', function() {				
				 $('body').removeClass("wsactive");	
				 $('.sub-menu').slideUp('slow');
     			 $('.wsmegamenu').slideUp('slow');	
     			 $('.wsmenu-click').removeClass("ws-activearrow");
        		 $('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
			});
		}

		if ( $(window).outerWidth() < 992 ) {
			$('.wsanimated-arrow').on('click', function() {				
				 $('.sub-menu').slideUp('slow');
     			 $('.wsmegamenu').slideUp('slow');	
     			 $('.wsmenu-click').removeClass("ws-activearrow");
        		 $('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
			});
		}


	    /*----------------------------------------------------*/
		/*	Accordion
		/*----------------------------------------------------*/

		$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
				
		$(".accordion > .accordion-item").on('click', function() {
			$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
			$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
		});


		/*----------------------------------------------------*/
		/*	Tabs
		/*----------------------------------------------------*/

		$('ul.tabs-1 li').on('click', function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs-1 li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		});


		/*----------------------------------------------------*/
		/*	Single Image Lightbox
		/*----------------------------------------------------*/
				
		$('.image-link').magnificPopup({
		  type: 'image'
		});	


		/*----------------------------------------------------*/
		/*	Video Link #1 Lightbox
		/*----------------------------------------------------*/
		
		$('.video-popup1').magnificPopup({
		    type: 'iframe',		  	  
				iframe: {
					patterns: {
						youtube: {			   
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/SZEflIVnhH8'				
								}
							}
						}		  		  
		});


		/*----------------------------------------------------*/
		/*	Video Link #2 Lightbox
		/*----------------------------------------------------*/
		
		$('.video-popup2').magnificPopup({
		    type: 'iframe',		  	  
				iframe: {
					patterns: {
						youtube: {			   
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/7e90gBu4pas'				
								}
							}
						}		  		  
		});


		/*----------------------------------------------------*/
		/*	Video Link #3 Lightbox
		/*----------------------------------------------------*/
		
		$('.video-popup3').magnificPopup({
		    type: 'iframe',		  	  
				iframe: {
					patterns: {
						youtube: {			   
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/0gv7OC9L2s8'					
								}
							}
						}		  		  
		});


		/*----------------------------------------------------*/
		/*	Statistic Counter
		/*----------------------------------------------------*/
	
		$('.count-element').each(function () {
			$(this).appear(function() {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			},{accX: 0, accY: 0});
		});


		/*----------------------------------------------------*/
		/*	Testimonials Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.reviews-1-wrapper');
			owl.owlCarousel({
				items: 3,
				loop:true,
				autoplay:true,
				navBy: 1,
				autoplayTimeout: 4500,
				autoplayHoverPause: true,
				smartSpeed: 1500,
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					768:{
						items:2
					},
					991:{
						items:3
					},
					1000:{
						items:3
					}
				}
		});


		/*----------------------------------------------------*/
		/*	Brands Logo Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.brands-carousel-5');
			owl.owlCarousel({
				items: 5,
				loop:true,
				autoplay:true,
				navBy: 1,
				nav:false,
				autoplayTimeout: 4000,
				autoplayHoverPause: false,
				smartSpeed: 2000,
				responsive:{
					0:{
						items:2
					},
					550:{
						items:3
					},
					767:{
						items:3
					},
					768:{
						items:6
					},
					991:{
						items:6
					},				
					1000:{
						items:5
					}
				}
		});


		/*----------------------------------------------------*/
		/*	Brands Logo Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.brands-carousel-6');
			owl.owlCarousel({
				items: 5,
				loop:true,
				autoplay:true,
				navBy: 1,
				nav:false,
				autoplayTimeout: 4000,
				autoplayHoverPause: false,
				smartSpeed: 2000,
				responsive:{
					0:{
						items:2
					},
					550:{
						items:3
					},
					767:{
						items:3
					},
					768:{
						items:5
					},
					991:{
						items:6
					},				
					1000:{
						items:6
					}
				}
		});


		/*----------------------------------------------------*/
		/*	Show Password
		/*----------------------------------------------------*/

	    var showPass = 0;
	    $('.btn-show-pass').on('click', function(){
	        if(showPass == 0) {
	            $(this).next('input').attr('type','text');
	            $(this).find('span.eye-pass').removeClass('flaticon-visibility');
	            $(this).find('span.eye-pass').addClass('flaticon-invisible');
	            showPass = 1;
	        }
	        else {
	            $(this).next('input').attr('type','password');
	            $(this).find('span.eye-pass').addClass('flaticon-visibility');
	            $(this).find('span.eye-pass').removeClass('flaticon-invisible');
	            showPass = 0;
	        }
	        
	    });



		// Carrusel clientes: scroll con flechas y drag to scroll en escritorio
		(function(){
		  var carrusel = document.querySelector('.clientes-carrusel-zigzag');
		  var btnIzq = document.querySelector('.clientes-flecha-izq');
		  var btnDer = document.querySelector('.clientes-flecha-der');
		  if (!carrusel || !btnIzq || !btnDer) return;

		  function updateFlechas() {
		    // Mostrar flechas solo en escritorio
		    var isDesktop = window.innerWidth >= 992;
		    btnIzq.style.display = btnDer.style.display = isDesktop ? 'flex' : 'none';
		  }
		  window.addEventListener('resize', updateFlechas);
		  updateFlechas();

		  function getScrollAmount() {
		    return Math.max(80, carrusel.offsetWidth * 0.85); // al menos 80px
		  }
		  btnIzq.addEventListener('click', function(e){
		    if (window.innerWidth < 992) return;
		    e.preventDefault();
		    carrusel.scrollLeft -= getScrollAmount();
		  });
		  btnDer.addEventListener('click', function(e){
		    if (window.innerWidth < 992) return;
		    e.preventDefault();
		    carrusel.scrollLeft += getScrollAmount();
		  });

		  // Drag to scroll con mouse (solo escritorio)
		  var isDown = false;
		  var startX, scrollLeft;
		  carrusel.addEventListener('mousedown', function(e) {
		    if (window.innerWidth < 992) return; // solo escritorio
		    isDown = true;
		    carrusel.classList.add('dragging');
		    startX = e.pageX - carrusel.offsetLeft;
		    scrollLeft = carrusel.scrollLeft;
		  });
		  carrusel.addEventListener('mouseleave', function() {
		    isDown = false;
		    carrusel.classList.remove('dragging');
		  });
		  carrusel.addEventListener('mouseup', function() {
		    isDown = false;
		    carrusel.classList.remove('dragging');
		  });
		  carrusel.addEventListener('mousemove', function(e) {
		    if (!isDown || window.innerWidth < 992) return;
		    e.preventDefault();
		    var x = e.pageX - carrusel.offsetLeft;
		    var walk = (x - startX) * 1.2; // sensibilidad
		    carrusel.scrollLeft = scrollLeft - walk;
		  });
		})();
	});
