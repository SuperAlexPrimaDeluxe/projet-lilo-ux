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