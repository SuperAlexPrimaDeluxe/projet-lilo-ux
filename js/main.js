// const actionButton = document.getElementById("showhideart1");
// const itemList = document.getElementsByClassName('article').style.display='none';
// itemList.style.display="none";

// const toggleShowList = () => {
//   const isHidden = itemList.style.display === "none";
//   if (isHidden) {
//     // Display hidden element
//     itemList.style.display = "block";

//   } else {
//     // Hide element
//     itemList.style.display = "none";
//   }
// };

// // Adding click event listener
// actionButton.addEventListener("click", toggleShowList);

// CODE POUR LE CLIC SUR LE BOUTON DE FILTRE //

/* CHANGEMENT AU CLIC POUR LE FILTRE NOUVEAUTE */

// var filteroneactu = document.getElementById("allb1");

// filteroneactu.onclick = function () {



//   if (filteroneactu.style.backgroundColor = "white") {
//     alert("kuku petit chat");
//     filteroneactu.style.borderRight = "1px solid #FF4070";
//     filteroneactu.style.borderBottom = "1px solid #FF4070";
//     filteroneactu.style.borderTop = "1px solid #FF4070";
//     filteroneactu.style.borderLeft = "1px solid #FF4070";
//     filteroneactu.style.color = "#FF4070";
//     filteroneactu.style.fontWeight = "bold";
//   } else if (filteroneactu.style.backgroundColor != "white") {
//     alert("YO MONGOL CA MARCHE PO");
//     filteroneactu.style.borderRight = "1px solid #7a7a7a";
//     filteroneactu.style.borderBottom = "1px solid #7a7a7a";
//     filteroneactu.style.borderTop = "1px solid #7a7a7a";
//     filteroneactu.style.borderLeft = "1px solid #7a7a7a";
//     filteroneactu.style.color = "#7a7a7a";
//     filteroneactu.style.fontWeight = "bold";
//   }

// };


// CODE POUR LE SYSTEME DE FILTRE //

filterSelection("allactus")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




