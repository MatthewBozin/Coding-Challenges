class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(element) {
    this.storage.push(element);
  }
  dequeue() {
    return this.storage.shift();
  }
  peek(index) {
    return this.storage[index];
  }
}

const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.peek(0));
