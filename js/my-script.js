  /* owl carousel settings */
  var owl = $('.owl-carousel');
  owl.owlCarousel({
  	margin: 0,
  	loop: true,
  	autoplay: true,
  	nav: true,
  	autoplayTimeout: 3500,
  	autoplayHoverPause: true,
  	responsive: {
  		0: {
  			items: 1
  		},
  		476: {
  			items: 1
  		},
  		768: {
  			items: 2
  		},
  		1200: {
  			items: 3
  		},
  		1300: {
  			items: 3
  		}
  	}
  });
  window.FontAwesomeConfig = {
  	searchPseudoElements: true
  }




  /* masonyr settings */
  var $grid = $('.grid').masonry({
  	itemSelector: '.grid-item',
  	percentPosition: true,
  	columnWidth: '.grid-sizer'
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress(function () {
  	$grid.masonry();
  });

  /* right menu settings */
  $(document).ready(function () {
  	$('.menu-icon').click(function () {
  		$(".mobil-menu-items").addClass("mobil-menu-items-active");
  		$(".menu-icon").css("display", "none");
  	});
  	$('.mobil-menu-close').click(function () {
  		$(".mobil-menu-items").removeClass("mobil-menu-items-active");
  		$(".menu-icon").css("display", "block");
  	});
  });

  /* shrink settings */
  $(window).scroll(function () {
  	if ($(document).scrollTop() > 100) {
  		$(".menu").addClass("desktop-shrink-nav");
  		$(".mobil-menu").addClass("mobil-shrink-nav");
  	} else {
  		$(".menu").removeClass("desktop-shrink-nav");
  		$(".mobil-menu").removeClass("mobil-shrink-nav");
  	}
  });

  AOS.init({
  	easing: 'ease-in-out-sine'
  });
