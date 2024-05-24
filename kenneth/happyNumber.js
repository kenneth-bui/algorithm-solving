/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1 || n === 7) return true;
  let arr = [];
  while (1 === 1) {
    n = String(n)
      .split("")
      .reduce((sum, cur) => sum + Math.pow(1 * cur, 2), 0);
    if (n === 1 || n === 7) return true;
    if (arr.indexOf(n) > -1) return false;
    else arr.push(n);
  }
};

//===============DEMO=====================
console.log(`isHappy(7) =`, isHappy(7));
console.log(`isHappy(19) =`, isHappy(19));
console.log(`isHappy(2) =`, isHappy(2));