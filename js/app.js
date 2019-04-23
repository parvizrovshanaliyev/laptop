$(document).ready(function() {
  console.log("ssss");
  /*------ Sticky menu start ------*/
  var $window = $(window);
  $window.on("scroll", function() {
    var scroll = $window.scrollTop();
    var nav = $("#nav");
    if (scroll < 300) {
      $(".sticky").removeClass("is-sticky");
    } else {
      $(".sticky").addClass("is-sticky");
    }
    if (scroll < 300 || nav.hasClass("active")) {
      nav.removeClass("active");
    }
  });
  /*------ Sticky menu end ------*/

  // /*----- sticky sidebar start -----*/
  // $('.sticky-sidebar').stickySidebar({
  // 	topSpacing: 120,
  // 	bottomSpacing: 20,
  // 	minWidth: 992,
  // });
  // /*----- sticky sidebar end -----*/

  //mobile mune click

  $(".bars").on("click", function(e) {
    e.preventDefault();
    // alert("salam seni sinsi");
    var nav = $("#nav");
    if (nav.hasClass("active")) {
      nav.removeClass("active");
    } else {
      nav.addClass("active");
    }
  });
});
