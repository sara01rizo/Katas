// Solution V1
function isBigger(first, second) {
  return first() > second() ? "first" : second() > first() ? "second" : "both";
}

console.log(
  isBigger(
    () => -100,
    () => 0
  )
);
