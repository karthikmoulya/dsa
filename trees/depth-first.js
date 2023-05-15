class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//        a
//      /   \
//     b     c
//   /   \      \
//  d     e      f

//Depth First Traversal

const depthFirstPrint = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    console.log(curr.val);
    //add curr's children to top of the stack
    if (curr.right !== null) {
      stack.push(curr.right);
    }

    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }
}; //O(n) time, O(n) space

// depthFirstPrint(a);
//abdecf

//Recursive Method
const depthFirstPrintRecursive = (root) => {
  //the tree is empty
  if (root === null) return;
  console.log(root.val);
  depthFirstPrintRecursive(root.left);
  depthFirstPrintRecursive(root.right);
};

//depthFirstPrintRecursive(a);
//abdecf

//pre-order traversal (self, left, right)
const preOrder = (root) => {
  if (root === null) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
};

preOrder(a); //abdecf

//post-order travesal (left, right, self)
const postOrder = (root) => {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
};

console.log('----Post Order----');
postOrder(a); //debfca;

//in order traversal (left, self, right)
const inOrder = (root) => {
  if (root === null) return;
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
};

console.log('----In Order----');
inOrder(a); //dbeacf;
