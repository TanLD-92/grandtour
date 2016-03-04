var revapi;

jQuery(document).ready(function() {	
	// fullscreen 
	var windowWidth = $('body').width();
	var windowHeight = $('body').height();
	if(windowWidth > 1120) {
		$('.wrapper-fullscreen').height(windowHeight);
		revapi = jQuery('.tp-banner').revolution(
		{
			delay:5000,
			startwidth:1170,
			startheight:600,
			hideThumbs:10,
			fullWidth:"off",
			fullScreen:"on",
			onHoverStop:"off",
			fullScreenOffsetContainer: "",
			navigationType : "none",
			autoHeight: "on",
			fullScreenOffsetContainer: ".category-sevice-fullpage"
		});
	}else {
		revapi = jQuery('.tp-banner').revolution(
		{
			delay:5000,
			startwidth:1170,
			startheight:600,
			hideThumbs:10,
			fullWidth:"off",
			fullScreen:"on",
			onHoverStop:"off",
			navigationType : "none",
			autoHeight: "on"
		});
	}

	
	$('.navbar-header-mobile .dropdown-menu-bt').click(function() {
		$(this).toggleClass("open");
		$('.navbar-header-mobile .nav-mobile-ct').fadeToggle();
	});

	$('#inputdatepickerTo').Zebra_DatePicker({
		direction: true,
		pair: $('#inputdatepickerEnd'),
		format: 'd/m/y'
	});
	 
	$('#inputdatepickerEnd').Zebra_DatePicker({
		direction: 1,
		format: 'd/m/y'
	});

	$('.item-search-header .btn-search-header').click(function() {
		if ($('.item-booking-header').hasClass('dropdown-active')) {
			$('.item-booking-header').removeClass('dropdown-active');
			$('.item-booking-header').find('.btn-booking-hd').toggleClass('open');
			$('.item-booking-header').find('.booking-header-content').fadeToggle(300);
		}

		$(this).toggleClass('open');
		$(this).parent().toggleClass('dropdown-active');
		$('.item-search-header .search-header-content').fadeToggle(500);
	});
	
	$('.item-booking-header .btn-booking-hd').click(function() {
		if ($('.item-search-header').hasClass('dropdown-active')) {
			$('.item-search-header').removeClass('dropdown-active');
			$('.item-search-header').find('.btn-search-header').toggleClass('open');
			$('.item-search-header').find('.search-header-content').fadeToggle(300);
		}
		
		$(this).toggleClass('open');
		$(this).parent().toggleClass('dropdown-active');
		$('.item-booking-header .booking-header-content').fadeToggle(500);
	});	
	


	$('.item-booking-header .btn-close').click(function() {
		$('.item-booking-header .btn-booking-hd').toggleClass('open');
		$('.item-booking-header .booking-header-content').fadeToggle(500);
	});
	
	
	function aud_play_pause() {
	  var myAudio = document.getElementById("myAudio");
	  if (myAudio.paused) {
	    myAudio.play();
	  } else {
	    myAudio.pause();
	  }
	}
});	//ready