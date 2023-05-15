class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }

    this._append(val, this.head);
  }

  _append(val, curr) {
    if (curr.next === null) {
      curr.next = new Node(val);
      return;
    }

    this._append(val, curr.next);
  }

  contains(target) {
    return this._conatins(target, this.head);
  }

  _conatins(target, curr) {
    if (curr === null) return false;
    if (curr.val === target) return true;
    return this._conatins(target, curr.next);
  }

  print() {
    const output = this._print(this.head);
    console.log(output);
  }

  _print(curr) {
    if (curr === null) return '';
    return curr.val + '->' + this._print(curr.next);
  }
}

const list = new LinkedList();
list.append(11);
list.append(7);
list.append(10);
list.append(2);

list.print();

const sumList = (head) => {
  let sum = 0;
  let curr = head;

  while (curr !== null) {
    sum += curr.val;
    curr = curr.next;
  }

  return sum;
}; //Time : O(n), Space : O(1)

const sumListRecursive = (head) => {
  if (head === null) return 0;
  return head.val + sumListRecursive(head.next);
}; //Time : O(n), Space : O(n)

console.log(sumListRecursive(list.head)); //30
console.log(sumList(list.head)); //30
