/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(document).ready(function(){

	// Initialise Skrollr
	if ($(window).width() > 767) {
		skrollr.init({
			render: function(data) {
				//Debugging - Log the current scroll position.
				//console.log(data.curTop);
			}
		});
	};
	$(window).on('resize', function () {
		if ($(window).width() <= 767) {
			skrollr.init().destroy(); // skrollr.init() returns the singleton created above
		} else {
			skrollr.init({
				render: function(data) {
					//Debugging - Log the current scroll position.
					//console.log(data.curTop);
				}
			});
		}
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
		target: '.navbar-fixed-top'
	});

});