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

function switchModalImage(direction) {
	var thumbnailName = $('.modal-thumbnail').attr('id');
	var thumbnailId = $('.modal-thumbnail').data('thumbnail-id');
	var thumbnailListSize = $('.modal-thumbnail').data('thumbnail-list-size');
	$('.modal-thumbnail').removeClass(thumbnailName + '-' + thumbnailId);
	if(direction == 'right') {	
		if(thumbnailId < thumbnailListSize) {
			thumbnailId++;
		} else {
			thumbnailId = 1;
		}
	} else {
		if(thumbnailId > 1) {
			thumbnailId--;
		} else {
			thumbnailId = thumbnailListSize;
		}
	}
	$('.modal-thumbnail').addClass(thumbnailName + '-' + thumbnailId);
	$('.modal-image-control').removeClass('modal-image-control-selected');
	$('.modal-image-control[data-modal-control="' + thumbnailId + '"]').addClass('modal-image-control-selected');
	$('.modal-thumbnail').data('thumbnail-id', thumbnailId);
};

$('.modal-image-control').on('click', function() {
	var thumbnailName = $('.modal-thumbnail').attr('id');
	var thumbnailId = $('.modal-thumbnail').data('thumbnail-id');
	var newThumbnailId = $(this).data('modal-control');
	$('.modal-thumbnail').removeClass(thumbnailName + '-' + thumbnailId);
	$('.modal-thumbnail').addClass(thumbnailName + '-' + newThumbnailId);
	$('.modal-image-control').removeClass('modal-image-control-selected');
	$('.modal-image-control[data-modal-control="' + newThumbnailId + '"]').addClass('modal-image-control-selected');
	$('.modal-thumbnail').data('thumbnail-id', newThumbnailId);
});

$('.modal-image-arrow-left').on('click', function() {
	switchModalImage('left');
});

$('.modal-image-arrow-right').on('click', function() {
	switchModalImage('right');
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
// 	console.log('hello');
//      if($(window).scrollTop() > 0) {
//          // headerOff();
//      } else {
//          // headerOn();
//      }
//  });