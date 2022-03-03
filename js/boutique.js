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