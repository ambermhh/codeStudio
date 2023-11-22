// Node class representing a node in the linked list
class Node {
  constructor(data) {
    // An object containing a single node of the linked list.
    // Models two attributes - data and the link to the next node in the list.
    this.data = data;
    this.next = null; // Reference to the next node
  }
}

// let n1 = new Node(10);
// console.log(n1);
// let n2 = new Node(20);
// n1.next = n2; // Reference
// console.log(n2);

// Linked list class
class LinkedList {
  //Singly linked list
  constructor() {
    this.head = null; // Points to the first node in the list
  }

  //check the size of the linked list
  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Add a new node to the beginning of the list
  addFirst(data) {
    const newNode = new Node(data);

    // If the list is empty, the new node becomes the head
    if (!this.head) {
      this.head = newNode;
    } else {
      // Set the next property of the new node to the current head
      newNode.next = this.head;
      // Update the head to be the new node
      this.head = newNode;
    }
  }

  // Add a new node to the end of the list
  addLast(data) {
    const newNode = new Node(data);
    // If the list is empty, the new node becomes the head
    if (!this.head) {
      this.head = newNode;
      return;
    }
    // Traverse the list to find the last node
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    // Set the next property of the last node to the new node
    current.next = newNode;
  }

  //Insert a new node at the specified position
  insert(data, index) {
    // Insertion takes O(1) time but finding the node at the insertion point takes O(n) time.
    // Takes overall O(n) time.
    if (index < 0 || index > this.size()) {
      console.log("invalid position");
      return;
    }

    const newNode = new Node(data);

    if (index === 0) {
      //Inserting at the beginning
      newNode.next = this.head;
      this.head = newNode;
    } else {
      //Inserting at a position other than the beginning
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        //In each iteration, move to the next node in the linked list.
        //This effectively traverses the list one node at a time.
        current = current.next;
      }
      newNode.next = current.next;
      //Set the next property of the new node (newNode) to point to the same node that the current node is pointing to.
      //This preserves the rest of the list after the desired position.
      current.next = newNode;
      //Update the next property of the current node to point to the new node (newNode).
      //This effectively inserts the new node into the list at the desired position.
    }
  }
  // Remove a node with the specified data
  // Take O(n) time
  remove(data) {
    let current = this.head;

    // If the node to be remove is the head
    if (current && current.data === data) {
      this.head = current.next;
      return;
    }
    let previous = null;

    // Traverse the list to find the node to be removed
    while (current && current.data !== data) {
      previous = current;
      current = current.next;
    }

    // If the node was not found
    if (!current) {
      console.log("Node not found");
      return;
    }

    // Update the next property of the previous node to skip the current node
    previous.next = current.next;
  }

  search(key) {
    //Search for the first node  containing data that matches the key
    //Return the node or "none" if not found
    // Takes O(n) time
    let current = this.head;

    while (current) {
      if (current.data === key) {
        return "found it in the list: " + current.data;
      }
      current = current.next;
    }
    return "Did not find it in the list.";
  }

  // Print the elements of the linked list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Export the LinkedList class
module.exports = { LinkedList, Node };

// Example usage:

// const myList = new LinkedList();
// myList.addLast(4);
// myList.addLast(5);
// myList.addLast(6);

// myList.addFirst(3);
// myList.addFirst(2);
// myList.addFirst(1);

// myList.insert(7,3);
// myList.printList();
// myList.remove(7);
// myList.printList();
// console.log(myList.search(2));
// console.log(myList.search(10));
// console.log(myList.size());
