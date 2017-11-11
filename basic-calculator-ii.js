class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  push(val) {
    var node = new Node(val);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
  }

  pop() {
    var tmp = this.head;
    this.head = this.head.next;
    this.count--;
    return tmp.value;
  }

  peek() {
    return this.tail.value;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }
}

var calculate = (s) => {
  s = s.replace(/\s/g, '');

  const doMath = (a, b, operator) => {
    if (typeof a === 'string') a = parseInt(a);
    if (typeof b === 'string') b = parseInt(b);
    if (operator === '*') return a * b;
    else if (operator === '/') return Math.floor(a / b);
    else if (operator === '+') return a + b;
    else return a - b;
  }

  var nums = s.split(/[-\*\+\/]/g);
  var ops = s.split(/[0-9]/g).filter(char => char);
  var exp = [];
  for (var i = 0; i < nums.length; i++) {
    exp.push(nums[i]);
    if (ops[i]) {
      exp.push(ops[i]);
    }
  }

  var numsQue = new Queue();
  var opsQue = new Queue();

  for (var i = 0; i < exp.length; i += 2) {
    if (exp[i + 1] === '+' || exp[i + 1] === '-') {
      numsQue.push(exp[i]);
      opsQue.push(exp[i + 1]);
    } else if (i === exp.length - 1) {
      numsQue.push(exp[i]);
      break;
    } else {
      exp[i + 2] = doMath(exp[i], exp[i + 2], exp[i + 1]);
    }
  }

  if (numsQue.size() === 1) {
    var result = numsQue.pop()
    return typeof result === 'string' ? parseInt(result) : result;
  }

  var a = numsQue.pop();
  var b = numsQue.pop();

  while (!numsQue.isEmpty()) {
    a = doMath(a, b, opsQue.pop());
    b = numsQue.pop();
  }

  a = doMath(a, b, opsQue.pop());

  return a;
};

console.log(calculate(" 3/2 ") === 1);
console.log(calculate("14/3*2") === 8)
console.log(calculate('42') === 42);
console.log(calculate("3+2*2") === 7);
console.log(calculate(" 3+5 / 2 ") === 5);
console.log(calculate("12-3*4") === 0);
console.log(calculate('1 + 1') === 2);
console.log(calculate('2 + 6 / 3') === 4)
console.log(calculate('0-2147483647') === -2147483647);
console.log(calculate('1+1+1') === 3);
console.log(calculate('1-1+1') === 1);
console.log(calculate("100-1-2-3-4-5-6-7-8-9-10") === 45);