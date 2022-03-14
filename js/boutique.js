    // Quand on clique sur le li tous les produits.
    var liclick1 = document.getElementById("clicbold0");
    liclick1.onclick = function () {
      alert("ssssss");
      window.open('/projet-lilo-ux/boutique.html');
    }

    //Quand on clique sur le li Badges.
    var liclick2 = document.getElementById("clicbold1");
    liclick2.onclick = function () {
      alert("ssssss");
      window.open('/projet-lilo-ux/badges.html');
    }

    //Quand on clique sur le li Bijoux.
    var liclick3 = document.getElementById("clicbold2");
    liclick3.onclick = function () {
      alert("ssssss");
      window.open('/projet-lilo-ux/bijoux.html');
    }

    //Quand on clique sur le li Papeterie.
    var liclick4 = document.getElementById("clicbold3");
    liclick4.onclick = function () {
      alert("ssssss");
      window.open('/projet-lilo-ux/papetrie.html');
    }

    //Ensemble des produits
    var touspd = document.getElementById("bannertxt");
    console.log(touspd.textContent);

    if (touspd.textContent.includes('LA BOUTIQUE')) {
      alert("OK");
      document.getElementById("clicbold0").style.borderRight = "1px solid #FF4070";
      document.getElementById("clicbold0").style.borderBottom = "1px solid #FF4070";
      document.getElementById("clicbold0").style.borderTop = "1px solid #FF4070";
      document.getElementById("clicbold0").style.borderLeft = "1px solid #FF4070";
      document.getElementById("clicbold0").style.fontWeight = "bold";
      document.getElementById("cbild+0").style.color = "#FF4070";
      document.getElementById("v0").style.display = "block";
      document.getElementById("v0").style.color = "#FF4070";
    } else {
      console.log("c'est les bijoux");
    }

    //Badges dans la banière
    var badges = document.getElementById("bannertxt");
    console.log(badges.textContent);

    if (badges.textContent.includes('BADGES')) {
      alert("OK");
      document.getElementById("clicbold1").style.borderRight = "1px solid #FF4070";
      document.getElementById("clicbold1").style.borderBottom = "1px solid #FF4070";
      document.getElementById("clicbold1").style.borderTop = "1px solid #FF4070";
      document.getElementById("clicbold1").style.borderLeft = "1px solid #FF4070";
      document.getElementById("clicbold1").style.fontWeight = "bold";
      document.getElementById("cbild+1").style.color = "#FF4070";
      document.getElementById("v1").style.display = "block";
      document.getElementById("v1").style.color = "#FF4070";
    } else {
      console.log("c'est les badges");
    }

    //Bijoux -check de la bonne case au chargement de la page
    var bijoux = document.getElementById("bannertxt");
    console.log(bijoux.textContent);

    if (bijoux.textContent.includes('BIJOUX')) {
      alert("OK");
      document.getElementById("clicbold2").style.borderRight = "1px solid #FF4070";
      document.getElementById("clicbold2").style.borderBottom = "1px solid #FF4070";
      document.getElementById("clicbold2").style.borderTop = "1px solid #FF4070";
      document.getElementById("clicbold2").style.borderLeft = "1px solid #FF4070";
      document.getElementById("clicbold2").style.fontWeight = "bold";
      document.getElementById("cbild+2").style.color = "#FF4070";
      document.getElementById("v2").style.display = "block";
      document.getElementById("v2").style.color = "#FF4070";
    } else {
      console.log("c'est les bijoux");
    }

    //Papetrie
    var papeterie = document.getElementById("bannertxt");
    console.log(papeterie.textContent);
    if (papeterie.textContent.includes('PAPETERIE')) {
      alert("OK");
      document.getElementById("clicbold3").style.borderRight = "1px solid #FF4070";
      document.getElementById("clicbold3").style.borderBottom = "1px solid #FF4070";
      document.getElementById("clicbold3").style.borderTop = "1px solid #FF4070";
      document.getElementById("clicbold3").style.borderLeft = "1px solid #FF4070";
      document.getElementById("clicbold3").style.fontWeight = "bold";
      document.getElementById("cbild+3").style.color = "#FF4070";
      document.getElementById("v3").style.display = "block";
      document.getElementById("v3").style.color = "#FF4070";
    } else {
      console.log("c'est les bijoux");
    }
  

    /*ROSE POUR LE BOUTTON CURRENT */
    var badgesp1 = document.getElementById("pagegetter");

    if (badgesp1.textContent.includes('12 résultats sur 46')) {
      document.getElementById("linktonumero1").style.backgroundColor = "#FF4079";
      document.getElementById("linktonumero1").style.color = "white";
    } else if (badgesp1.textContent.includes('24 résultats sur 46')) {
      document.getElementById("linktonumero2").style.backgroundColor = "#FF4079";
      document.getElementById("linktonumero2").style.color = "white";
    } else if (badgesp1.textContent.includes('36 résultats sur 46')) {
      document.getElementById("linktonumero3").style.backgroundColor = "#FF4079";
      document.getElementById("linktonumero3").style.color = "white";
    } else if (badgesp1.textContent.includes('46 résultats sur 46')) {
      document.getElementById("linktonumero4").style.backgroundColor = "#FF4079";
      document.getElementById("linktonumero4").style.color = "white";
    }

    /* CHANGEMENT AU CLIC POUR LE FILTRE NOUVEAUTE */

    var le1 = document.getElementById("v4");

    var nouveaufiltre = document.getElementById("clicbold4");
    nouveaufiltre.style.backgroundColor = "white";
    var x = nouveaufiltre.style.backgroundColor;
    console.log(x);

    var dbg = document.getElementById("dbg1");

    var nodeList1 = document.querySelectorAll(".new");

    var nodeList2 = document.querySelectorAll(".favoris");
    var nodeList3 = document.querySelectorAll(".petitsprix");

    nouveaufiltre.onclick = function () {
      if (nouveaufiltre.style.backgroundColor === "white") {
        for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].style.display = "block";
        }
        for (let j = 0; j < nodeList2.length; j++) {
          nodeList2[j].style.display = "none";
        }
        for (let k = 0; k < nodeList3.length; k++) {
          nodeList3[k].style.display = "none";
        }
        nouveaufiltre.style.borderRight = "1px solid #FF4070";
        nouveaufiltre.style.borderBottom = "1px solid #FF4070";
        nouveaufiltre.style.borderTop = "1px solid #FF4070";
        nouveaufiltre.style.borderLeft = "1px solid #FF4070";
        nouveaufiltre.style.backgroundColor = "transparent";
        dbg.style.color = "#FF4070";
        // dbg.style.fontSize = "18px";
        nouveaufiltre.style.fontWeight = "bold";
        document.getElementById("v4").style.display = "block";
        document.getElementById("v4").style.color = "#FF4070";
        nouveaufiltre.classList.add("geek");
        le1.style.display = "block";
      } else {
        for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].style.display = "block";
        }
        for (let j = 0; j < nodeList2.length; j++) {
          nodeList2[j].style.display = "block";
        }
        for (let k = 0; k < nodeList3.length; k++) {
          nodeList3[k].style.display = "block";
        }
        nouveaufiltre.style.backgroundColor = "white";
        dbg.style.color = "#7A7A7A";
        document.getElementById("v4").style.display = "none";
        nouveaufiltre.style.fontWeight = "normal";
        nouveaufiltre.style.borderRight = "1px solid #7A7A7A";
        nouveaufiltre.style.borderBottom = "1px solid #7A7A7A";
        nouveaufiltre.style.borderTop = "1px solid #7A7A7A";
        nouveaufiltre.style.borderLeft = "1px solid #7A7A7A";
        dbg.style.fontSize = "14px";
        le1.style.display = "none";
      }
    };



    /* CHANGEMENT AU CLIC POUR LE FILTRE FAVORIS */

    var le2 = document.getElementById("v5");

    var nouveaufavoris = document.getElementById("clicbold5");
    nouveaufavoris.style.backgroundColor = "white";
    var x = nouveaufavoris.style.backgroundColor;
    console.log(x);

    var dbg2 = document.getElementById("dbg2");

    nouveaufavoris.onclick = function () {
      if (nouveaufavoris.style.backgroundColor === "white") {
        for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].style.display = "none";
        }
        for (let j = 0; j < nodeList2.length; j++) {
          nodeList2[j].style.display = "block";
        }
        for (let k = 0; k < nodeList3.length; k++) {
          nodeList3[k].style.display = "none";
        }
        nouveaufavoris.style.borderRight = "1px solid #FF4070";
        nouveaufavoris.style.borderBottom = "1px solid #FF4070";
        nouveaufavoris.style.borderTop = "1px solid #FF4070";
        nouveaufavoris.style.borderLeft = "1px solid #FF4070";
        nouveaufavoris.style.backgroundColor = "transparent";
        dbg2.style.color = "#FF4070";
        // dbg2.style.fontSize = "18px";
        nouveaufavoris.style.fontWeight = "bold";
        document.getElementById("v5").style.display = "block";
        document.getElementById("v5").style.color = "#FF4070";
        nouveaufiltre.classList.add("geek");
      } else {
        for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].style.display = "block";
        }
        for (let j = 0; j < nodeList2.length; j++) {
          nodeList2[j].style.display = "block";
        }
        for (let k = 0; k < nodeList3.length; k++) {
          nodeList3[k].style.display = "block";
        }
        nouveaufavoris.style.backgroundColor = "white";
        dbg2.style.color = "#7A7A7A";
        document.getElementById("v5").style.display = "none";
        nouveaufavoris.style.fontWeight = "normal";
        nouveaufavoris.style.borderRight = "1px solid #7A7A7A";
        nouveaufavoris.style.borderBottom = "1px solid #7A7A7A";
        nouveaufavoris.style.borderTop = "1px solid #7A7A7A";
        nouveaufavoris.style.borderLeft = "1px solid #7A7A7A";
        dbg2.style.fontSize = "14px";
        le2.style.display = "none";
      }


      /* Conditions d'affichage lors du clic sur le le boutton 2 */

      // /* Quand je clique sur NOUVEAUTES & FAVORIS il affiche le contenu des 2 ou ALL si décoché */

      if (le1.style.display === "block" && le2.style.display === "block") {

        // console.log("les deux s'affichent");

        for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].style.display = "block";
        }
        for (let j = 0; j < nodeList2.length; j++) {
          nodeList2[j].style.display = "block";
        }
        for (let k = 0; k < nodeList3.length; k++) {
          nodeList3[k].style.display = "none";
        }

      } else if (le1.style.display === "block" && le2.style.display === "none") {

        // console.log("le 1 pd");

        for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].style.display = "block";
        }
        for (let j = 0; j < nodeList2.length; j++) {
          nodeList2[j].style.display = "none";
        }
        for (let k = 0; k < nodeList3.length; k++) {
          nodeList3[k].style.display = "none";
        }
      } else if (le1.style.display === "none" && le2.style.display === "block") {
        for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].style.display = "none";
        }
        for (let j = 0; j < nodeList2.length; j++) {
          nodeList2[j].style.display = "block";
        }
        for (let k = 0; k < nodeList3.length; k++) {
          nodeList3[k].style.display = "none";
        }
      }
    };

    /* CHANGEMENT AU CLIC POUR LE FILTRE PETITS PRIX */

    var le3 = document.getElementById("v6");

    var nouveauprix = document.getElementById("clicbold6");
    nouveauprix.style.backgroundColor = "white";
    var x = nouveauprix.style.backgroundColor;
    console.log(x);

    var dbg3 = document.getElementById("dbg3");

    nouveauprix.onclick = function () {
      for (let i = 0; i < nodeList1.length; i++) {
        nodeList1[i].style.display = "none";
      }
      for (let j = 0; j < nodeList2.length; j++) {
        nodeList2[j].style.display = "none";
      }
      for (let k = 0; k < nodeList3.length; k++) {
        nodeList3[k].style.display = "block";
      }
      if (nouveauprix.style.backgroundColor === "white") {
        nouveauprix.style.borderRight = "1px solid #FF4070";
        nouveauprix.style.borderBottom = "1px solid #FF4070";
        nouveauprix.style.borderTop = "1px solid #FF4070";
        nouveauprix.style.borderLeft = "1px solid #FF4070";
        nouveauprix.style.backgroundColor = "transparent";
        dbg3.style.color = "#FF4070";
        // dbg3.style.fontSize = "18px";
        nouveauprix.style.fontWeight = "bold";
        document.getElementById("v6").style.display = "block";
        le3.style.display = "block";
        document.getElementById("v6").style.color = "#ff4070";
        nouveaufiltre.classList.add("geek");
      } else {
        for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].style.display = "block";
        }
        for (let j = 0; j < nodeList2.length; j++) {
          nodeList2[j].style.display = "block";
        }
        for (let k = 0; k < nodeList3.length; k++) {
          nodeList3[k].style.display = "block";
        }
        nouveauprix.style.backgroundColor = "white";
        dbg3.style.color = "#7A7A7A";
        document.getElementById("v6").style.display = "none";
        nouveauprix.style.fontWeight = "normal";
        nouveauprix.style.borderRight = "1px solid #7A7A7A";
        nouveauprix.style.borderBottom = "1px solid #7A7A7A";
        nouveauprix.style.borderTop = "1px solid #7A7A7A";
        nouveauprix.style.borderLeft = "1px solid #7A7A7A";
        dbg3.style.fontSize = "14px";
        le3.style.display = "none";
      }

      if (le1.style.display === "block" && le2.style.display === "block" && le3.style.display === "block") {

        for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].style.display = "block";
        }
        for (let j = 0; j < nodeList2.length; j++) {
          nodeList2[j].style.display = "block";
        }
        for (let k = 0; k < nodeList3.length; k++) {
          nodeList3[k].style.display = "block";
        }
        console.log("Les 3 sont cochés motherfucka !!!");

      } else if (le1.style.display === "block" && le2.style.display === "block" && le3.style.display === "none") {

        for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].style.display = "block";
        }
        for (let j = 0; j < nodeList2.length; j++) {
          nodeList2[j].style.display = "block";
        }
        for (let k = 0; k < nodeList3.length; k++) {
          nodeList3[k].style.display = "none";
        }
        console.log("Les 3 sont cochés motherfucka !!!");

      }
    };




    /* REINITFILTER */



    var le7 = document.getElementById("v7");

    var rfilter = document.getElementById("clicbold7");
    rfilter.style.backgroundColor = "white";
    var x = rfilter.style.backgroundColor;
    console.log(x);

    var dbg7 = document.getElementById("dbg7");

    var nodeList1 = document.querySelectorAll(".new");

    var nodeList2 = document.querySelectorAll(".favoris");
    var nodeList3 = document.querySelectorAll(".petitsprix");


    rfilter.onclick = function lol() {
      if (rfilter.style.backgroundColor === "white") {
        for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].style.display = "block";
        }
        for (let j = 0; j < nodeList2.length; j++) {
          nodeList2[j].style.display = "block";
        }
        for (let k = 0; k < nodeList3.length; k++) {
          nodeList3[k].style.display = "block";
        }
        rfilter.style.borderRight = "2px solid #FF4070";
        rfilter.style.borderBottom = "2px solid #FF4070";
        rfilter.style.borderTop = "1px solid #FF4070";
        rfilter.style.borderLeft = "1px solid #FF4070";
        rfilter.style.backgroundColor = "transparent";
        dbg7.style.color = "#FF4070";
        // dbg7.style.fontSize = "18px";
        rfilter.style.fontWeight = "bold";
        document.getElementById("v7").style.display = "block";
        document.getElementById("v7").style.color = "#FF4070";
        le7.style.display = "block";
        document.getElementById("clicbold6").style = "null";
        document.getElementById("dbg3").style = "null";
        document.getElementById("v6").style = "null";
        setTimeout(lol, 100);
        location.reload();

      } else {
        console.log("cela fonctionne");
      }
    };








    const mq = window.matchMedia("(min-width: 960px)");

    if (mq.matches) {

    } else {
      document.getElementById("v1").style.display = "none";
    }

    // JAVASCRIPT POUR LE CLIC SUR LE BOUTON LIKE CI-DESSOUS.
    // Piste d'amélioration rendre le tout dynamique avec l'appel d'une boucle et d'une classe.
    // Pourquoi cela n'a pas été fait ? -> délais du projet et plus simple de dupliquer les 12 éléments dans cette version de démo pur !!!!!
    // Chevalier Alexandre.

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 1 

    function petitesas() {
      if (document.getElementById("hbk1").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk1").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk1").style.width = "27px";
        document.getElementById("psty2").textContent++;

      } else {
        document.getElementById("hbk1").style.filter = "none";
        document.getElementById("hbk1").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 2 

    function petitesas2() {
      if (document.getElementById("hbk2").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk2").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk2").style.width = "27px";
        document.getElementById("psty2").textContent++;
      } else {
        document.getElementById("hbk2").style.filter = "none";
        document.getElementById("hbk2").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 3 

    function petitesas3() {
      if (document.getElementById("hbk3").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk3").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk3").style.width = "27px";
        document.getElementById("psty2").textContent++;
      } else {
        document.getElementById("hbk3").style.filter = "none";
        document.getElementById("hbk3").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 4 

    function petitesas4() {
      if (document.getElementById("hbk4").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk4").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk4").style.width = "27px";
        document.getElementById("psty2").textContent++;
      } else {
        document.getElementById("hbk4").style.filter = "none";
        document.getElementById("hbk4").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 5 

    function petitesas5() {
      if (document.getElementById("hbk5").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk5").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk5").style.width = "27px";
        document.getElementById("psty2").textContent++;
      } else {
        document.getElementById("hbk5").style.filter = "none";
        document.getElementById("hbk5").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 6 

    function petitesas6() {
      if (document.getElementById("hbk6").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk6").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk6").style.width = "27px";
        document.getElementById("psty2").textContent++;
      } else {
        document.getElementById("hbk6").style.filter = "none";
        document.getElementById("hbk6").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 7 

    function petitesas7() {
      if (document.getElementById("hbk7").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk7").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk7").style.width = "27px";
        document.getElementById("psty2").textContent++;
      } else {
        document.getElementById("hbk7").style.filter = "none";
        document.getElementById("hbk7").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 8 

    function petitesas8() {
      if (document.getElementById("hbk8").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk8").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk8").style.width = "27px";
        document.getElementById("psty2").textContent++;
      } else {
        document.getElementById("hbk8").style.filter = "none";
        document.getElementById("hbk8").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 9 

    function petitesas9() {
      if (document.getElementById("hbk9").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk9").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk9").style.width = "27px";
        document.getElementById("psty2").textContent++;
      } else {
        document.getElementById("hbk9").style.filter = "none";
        document.getElementById("hbk9").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 10 

    function petitesas10() {
      if (document.getElementById("hbk10").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk10").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk10").style.width = "27px";
        document.getElementById("psty2").textContent++;
      } else {
        document.getElementById("hbk10").style.filter = "none";
        document.getElementById("hbk10").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 11 

    function petitesas11() {
      if (document.getElementById("hbk11").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk11").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk11").style.width = "27px";
        document.getElementById("psty2").textContent++;
      } else {
        document.getElementById("hbk11").style.filter = "none";
        document.getElementById("hbk11").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }

    // FONCTION POUR LE CLIC SUR LE BOUTON LIKE NUMERO 12 

    function petitesas12() {
      if (document.getElementById("hbk12").style.filter !== "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)") {
        document.getElementById("hbk12").style.filter = "invert(35%) sepia(34%) saturate(3369%) hue-rotate(320deg) brightness(107%) contrast(101%)";
        document.getElementById("hbk12").style.width = "27px";
        document.getElementById("psty2").textContent++;
      } else {
        document.getElementById("hbk12").style.filter = "none";
        document.getElementById("hbk12").style.width = "25px";
        document.getElementById("psty2").textContent--;
      }
    }