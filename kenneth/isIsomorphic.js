/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  let mapS = {};
  for (let i = 0; i < s.length; i++) {
    if (mapS[s[i]]) {
      if (mapS[s[i]] !== t[i]) return false;
    } else if (Object.values(mapS).indexOf(t[i]) > -1) return false;
    else mapS[s[i]] = t[i];
  }
  return true;
};

console.log(isIsomorphic("title", "paper")); // expect true
console.log(isIsomorphic("foo", "bar")); // expect false
console.log(isIsomorphic("egg", "add")); // expect true
console.log(isIsomorphic("badc", "baba")); // expect false
console.log(isIsomorphic("egg", "dda")); // expect false
