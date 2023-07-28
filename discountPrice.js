// Solution V1
function discountedPrice(price, discount) {
  return ((100 - discount) / 100) * price;
}

console.log(discountedPrice(100, 75));
console.log(discountedPrice(211, 50));
console.log(discountedPrice(593, 61));
console.log(discountedPrice(1987, 80));
console.log(discountedPrice(700, 10));
