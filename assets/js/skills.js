$('.skill').on('click', function() {
	$('.skill').removeClass('skill-selected');
	$(this).addClass('skill-selected');
});

$('#skill-toggle-jobs-list').on('click', function() {
	toggleChevron($(this));
});

$('#skill-toggle-projects-list').on('click', function() {
	toggleChevron($(this));
});

function toggleChevron($selector) {
	if($selector.hasClass('fa-chevron-down')) {
		$selector.removeClass('fa-chevron-down');
		$selector.addClass('fa-chevron-up');
	} else {
		$selector.removeClass('fa-chevron-up');
		$selector.addClass('fa-chevron-down');
	}
	// Also toggle the following list
	var list = $selector.parent().next(); // not the cleanest jQuery code, may want to refactor later
	if(list.is(":visible")) {
		list.slideUp();
	} else {
		list.slideDown();
	}
}

// Scrolls to a certain employer and adds an animation to identify them
function scrollToEmployer(identifier) {
	$('.workplace').removeClass('shake');
	// If there's enough room scroll to the element, else scroll to the bottom of the page
	var scrollValue;
	if($('#' + identifier).offset().top + $(window).height() < $(document).height()) {
		scrollValue = $('#' + identifier).offset().top - 100;
	} else {
		scrollValue = $(document).height() - $(window).height();
	}
	$('html, body').animate({
	    scrollTop: scrollValue
	}, 2000);
	setTimeout(function() {
		$('#' + identifier).addClass('shake');
	}, 2500);
}

$('.skill-details-list').find('li').on('click', function() {
	var action = $(this).data('action')
	var identifier = $(this).data('identifier');
	if(action == 'open-modal') {
		openModal(identifier);
	} else if(action == 'scroll') {
		scrollToEmployer(identifier);
	}
});
