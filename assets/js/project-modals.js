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
	// Change the image
	var currentImage = $('.modal-thumbnail.opaque');
	var thumbnailId = currentImage.data('thumbnail-id');
	currentImage.removeClass('opaque');
	if(direction == 'right') {	
		if(thumbnailId < $('.modal-thumbnail').length) {
			thumbnailId++;
		} else {
			thumbnailId = 1;
		}
	} else {
		if(thumbnailId > 1) {
			thumbnailId--;
		} else {
			thumbnailId = $('.modal-thumbnail').length;
		}
	}
	// Change the selected control
	$('.modal-thumbnail[data-thumbnail-id="' + thumbnailId + '"]').addClass('opaque');
	$('.modal-image-control').removeClass('modal-image-control-selected');
	$('.modal-image-control[data-modal-control="' + thumbnailId + '"]').addClass('modal-image-control-selected');
};

function addEventListeners() {
	$('.modal-image-control').on('click', function() {
		// Change the image
		var currentImage = $('.modal-thumbnail.opaque');
		var newThumbnailId = $(this).data('modal-control');
		currentImage.removeClass('opaque');
		$('.modal-thumbnail[data-thumbnail-id="' + newThumbnailId + '"]').addClass('opaque');
		// Change the selected control
		$('.modal-image-control').removeClass('modal-image-control-selected');
		$('.modal-image-control[data-modal-control="' + newThumbnailId + '"]').addClass('modal-image-control-selected');
	});
	$('.modal-image-arrow-left').on('click', function() {
		switchModalImage('left');
	});
	$('.modal-image-arrow-right').on('click', function() {
		switchModalImage('right');
	});
	$('.close-modal').on('click', function() {
		removeModal();
	});
	$('#overlay').on('click', function() {
		removeModal();
	});
	// $('.modal-project-award').on({
	//     mouseenter: function () {
	//     	console.log('enter');
	//         //stuff to do on mouse enter
	//     },
	//     mouseleave: function () {
	//     	console.log('leave');
	//         //stuff to do on mouse leave
	//     }
	// });
}

$('#hackroulette').on('click', function() {
	openModal('hackroulette');
});

$('#python-compiler').on('click', function() {
	openModal('python-compiler');
});

$('#noflix').on('click', function() {
	openModal('noflix');
});

$('#infinitefilespace').on('click', function() {
	openModal('filespace');
});

function openModal(identifier) {
	// Load modal via ajax
	$.ajax({
		url: 'assets/modals/' + identifier + '-modal.html',
		method: 'GET',
		success: function(data) {
			// Add modal to the DOM
			$('body').before(data);
			// Add event listeners
			addEventListeners();
		}, error: function() {
			alert('Something went wrong, please contact Blake.');
		}
	});
}