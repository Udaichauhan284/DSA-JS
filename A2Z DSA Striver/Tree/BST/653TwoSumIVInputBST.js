/*653. Two Sum IV - Input is a BST
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

*/ 
 //Brute Method - will be INorder in array , and then find the target TC : O(n)+O(n), SC : O(n)
const findTarget = (root,k) => {
  let arr = [];
  inOrderTraversal(root,arr);

  let left = 0;
  let right = arr.length-1;
  while(left < right){
    let sum = arr[left]+arr[right];
    if(sum === k) return true;
    else if (sum < k) left++;
    else right--;
  }
  return false;
};
function inOrderTraversal(root,arr){
  if(root === null){
    return;
  }
  inOrderTraversal(root.left,arr);
  arr.push(root.val);
  inOrderTraversal(root.right,arr);
}

 //Optimal Method - will be BSTIterator in this just we need to implement before()-Right,Node,Left, in this we need to pushAll node-right. TC : O(n), SC : O(h)*2 for next()and before(), reverse true means before, false means next
class BSTIterator{
  constructor(root,isReverse){
    this.stack = [];
    this.reverse = isReverse;
    this.pushAll(root);
  }

  hasNext(){
    return this.stack.length > 0;
  }
  next(){
    const node = this.stack.pop();
    if(!this.reverse) this.pushAll(node.right);
    else this.pushAll(node.left);
    return node.val;
  }
  pushAll(node){
    while(node !== null){
      this.stack.push(node);
      if(this.reverse === true) node = node.right;
      else node = node.left;
    }
  }
}
const findTarget1 = (root,k) => {
  if(root === null) return false;
  let l = new BSTIterator(root,false); //next; - Left,Node,Right
  let r = new BSTIterator(root,true); //before; - Right , Node, Left

  let i = l.next();
  let j = r.next();
  while(i < j){
    if(i+j === k) return true;
    else if (i+j < k) i = l.next();
    else j = r.next();
  }
  return false;
}