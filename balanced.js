
const wordVal = (w) =>
  [...w].reduce((a, v) => a + " abcdefghijklmnopqrstuvwxyz".indexOf(v), 0);

const balanced = (word) =>
  wordVal(word.slice(0, word.length >> 1)) ===
  wordVal(word.slice(Math.ceil(word.length / 2)));

console.log(balanced("at"), false);

console.log(balanced("forgetful"), false);

console.log(balanced("vegetation"), true);

console.log(balanced("disillusioned"), false);

console.log(balanced("abstract"), true);

console.log(balanced("clever"), false);

// console.log(balanced("conditionalities"), true);

// console.log(balanced("seasoning"), true);

// console.log(balanced("uptight"), false);

// console.log(balanced("ticket"), false);

// console.log(balanced("calculate"), false);

// console.log(balanced("measure"), false);

// console.log(balanced("join"), false);

// console.log(balanced("anesthesiologies"), true);

// console.log(balanced("command"), false);

// console.log(balanced("graphite"), true);

// console.log(balanced("quadratically"), true);

// console.log(balanced("right"), false);

// console.log(balanced("fossil"), true);

// console.log(balanced("sparkling"), false);

// console.log(balanced("dolphin"), true);

// console.log(balanced("baseball"), true);

// console.log(balanced("immense"), false);

// console.log(balanced("pattern"), true);

// console.log(balanced("hand"), false);

// console.log(balanced("radar"), true);

// console.log(balanced("oven"), false);

// console.log(balanced("immutability"), true);

// console.log(balanced("kayak"), true);

// console.log(balanced("bartender"), true);

// console.log(balanced("weight"), false);

// console.log(balanced("lightbulbs"), true);

// console.log(balanced("tail"), true);
