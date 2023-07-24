// Solution
function capFront(s) {
  return s.match(/A-Z/g).join("") + s.match(/a-z/g).join("");
}

console.log(capFront("sky"));
console.log(capFront("moveMENT"));
console.log(capFront("manGO"));
console.log(capFront("pArtytoDaY"));
