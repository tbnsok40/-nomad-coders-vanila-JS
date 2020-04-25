var selectElem = document.getElementById("select");
var pElem = document.getElementById("p");
const COUNTRY = "country";
// When a new <option> is selected
selectElem.addEventListener("change", function () {
  var index = selectElem.value;
  // Add that data to the <p>
  pElem.innerHTML = "COUNTRY: " + index;
  localStorage.setItem(COUNTRY, index);
});
