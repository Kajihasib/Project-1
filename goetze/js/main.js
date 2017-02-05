$(document).ready(function(){

    $(".click-2").on('click',function(){
    $(".toggle-2").slideToggle();
});
$( '.click-1' ).on('click', function() {
		$( '.toggle-1' ).slideToggle(900);
	});
$( '.click-3' ).on('click', function() {
		$( '.toggle-3' ).slideToggle(900);
	});
	
	/* TOP Menu Stick  */
		$(window).on('scroll',function() {
		if ($(this).scrollTop() > 1){  
			$('#sticky-header').addClass("sticky");
		  }
		  else{
			$('#sticky-header').removeClass("sticky");
		  }
		});
	
	// slider-active  ///
	$('.slider-active').nivoSlider({ 
    effect: 'boxRainGrowReverse',                 // Specify sets like: 'fold,fade,sliceDown' 
    slices: 15,                       // For slice animations 
    boxCols: 8,                       // For box animations 
    boxRows: 4,                       // For box animations 
    animSpeed: 1000,                   // Slide transition speed 
    pauseTime: 3000,                  // How long each slide will show 
    startSlide: 0,                    // Set starting Slide (0 index) 
    directionNav: true,               // Next & Prev navigation 
    controlNav: false,                 // 1,2,3... navigation 
    controlNavThumbs: false,          // Use thumbnails for Control Nav 
    pauseOnHover: true,               // Stop animation while hovering 
    manualAdvance: false,             // Force manual transitions 
    prevText: '<i class="fa fa-chevron-left"></i>',                 // Prev directionNav text 
    nextText: '<i class="fa fa-chevron-right"></i>',                 // Next directionNav text 
    randomStart: false,               // Start on a random slide 
    beforeChange: function(){},       // Triggers before a slide transition 
    afterChange: function(){},        // Triggers after a slide transition 
    slideshowEnd: function(){},       // Triggers after all slides have been shown 
    lastSlide: function(){},          // Triggers when last slide is shown 
    afterLoad: function(){}           // Triggers when slider has loaded 
});
	// wow js ///
	new WOW().init();
	
	// product-actove ///
	$('.product-active').owlCarousel({
	loop:true,
	smartSpeed:1000,
	nav:true,
	navText:['<i class="fa fa-chevron-right"></i>','<i class="fa fa-chevron-left"></i>'],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:4
		}
}
})
// deal-active ///
	$('.deal-active').owlCarousel({
	loop:true,
	smartSpeed:1000,
	nav:false,
	navText:['<i class="fa fa-chevron-right"></i>','<i class="fa fa-chevron-left"></i>'],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:2
		}
}
})
// cat-active ///
	$('.cat-active').owlCarousel({
	loop:true,
	smartSpeed:1000,
	nav:false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
}
})
// testimonial-active ///
	$('.testimonial-active').owlCarousel({
	loop:true,
	smartSpeed:1000,
	nav:false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
}
})
//barnd-active ///
	$('.barnd-active').owlCarousel({
	loop:true,
	smartSpeed:1000,
	nav:false,
	responsive:{
		0:{
			items:2
		},
		600:{
			items:4
		},
		1000:{
			items:6
		}
}
})
//blog-active ///
	$('.blog-active').owlCarousel({
	loop:true,
	smartSpeed:1000,
	nav:false,
	responsive:{
		0:{
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
	
	/*---------------------
 countdown
--------------------- */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	  });
	});
	// parallax ///
	$('.bg').parallax("50%", .3);
	// megnify popup////
	$('.blog-img').magnificPopup({
	type: 'image',
	gallery:{
	enabled:true
	}
	});
	
	$.scrollUp({
		scrollText: '<i class="fa fa-arrow-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
		});
	// one page nav ///
	$('#nav').onePageNav();
	// mobail menu ///
	$('#mobail-menu-active').meanmenu();
	
});