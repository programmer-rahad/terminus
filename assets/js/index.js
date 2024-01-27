$(document).ready(function () {
  var dropdownItem = $(".offcanvas-nav > li");
  dropdownItem.click(function () {
    var isActive = $(this).hasClass("active");
    dropdownItem.removeClass("active");
    dropdownItem.not(this).find("ul").slideUp("fast");
    $(this).find("ul").slideToggle("fast");
    if (!isActive) {
      $(this).addClass("active");
    }
  });

  $(".client-logos").owlCarousel({
    loop: true,
    autoplay: true,
    // margin: 10,
    autoplayTimeout: 1600,
    autoplaySpeed: 1600,
    slideTransition: "linear",
    autoplayHoverPause: true,
    dots: false,
    // nav: fals,
    mouseDrag: false,
    // stagePadding: 20,
    // autoWidth:true,
    responsive: {
      0: {
        items: 2,
      }, 
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  // Wow JS
  new WOW().init();

  $(".text-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoWidth: true,
    mouseDrag: false, 
    // margin: 10,
    autoplayTimeout: 8500,
    autoplaySpeed: 8500,
    slideTransition: "linear",
    dots: false,
  });

  $(".featured-project__items").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    // autoplayTimeout: 2500,
    autoplaySpeed: 1600,
    slideTransition: "linear",
    autoplayHoverPause: true,
    margin: 24,
    // dots: false,
    nav: true,
    navText: [
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 16L9.41 14.59L3.83 9L16 9L16 7L3.83 7L9.41 1.41L8 -6.99382e-07L6.99382e-07 8L8 16Z" fill="white"/></svg>',
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white"/></svg>',
    ],
    mouseDrag: !false,
    // stagePadding: 20,
    // autoWidth:true,
    responsive: {
      0: {
        // items: 1,
      },
      384: {
        // items: 2,
      },
      576: {
        // items: 3,
      },
      768: {
        // items: 4,
      },
      992: {
        // items: 5,
      },
      1200: {},
    },
  });

  $(".featured-project__items").on("translate.owl.carousel", function (event) {
    $(".featured-project__items").addClass("done");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".custom-header").addClass("active");
    } else {
      $(".custom-header").removeClass("active");
    }
  });

  $("select").niceSelect();

  var imageElement = $(".intro-image img");
  var imageSources = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  var currentIndex = 0;
  var imageChangeInterval; // Declare imageChangeInterval here

  function changeImage() {
    if (currentIndex < imageSources.length) {
      var src = "assets/images/intro-" + imageSources[currentIndex];
      imageElement.attr("src", src);
      currentIndex++;
    } else {
      // All images have been displayed, hide the parent container
      $(".loading").hide();
      clearInterval(imageChangeInterval); // Stop the interval
    }
  }

  // Initially, set a timeout to start changing the image
  setTimeout(function () {
    changeImage();
    // Set an interval to change the image every 1 second
    imageChangeInterval = setInterval(changeImage, 1000);
  }, 1300);
});

$(".popup-video").magnificPopup({
  type: "iframe",
  // gallery: {
  //     enabled: true
  // }
});
