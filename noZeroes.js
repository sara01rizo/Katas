// Solution V1
const noZeroes = (n) => parseFloat(n).toString();

console.log(noZeroes("230.000"));
console.log(noZeroes("00402"));
console.log(noZeroes("03.1400"));
console.log(noZeroes("30"));
console.log(noZeroes("00200.1900001"));

// const noZeroes = (n) => {
//   let left = Number(n.split(".")[0]);
//   let right = Number(n.split(".")[1]);

//   return parseInt(left);
// };

// Solution V2
// const noZeroes = (n) => "" + +n;
