/**Write a function `sum` that takes an array of numbers as an input. The function should return the total sum of all elements.
 *
 * The function must be recursive.
 */

//slowSum
const slowSum = (array) => {
  if (array.length === 0) return 0;
  const firstEl = array[0];
  const rest = array.slice(1);
  return firstEl + slowSum(rest);
};

//Time => O(n * n) => O(n^2)
//Space => O(n), where n is the length of an input array

//fastSum
const fastSum = (array) => {
  return _fastSum(array, 0);
};

const _fastSum = (array, idx) => {
  if (idx === array.length) return 0;
  return array[idx] + _fastSum(array, idx + 1);
};

//Time => O(n)
//space => O(n), where n is the length of an input array

console.log(slowSum([])); // 0
console.log(slowSum([1])); // 1
console.log(slowSum([1, 5])); // 6
console.log(slowSum([1, 5, 7])); // 13
console.log(slowSum([1, 5, 7, -2])); // 11

console.log(fastSum([])); // 0
console.log(fastSum([1])); // 1
console.log(fastSum([1, 5])); // 6
console.log(fastSum([1, 5, 7])); // 13
console.log(fastSum([1, 5, 7, -2])); // 11
