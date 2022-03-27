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


// au chargment du Javascript

var marcello = document.getElementById("psty2");
marcello.textContent = "3";

  // Au clic sur la poubelle.
  
  var popol3000 = document.getElementById("poubdeleter");
  popol3000.onclick = function () {
    document.getElementById("hrtocache").style.display = "none";
    document.getElementById("psty2").textContent--;
    document.getElementById("1375").style.display = "none";
  }

