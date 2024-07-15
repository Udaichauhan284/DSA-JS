/* 2196. Create Binary Tree From Descriptions
15 July 2024, Leetcode POTD, Tree, Array, Map, Set
You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,

If isLefti == 1, then childi is the left child of parenti.
If isLefti == 0, then childi is the right child of parenti.
Construct the binary tree described by descriptions and return its root.

The test cases will be generated such that the binary tree is valid.

Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
Output: [50,20,80,15,17,19]
Explanation: The root node is the node with value 50 since it has no parent.
The resulting binary tree is shown in the diagram.
*/

/*In this we need to use map, to store the parent and its tree node, while
traversing, same with child, and also take a set, for maintaining the child
node, which parent elem of description not presnt in childSet, that is our
root.
TC: O(n)+O(n) ~ O(2n) ~ O(n)
SC: O(n)
*/
var createBinaryTree = function(descriptions) {
  let map = new Map();
  let childSet = new Set();

  for(let [parent,child,isLeft] of descriptions){
      //now check is map, is there parent node , child node present or not
      if(!map.has(parent)){
          let parentTreeNode = new TreeNode(parent);
          map.set(parent, parentTreeNode);
      }
      if(!map.has(child)){
          let childTreeNode = new TreeNode(child);
          map.set(child, childTreeNode);
      }
      //check for isLeft, left child, or right child
      if(isLeft === 1) {
          //left child
          map.get(parent).left = map.get(child);
      }else{
          //right child
          map.get(parent).right = map.get(child);
      }
      //is there is child, so add in childSet
      childSet.add(child);
  }

  //now check, which parent elem is not present in childSet
  let root = null;
  for(let [parent,child,isLeft] of descriptions){ //or [parent, _]
      if(!childSet.has(parent)){
          root = map.get(parent); //parent:parentTreeNode
          break;
      }
  }
  return root; 
};