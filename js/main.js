$(function () {
	"use strict";
	// animation scroll js
	var html_body = $('html, body');
	$('a').on('click', function () {
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
	$('.rotate_slider').carousel({
		num: 5,
		maxWidth: 570,
		maxHeight: 480,
		distance: 50,
		scale: 0.6,
		animationTime: 1000,
		showTime: 1000,
		autoPlay: true,
	});

	// variable for all selector
	var html_body = $('html, body');
	var $window = $(window);
	var $sOfset = 500;
	var totop = $('.totop');

	// for back to top button
	$('.totop').on('click', function () {
		html_body.animate({
			scrollTop: 0
		}, 500);
	});

	//scrolling function
	$window.on('scroll', function () {

		var $scrolling = $(this).scrollTop();

		if ($scrolling > $sOfset) {
			totop.fadeIn();
		} else {
			totop.fadeOut();
		}
	});
	$(window).on('load', function () {

		// preloader 
		var preloaderID = $('#main-preloader');
		preloaderID.addClass('ani_1');
		setTimeout(function () {

			$('.main-navbar-top').addClass('main-navbar-top-active');
			preloaderID.fadeOut(800);

		}, 1000);
	});

});
