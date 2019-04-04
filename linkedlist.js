'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, nextItem) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === nextItem) {
      this.insertFirst(item);
    }

    let tempNode = this.head;
    let previousNode = this.head;

    while ((tempNode !== null) && (tempNode.value !== nextItem)) {
      previousNode = tempNode;
      tempNode = tempNode.next;
    }
    if (tempNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = new _Node(item, tempNode);
  }

  insertAfter(item, prevItem) {
    if (!this.head) {
      return null;
    }
    
    let tempNode = this.head;

    while ((tempNode !== null) && (tempNode.value !== prevItem)) {
      tempNode = tempNode.next;
    }
    if (tempNode === null) {
      console.log('Item not found');
      return;
    }
    const tempNext = tempNode.next;
    tempNode.next = new _Node(item, tempNext);
  }

  insertAt(item, index) {
    if (!this.head) {
      return null;
    }

    let tempNode = this.head;
    let previousNode = this.head;
    let tempIndex = 0;

    while((tempNode !== null) && (tempIndex !== index)) {
      previousNode = tempNode;
      tempNode = tempNode.next;
      tempIndex++;
    }
    if (tempNode === null && tempIndex !== index) {
      console.log('Index not available');
      return;
    }
    previousNode.next = new _Node(item, tempNode);
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let tempNode = this.head;
    let previousNode = this.head;

    while ((tempNode !== null) && (tempNode.value !== item)) {
      previousNode = tempNode;
      tempNode = tempNode.next;
    }
    if (tempNode === null) {
      console.log(`Can't remove, ${item} not found`);
      return;
    }
    previousNode.next = tempNode.next;
  }

  find(item) {
    if (!this.head) {
      return null;
    }

    let tempNode = this.head;
    while (tempNode.value !== item) {
      if (tempNode.next === null) {
        return null;
      } else {
        tempNode = tempNode.next;
      }
    }
    return tempNode;
  }
}

function display(list) {
  let node = list.head;
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
}

function size(list) {
  let node = list.head;
  let size = 0;
  while (node !== null) {
    node = node.next;
    size++;
  }
  return size;
}

function isEmpty(list) {
  return (list.head === null);
}

function findPrevious(list, nextItem) {
  let node = list.head;
  let previousNode = list.head;
  while ((node !== null) && (node.value !== nextItem)) {
    previousNode = node;
    node = node.next;
  }
  if (node === null) {
    console.log('Item not found');
    return;
  }
  return previousNode.value;
}

function findLast(list) {
  let node = list.head;
  let previousNode;
  if (list.head === null) {
    return;
  }
  while (node !== null) {
    previousNode = node;
    node = node.next;
  }
  return previousNode.value;
}
//Problem 5 Reverse a list
function reverseList(list) {
  // <- A  B -> C -> D
  // A <- B <- C <- D
  let current = list.head;
  let previous = null;
  let next = null;
  while(current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  list.head = previous;
  return list;
}
//And recursively
function reverseListRecursively(list, current, previous=null) {
  
  if (!current) {
    current = list.head;
  }

  if(current.next === null) {
    current.next = previous;
    list.head = current;
    return list;
  }

  const next = current.next;
  current.next = previous;
  return reverseListRecursively(list, next, current);

}

//Problem 6 3rd from the end

module.exports = {
  LinkedList,
  display,
  size,
  isEmpty,
  findPrevious,
  findLast,
  reverseList,
  reverseListRecursively
};