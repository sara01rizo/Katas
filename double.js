// Solution V1
const double = (str) => {
  return str
    .split("")
    .map((char) => char.repeat(2))
    .join("");
};

console.log(double("Käse Hakuna!"));
