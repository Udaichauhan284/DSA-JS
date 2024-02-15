/* Binary Tree
- A Binary Tree is a tree data structure in which each node has at most two children.
- They are referred to as Left Child and Right Child.

-- Binary Search Tree (BST)
- The value of each left node must be smaller than the parent node.
- The value of each right node must be greater than the parent node.
- Each node has at most two children.

-- Operation
a. Insetion : to add a node to the tree.
b. Search : to find a node given its value.
c. DFS and BFS : to vist all nodes in the tree.
d. Deletion : To remove a node given its value.

-- Usage
a. Searching
b. Sorting
c. To implement abstract data types such as lookup tables and priority queues.

## Tree Traversal
- Visting every node in the tree.
- A hierarchical data structure like a tree can be traversed in different ways.
1. Depeth First Search (DFS)
2. Breath First Search (BFS)

-- Depeth First Search ( DFS )
-The DFS algo starts at the root node and exlores as far as possible along each branch before backtracking.

- Visit the root node, visit all the nodes in the left subtree and visit all the nodes in the right subtree.

-Depending on the order in which we do this, there can be three types of DFS traversals.
1. preorder
2. Inorder
3. Postorder

-- Pre-Order
a. Read the data of the node
b. visit the left subtree.
c. Visit the right subtree

-- In-Order
a. Vist the left subtree
b. read the data of the node
c. Visit the right subtree.

-- Post-Order
a. visit the left subtree
b. visit the right subtree
c. read the data of the node.

--- Breath First Search (BFS)
- Explore all nodes at the present depth prior to moving on to the nodes at the next depth level.

-- BFS Traversal Approach
1. Create a Queue
2. enqueue the root node
3. as long as a node exists in the queue. 
    a. dequeue the node from the front
    b. read the node's value
    c. Enqueue the node's left child if exists
    d. enqueue the node's right child if it exists.
*/

//this is just a node class
class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//binary search tree with root
class BinarySearchTree{
  constructor(){
    this.root = null; //empty BST
  }
  isEmpty(){
    return this.root === null;
  }

  //inserting new node
  insert(value){
    const newNode = new Node(value);
    if(this.isEmpty()){
      this.root = newNode;
    }else{
      this.insertNode(this.root, newNode);
    }
  }
  //this is a insertNode
  insertNode(root, newNode){
    if(newNode.value < root.value){
      if(root.left === null){
        root.left = newNode;
      }else{
        this.insertNode(root.left, newNode);
      }
    }else{
      if(root.right === null){
        root.right = newNode;
      }else{
        this.insertNode(root.right, newNode);
      }
    }
  }

  //search in BST
  search(root, value){
    if(!root){
      return "Tree is empty"
    }else{
      if(root.value === value) {
        return true;
      }else if(value < root.value){
        return this.search(root.left, value);
      }else {
        return this.search(root.right, value);
      }
    }
  }

  //Pre-Order root -> left -> right
  preOrder(root){
    if(root){
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  //In-order left -> root -> right
  inOrder(root){
    if(root){
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  //Post-Order Left -> Right -> Root
  postOrder(root){
    if(root){
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  //Breath first Search
  breathFirstSearch(){
    const queue = {};
    let rear = 0;
    let front = 0;
    queue[rear] = this.root;
    while(rear >= front){
      let curr = queue[front];
      console.log(curr.value);
      if(curr.left){
        rear++;
        queue[rear] = curr.left;
      }
      if(curr.right){
        rear++;
        queue[rear] = curr.right;
      }
      front++; //move the front pointer to dequeue.
  }
  }

  //Min in tree
  min(root){
    if(!root.left){
      return root.value;
    }else{
      return this.min(root.left);
    }
  }

  //max in tree
  max(root){
    if(!root.right){
      return root.value;
    }else{
      return this.max(root.right);
    }
  }

  //Delete in Tree
  delete(value){
    this.root = this.deleteNode(this.root, value);
  }
  //delete node
  deleteNode(root, value){
    if(root === null){
      return root;
    }
    if(value < root.value){
      root.left = this.deleteNode(root.left, value);
    }else if(value > root.value){
      root.right = this.deleteNode(root.right, value);
    }else {
      if(!root.left && !root.right){
        return null;
      }
      if(!root.left){
        return root.right;
      }else if(!root.right){
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value)
    }
    return root;
  }
}

const bst = new BinarySearchTree();
console.log("Binary Search Tree is Empty? " + bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 2));
// bst.postOrder(bst.root);
// bst.inOrder(bst.root);
bst.breathFirstSearch();
console.log("Minimum in Tree ", + bst.min(bst.root));
console.log("Max in Tree "+ bst.max(bst.root));