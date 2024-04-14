/* 404. SUm of Left Leaves
Daily LC code challenge - 14 April 2024.
given the root of a binary tree, return the sum of all left leaves node.
*/
 //Method 1- use of Parent Node, take a currNode and its parentNode, give in recurison solve and when you reach to leaft node, check, that is it left child for that parent or not if yes return the currNode.val - TC: O(n), SC :O(1), O(depth of tree) just for recurison.
var sumOfLeftLeaves = function(root) {
  //initial check if there is left or right present or not
  if(root.left === null && root.right === null){
    return 0;
  }

  //recursion call, passing currNode and parentNode, for root, there is no parent node, so null
  return solve(root,null);
};
//helper solve function
function solve(currNode,parentNode){
//base condition
if(currNode === null){
  return 0;
}

//main code, checking of leaf node
if(currNode.left === null && currNode.right === null){ //means leaf node
  //now check is that left child for parent
  if(parentNode !== null && parentNode.left === currNode){
    return currNode.val; //if yes then return the currNode val.
  }
}

//now call this function for left and right
let left = solve(currNode.left, currNode);
let right = solve(currNode.right, currNode);

return left + right;
}

//Method 2. rather than checking for parentNode, just take a boolean variable isLeft and pass that in solve function, to check is that left node or not TC : O(n), SC :O(1), O(depth of tree) this is for recursion call
const sumOfLeftLeaves1 = (root) => {
  //initial check 
  if(root.left === null && root.right === null){
    return 0;
  }

  //in this recursion helper solve function, i am sending the root - currNode and is that leftNode, no it it nor - isLeft-false;
  return solve(root, false);
}
//helper recrusion function
function solve(currNode, isLeft){
  //base condition
  if(currNode === null){
    return 0;
  }

  //now check is it left node or not, is yes return the its val
  if(currNode.left === null && currNode.right === null && isLeft===true){
    return currNode.val;
  }

//now call this function for left and right
  let left = solve(currNode.left,true);
  let right = solve(currNode.right,false);

  return left+right;
}