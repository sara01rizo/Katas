// Solution
function canFind(bigrams, words) {
  return bigrams.every((x) => words.some((y) => y.includes(x)));
}

console.log(
  canFind(["bo", "ta", "el", "st", "ca"], ["books", "table", "cap", "hostel"]),
  true
);

console.log(
  canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]),
  true
);

console.log(
  canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]),
  false
);

console.log(canFind(["la", "at", "te", "ea"], ["latte"]), false);
