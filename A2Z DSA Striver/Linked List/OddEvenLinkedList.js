/* 328 Odd even linked list
odd ibdex comes first and even index come after

1. brute take arr and place first odd temp=head, after that even temp=head.next, adn then again loop to place the arr element back to linked list O(2n), O(n)
 just remember at last temp put manuly in arr
*/
const bruteOddEvenList = (head) => {
  if(head === null || head.next === null){
    return head;
  }
  //for odd
  let temp = head;
  let arr = [];
  while(temp !== null){
    arr.push(temp.val);
    temp = temp.next;
  }
  if(temp){
    arr.push(temp.val);
  }

  //for even
  temp = head.next;
  while(temp !== null){
    arr.push(temp.val);
    temp = temp.next;
  }
  if(temp){
    arr.push(temp.val);
  }

  //now back to linked list
  let i=0;
  temp=head;
  while(temp !== null){
    temp.val = arr[i];
    i++;
    temp = temp.next;
  }
  return head;
}

 //Optimize Way - Change the link for odd and even, and at last point the odd last to even first O(n), O(1)
 const oddEvenList = function(head) {
  if(head == null || head.next === null){
    return head;
  }
    let odd = head;
    let even = head.next;
    let evenHead = head.next; //or evenHead = evem
    while(even !== null && even.next !== null){
      odd.next = odd.next.next;
      even.next = even.next.next;

      //now move the odd and even
      odd = odd.next;
      even = even.next;
    }
    odd.next = evenHead;
    return head;
};

