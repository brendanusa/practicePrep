// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(x) {
    var node = new Node(x);
    if (this.head !== null) {
      node.next = this.head;
    }
    this.head = node;
    this.length++;
  }
}

function removeKFromList(l, k) {

  var removeNode = () => {
    this.next 
  }

  if (this.next !== null) {
    if (this.next.value === k) {

    }

  }

}
