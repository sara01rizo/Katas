// Solution V1
function findWord(str) {
  return [...str].filter((c) => c.toLowerCase() === c).join("");
}

console.log(findWord("UcUNFYGaFYFYGtNUH"));
console.log(findWord("bEEFGBuFBRrHgUHINFYaYr"));
console.log(findWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
console.log(findWord("cUEOYCSUXVoaUEOYCSUXVOt"));
console.log(findWord("cElLBFKXYQFLLEeYQFLLEvLBFKXYQFLLEeLFLLEr"));
console.log(findWord("fXTTJVWFCHYZMaXTTJVWFCHYZMsXTTJVWFCHYZMt"));
console.log(findWord("wQYKDHGMNYMKUHKDoQYKDHGMNYMKUHKDw"));
console.log(findWord("nBKCXNIJYJSVDoBKCXNIJYJSVDtBKCXNIJYJSVDe"));
console.log(findWord("iWHDAZIAOYUDTHYYCUNBXQnWHDAZIAOYUDTHYYCUNBXQk"));
console.log(findWord("gNWUOMXIDOFQLKrNWUOMXIDOFQLKaNWUOMXIDOFQLKb"));
console.log(findWord("sYTELSPOSAMmYZYERJTELSPOSAMeYMlYLSMl"));

// function findWord(string) {
//   return string
//     .split("")
//     .filter((char) => char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
//     .join("");
// }
