// $(window).load is fired after all content (including images) have been loaded
$(window).load(function() {
	// Home screen animation, fades in background + name + sections
	$('body').addClass('fadeIn');
	setTimeout(function() {
		$('#welcome').addClass('slide-down-animation');
		setTimeout(function() {
			$('#brown').addClass('fade-in-animation');
			setTimeout(function() {
				// $.firefly();
			}, 1000);
		}, 1000);
	}, 1000);

	// // Change the text
	// var date = new Date();
	// var localHour = date.getHours();
	// if(localHour >= 0 && localHour <= 5) {
	// 	$('#intro-header').text('Bonne Nuit!');
	// } else if(localHour >= 6 && localHour <= 10) {
	// 	$('#intro-header').text('Bon Matin!');
	// } else if(localHour >= 19 && localHour <= 23) {
	// 	$('#intro-header').text('Bonsoir!');
	// } 

	var seenIntroHeader = false;

	// Fade out section-0 on window scroll
	$(window).on('scroll', function () {
	    var scrollTop = $(window).scrollTop();
	    var height = $('#section-0').height();
	    $('#section-0').css({
	        'opacity': ((height - scrollTop) / height)
	    }); 
	    if(!seenIntroHeader) {
	    	if(isScrolledIntoView('#intro-header')) {
				seenIntroHeader = true;
				// $("#intro-header").addClass('fadeInUp');
		    	// $("#intro-header").typed({
		    	//     strings: ["Hello World"],
		    	//     typeSpeed: 100
		    	// });
	    	}
	    }
	});

	// Returns true if element is scrolled into view
	function isScrolledIntoView(elem) {
	    var $elem = $(elem);
	    var $window = $(window);

	    var docViewTop = $window.scrollTop();
	    var docViewBottom = docViewTop + $window.height();

	    var elemTop = $elem.offset().top;
	    var elemBottom = elemTop + $elem.height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	$('button').on('click', function() {
		$(this).addClass('cbutton--click');
	});
});


// $(window).scroll(function() {
// 	console.log('hello');
//      if($(window).scrollTop() > 0) {
//          // headerOff();
//      } else {
//          // headerOn();
//      }
//  });