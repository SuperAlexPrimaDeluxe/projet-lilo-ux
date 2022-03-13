const actionButton = document.getElementById("showhideart1");
const itemList = document.getElementsByClassName('article').style.display='none';
itemList.style.display="none";

const toggleShowList = () => {
  const isHidden = itemList.style.display === "none";
  if (isHidden) {
    // Display hidden element
    itemList.style.display = "block";
    
  } else {
    // Hide element
    itemList.style.display = "none";
  }
};

// Adding click event listener
actionButton.addEventListener("click", toggleShowList);





