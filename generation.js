// Solution V1
function generation(x, y) {
  const legacy = {
    "-3": {
      m: "great grandfather",
      f: "great grandmother",
    },
    "-2": {
      m: "grandfather",
      f: "grandmother",
    },
    "-1": {
      m: "father",
      f: "mother",
    },
    0: {
      m: "me!",
      f: "me!",
    },
    1: {
      m: "son",
      f: "daughter",
    },
    2: {
      m: "grandson",
      f: "granddaughter",
    },
    3: {
      m: "great grandson",
      f: "great granddaughter",
    },
  };

  return legacy[x][y];
}

console.log(generation(-3, "f"));
console.log(generation(-2, "m"));
console.log(generation(-2, "f"));
console.log(generation(-1, "m"));
console.log(generation(-1, "f"));
console.log(generation(0, "f"));
