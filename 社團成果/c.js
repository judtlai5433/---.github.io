jQuery(document).ready(function($) {
	
	$('.actions a').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop:  $('#header1').offset().top
		},
			1000);
	});

});