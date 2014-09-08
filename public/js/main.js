(function () {
	
	$(function () {
		
		/**
		* EVENTS
		**/

		$('.nav-list').on('click', 'a', function (e) {
			// Change color of nav links.
			$('.nav-item-link').removeClass('nav-item-active');
			$(this).addClass('nav-item-active');
			
			// Show appropriate content.
			var selectedSection = $(this).attr('data-section');
			showContent(selectedSection);

		});


		/**
		* UI FUNCTIONS
		**/
		
		/*
		* function: showContent
		* description: shows the appropriate content block based on the clicked navigation link. 
		* @param: section.  This is the name of the section the user selected.  Passed in from event handler. 
		*/

		function showContent (section) {
			// Revert opacity and height settings.
			$('.content-block').css({
				'height': 0
			});

			$('.content-text').css({
				'opacity': 0
			});
			
			// Select appropriate elements.
			var $contentEl = $('.' + section);
			var $contentText = $contentEl.find('.content-text');

			// Height processing.
			var currentHeight = $contentEl.height(); // Get initial height.
			
			$contentEl.css('height', 'auto'); // Set the height to auto to measure auto height dimensions.
			var autoHeight = $contentEl.height(); // Measure the auto setting height.

			$contentEl.height(currentHeight); // Restore height back to current height (0).
			
			// Animate the height and opacity.
			$contentEl.animate({height: autoHeight}, 1000, function() {
				$contentText.animate({opacity: 1}, 1000);
			});
			
		};


	}); // End jQuery document ready.

})(); // End IIFE