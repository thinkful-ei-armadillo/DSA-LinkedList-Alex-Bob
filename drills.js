'use strict';

const { LinkedList, display, size, isEmpty, findPrevious, findLast, reverseList, reverseListRecursively } = require('./linkedlist');

// Drill #2. Create a singly linked list:

function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tauhida');
  //SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  display(reverseListRecursively(SLL));
  
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Kat'));
  //console.log(findLast(SLL));
}

main();

//Drill #4 Mystery Program

// function WhatDoesThisProgramDo(lst) {
//   let current = lst.head;
//   while (current !== null) {
//     let newNode = current;
//     while (newNode.next !== null) {
//       if (newNode.next.value === current.value) { 
//         newNode.next = newNode.next.next;
//       }
//       else {
//         newNode = newNode.next;
//       }
//     }
//     current = current.next;
//   }
// }

// Best case time complexity is O(1) given an empty list
// O(n^2) -- polynomial time complexity

// The program goes over a linked list and removes all duplicate values
// WhatDoesThisProgramDo(SLL);