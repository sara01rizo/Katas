const convert = (t) =>
  t.includes("C")
    ? ((+t.split("°")[0] * 9) / 5 + 32).toFixed() + "°F"
    : t.includes("F")
    ? (((+t.split("°")[0] - 32) * 5) / 9).toFixed() + "°C"
    : "Error";

console.log(convert("35°C"), "95°F");

console.log(convert("18°C"), "64°F");

console.log(convert("0°F"), "-18°C");

console.log(convert("100°C"), "212°F");

console.log(convert("69°F"), "21°C");

console.log(convert("159°C"), "318°F");

console.log(convert("-40°C"), "-40°F");

console.log(convert("-40°F"), "-40°C");

console.log(convert("16°C"), "61°F");

console.log(convert("500°C"), "932°F");

console.log(convert("33"), "Error");

console.log(convert("100°F"), "38°C");

// F to C -> (98.6°F-32)×5/9 = 37°C
// C to F -> 40°C×9/5+32 = 104°F
