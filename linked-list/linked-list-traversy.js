class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first Node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert last Node
  insertLast(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = node;
    this.size++;
  }

  //Insert at index
  insertAt(data, index) {
    //If index is out of range
    if (index > 0 && index > this.size) return;

    //If first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let curr, previous;

    //set current to first
    curr = this.head;
    let count = 0;

    while (count < index) {
      previous = curr; // Node before index
      count++;
      curr = curr.next; // Node after index
    }
    node.next = curr;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let curr = this.head;
    let count = 0;
    while (curr) {
      if (count === index) {
        console.log(curr.data);
      }
      count++;
      curr = curr.next;
    }

    return null;
  }

  //Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) return;

    let curr = this.head;
    let previous;
    let count = 0;

    //Remove first
    if (index === 0) {
      this.head = curr.next;
      return;
    }

    while (count < index) {
      count++;
      previous = curr;
      curr = curr.next;
    }
    previous.next = curr.next;
    this.size--;
  }

  //clear list
  clear() {
    this.head = null;
    this.size = 0;
  }

  //print list data
  printListData() {
    let curr = this.head;
    let str = '';
    while (curr) {
      str += curr.data + '->';
      curr = curr.next;
    }
    console.log(str);
  }
}

const list = new LinkedList();
list.insertFirst(100);
list.insertFirst(200);
list.insertLast(300);
list.insertAt(500, 2);
list.getAt(2);
list.removeAt(0);
// list.clear();

list.printListData();
