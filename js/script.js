// $(window).load is fired after all content (including images) have been loaded
$(window).load(function() {
	// Home screen animation, fades in background + name + sections
	$("#section-0").addClass("fade-in-animation");
	setTimeout(function() {
		$("#welcome").addClass("slide-down-animation");
		setTimeout(function() {
			$("#brown").addClass("fade-in-animation");
		}, 1000);
	}, 1000);
});
// $(window).scroll(function() {
// 	console.log("hello");
//      if($(window).scrollTop() > 0) {
//          // headerOff();
//      } else {
//          // headerOn();
//      }
//  });