var tdElements = document.getElementsByTagName("TD");

for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}
function handleClick(event) {
  var target = event.target;
  if (isO) {
    
  }

  target.innerHTML = "O"


}

