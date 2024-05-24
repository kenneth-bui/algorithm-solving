/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i--]);
    if (j >= 0) sum += parseInt(b[j--]);
    result = (sum % 2) + result;
    carry = parseInt(sum / 2);
  }
  if (carry > 0) {
    result = 1 + result;
  }
  return result;
};

const a =
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
const b =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
console.log(addBinary(a, b));

const c = "11";
const d = "1";
console.log(addBinary(c, d));
