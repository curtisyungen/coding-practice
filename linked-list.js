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

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size += 1;
  }

  // Insert at index
  insertAt(data, idx) {
    // If index is out of range
    if (idx > 0 && idx > this.size) {
      return;
    }

    // If first index
    if (idx === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < idx) {
      previous = current; // Node before index
      count += 1;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size += 1;
  }

  // Get at index
  getAt(idx) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === idx) {
        console.log(current.data);
      }
      count += 1;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(idx) {
    if (idx > 0 && idx > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (idx === 0) {
      this.head = current.next;
    } else {
      while (count < idx) {
        previous = current;
        current = current.next;
        count += 1;
      }

      previous.next = current.next;
    }
    this.size -= 1;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.printListData();
ll.reverse();
ll.printListData();
