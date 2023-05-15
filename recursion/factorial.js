/**Write a function `factorial` that takes a number as an argument and returns the factorial of that number.
 *
 * The factorial of `n` is the product of all positive number from 1 to `n`.
 */

//Recursion Method
const factRecursion = (n) => {
  if (n <= 0) return 'Please use positive integer';
  if (n === 1) return 1;

  return n * factRecursion(n - 1);
};

//Time: O(n)
//Space: O(n)

//Convention Method
const factConv = (n) => {
  if (n <= 0) return 'Please use positive integer';
  if (n === 1) return 1;
  let prod = 1;
  for (let i = 2; i <= n; i++) {
    prod *= i;
  }
  return prod;
};

console.log(factRecursion(5));
console.log(factConv(5));
