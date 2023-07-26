// Solution V1S

function count(n) {
  return (n / 10) | 0 ? 1 + count(n / 10) : 1;
}

console.log(count(8748525632));
console.log(count(2811));
console.log(count(12345));
console.log(count(0));
console.log(count(-929028));
console.log(count(-1));

// | 0 has the same effect as Math.floor()
