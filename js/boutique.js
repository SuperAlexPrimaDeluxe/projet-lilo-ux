    //Attempt to get the element using document.getElementById
    var badges = document.getElementById("bannertxt");
    console.log(badges.textContent);

    if (badges.textContent.includes('BADGES')) {
      alert("OK");
      document.getElementById("clicbold1").style.borderRight = "2px solid #7A7A7A";
      document.getElementById("clicbold1").style.borderBottom = "2px solid #7A7A7A";
      document.getElementById("clicbold1").style.borderTop = "1px solid #7A7A7A";
      document.getElementById("clicbold1").style.borderLeft = "1px solid #7A7A7A";
      document.getElementById("clicbold1").style.fontSize = "18px";
      document.getElementById("clicbold1").style.fontWeight = "bold";
      document.getElementById("v1").style.display = "block";
      // document.getElementById("clicbold1").style.backgroundColor = "#FF4079";
      // document.getElementById("cbild+1").style.color = "white";
    } else {
      alert("FUCKO");
    }



    /* CHANGEMENT AU CLIC POUR LE FILTRE NOUVEAUTE */

    var nouveaufiltre = document.getElementById("clicbold4");
    nouveaufiltre.style.backgroundColor = "white";
    var x = nouveaufiltre.style.backgroundColor;
    console.log(x);

    var dbg = document.getElementById("dbg1");

    nouveaufiltre.onclick = function () {
      if (nouveaufiltre.style.backgroundColor === "white") {
        nouveaufiltre.style.borderRight = "2px solid #3EA995";
        nouveaufiltre.style.borderBottom = "2px solid #3EA995";
        nouveaufiltre.style.borderTop = "1px solid #3EA995";
        nouveaufiltre.style.borderLeft = "1px solid #3EA995";
        nouveaufiltre.style.backgroundColor = "transparent";
        dbg.style.color = "#3EA995";
        dbg.style.fontSize = "18px";
        nouveaufiltre.style.fontWeight = "bold";
        document.getElementById("v4").style.display = "block";
        document.getElementById("v4").style.filter = "invert(55%) sepia(80%) saturate(298%) hue-rotate(119deg) brightness(89%) contrast(90%)";
      } else {
        nouveaufiltre.style.backgroundColor = "white";
        dbg.style.color = "#3EA995";
        document.getElementById("v4").style.display = "none";
        nouveaufiltre.style.fontWeight = "normal";
        nouveaufiltre.style.borderRight = "1px solid #3EA995";
        nouveaufiltre.style.borderBottom = "1px solid #3EA995";
        nouveaufiltre.style.borderTop = "1px solid #3EA995";
        nouveaufiltre.style.borderLeft = "1px solid #3EA995";
        dbg.style.fontSize = "14px";
      }
    };

    /* CHANGEMENT AU CLIC POUR LE FILTRE FAVORIS */

    var nouveaufavoris = document.getElementById("clicbold5");
    nouveaufavoris.style.backgroundColor = "white";
    var x = nouveaufavoris.style.backgroundColor;
    console.log(x);

    var dbg2 = document.getElementById("dbg2");

    nouveaufavoris.onclick = function () {
      if (nouveaufavoris.style.backgroundColor === "white") {
        nouveaufavoris.style.borderRight = "2px solid #E28AA4";
        nouveaufavoris.style.borderBottom = "2px solid #E28AA4";
        nouveaufavoris.style.borderTop = "1px solid #E28AA4";
        nouveaufavoris.style.borderLeft = "1px solid #E28AA4";
        nouveaufavoris.style.backgroundColor = "transparent";
        dbg2.style.color = "#E28AA4";
        dbg2.style.fontSize = "18px";
        nouveaufavoris.style.fontWeight = "bold";
        document.getElementById("v5").style.display = "block";
        document.getElementById("v5").style.filter = "invert(65%) sepia(35%) saturate(444%) hue-rotate(292deg) brightness(90%) contrast(96%)";
      } else {
        nouveaufavoris.style.backgroundColor = "white";
        dbg2.style.color = "#E28AA4";
        document.getElementById("v5").style.display = "none";
        nouveaufavoris.style.fontWeight = "normal";
        nouveaufavoris.style.borderRight = "1px solid #E28AA4";
        nouveaufavoris.style.borderBottom = "1px solid #E28AA4";
        nouveaufavoris.style.borderTop = "1px solid #E28AA4";
        nouveaufavoris.style.borderLeft = "1px solid #E28AA4";
        dbg2.style.fontSize = "14px";
      }
    };

      /* CHANGEMENT AU CLIC POUR LE FILTRE PETITS PRIX */

      var nouveauprix = document.getElementById("clicbold6");
      nouveauprix.style.backgroundColor = "white";
      var x = nouveauprix.style.backgroundColor;
      console.log(x);
  
      var dbg3 = document.getElementById("dbg3");
  
      nouveauprix.onclick = function () {
        if (nouveauprix.style.backgroundColor === "white") {
          nouveauprix.style.borderRight = "2px solid #FF3D00";
          nouveauprix.style.borderBottom = "2px solid #FF3D00";
          nouveauprix.style.borderTop = "1px solid #FF3D00";
          nouveauprix.style.borderLeft = "1px solid #FF3D00";
          nouveauprix.style.backgroundColor = "transparent";
          dbg3.style.color = "#FF3D00";
          dbg3.style.fontSize = "18px";
          nouveauprix.style.fontWeight = "bold";
          document.getElementById("v6").style.display = "block";
          document.getElementById("v6").style.filter = "invert(30%) sepia(38%) saturate(6105%) hue-rotate(3deg) brightness(103%) contrast(107%)";
        } else {
          nouveauprix.style.backgroundColor = "white";
          dbg3.style.color = "#FF3D00";
          document.getElementById("v6").style.display = "none";
          nouveauprix.style.fontWeight = "normal";
          nouveauprix.style.borderRight = "1px solid #FF3D00";
          nouveauprix.style.borderBottom = "1px solid #FF3D00";
          nouveauprix.style.borderTop = "1px solid #FF3D00";
          nouveauprix.style.borderLeft = "1px solid #FF3D00";
          dbg3.style.fontSize = "14px";
        }
      };
  









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