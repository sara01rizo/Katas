// Solution V1
function addBefore(num) {
  if (num === 1) return 1;

  const newNumber = addBefore(num - 1);
  console.log(newNumber);

  return num + newNumber;
}

console.log(addBefore(4));

// Solution V2
function addBefore(num) {
  if (num === 1) return 1;
  return num + addBefore(num - 1);
}
