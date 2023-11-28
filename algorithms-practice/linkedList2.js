// 10 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next:{
//             value: 5,
//             next: {
//                 value: 16,
//                 next : null
//             }

//         }
//     }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // Create the first node, the head, with the specified value
    this.head = {
      value: value,
      next: null,
    };
    // Set the tail to the head since there's only one node initially
    this.tail = this.head;
    // Initialize the length to 1, as there is one node in the linked list
    this.length = 1;
  }
  append(value) {
    // Create a new node with the specified value.
    // either use line 54 or this method. because made a class Node constructor.
    const newNode = {
      value: value,
      next: null,
    };
    // Link the current tail node to the new node
    this.tail.next = newNode;
    // Update the tail to be the new node, as it is now the last node in the linked list
    this.tail = newNode;
    // Increment the length of the linked list to reflect the addition of a new node
    this.length++;
    // Return a reference to the updated linked list, allowing method chaining
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
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
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
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
    prevNode.next = this.traverseToIndex(index + 1);

    this.length--;
    return this;
  }

  reverse() {
    // check how many items are in the list
    if (!this.head.next) {
      return this.head;
    } else {
      // Initialize variables to keep track of nodes
      let firstItem = this.head; // points to the current head
      this.tail = this.head; // update tail to be the current head
      let secondItem = firstItem.next; // points to the node next to the current head

      // Iterate through the list and reverse the order
      while (secondItem) {
        const temp = secondItem.next; // temporary variable to store the next node
        secondItem.next = firstItem; // reverse the link direction
        firstItem = secondItem; // move to the next pair of nodes
        secondItem = temp; // move to the next pair of nodes
      }

      // Set the tail's next to null, as it is now the last node in the reversed list
      this.head.next = null;

      // Update the head to be the new first node in the reversed list
      this.head = firstItem;
    }

    // Return a reference to the reversed linked list
    return this;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

myLinkedList.insert(99, 99);
myLinkedList.insert(3, 78);

// myLinkedList.remove(4);

myLinkedList.reverse();

console.log(myLinkedList.printList());
