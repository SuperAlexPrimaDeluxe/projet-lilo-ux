/* Fonction sur le click du checkbox 1 pour la sélection du paiement */ 

var inputmoni1 = document.getElementById("input1_1");
var checkmoni1 = document.getElementById("chckfact");
var inputmoni2 = document.getElementById("input1_2");
var checkmoni2 = document.getElementById("chckfact2");
var inputmoni3 = document.getElementById("input1_3");
var checkmoni3 = document.getElementById("chckfact3");
var inputmoni4 = document.getElementById("input1_4");
var checkmoni4 = document.getElementById("chckfact4");


checkmoni1.style.display = "none";

inputmoni1.onclick = function () {
    if (checkmoni1.style.display == "none") {
        checkmoni1.style.display = "block";
        checkmoni2.style.display = "none";
        checkmoni3.style.display = "none";
        checkmoni4.style.display = "none";
    } else {
        checkmoni1.style.display = "none";
        checkmoni2.style.display = "none";
        checkmoni3.style.display = "none";
        checkmoni4.style.display = "none";
    }
}

/* Fonction sur le click du checkbox 2 pour la sélection du paiement */


checkmoni2.style.display = "none";

inputmoni2.onclick = function () {
    if (checkmoni2.style.display == "none") {
        checkmoni1.style.display = "none";
        checkmoni2.style.display = "block";
        checkmoni3.style.display = "none";
        checkmoni4.style.display = "none";
    } else {
        checkmoni1.style.display = "none";
        checkmoni2.style.display = "none";
        checkmoni3.style.display = "none";
        checkmoni4.style.display = "none";
    }
}

/* Fonction sur le click du checkbox 3 pour la sélection du paiement */

checkmoni3.style.display = "none";

inputmoni3.onclick = function () {
    if (checkmoni3.style.display == "none") {
        checkmoni1.style.display = "none"
        checkmoni2.style.display = "none"
        checkmoni3.style.display = "block"
        checkmoni4.style.display = "none";
    } else {
        checkmoni1.style.display = "none";
        checkmoni2.style.display = "none";
        checkmoni3.style.display = "none";
        checkmoni4.style.display = "none";
    }
}

/* Fonction sur le click du checkbox 4 pour la sélection du paiement */


checkmoni4.style.display = "none";

inputmoni4.onclick = function () {
    if (checkmoni4.style.display == "none") {
        checkmoni1.style.display = "none"
        checkmoni2.style.display = "none"
        checkmoni3.style.display = "none"
        checkmoni4.style.display = "block";
    } else {
        checkmoni1.style.display = "none";
        checkmoni2.style.display = "none";
        checkmoni3.style.display = "none";
        checkmoni4.style.display = "none";
    }
}

