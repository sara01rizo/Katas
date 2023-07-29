function emojify(str) {
  let [first, mid, last] = str.split(" ");

  let emojify = {
    smile: "😁",
    grin: "😂",
    sad: "😌",
    mad: "😣",
  };

  return `Make me ${emojify[last]}`;
}

console.log(emojify("Make me smile"));
console.log(emojify("Make me grin"));
console.log(emojify("Make me sad"));
console.log(emojify("Make me mad"));
