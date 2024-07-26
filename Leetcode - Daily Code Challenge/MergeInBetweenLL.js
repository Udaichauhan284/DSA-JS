/* 20 March 2024
1669 Merge in between linked lists
list1 = [10,1,13,6,9,5], a=3, b=4
so delete the a and b pointer 6 and 9
list2 = [50,51,52]
output: [10,1,13,50,51,52,5]

TC : we are traveing every node O(n+m)
SC : O(1)
*/
const mergeNode = (list1,a,b,list2) => {
  let left = null;
  let right = list1;
  //traverse in list1 with help of right - point to left and itself
  for(let i=0; i<=b; i++){
    if(i === a-1){ //pointing left pointer at a-1 node
      left = right; 
    }
    right = right.next; // at last right point to b+1
  }
  //now we get the left pointer so link left pointer o list2 head
  left.next = list2;

  //now traverse the list2 so we find the last elem
  let temp = list2;
  while(temp.next !== null){
    temp = temp.next;
  }
  temp.next = right; //here pointing the last of list2 to right pointer in list1.

  return list1;
}