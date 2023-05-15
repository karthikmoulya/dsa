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

const input = new Array(6000).fill(1);

const slowStart = Date.now();
console.log(slowSum(input));
const slowEnd = Date.now();
console.log(`n^2 finished in ${slowEnd - slowStart}ms.`);

const fastStart = Date.now();
console.log(fastSum(input));
const fastEnd = Date.now();
console.log(`n finished in ${fastEnd - fastStart}ms.`);
