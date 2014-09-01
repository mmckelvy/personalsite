(function () {
	
	$(function () {
		
		/**
		* UI Style functions.
		**/

		/* UI changes for nav links. */
		$('.nav-list').on('click', 'a', function (e) {
			
			// Change color of nav links.
			$('.nav-item-link').removeClass('nav-item-active');
			$(this).addClass('nav-item-active');
			
			// Animate the border for the main content.
			$('.content-block').addClass('animated');

		});



	}); // End jQuery document ready.

})(); // End IIFE