/**Write a function, reverseList, that accepts the head of a linked list as an argument.
 *
 * The function should reverse the orser of the nodes of the linked list in-place.
 *
 * The function should return the new head of the linked list.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

const print = (head) => {
  if (head === null) return;
  console.log(head.val);
  print(head.next);
};

print(a);

const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}; //O(n) time, O(1) space

const reversListRcursive = (head) => {
  return _reverseListRecrsive(head, null);
};

const _reverseListRecrsive = (curr, prev = null) => {
  if (curr === null) {
    return prev;
  }
  const next = curr.next;
  curr.next = prev;

  return _reverseListRecrsive(next, curr);
}; //O(n) time, O(n) space

console.log('--------After Reversse--------------');
const newHead = reverseList(a);

print(newHead);

console.log('--------After Reverse Recursive--------------');
const newHeadRecursive = reversListRcursive(a);

print(newHeadRecursive);
