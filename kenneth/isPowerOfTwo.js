/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 0) return false;
  while (n % 2 === 0) n = n / 2;
  return n === 1;
};

console.log(`isPowerOfTwo(0) = `, isPowerOfTwo(0));
console.log(`isPowerOfTwo(1) = `, isPowerOfTwo(1));
console.log(`isPowerOfTwo(16) = `, isPowerOfTwo(16));
console.log(`isPowerOfTwo(-16) = `, isPowerOfTwo(-16));
console.log(`isPowerOfTwo(3) = `, isPowerOfTwo(3));
console.log(`isPowerOfTwo(-30) = `, isPowerOfTwo(-30));
console.log(`isPowerOfTwo(2147483646) = `, isPowerOfTwo(2147483646));
