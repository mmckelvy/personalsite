(function () {
	
	$(function () {
		
		/**
		* UI Style functions.
		**/

		/* UI changes for nav links. */
		$('.nav-list').on('click', 'a', function (e) {
			
			// Get the appropriate section attribute.
			selectedSection = $(this).attr('data-section');
			// Change color of nav links.
			$('.nav-item-link').removeClass('nav-item-active');
			$(this).addClass('nav-item-active');
			
			// Clear previously shown content.  Show appropriate content.
			$('.content-block').removeClass('animated')
			$('.' + selectedSection).addClass('animated');

		});



	}); // End jQuery document ready.

})(); // End IIFE