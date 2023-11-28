// Linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    // Create a new node with the provided value
    const newNode = new Node(value);

    // Check if the queue is currently empty
    if (this.length === 0) {
      // If the queue is empty, set both 'first' and 'last' to the new node
      this.first = newNode;
      this.last = newNode;
    } else {
      // If the queue is not empty, set the 'next' property of the current last node to the new node
      // Sets the next property of the current last node to the new node, linking the last node to the new one.
      this.last.next = newNode;
      // Update 'last' to be the new node, as it is now the last node in the queue
      this.last = newNode;
    }
    // Increase the length of the queue by 1, as a new node has been added
    this.length++;
    // Return a reference to the updated queue (this is often done to allow method chaining)
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
  //isEmpty
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Amber");
myQueue.enqueue("Bella");
myQueue.dequeue();

console.log(myQueue);

