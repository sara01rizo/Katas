// Solution V1
function evenOnly(nums) {
  const evenOnly = (arr) => arr.filter((n, i) => n % 2 === 0 && i % 2 === 0);

  return nums.filter((item, index) => !(item % 2) && !(index % 2));
}
