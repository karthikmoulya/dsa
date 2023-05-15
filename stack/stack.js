// using an array

// const myStack = [];

// myStack.push('a');
// myStack.push('b');

// console.log(myStack);
// myStack.pop();
// console.log(myStack);
// myStack.push('c');
// myStack.push('d');
// console.log(myStack);

//Maximally Efficient Stack : O(1) time for push/pop

//Using Linked List

class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    if (this.size === 0) {
      this.top = new StackNode(val);
    } else {
      const pushedNode = new StackNode(val);
      pushedNode.next = this.top;
      this.top = pushedNode;
    }

    this.size++;
  }

  pop() {
    if (this.size === 0) return null;
    const poppedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return poppedNode.val;
  }

  getTop() {
    return this.top.val;
  }
} //O(1) time, O(n) space

const myNewStack = new Stack();
myNewStack.push('a');
myNewStack.push('b');
myNewStack.push('c');
console.log(myNewStack.size); //3
console.log(myNewStack.pop());
console.log(myNewStack.size); //2
console.log(myNewStack.getTop());
