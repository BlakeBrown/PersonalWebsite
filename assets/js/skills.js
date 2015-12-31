function openSkill(identifier) {
	// Load skill via ajax
	$.ajax({
		url: 'assets/skills/' + identifier + '.html',
		method: 'GET',
		success: function(data) {
			var jobChevronUp, projectChevronUp;
			if($('#skill-toggle-jobs-list').hasClass('fa-chevron-up')) {
				jobChevronUp = true;
			}
			if($('#skill-toggle-projects-list').hasClass('fa-chevron-up')) {
				projectChevronUp = true;
			}
			$('#skill-details').hide();
			$('#skill-details').html(data);
			if(jobChevronUp) {
				hideList($('#skill-toggle-jobs-list'));
			}
			if(projectChevronUp) {
				hideList($('#skill-toggle-projects-list'));
			}
			$('#skill-details').fadeIn(500);
			// Add event listeners
			addSkillEventListeners();
		}, error: function() {
			alert('Something went wrong, please contact Blake.');
		}
	});
}

$('.skill').on('click', function() {
	$('.skill').removeClass('skill-selected');
	$(this).addClass('skill-selected');
	openSkill($(this).data('skill'));
});

// Adds the event listeners each time a new skill is loaded
function addSkillEventListeners() {
	$('#skill-toggle-jobs-list').on('click', function() {
		toggleChevron($(this));
	});

	$('#skill-toggle-projects-list').on('click', function() {
		toggleChevron($(this));
	});

	$('.skill-details-list').find('span').on('click', function() {
		var action = $(this).data('action')
		var identifier = $(this).data('identifier');
		if(action == 'open-modal') {
			openModal(identifier);
		} else if(action == 'scroll') {
			scrollToEmployer(identifier);
		}
	});
}
addSkillEventListeners();

function toggleChevron($selector) {
	if($selector.hasClass('fa-chevron-down')) {
		$selector.removeClass('fa-chevron-down');
		$selector.addClass('fa-chevron-up');
	} else {
		$selector.removeClass('fa-chevron-up');
		$selector.addClass('fa-chevron-down');
	}
	// Also toggle the chevron's list
	var list = $selector.parent().next(); // not the cleanest jQuery code ---> refactor later
	if(list.is(":visible")) {
		list.slideUp();
	} else {
		list.slideDown();
	}
}

// Hides a list and toggles it's respective chevron
function hideList($selector) {
	$selector.removeClass('fa-chevron-down');
	$selector.addClass('fa-chevron-up');
	$selector.parent().next().hide();
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