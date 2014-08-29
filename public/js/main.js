(function () {
	
	$(function () {
		
		/**
		* UI Style functions.
		**/

		$('.nav-list').on('click', 'a', function (e) {
			$('.nav-item-link').removeClass('nav-item-active')
			$(this).addClass('nav-item-active')
		});


	}); // End jQuery document ready.

})(); // End IIFE