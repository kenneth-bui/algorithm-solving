/**
 * @param {string} s
 * @return {number}
 */
var Solution = function (s) {
  let lastChar = s.at(-1);
  let count = 0;
  while (s != "") {
    if (s.at(0) === lastChar) count++;
    lastChar = s.at(0);
    s = s.substring(1, s.length);
  }
  return count;
};

console.log(`abbaa => ${Solution("abbaa")}`);
console.log(`aaaa => ${Solution('aaaa')}`);
console.log(`abab => ${Solution('abab')}`);
