// Solution V1
const histogram = (arr, char) => arr.map((n) => char.repeat(n)).join("\n");

console.log(histogram([2, 4, 5, 6], "o"), "\noo\noooo\nooooo\noooooo");

console.log(histogram([4, 2], "*"), "\n****\n**");

console.log(
  histogram([20, 1, 12], "H"),
  "\nHHHHHHHHHHHHHHHHHHHH\nH\nHHHHHHHHHHHH"
);

console.log(
  histogram([2, 1, 2, 4, 5, 2, 3], "#"),
  "\n##\n#\n##\n####\n#####\n##\n###"
);
