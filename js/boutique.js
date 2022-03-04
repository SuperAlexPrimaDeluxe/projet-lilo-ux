    //Attempt to get the element using document.getElementById
    var badges = document.getElementById("bannertxt");
    console.log(badges.textContent);

    if (badges.textContent.includes('BADGES')) {
      alert("OK");
      document.getElementById("clicbold1").style.borderRight = "7px solid #7A7A7A";
      document.getElementById("clicbold1").style.borderBottom = "7px solid #7A7A7A";
      document.getElementById("clicbold1").style.borderTop = "2px solid #7A7A7A";
      document.getElementById("clicbold1").style.borderLeft = "2px solid #7A7A7A";
      document.getElementById("clicbold1").style.fontSize = "18px";
      document.getElementById("clicbold1").style.fontWeight = "bold";
    } else {
      alert("FUCKO");
    }


    var nouveaufiltre = document.getElementById("clicbold4");
    nouveaufiltre.style.backgroundColor = "white";
    var x = nouveaufiltre.style.backgroundColor;
    console.log(x);


    nouveaufiltre.onclick = function () {
      if (nouveaufiltre.style.backgroundColor === "white") {
        nouveaufiltre.style.backgroundColor = "#3EA995";
        document.getElementById("liennouveautebtq").style.color = "white";
        document.getElementById("liennouveautebtq").style.fontWeight = "bold";
        document.getElementById("v4").style.filter = "brightness(0) invert(1)";
        document.getElementById("v4").style.display = "block";
      } else {
        nouveaufiltre.style.backgroundColor = "white";
        document.getElementById("liennouveautebtq").style.color = "#3EA995";
        document.getElementById("v4").style.display = "none";
        document.getElementById("liennouveautebtq").style.fontWeight = "normal";
      }
    };



    //   var favorisfiltre = document.getElementById("clicbold5");

    //     favorisfiltre.onclick = function () {
    //     favorisfiltre.style.backgroundColor = "#E28AA4";
    //     document.getElementById("lienfavoristebtq").style.color = "white";
    //     document.getElementById("lienfavoristebtq").style.fontWeight = "bold";
    //     document.getElementById("v5").style.filter = "brightness(0) invert(1)";
    //     document.getElementById("v5").style.display = "block";
    //   };

    //   var petitprixfiltre = document.getElementById("clicbold6");

    //   petitprixfiltre.onclick = function () {
    //   petitprixfiltre.style.backgroundColor = "#FF3D00";
    //   document.getElementById("lienpetitprixbtq").style.color = "white";
    //   document.getElementById("lienpetitprixbtq").style.fontWeight = "bold";
    //   document.getElementById("v6").style.filter = "brightness(0) invert(1)";
    //   document.getElementById("v6").style.display = "block";
    // };




    // fonction pour le clic sur le bouton like
    function myFunction() {
      var elements = document.getElementsByClassName("fig2");

      for (var i = 0, len = elements.length; i < len; i++) {
        if (elements[i].style.backgroundColor !== "white") {
          elements[i].style.backgroundColor = "white";
        } else {
          elements[i].style.backgroundColor = "transparent";
        }
      }
    };