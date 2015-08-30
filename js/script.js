// $(document).mousemove(function(e){
//     $("#loader_circle").css({left:e.pageX, top:e.pageY});
// });

$(window).load(function() {
		// Animate loader off screen
		//$("#loader").fadeTo(3000, 0);
			
				$("#loader").addClass("fade_out_animation");
				$("#section_0").addClass("fade_in_animation");
				setTimeout(function() {
					$("#welcome").addClass("fade_in_animation");
				}, 1000);
			
		// $("#loader").fadeTo("slow", 0, function() {
		// 	$("#main_content").show();
		// 	$("#main_content").fadeTo(0, 1);
		// });
	});
// $(window).scroll(function() {
// 	console.log("hello");
//      if($(window).scrollTop() > 0) {
//          // headerOff();
//      } else {
//          // headerOn();
//      }
//  });