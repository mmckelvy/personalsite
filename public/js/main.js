// (function () {
	
// 	$(function () {
		
// 		/**
// 		* getNavElSpacing
// 		* No params.  Just calculates 
// 		* and the remaining els are evenly distributed inside the container. 	
// 		*/
		
// 		var centerNavEls = function () {

// 			// Get the width of the nav container.
// 			var navListWidth = $('.nav-list').width();

// 			// Get the widths of all the nav items.
// 			var $navItems = $('.nav-list-item');
// 			var navItemWidths = [];

// 			for (var i = 0; i < $navItems.length; i++) {
// 				navItemWidths.push( $($navItems[i]).width() );
// 			}
			
// 			var sumNavItems = navItemWidths.reduce( function (a, b) {
// 				return a + b;
// 			});
// 			// Calculate the horizontal spacing.
// 			var spacing = (navListWidth - sumNavItems + 23.5) / ($navItems.length - 1) + 'px';

// 			// Set the horizontal spacing on the nav els, ex the last el.
// 			$navItemsExLast = $( $navItems.splice(0, $navItems.length - 1) );
// 			$navItemsExLast.css("margin-right", spacing);

// 		};

// 		/***** MAIN ****/
// 		centerNavEls();


// 	}); // End jQuery document ready.

// })(); // End IIFE