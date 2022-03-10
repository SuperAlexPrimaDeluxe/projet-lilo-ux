var inputmoni1 = document.getElementById("input1_1");
var checkmoni1 = document.getElementById("chckfact");
checkmoni1.style.display ="none";

inputmoni1.onclick = function () {
 if(checkmoni1.style.display == "none"){
     console.log("PAS VISIBLE");
 }else{console.log("VISIBLE");}
}