/* 148 Sort List - asscending order
Brute App: take a arr and put elem in the arr with help of temp and sort the arr and then again put temp.data from arr. 
O(nlogn) SC O(n) 
*/
const sortLL = (head) => {
  if(head === null || head.next === null){
    return head;
  }
  let arr = [];
  let temp =head;
  while(temp !== null){
    arr.push(temp.val);
    temp = temp.next;
  }
  arr.sort((a,b)=>a-b);
  let i=0;
  temp=next;
  while(temp !== null){
    temp.val = arr[i];
    i++;
    temp = temp.next;
  }
  return head;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 //Optimize O(nlogn) SC O(1), use of mergeSort and middle finding fast and slow. use of prev 
 const optimizeSortedLL = (head) => {
  //base condition
  if(head === null || head.next === null){
    return head;
  }

  //function of merging of two half of linked list
  function merge(left,right){
    let dummy = new ListNode(0);
    let current = dummy;
    while(left !== null && right !== null){
      if(left.val < right.val){
        current.next = left;
        left = left.next;
      }else {
        current.next = right;
        right = right.next;
      }
      current = current.next;
    }

    //add remaining nodes
    if(left !== null){
      current.next = left;
    }
    if(right !== null){
      current.next = right;
    }
    return dummy.next;
  }

  //find the middle
  function middleNode(head){
    let prev = null;
    let slow=head;
    let fast= head;

    while(fast !== null && fast.next !== null){
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    if(prev !== null){
      prev.next = null;
    }
    return slow;
  }

  let middle = middleNode(head);

  //recursively sort both havles
  let leftHalf = optimizeSortedLL(head);
  let rightHalf = optimizeSortedLL(middle);

  //merge the sorted halves
  return merge(leftHalf, rightHalf);
 }