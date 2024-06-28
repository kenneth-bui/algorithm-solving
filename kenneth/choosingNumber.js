/**
 * Problem title: Choosing Number
 * 
 * Problem description:
    There is an array A made of N integers. Your task is to choose as many integers from A as possible so that, when they are put in ascending order, all of the differences between all pairs of consecutive integers are equal. For example, for A = [4, 3, 5, 1, 4, 4], you could choose 1, 3, and 5 (with differences equal to 2) or 4, 4, and 4 (with differences equal to 0). So, answer in this case will be 3.
    What is the maximum number of integers that can be chosen? Write a function: function solution(A).
    Examples:
    A = [4, 7, 1, 5, 3], function should return 4. 4 integers (7, 1, 5, 3) when put in ascending order the difference between all consecutive integers is 2.
    A = [12, 12, 12, 15, 10], function should return 3. It is optimal to choose all 3 integers with value 12.
    A = [18, 26, 18, 24, 24, 20, 22], function should return 5. 5 integers (18, 20, 22, 24, 26) when put in ascending order the difference between all consecutive integers is 2. Notice that we cannot pick any other integers, even though they occur more than once.

    Assume that:
    -	N is an integer within the range [2…50].
    -	Each element of array A is an integer within the range [1…100].
    In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
 */

/**
 * Return the maximum number of integers that can be chosen
 * @param {Array} aIn
 */
function Solution(aIn) {
  aIn.sort(fnSort);
  let aOut = [];
  for (let i = 0; i < aIn.length - 1; i++) {
    for (let j = i + 1; j < aIn.length; j++) {
      let aDup = [...aIn],
        cur = aDup[j];
      const dif = aDup[j] - aDup[i];
      let aTmp = [aDup.splice(j, 1), aDup.splice(i, 1)];
      while (aDup.indexOf(cur + dif) > -1) {
        aTmp.push(aDup.splice(aDup.indexOf(cur + dif), 1));
        cur += dif;
      }
      if (aOut.length < aTmp.length) aOut = [...aTmp];
    }
  }
  return aOut.length;
}

const fnSort = (a, b) => a - b;

// Samples
console.log(Solution([4, 7, 1, 5, 3])); // 4
console.log(Solution([12, 12, 12, 15, 10])); // 3
console.log(Solution([18, 26, 18, 24, 24, 20, 22])); // 5
console.log(Solution([4, 3, 5, 1, 4, 4])); // 3
