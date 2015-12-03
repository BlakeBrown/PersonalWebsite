// $(window).load is fired after all content (including images) have been loaded
$(window).load(function() {
	// Home screen animation, fades in background + name + sections
	$('#section-0').addClass('fade-in-animation');
	setTimeout(function() {
		$('#welcome').addClass('slide-down-animation');
		setTimeout(function() {
			$('#brown').addClass('fade-in-animation');
		}, 1000);
	}, 1000);

	// Change the text
	var date = new Date();
	var localHour = date.getHours();
	if(localHour >= 0 && localHour <= 5) {
		$('#intro-header').text('Bonne nuit!');
	} else if(localHour >= 6 && localHour <= 10) {
		$('#intro-header').text('Bon matin!');
	} else if(localHour >= 19 && localHour <= 23) {
		$('#intro-header').text('Bonsoir!');
	} 

});


// $(window).scroll(function() {
// 	console.log('hello');
//      if($(window).scrollTop() > 0) {
//          // headerOff();
//      } else {
//          // headerOn();
//      }
//  });