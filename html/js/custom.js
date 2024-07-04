$(document).ready(function() {
	//Prevent Page Reload on all # links
	$("body").on("click","a[href='#']", function(e){
		e.preventDefault();
	});
	
	$(window).resize(function() {
		swiperCard();
	});


	// Add new js functions here -----------------------------------------------------------------

});