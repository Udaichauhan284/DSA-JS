/* Flattened the LL
given no. of head 4
array holding length of each head : [4,2,3,4]
flattened the node in form of child : measn make sorted LL in vertically, rather than horizontal.

1. Brute : Take a arr sort all nodes in that and sort the arr and then form a new vertical LL.
TC: O(2(n*m) + nmlognm), one (n*m) is for putting the node in arr and other n*m is for converting the LL. nmlognm is for sorting.

2. Optimal : first merge 2linked list with use of dummyNode, same like you merge simple LL. for multiple LL use recursion.
merge two linked list will act as one LL and that head will used as newhead for next LL. for merging, use of Recursion and Backtracking.
TC: O(2n), SC : O(n)
*/
const flatteningLL = (head) => {
  let arr = [];
  let temp = head;
  while(temp !== null){
    let t2 = temp;
    while(t2 !== null){
      arr.push(t2.val);
      t2 = t2.child;
    }
    temp = temp.next;
  }
  arr.sort((a,b) => a-b);

  head = convertArr(arr);

  return head;
}
function convertArr(arr){
  let len = arr.length;
  if(len === 0) {
    return null;
  }
  let head= new Node(arr[0]);
  let temp = head;
  for(let i=0; i<len; i++){
    const newNode = new Node(arr[i]);
    temp.child = newNode;
    temp=temp.child;
  }
  return head;
}

//optimal way
const optimalFlattingLL = (head) => {
  if(head === null || head.next === null){
    return head;
  }

  let nextNode = optimalFlattingLL(head.next);
  return mergeLL(head,nextNode);
}
//merge function
function mergeLL(list1, list2){
  let dummyNode = new Node(-1);
  let res = dummyNode;

  while(list1 !== null && list2 !== null){
    if(list1 < list2){
      res.child = list1;
      res = list1;
      list1 = list1.child;
    }else {
      res.child = list2;
      res = list2;
      list2 = list2.child;
    }
  }
  if(list1){
    res.child = list1;
  }else{
    res.child = list2;
  }
  return dummyNode.next;
}