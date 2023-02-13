class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(0);
  }
  add(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      const next = this.getLast();
      next.next = new Node(value);
      this.getLast().next = new Node(value);
    }
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  clear() {
    this.head = null;
  }
  getFirst() {
    return this.head();
  }
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
}

const list = new LinkedList();
list.add(1000);
list.add(1001);
console.log(list.getLast().value, 1001);
list.clear();
list.add(1002);
console.log(list.getLast().value, 1002);
