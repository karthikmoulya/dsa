/**Write a function, sumTree(root), that takes in the root of a binary tree as an argument.
 *
 * The function should return the total sum of all values in the tree. You can assume that the tree only contains number values.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//        3
//      /   \
//     2     7
//   /   \     \
//  4     -2     5

const sumTree = (root) => {
  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const curr = stack.pop();
    sum += curr.val;
    if (curr.left !== null) {
      stack.push(curr.left);
    }

    if (curr.right !== null) {
      stack.push(curr.right);
    }
  }
  return sum;
};

console.log(sumTree(a)); //19

//Recursive Method
const sumTreeRecursive = (root) => {
  if (root === null) return 0;
  return sumTreeRecursive(root.left) + root.val + sumTreeRecursive(root.right);
}; // O(n) time, O(n) space

console.log(sumTreeRecursive(a)); //19
