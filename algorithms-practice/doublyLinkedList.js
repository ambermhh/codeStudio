class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublelyLinkedList {
  constructor(value) {
    // Create the first node, the head, with the specified value
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    // Set the tail to the head since there's only one node initially
    this.tail = this.head;
    // Initialize the length to 1, as there is one node in the linked list
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail; // Set the new node's prev to the current tail
    this.tail.next = newNode; // Set the current tail's next to the new node
    this.tail = newNode; // Update the tail to be the new node
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const prevNode = this.traverseToIndex(index - 1);
    const followerNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = followerNode;
    followerNode.prev = newNode;
    this.length++;
    return this;
  }
  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index >= this.length) {
      return "The list is not that long";
    }

    const prevNode = this.traverseToIndex(index - 1);
    const nextNode = this.traverseToIndex(index + 1);
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;
    return this;
  }
}

const myDoubleLinkedList = new DoublelyLinkedList(20);

myDoubleLinkedList.append(5);
myDoubleLinkedList.append(10);
myDoubleLinkedList.prepend(1);
myDoubleLinkedList.insert(2, 88);

myDoubleLinkedList.remove(1);

console.log(myDoubleLinkedList);

console.log(myDoubleLinkedList.printList());
