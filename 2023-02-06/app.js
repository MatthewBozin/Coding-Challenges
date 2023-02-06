class Queue {
  constructor() {
    this.size = 0;
    this.placement = 0;
    this.storage = {};
  }
  enqueue(element) {
    this.storage[this.size + this.placement] = element;
    this.size++;
  }
  dequeue() {
    const element = this.storage[this.placement];
    delete this.storage[this.placement];
    this.placement++;
    this.size--;
    return element;
  }
  peek(index) {
    return this.storage[index + this.placement]
      ? this.storage[index + this.placement]
      : "Not defined.";
  }
}

const queue = new Queue();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.peek(0));
