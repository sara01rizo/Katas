function concatenate(...args) {
  return [].concat(...args);
}

// Solution V2
// const concatenate = (...a) => a.flat(Infinity);

console.log(concatenate([1, 2, 3], [4, 5], [6, 7]));
