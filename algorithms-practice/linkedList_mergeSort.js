// Import the LinkedList class from linked_list.js
const { LinkedList } = require("./linked_list");
const { Node } = require("./linked_list")

//Sorts a linked list in ascending order
// - Recursively divide the linked list into sublists containing a single node
// - Repeatedly merge the sublists to produce sorted sublists until one remains
// Returns a sorted linked list
// Runs in O(kn log n) time
function mergeSort(head) {
  if (!head || !head.next) {
    return head;
  }

  // Split the linked list into two halves
  const [left, right] = splitList(head);

  // Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

// Divide the unsorted list at midpoint into sub-linked lists
function splitList(head) {
  let slow = head;
  let fast = head.next;

  // Move fast two steps and slow one step until fast reaches the end
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const left = head;
  const right = slow.next;
  slow.next = null; // Cut off the connection between the halves

  return [left, right];
}

// Merges two linked lists, sorting by data in nodes
// Returns a new, merged list
function merge(left, right) {
  const dummy = new Node(); // Dummy node to simplify the code
  let current = dummy;

  while (left && right) {
    if (left.data < right.data) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }

  // If there are remaining nodes in either half, append them
  current.next = left || right;

  return dummy.next; // Return the merged sorted list
}

// Example usage
 const myList = new LinkedList();

// Add elements to the linked list
myList.addFirst(5);
myList.addFirst(3);
myList.addFirst(8);
myList.addFirst(2);
myList.addFirst(7);

console.log("Original Linked List:");
myList.printList();

// Apply merge sort
myList.head = mergeSort(myList.head);

console.log("\nLinked List after Merge Sort:");
myList.printList();
