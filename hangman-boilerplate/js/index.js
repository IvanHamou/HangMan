// document.querySelector("figure").classList.add("scaffold");
// document.querySelector("figure").classList.add("head");
// document.querySelector("figure").classList.add("body");
// document.querySelector("figure").classList.add("arms");
// document.querySelector("figure").classList.add("legs");
const parent = document.getElementById("input-parent");

function makeArrayFromWord(word) {
  let newO = word.split(" ");
  const ee = newO.join("");
  var ww = ee.split("");
  return ww;
}
var input = "a";
const ord = "here";
const fetchArray = makeArrayFromWord(ord);
let myIndex;
fetchArray.map((res) => {
  const input = document.createElement("input");
  parent.appendChild(input);
});

fetchArray.forEach((res, i) => {
  if (res.includes(input)) {
    myIndex = i;
  } else {
    // document.querySelector("figure").classList.add("legs");
    console.log("no", input);
  }
});
