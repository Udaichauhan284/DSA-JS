/* BST - Binary Search Tree
data < root, then this data will store in left side
data > root, then this data will store in right side

*/
class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor(){
    this.root = null;
  }
  insert(data){
    const node = new Node(data);

    if(this.root === null){
      this.root = node;
      return;
    }

    let curr = this.root;
    while(true){
      if(data < curr.data){
        if(curr.left === null){
          curr.left = node;
          return;
        }
        curr = curr.left;
      }else{
        if(curr.right === null){
          curr.right = node;
          return;
        }
        curr = curr.right;
      }
    }
  }
}