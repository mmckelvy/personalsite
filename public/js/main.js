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
			// Need something to clear out all previous content.
			
			var selector = '.' + section;

			
			
		};
		// Going to need the correct data attribute (which means I will need the clicked element).


	}); // End jQuery document ready.

})(); // End IIFE