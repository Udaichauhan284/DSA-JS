/* Copy List with Random Pointer

1.brute: use of hashMap, first set the deep copy of node into map, then iterate through the LL for creating the node from Map, and at last return the map,get(head)
TC : O(n) + O(n), SC : O(n)
*/
const copyRadnomList = (head) => {
  if(head === null){
    return head;
  }
  let temp=head;
  let map = new Map();
  while(temp !== null){
    let newNode = new Node(temp.val); //deepcopy of curr node
    map.set(temp,newNode);
    temp=temp.next;
  }

  //again iteration, for creating new node from map;
  let t = head;
  while(t !== null){
    let node = map.get(t);
    node.next = map.get(t.next) || null;
    node.random = map.get(t.random) || null;
    t = t.next;
  }
  return map.get(head);
}

//Optimize 1. insert copy node in between of original list, 2. Connect Random pointer, 3. Connect next random pointer and take out that copy list with help of DummyNode. TC O(n)+O(n)+O(n), SC : O(n): this question ask for new LL.
//1.
const findCopyNodeInsertInBetween = (head) => {
  let temp = head;
  while (temp !== null) {
    let copyNode = new Node(temp.val);
    copyNode.next = temp.next;
    temp.next = copyNode;

    temp = temp.next.next;
  }
}

const connectRandomPointer = (head) => {
  let temp = head;
  while (temp !== null) {
    let copyNode = temp.next;
    if (temp.random) {
      copyNode.random = temp.random.next;
    } else {
      copyNode.random = null;
    }
    temp = temp.next.next;
  }
}

const getDeepCopyList = (head) => {
  let temp = head;
  let dummyNode = new Node(-1);
  let res = dummyNode;
  while (temp !== null) {
    // connecting the pointer
    res.next = temp.next;
    temp.next = temp.next.next;
    res = res.next;
    temp = temp.next;
  }
  return dummyNode.next;
}

var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  findCopyNodeInsertInBetween(head);
  connectRandomPointer(head);
  return getDeepCopyList(head);
};