/* 432 All O's one Data Structure
29 Sept 2024, Leetcode POTD, HARD
Need to revist this again and again

Example 1:

Input
["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
[[], ["hello"], ["hello"], [], [], ["leet"], [], []]
Output
[null, null, null, "hello", "hello", null, "hello", "leet"]

Explanation
AllOne allOne = new AllOne();
allOne.inc("hello");
allOne.inc("hello");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "hello"
allOne.inc("leet");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "leet"
*/


class Node {
  constructor(key, val) {
      this.key = key;
      this.val = val;
      this.next = null;
      this.prev = null;
      this.freq = 1;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = new Node(null, null);
      this.tail = new Node(null, null);
      this.head.next = this.tail;
      this.tail.prev = this.head;
  }

  insertHead(node) {
      node.prev = this.head;
      node.next = this.head.next;
      this.head.next.prev = node;
      this.head.next = node;
  }

  insertTail(node) {
      node.next = this.tail;
      node.prev = this.tail.prev;
      this.tail.prev.next = node;
      this.tail.prev = node;
  }

  removeNode(node) {
      const next = node.next;
      const prev = node.prev;
      prev.next = next;
      next.prev = prev;
  }

  removeHead() {
      const node = this.head.next;
      this.removeNode(node);
  }

  removeTail() {
      const node = this.tail.prev;
      this.removeNode(node);
  }

  getHead() {
      if (this.isEmpty()) return "";
      return this.head.next.key;
  }

  getLast() {
      if (this.isEmpty()) return "";
      return this.tail.prev.key;
  }

  isEmpty() {
      return this.head.next.val === null;
  }
}

var AllOne = function () {
  this.nodeMap = new Map();
  this.freqMap = new Map();
  this.min = Infinity;
  this.max = -1;
};

/** 
* @param {string} key
* @return {void}
*/
AllOne.prototype.inc = function (key) {
  const node = this.nodeMap.get(key);
  if (!node) {
      const newNode = new Node(key, 1);
      this.nodeMap.set(key, newNode);
      if (!this.freqMap.has(1)) {
          this.freqMap.set(1, new DoublyLinkedList());
      }
      this.freqMap.get(1).insertTail(newNode);

      this.min = Math.min(this.min, newNode.freq);
      this.max = Math.max(this.max, newNode.freq);
  } else {
      const prevFreq = node.freq;
      this.freqMap.get(prevFreq).removeNode(node);
      if (this.freqMap.get(prevFreq).isEmpty()) {
          this.freqMap.delete(prevFreq);
          if (prevFreq === this.min) {
              this.min += 1;
          }
      }
      node.freq += 1;
      if (!this.freqMap.has(node.freq)) {
          this.freqMap.set(node.freq, new DoublyLinkedList());
      }
      this.freqMap.get(node.freq).insertTail(node);
      this.nodeMap.set(key, node);

      this.min = Math.min(this.min, node.freq);
      this.max = Math.max(this.max, node.freq);
  }
};

/** 
* @param {string} key
* @return {void}
*/
AllOne.prototype.dec = function (key) {
  const node = this.nodeMap.get(key);
  const prevFreq = node.freq;
  this.freqMap.get(prevFreq).removeNode(node);
  if (this.freqMap.get(prevFreq).isEmpty()) {
      this.freqMap.delete(prevFreq);
      if (this.max === prevFreq) {
          this.max -= 1;
      }
      if (this.min === prevFreq) {
          this.min += 1;
      }
  }
  node.freq -= 1;
  if (node.freq === 0) {
      this.nodeMap.delete(key);
      return;
  }
  this.min = Math.min(this.min, node.freq);
  this.max = Math.max(this.max, node.freq);

  if (!this.freqMap.has(node.freq)) {
      this.freqMap.set(node.freq, new DoublyLinkedList());
  }
  this.freqMap.get(node.freq).insertTail(node);
  this.nodeMap.set(key, node);
};

/**
* @return {string}
*/
AllOne.prototype.getMaxKey = function () {
  if (!this.freqMap.has(this.max)) return "";
  return this.freqMap.get(this.max).getLast();
};

/**
* @return {string}
*/
AllOne.prototype.getMinKey = function () {
  if (!this.freqMap.has(this.min) && !this.freqMap.has(this.max)) return "";
  if (!this.freqMap.has(this.min)) return this.freqMap.get(this.max).getLast();
  return this.freqMap.get(this.min).getLast();
};

/** 
* Your AllOne object will be instantiated and called as such:
* var obj = new AllOne()
* obj.inc(key)
* obj.dec(key)
* var param_3 = obj.getMaxKey()
* var param_4 = obj.getMinKey()
*/