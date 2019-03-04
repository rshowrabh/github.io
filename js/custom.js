$(function(){
	"use strict"
// animation scroll js
var html_body = $('html, body');
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

  $(".fakeloader").fakeLoader({

// Time in milliseconds for fakeLoader disappear
timeToHide:1000, 

// 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
spinner:"spinner6",//Options: 

// Background color. Hex, RGB or RGBA colors
bgColor:"#c0392b",

            
});
 new WOW().init();
var mixer = mixitup('.mixclass');
$('.counter').counterUp({
    delay: 10,
    time: 1000,
});
 
 $(document).ready(function(){
    $('.venobox').venobox(); 
});

$('body').scrollspy({ target: '#navigation' })

$(window).on('scroll', function () {
    var p = $(window).scrollTop();
    if (p > 100) {
        $('.navbar').addClass('fixed_menu')
    } else {
        $('.navbar').removeClass('fixed_menu')
    }
    var ab = $("#progress").offset().top;
    if(p > ab){
        var delay = 500;
$(".progress-bar").each(function(i){
    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+'%');
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

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


});