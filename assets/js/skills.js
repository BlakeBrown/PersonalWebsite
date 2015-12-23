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