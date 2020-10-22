var tdElements = document.getElementsByTagName("TD");

for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}
function handleClick(event) {
  var target = event.target;

    
  target.innerHTML = "O"
  var arrayOfAnything = [
  1,
  true,
  "a",
  "hello",
  {
    testProperty: false
  },
  function() {
    alert("I'm a function");
  }
];

// alert("arrayOfAnything.length: " + arrayOfAnything.length); 


}

