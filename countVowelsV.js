// Solution V1
function countVowels(str) {
  return str.split("").filter((x) => "aeiouAEIOU".includes(x)).length;
}

console.log(countVowels("Trinken"));
console.log(countVowels("Tree"));
console.log(countVowels("Development"));
console.log(countVowels("Bitter"));
console.log(countVowels("Legend"));
console.log(countVowels("Book"));
console.log(countVowels("Stormmisch"));
console.log(countVowels("Stürmisch"));
console.log(countVowels("Bretzel"));
console.log(countVowels("Deutschland"));
