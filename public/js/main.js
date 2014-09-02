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
				'opacity': 0,
				'height': 0
			});
			
			var $contentEl = $('.' + section);
			var currentHeight = $contentEl.height(); // Get initial height.
			
			$contentEl.css('height', 'auto'); // Set the height to auto to get auto height.
			var autoHeight = $contentEl.height(); // Get the auto setting height.

			$contentEl.height(currentHeight); // Restore height back to current height (0).
			$contentEl.animate({height: autoHeight, opacity: 1}, 1000); // Animate the height and opacity.
			
		};
		// Going to need the correct data attribute (which means I will need the clicked element).


	}); // End jQuery document ready.

})(); // End IIFE