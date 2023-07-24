function cipher(s, k) {
  return s.replace(/[a-z]/gi, (m) => {
    console.log("m", m);
    const c = m < "a" ? 65 : 97;
    console.log("c", c);
    return String.fromCharCode(((m.charCodeAt(0) - c + k) % 26) + c);
  });
}


console.log(cipher("Back to Square One", 126));

// ASCII CODE FOR A = 65; ASCII CODE FOR a = 97;


// Method in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.
