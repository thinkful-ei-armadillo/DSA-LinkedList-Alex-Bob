// given a SORTED linked ListeningStateChangedEvent, write a function insertInSortedOrder to insert an item in the sorted linked list preserving the order of the list


// loop through current

function insertSorted(list, item) {
  let node = list.head;
  //if first and item are the same, insert to first spot
  if (node === null || node.value >= item) {
    list.head = new _Node(item, node);
  }
  //otherwise, loop until 
  let previousNode = list.head;
  while ((node !== null) && (node.value < item)) {
    previousNode = node;
    node = node.next;
  }
  previousNode.next = new _Node(item, node);
} 