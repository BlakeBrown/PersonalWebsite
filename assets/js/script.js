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

	// Changes the photo in the slideshow
	function changePhoto() {
		var currentPhoto = $('.intro-description-photo.opaque');
		var photoId = currentPhoto.data('photo-id');
		currentPhoto.removeClass('opaque');
		if(photoId == $('.intro-description-photo').length) {	
			photoId = 1;
		} else {
			photoId++;
		}
		$('.intro-description-photo[data-photo-id="' + photoId + '"]').addClass('opaque');	
	}

	setInterval(function() {
		changePhoto();			
	}, 8000);

	$('#slideshow').on('click', function() {
		changePhoto();
	});
});