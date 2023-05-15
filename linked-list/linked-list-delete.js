/**Write a function, delete(head, val), that accepts the head node of the linked list and a value as an argument.
 *
 * The function should delete the mode of the linked list that contains the given value
 *
 * The function should return the head of the list.
 *
 * Assume that the linked list only contains unique values.
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

const deleteValue = (head, target) => {
  if (head.val === target) {
    return head.next;
  }
  let prev = null;
  let curr = head;

  while (curr !== null) {
    if (curr.val === target) {
      prev.next = curr.next;
    }
    prev = curr;
    curr = curr.next;
  }

  return head;
}; // O(n) time, O(1) space

const deleteValueRecursive = (head, target) => {
  if (head.val === target) {
    return head.next;
  }
  _deletevaluerecursive(head, null, target);
  return head;
}; //O(n) time, O(n) space

const _deletevaluerecursive = (curr, prev, target) => {
  if (curr === null) return;

  if (curr.val === target) {
    prev.next = curr.next;
    return;
  }

  _deletevaluerecursive(curr.next, curr, target);
};

const print = (head) => {
  if (head === null) return;
  console.log(head.val);
  print(head.next);
};

// a->b->c->d
print(a);

const newHead = deleteValue(a, 'a');
const newHeadRecursive = deleteValueRecursive(a, 'd');

console.log('--------After Deletion--------------');

print(newHead);

console.log('--------After Recursive Deletion--------------');

print(newHeadRecursive);

// a->b->d
