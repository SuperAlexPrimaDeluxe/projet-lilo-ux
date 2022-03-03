    //Attempt to get the element using document.getElementById
    var badges = document.getElementById("bannertxt");
    console.log(badges.textContent);
    
    if (badges.textContent.includes('BADGES')) { 
      alert("OK");
      document.getElementById("clicbold1").style.borderRight ="7px solid #7A7A7A";
      document.getElementById("clicbold1").style.borderBottom ="7px solid #7A7A7A";
      document.getElementById("clicbold1").style.borderTop ="2px solid #7A7A7A";
      document.getElementById("clicbold1").style.borderLeft ="2px solid #7A7A7A";
      document.getElementById("clicbold1").style.fontSize ="18px";
      document.getElementById("clicbold1").style.fontWeight ="bold";
     }else{
       alert("FUCKO");
     }
 
 
    var nouveaufiltre = document.getElementById("clicbold4");

     nouveaufiltre.onclick = function () {
      nouveaufiltre.style.backgroundColor = "#3EA995";
      document.getElementById("liennouveautebtq").style.color = "white";
      document.getElementById("liennouveautebtq").style.fontWeight = "bold";
      document.getElementById("v4").style.filter = "brightness(0) invert(1)";
      document.getElementById("v4").style.display = "block";
      // nouveaufiltre.style.borderColor = "#7A7A7A";
      // nouveaufiltre.style.borderRight ="7px solid #7A7A7A";
      // nouveaufiltre.style.borderBottom ="7px solid #7A7A7A";
      // nouveaufiltre.style.borderTop ="2px solid #7A7A7A";
      // nouveaufiltre.style.borderLeft ="2px solid #7A7A7A";
      // nouveaufiltre.style.fontSize ="18px";
      // nouveaufiltre.style.fontWeight ="bold";
      // if (targetDiv.style.display == "none") {
      //   targetDiv.style.display = "block";
      //   closegetter.style.display = "block";
      //   burgergetter.style.display = "none";
      // }else {
      //   targetDiv.style.display = "none";
      //   closegetter.style.display = "none";
      //   burgergetter.style.display = "block";
      // }
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