/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let arrS = s.split("");
  let arrT = t.split("");
  let objC = {};
  for (let i = 0; i < arrS.length; i++) {
    if (objC[arrS[i]]) {
      if (objC[arrS[i]] !== arrT[i]) return false;
    } else if (Object.values(objC).indexOf(arrT[i]) > -1) return false;
    else objC[arrS[i]] = arrT[i];
  }
  return true;
};

console.log(isIsomorphic("title", "paper")); // expect true
console.log(isIsomorphic("foo", "bar")); // expect false
console.log(isIsomorphic("egg", "add")); // expect true
console.log(isIsomorphic("badc", "baba")); // expect false
console.log(isIsomorphic("egg", "dda")); // expect false