class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }
  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }
  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }
  peek(index) {
    return this.storage[index] ? this.storage[index] : "Not defined.";
  }
}

const stack = new Stack();
stack.push("test");
stack.push("testington");
stack.push("aaaaaa");
console.log(stack.pop());
console.log(stack.peek(1), "test");
