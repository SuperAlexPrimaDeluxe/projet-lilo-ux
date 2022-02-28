function init() {
  document.getElementById("searchheader").value = "";
  document.getElementById("inputsearchmobile").value = "";
}
window.onload = init;

var largeur = window.innerWidth;
if (largeur <= 768){

/* 1- LES DECLARAITONS */
var targetDiv = document.getElementById("ctnmenures");
targetDiv.style.display = "none";
var burgergetter = document.getElementById("burgerheader");
var closegetter = document.getElementById("closeheader");
var btn = document.getElementById("toggleheader");
var lionclick = document.getElementById("colorerheader");
var lionclick2 = document.getElementById("colorerheader2");
var getsousmenuboutique = document.getElementById("sousmenuboutique");
getsousmenuboutique.style.display = "none";
var getsousmenucontact = document.getElementById("sousmenucontact");
getsousmenucontact.style.display = "none";

// console.log(targetDiv.style.display);

btn.onclick = function () {
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
    closegetter.style.display = "block";
    burgergetter.style.display = "none";
  }else {
    targetDiv.style.display = "none";
    closegetter.style.display = "none";
    burgergetter.style.display = "block";
  }
};

/* ARROW UP DOWN POUR LA BOUTIQUE */

lionclick.onclick = function () {
  if (getsousmenuboutique.style.display == "none") {
    getsousmenuboutique.style.display = "block";
    document.getElementById("arrowdown1").style.transform = "rotate(180deg)";

  } else {
    getsousmenuboutique.style.display = "none";
    document.getElementById("arrowdown1").style.transform = "rotate(0deg)";
  }
};

/* ARROW UP DOWN POUR LA PAGE CONTACT */

lionclick2.onclick = function () {
  if (getsousmenucontact.style.display == "none") {
    getsousmenucontact.style.display = "block";
    document.getElementById("arrowdown2").style.transform = "rotate(180deg)";

  } else {
    getsousmenucontact.style.display = "none";
    console.log(getsousmenucontact);
    document.getElementById("arrowdown2").style.transform = "rotate(0deg)";
  }
};

}

else{
  console.log("la bille noire de Konoha");
}
