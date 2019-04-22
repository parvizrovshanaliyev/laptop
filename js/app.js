$(document).ready(function(){
    console.log("ssss");
    /*------ Sticky menu start ------*/
	var $window = $(window);
	$window.on('scroll', function () {
		var scroll = $window.scrollTop();
		if (scroll < 300) {
			$(".sticky").removeClass("is-sticky");
		} else {
			$(".sticky").addClass("is-sticky");
		}
	});
    /*------ Sticky menu end ------*/
    
    /*----- sticky sidebar start -----*/
	$('.sticky-sidebar').stickySidebar({
		topSpacing: 120,
		bottomSpacing: 20,
		minWidth: 992,
	}); 
	/*----- sticky sidebar end -----*/
});