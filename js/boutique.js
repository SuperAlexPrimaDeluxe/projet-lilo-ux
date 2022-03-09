    
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

    /*ROSE POUR LE BOUTTON CURRENT */
    var badgesp1 = document.getElementById("pagegetter");

    if (badgesp1.textContent.includes('12 résultats sur 46')) {
      document.getElementById("linktonumero1").style.backgroundColor = "#FF4079";
      document.getElementById("linktonumero1").style.color = "white";
    } else if(badgesp1.textContent.includes('24 résultats sur 46')) {
      document.getElementById("linktonumero2").style.backgroundColor = "#FF4079";
      document.getElementById("linktonumero2").style.color = "white";
    }else if(badgesp1.textContent.includes('36 résultats sur 46')) {
      document.getElementById("linktonumero3").style.backgroundColor = "#FF4079";
      document.getElementById("linktonumero3").style.color = "white";
    }else if(badgesp1.textContent.includes('46 résultats sur 46')) {
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
        dbg.style.color = "#3EA995";
        document.getElementById("v4").style.display = "none";
        nouveaufiltre.style.fontWeight = "normal";
        nouveaufiltre.style.borderRight = "1px solid #3EA995";
        nouveaufiltre.style.borderBottom = "1px solid #3EA995";
        nouveaufiltre.style.borderTop = "1px solid #3EA995";
        nouveaufiltre.style.borderLeft = "1px solid #3EA995";
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
        dbg2.style.color = "#E28AA4";
        document.getElementById("v5").style.display = "none";
        nouveaufavoris.style.fontWeight = "normal";
        nouveaufavoris.style.borderRight = "1px solid #E28AA4";
        nouveaufavoris.style.borderBottom = "1px solid #E28AA4";
        nouveaufavoris.style.borderTop = "1px solid #E28AA4";
        nouveaufavoris.style.borderLeft = "1px solid #E28AA4";
        dbg2.style.fontSize = "14px";
        le2.style.display = "none";
      }
      

      /* Conditions d'affichage lors du clic sur le le boutton 2 */

      // /* Quand je clique sur NOUVEAUTES & FAVORIS il affiche le contenu des 2 ou ALL si décoché */

      if (le1.style.display === "block" && le2.style.display === "block"){

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
     
      } else if (le1.style.display === "block" && le2.style.display === "none"){
        
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
      }
      else if (le1.style.display === "none" && le2.style.display === "block"){
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
        nouveauprix.style.borderRight = "2px solid #FF3D00";
        nouveauprix.style.borderBottom = "2px solid #FF3D00";
        nouveauprix.style.borderTop = "1px solid #FF3D00";
        nouveauprix.style.borderLeft = "1px solid #FF3D00";
        nouveauprix.style.backgroundColor = "transparent";
        dbg3.style.color = "#FF3D00";
        dbg3.style.fontSize = "18px";
        nouveauprix.style.fontWeight = "bold";
        document.getElementById("v6").style.display = "block";
        le3.style.display = "block";
        document.getElementById("v6").style.filter = "invert(30%) sepia(38%) saturate(6105%) hue-rotate(3deg) brightness(103%) contrast(107%)";
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
        dbg3.style.color = "#FF3D00";
        document.getElementById("v6").style.display = "none";
        nouveauprix.style.fontWeight = "normal";
        nouveauprix.style.borderRight = "1px solid #FF3D00";
        nouveauprix.style.borderBottom = "1px solid #FF3D00";
        nouveauprix.style.borderTop = "1px solid #FF3D00";
        nouveauprix.style.borderLeft = "1px solid #FF3D00";
        dbg3.style.fontSize = "14px";
        le3.style.display = "none";
      }

      /* CASE FOR 2 ET 3 */
   
      // if (le2.style.display === "block" && le3.style.display === "block") {
      //   for (let i = 0; i < nodeList1.length; i++) {
      //     nodeList1[i].style.display = "none";
      //   }
      //   for (let j = 0; j < nodeList2.length; j++) {
      //     nodeList2[j].style.display = "block";
      //   }
      //   for (let k = 0; k < nodeList3.length; k++) {
      //     nodeList3[k].style.display = "block";
      //   }
      //   console.log("2 & 3 coché");
      // } 

      // else if (le2.style.display === "none" && le3.style.display === "block") {
      //   for (let i = 0; i < nodeList1.length; i++) {
      //     nodeList1[i].style.display = "none";
      //   }
      //   for (let j = 0; j < nodeList2.length; j++) {
      //     nodeList2[j].style.display = "none";
      //   }
      //   for (let k = 0; k < nodeList3.length; k++) {
      //     nodeList3[k].style.display = "block";
      //   }
      //   console.log("2 & 3 coché");
      // }
      
      // else if (le2.style.display === "block" && le3.style.display === "none") {
      //   for (let i = 0; i < nodeList1.length; i++) {
      //     nodeList1[i].style.display = "none";
      //   }
      //   for (let j = 0; j < nodeList2.length; j++) {
      //     nodeList2[j].style.display = "block";
      //   }
      //   for (let k = 0; k < nodeList3.length; k++) {
      //     nodeList3[k].style.display = "none";
      //   }
      //   console.log("2 & 3 coché");
      // }

      /* CASE FOR 1 ET 3 */
    
      // else if (le1.style.display === "block" && le3.style.display === "block") {

      //   for (let i = 0; i < nodeList1.length; i++) {
      //     nodeList1[i].style.display = "block";
      //   }
      //   for (let j = 0; j < nodeList2.length; j++) {
      //     nodeList2[j].style.display = "block";
      //   }
      //   for (let k = 0; k < nodeList3.length; k++) {
      //     nodeList3[k].style.display = "block";
      //   }
      //   console.log("1 & 3 coché");
   
      // }

      // else if (le1.style.display === "none" && le3.style.display === "block") {

      //   for (let i = 0; i < nodeList1.length; i++) {
      //     nodeList1[i].style.display = "none";
      //   }
      //   for (let j = 0; j < nodeList2.length; j++) {
      //     nodeList2[j].style.display = "none";
      //   }
      //   for (let k = 0; k < nodeList3.length; k++) {
      //     nodeList3[k].style.display = "block";
      //   }
      //   console.log("1 coché");
   
      // }

      // else if (le1.style.display === "block" && le3.style.display === "none") {

      //   for (let i = 0; i < nodeList1.length; i++) {
      //     nodeList1[i].style.display = "none";
      //   }
      //   for (let j = 0; j < nodeList2.length; j++) {
      //     nodeList2[j].style.display = "none";
      //   }
      //   for (let k = 0; k < nodeList3.length; k++) {
      //     nodeList3[k].style.display = "block";
      //   }
      //   console.log("3 coché");
   
      // }

      // else if (le1.style.display === "block" && le2.style.display === "block" && le3.style.display === "block") {

      //   for (let i = 0; i < nodeList1.length; i++) {
      //     nodeList1[i].style.display = "block";
      //   }
      //   for (let j = 0; j < nodeList2.length; j++) {
      //     nodeList2[j].style.display = "block";
      //   }
      //   for (let k = 0; k < nodeList3.length; k++) {
      //     nodeList3[k].style.display = "block";
      //   }
      //   console.log("1 & 3 coché");
   
      // } 
  
    };










    // // fonction pour le clic sur le bouton like
    // function myFunction() {
    //   var elements = document.getElementsByClassName("fig2");

    //   for (var i = 0, len = elements.length; i < len; i++) {
    //     if (elements[i].style.backgroundColor !== "white") {
    //       elements[i].style.backgroundColor = "white";
    //       return;
    //     } else {
    //       elements[i].style.backgroundColor = "transparent";
    //     }
    //   }
    // };

const mq = window.matchMedia( "(min-width: 960px)" );

if (mq.matches) {
       
} else {
     document.getElementById("v1").style.display ="none";
}

const mq2 = window.matchMedia( "(min-width: 500px)" );

if (mq2.matches) {
       
} else {
     document.getElementById("GE2").innerHTML = "Retour au sommet";
     document.getElementById("GE2").href = "https://www.w3schools.com";
}