// 22 Mar 2024 - 234. Palindrome Linked List

//Brute Force - use of Set DS, TC O(n), O(n)
var isPalindrome = function(head) {
  if(head === null || head.next === null){
    return true;
  }
    let temp = head;
    let set = [];
    while(temp !== null){
      set.push(temp.val);
      temp = temp.next;
    }
    temp = head;
    while(temp !== null){
      if(temp.val !== set.pop()){
        return false;
      }
      temp = temp.next;
    }
    return true;
};

// Optimal App - first reverse the linkedlist by middlePoint, how to find the middlePoint slow and fast - for even fast will go fast.next !== null adn odd list fast.next.next !== null, TC O(n)
const reverseLL = (head) => {
  if(head === null || head.next === null){
    return head;
  }
  const newNode = reverseLL(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;

  return newNode;
}

const isPalindrome = (head) => {
  if(head === null || head.next === null){
    return true;
  }

  //find the mddle of List even list or odd list
  let slow = head;
  let fast = head;
  while(fast.next !== null && fast.next.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }

  const newNode = reverseLL(slow.next);
  let first = head;
  let second = newNode;
  while(second !== null){
    if(first.val !== second.val){
      reverseLL(newNode);
      return false;
    }
    first = first.next;
    second = second.next;
  }
  reverseLL(newNode);
  return true;
}