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

  // O(1) 
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  // O(n)
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
  // O(n)
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

  // O(n)
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

  // O(n)
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
  // O(n)
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
  // best case O(1) average case O(n)
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
// O(1)
function createCycledList() {
  const CycleList = new LinkedList();
  CycleList.insertFirst('1');
  CycleList.insertFirst('2');
  const last = CycleList.head.next;
  last.next = new _Node('3', CycleList.head);
  return CycleList;
}

//O(n)
function display(list) {
  let node = list.head;
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
}

// O(n)
function size(list) {
  let size = 0;
  if(!list.head) {
    return size;
  }
  let node = list.head;
  while (node !== null) {
    node = node.next;
    size++;
  }
  return size;
}

// O(1)
function isEmpty(list) {
  return (list.head === null);
}

// O(n)
function findPrevious(list, nextItem) {
  if (!list.head) {
    return null;
  }
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

// O(n)
function findLast(list) {
  if (list.head === null) {
    return null;
  }
  let node = list.head;
  let previousNode;
  while (node !== null) {
    previousNode = node;
    node = node.next;
  }
  return previousNode.value;
}

//Problem 5 Reverse a list
//O(n)
function reverseList(list) {
  if (list.head === null) {
    return null;
  }
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
//O(n)
function reverseListRecursively(list, current, previous=null) {
  if(list.head === null) {
    return null;
  }
  
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
// O(n)
function thirdFromTheEnd(list) {
  if (!list.head) {
    return null;
  }
  if (!(list.head && list.head.next.next && list.head.next.next.next)) {
    console.log('list is not long enough');
    return null;
  }
  let current = list.head;
  while (current !== null) {
    
    if (current.next.next.next.next === null) {
      return current.value;
    }
    current = current.next;
  }
}

//Problem 7 Middle of a List
// O(n)
function getMiddle(list) {
  if (!list.head) {
    return null;
  }
  let current = list.head;
  let fastCounter = list.head;
  while (fastCounter !== null) {
    if (fastCounter.next !== null){
      fastCounter = fastCounter.next.next;
    } 
    else {
      return current.value;
    }
    if (current.next !== null){
      current = current.next;
    }
  }
  return current.value;
}

//Problem 8 Cycle in a list
// O(n)
function findCycle(list) {
  if (!list.head) {
    return null;
  }
  let current = list.head;
  let fastCounter = list.head;
  do {
    if (fastCounter.next !== null && fastCounter.next.next !== null) {
      fastCounter = fastCounter.next.next;
    } else {
      return false;
    }
    current = current.next;
  } while (fastCounter.value !== current.value);
  return true;
}


module.exports = {
  LinkedList,
  display,
  size,
  isEmpty,
  findPrevious,
  findLast,
  reverseList,
  reverseListRecursively,
  thirdFromTheEnd,
  getMiddle,
  findCycle,
  createCycledList
};