// Solution V1 no strings
const digits = (number) => {
  let n = Math.abs(number),
    i = 1;
  while ((n /= 10) >= 1) {
    i++;
  }
  return i;
};

console.log(digits(0));
