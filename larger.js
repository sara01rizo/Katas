// Solution V1
const larger = (num) =>
  Number(num.toString().split("").reverse().join("")) <= num;

console.log(larger(14));
