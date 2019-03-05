$(function () {
	"use strict"
	
	var html_body = $('html, body');
	
	// animation scroll js
	$('#banner a,.navbar a').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 0
				}, 1500);
				return false;
			}
		}
	});



	//	preloader js
	$(".fakeloader").fakeLoader({

		// Time in milliseconds for fakeLoader disappear
		timeToHide: 1000,

		// 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
		spinner: "spinner6", //Options: 

		// Background color. Hex, RGB or RGBA colors
		bgColor: "#c0392b",


	});

	//	wow js
	new WOW().init();

	//	mixitup js
	var mixer = mixitup('.mixclass');


	//	counter js
	$('.counter').counterUp({
		delay: 10,
		time: 1000,
	});


	//	venuobox js
	$(document).ready(function () {
		$('.venobox').venobox();
	});

	
	
	
	
	$('body').scrollspy({
		target: '#navigation'
	})

	$(window).on('scroll', function () {
		var p = $(window).scrollTop();
		if (p > 100) {
			$('.navbar').addClass('fixed_menu')
		} else {
			$('.navbar').removeClass('fixed_menu')
		}
		var ab = $("#progress").offset().top;
		if (p > ab) {
			var delay = 500;
			$(".progress-bar").each(function (i) {
				$(this).delay(delay * i).animate({
					width: $(this).attr('aria-valuenow') + '%'
				}, delay);

				$(this).prop('Counter', 0).animate({
					Counter: $(this).text()
				}, {
					duration: delay,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now) + '%');
					}
				});
			});
		}
	});



	$(".element").each(function () {
		var $this = $(this);
		$this.typed({
			strings: $this.attr('data-elements').split(','),
			typeSpeed: 100,
			backDelay: 3000
		});
	});
	$('.testimonial_content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		dots: false,
		arrows: true,
		prevArrow: ".slidPrv3",
		nextArrow: ".slidNext3",
		fade: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
    },
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

				}
    }
  ]

	});

	jQuery("#bgndVideo").YTPlayer({
		showControls: false,

	});

});