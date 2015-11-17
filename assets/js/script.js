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

function removeModal() {
	$('#overlay').remove();
	$('.modal').removeClass('fadeIn');
	$('.modal').addClass('bounceOut');
	setTimeout(function() {
		$('.modal').remove();
	}, 750);
};

$('.close-modal').on('click', function() {
	removeModal();
});

$('#hackroulette').on('click', function() {
	// Load modal via ajax
	$.ajax({
		url: 'assets/modals/hackroulette-modal.html',
		method: 'GET',
		success: function(data) {
			// Add modal to the DOM
			$('body').before(data);
			// Add event listeners
			$('.modal-button-website').on('click', function() {
				window.location.href = 'https://github.com/BlakeBrown/hackroulette';
			});
			$('.close-modal').on('click', function() {
				removeModal();
			});
			$('#overlay').on('click', function() {
				removeModal();
			});
		}, error: function() {
			alert('Something went wrong, please contact Blake.');
		}
	});
});


// $(window).scroll(function() {
// 	console.log("hello");
//      if($(window).scrollTop() > 0) {
//          // headerOff();
//      } else {
//          // headerOn();
//      }
//  });