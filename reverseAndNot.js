// Solution V1
const reverseAndNot = (n) => +([...("" + n)].reverse().join("") + n);

console.log(reverseAndNot(123));
console.log(reverseAndNot(123456789));
console.log(reverseAndNot(28));
console.log(reverseAndNot(11));
console.log(reverseAndNot(1987));
console.log(reverseAndNot(500));
console.log(reverseAndNot(321));
console.log(reverseAndNot(564));
console.log(reverseAndNot(2023));
console.log(reverseAndNot(553));
console.log(reverseAndNot(518));
console.log(reverseAndNot(152));
console.log(reverseAndNot(273));
console.log(reverseAndNot(603));
console.log(reverseAndNot(864));
console.log(reverseAndNot(170));
console.log(reverseAndNot(96));
console.log(reverseAndNot(869));
console.log(reverseAndNot(960));
console.log(reverseAndNot(471));
console.log(reverseAndNot(925));
console.log(reverseAndNot(235));
console.log(reverseAndNot(389));
console.log(reverseAndNot(293));
console.log(reverseAndNot(586));
console.log(reverseAndNot(699));
console.log(reverseAndNot(298));
console.log(reverseAndNot(532));
console.log(reverseAndNot(211));

// function reverseAndNot(i) {
//   return +`${i.toString().split("").reverse().join("")}${i}`;
// }
