function checkTitle(title) {
  return title.split(" ").every((item) => item[0] === item[0].toUpperCase());
}

// Alternate Solution
const checkTitle = (title) => !/\b[a-z]/.test(title);

console.log(checkTitle("Where are you Wilson?"));
console.log(checkTitle("Meissner Schwerter Privatbrau"));
