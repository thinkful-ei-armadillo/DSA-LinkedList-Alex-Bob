const { LinkedList, display, size, isEmpty, findPrevious, findLast } = require('./linkedlist');

// Drill #2. Create a singly linked list:

function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  // display(SLL);
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Kat'));
  console.log(findLast(SLL));
}

main();