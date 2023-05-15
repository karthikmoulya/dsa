/**Write a function `fib` that takes in a number, n, and returnss the n-th number in the fibonaci sequence.
 *
 * The first two numbers of the fibonacci dequence are 1 and 1. The next number of the sequence can be calculated by taking the sum of the previous two.
 */

const slowFib = (n) => {
  if (n < 1) return 'Please provide poitive number.';
  if (n <= 2) return 1;
  return slowFib(n - 1) + slowFib(n - 2);
};

//slowFib
//Time : O(2^n)
//Space : O(n)

const fastFib = (n) => {
  return _fastFib(n);
};

const _fastFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n < 1) return 'Please provide poitive number.';
  if (n <= 2) return 1;
  memo[n] = _fastFib(n - 1) + _fastFib(n - 2);
  return memo[n];
};

const fastFibWithTabulation = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
};

console.log(fastFibWithTabulation(8));
console.log(fastFib(7));

console.log(slowFib(7));
