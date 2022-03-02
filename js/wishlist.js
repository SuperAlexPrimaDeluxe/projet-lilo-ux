$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
 //    autoplay: true,
 //    autoplayTimeout: 2000,
 //    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      768:{
        items:2,
        nav: false
      },
      1000:{
        items:4,
        nav: false
      }
    }
  });
  