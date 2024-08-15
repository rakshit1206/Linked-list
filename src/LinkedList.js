class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop() {
    if (this.head === null) return null;
    if (this.head.next === null) {
      const poppedNode = this.head;
      this.head = null;
      return poppedNode;
    }

    let currentNode = this.head;
    while (currentNode.next && currentNode.next.next) {
      currentNode = currentNode.next;
    }

    const poppedNode = currentNode.next;
    currentNode.next = null;
    return poppedNode;
  }

  removeAt(position) {
    if (this.head === null || position < 0) return null;

    if (position === 0) {
      const removedNode = this.head;
      this.head = this.head.next;
      return removedNode;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < position) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentNode !== null) {
      previousNode.next = currentNode.next;
      return currentNode;
    }

    return null;
  }
  insertAt(value, position) {
    const newNode = new Node(value);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < position) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (previousNode !== null) {
      newNode.next = previousNode.next;
      previousNode.next = newNode;
    }
  }

  display() {
    let currentNode = this.head;
    let result = [];
    while (currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }
}
export default LinkedList;
