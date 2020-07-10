// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
			"img/img1.jpg",
			"img/img2.jpg",
			"img/img3.jpg",
			
			"images/code.gif",
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			
	 			], 	{duration: 3200, fade: 1300});
		});
})