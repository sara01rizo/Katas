// Solution
function fiscalCode(person) {
  const months = " ABCDEHLMPRST";
  const getV = (s) => s.toUpperCase().replace(/[^AEIOU]/g, "");
  const getC = (s) => s.toUpperCase().replace(/[AEIOU]/g, "");
  const code = (s) => (getC(s) + getV(s) + "XXX").slice(0, 3);
  const [d, m, y] = person.dob.split("/");

  let sCode = code(person.surname);
  let fCon = getC(person.name);
  let fCode = fCon.length > 3 ? fCon[0] + fCon[2] + fCon[3] : code(person.name);
  let nCode =
    y.slice(-2) +
    months[m] +
    (person.gender === "M" ? ("0" + d).slice(-2) : +d + 40);
  return sCode + fCode + nCode;
}

console.log(
  fiscalCode({
    name: "Brendan",
    surname: "Eich",
    gender: "M",
    dob: "1/12/1961",
  }),
  "CHEBND61T01"
);

console.log(
  fiscalCode({
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950"
  }),
  "YUXHLN50T41"
);

console.log(
  fiscalCode({
    name: "Al",
    surname: "Capone",
    gender: "M",
    dob: "17/1/1899"
  }),
  "CPNLAX99A17"
);

console.log(
  fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928",
  }),
  "MSOMKY28A16"
);

console.log(
  fiscalCode({
    name: "Marie",
    surname: "Curie",
    gender: "F",
    dob: "7/11/1867",
  }),
  "CRUMRA67S47"
);
