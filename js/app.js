$(document).ready(function() {
  console.log("ssss");
  //  #region Sticky menu start 
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
  //  #endregion Sticky menu start

  /*------  slider trending active start ------*/
  // var slider = $("#lightSlider").lightSlider();
  //   slider.goToSlide(3);
  //   slider.goToPrevSlide();
  //   slider.goToNextSlide();
  //   slider.getCurrentSlideCount(4);
  //   slider.refresh();
  //   slider.play();
  //   slider.pause();


  /*------  slider active end ------*/

 // #region section tabs new sale trending ------
  $(".js-tabs-link").aniTabs({
    animation: "slide",

    slideDirection: "left",
    animationSpeed: 1000,
    autoHeight: false
  });
  /*------  trending product  ------*/
  $("#lightSlider").lightSlider({
    item: 3,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,

    addClass: "",
    mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear", //'for jquery animation',////

    speed: 400, //ms'
    auto: false,
    loop: false,
    slideEndAnimation: true,
    pause: 2000,

    keyPress: false,
    controls: true,
    prevHtml: "<",
    nextHtml: ">",

    rtl: false,
    adaptiveHeight: false,

    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,

    thumbItem: 10,
    pager: true,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: "middle",

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [],

    onBeforeStart: function(el) {},
    onSliderLoad: function(el) {},
    onBeforeSlide: function(el) {},
    onAfterSlide: function(el) {},
    onBeforeNextSlide: function(el) {},
    onBeforePrevSlide: function(el) {}
  });
  /*------  trending product  ------*/

  /*------  news product  ------*/
  $("#lightSlider2").lightSlider({
    item: 3,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,

    addClass: "",
    mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear", //'for jquery animation',////

    speed: 400, //ms'
    auto: false,
    loop: false,
    slideEndAnimation: true,
    pause: 2000,

    keyPress: false,
    controls: true,
    prevHtml: "<",
    nextHtml: ">",

    rtl: false,
    adaptiveHeight: false,

    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,

    thumbItem: 10,
    pager: true,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: "middle",

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [],

    onBeforeStart: function(el) {},
    onSliderLoad: function(el) {},
    onBeforeSlide: function(el) {},
    onAfterSlide: function(el) {},
    onBeforeNextSlide: function(el) {},
    onBeforePrevSlide: function(el) {}
  });
  /*------  news product  ------*/

  /*------  sale product  ------*/
  $("#lightSlider3").lightSlider({
    item: 3,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,

    addClass: "",
    mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear", //'for jquery animation',////

    speed: 400, //ms'
    auto: false,
    loop: false,
    slideEndAnimation: true,
    pause: 2000,

    keyPress: false,
    controls: true,
    prevHtml: "<",
    nextHtml: ">",

    rtl: false,
    adaptiveHeight: false,

    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,

    thumbItem: 10,
    pager: true,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: "middle",

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [],

    onBeforeStart: function(el) {},
    onSliderLoad: function(el) {},
    onBeforeSlide: function(el) {},
    onAfterSlide: function(el) {},
    onBeforeNextSlide: function(el) {},
    onBeforePrevSlide: function(el) {}
  });
  /*------  sale product  ------*/
 // #endregion section tabs new sale trending ------
  

 // #region quick view modal slider 
    $('#vertical').lightSlider({
      gallery:true,
      item:1,
      vertical:true,
      verticalHeight:295,
      vThumbWidth:50,
      thumbItem:8,
      thumbMargin:4,
      slideMargin:0
    }); 
  // #endregion quick view modal slider ------*/
  
//#region Compare modal

//#endregion
  











  /*--------- quantity change js start ---------*/
//   $('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
//   $('.pro-qty').append('<span class="inc qtybtn">+</span>');
//   $('.qtybtn').on('click', function () {
//       var $button = $(this);
//       var oldValue = $button.parent().find('input').val();
//       if ($button.hasClass('inc')) {
//           var newVal = parseFloat(oldValue) + 1;
//       } else {
//           // Don't allow decrementing below zero
//           if (oldValue > 0) {
//               var newVal = parseFloat(oldValue) - 1;
//           } else {
//               newVal = 0;
//           }
//       }
//       $button.parent().find('input').val(newVal);
// });
/*--------- quantity change js end ---------*/
	// /*------- Countdown Activation start -------*/
	// $('[data-countdown]').each(function () {
	// 	var $this = $(this),
	// 		finalDate = $(this).data('countdown');
	// 	$this.countdown(finalDate, function (event) {
	// 		$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Mins</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Secs</span></div>'));
	// 	});
	// });
  // /*------- Countdown Activation end -------*/
  
});
