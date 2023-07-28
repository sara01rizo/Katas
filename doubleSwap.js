// Solution V1
const doubleSwap = (str, a, b) =>
  str.replace(RegExp(`[${a + b}]`, "g"), (m) => (m === a ? b : a));

console.log(doubleSwap("aabbccc", "a", "b"), "bbaaccc");

console.log(
  doubleSwap("random w#rds writt&n h&r&", "#", "&"),
  "random w&rds writt#n h#r#"
);

console.log(doubleSwap("128 123 871 2828 007", "3", "12"), "129 985 556 799 888");

console.log(doubleSwap("figaro fi", "l", "m"), "bretzel blau");

console.log(doubleSwap("123456789", "4", "5"), "123546789");

console.log(doubleSwap("28112811&&", "4", "&"), "&&312312");

console.log(doubleSwap("!?@,.", ",", "."), "!?@.,");

console.log(doubleSwap("Q_Q T_T =.= >.<", "Q", "T"), "T_T Q_Q =.= >.<");

console.log(
  doubleSwap("(Q_Q) (T_T) (=.=) (>.<)", ")", "("),
  ")Q_Q( )T_T( )=.=( )>.<("
);

console.log(doubleSwap("<>", ">", "<"), "><");

console.log(doubleSwap("001101", "1", "0"), "110010");

console.log(
  doubleSwap(
    "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    "a",
    "b"
  ),
  "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`bacdefghijklmnopqrstuvwxyz{|}~"
);

// const doubleSwap = (str, c1, c2) =>
//   str
//     .split("")
//     .map((c) => (c === c1 ? c2 : c === c2 ? c1 : c))
//     .join("");
