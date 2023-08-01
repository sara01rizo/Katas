// Solution V1
const inBox = (a) => a.some((e) => /\*/.test(e));

console.log(inBox(["*####", "# #", "# #*", "####"]), false);

console.log(inBox(["###", "# #", "###"]), false);

console.log(inBox(["####", "#  #", "#  #", "####"]), false);

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"]), false);

console.log(inBox(["###", "#*#", "###"]), true);

console.log(inBox(["####", "# *#", "#  #", "####"]), true);

console.log(inBox(["#####", "#  *#", "#   #", "#   #", "#####"]), true);

console.log(inBox(["#####", "#   #", "# * #", "#   #", "#####"]), true);

console.log(inBox(["#####", "#   #", "#   #", "# * #", "#####"]), true);

console.log(inBox(["#####", "#*  #", "#   #", "#   #", "#####"]), true);

// function inBox(arr) {
//   return arr.some((x) => [...x].includes("*", 1));
// }

// Solution
// const inBox = (arr) => arr.some((str) => str.includes("*"));
