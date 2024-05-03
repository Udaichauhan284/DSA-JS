/* 99. Recover Binary Search Tree
Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

*/
//Brute Method - first do inorder and store in arr, sort that arr and then again do the inorder for comparing the arr value and tree value, which dont match swap that value TC : O(n)+O(nlogn)+O(n), SC : O(n), auxilary: O(n)
// var recoverTree = function(root) {
//     let arr = [];

//     const inOrder = (root, arr) => {
//         if(root === null) return;
//         inOrder(root.left, arr);
//         arr.push(root); 
//         inOrder(root.right, arr);
//     };

//     inOrder(root, arr);

//     // Sort the array of nodes
//     arr.sort((a, b) => a.val - b.val);

//     const compareTree = (root, index) => {
//         if(root === null || index >= arr.length) return;

//         compareTree(root.left, index);

//         if(root.val !== arr[index].val){
//             // Swap the value
//             let temp = root.val;
//             root.val = arr[index].val;
//             arr[index].val = temp;
//         }

//         compareTree(root.right, index+1);
//     };

//     compareTree(root, 0);
// };
//Optimal-INOrder, take first,middle and last variable for finding the value not arrange in right order, addjecent worng, or first and last wornd, then swap value TC : O(n), SC : O(n) just for inorder recursion.
const recoverTree = (root) => {
  let first = null;
  let middle = null;
  let prev = null;
  let last = null;

  const inOrder = (root) => {
    if(root === null) return;

    inOrder(root.left);

    if(prev !== null && prev.val > root.val){
      if(first === null){
        first = prev;
        middle = root;
      }else{
        last = root;
      }
    }
    prev = root;
    inOrder(root.right);
  };

  inOrder(root);

  //swap of first,last and middle
  if(first && last){
    let temp = first.val;
    first.val = last.val;
    last.val = temp;
  }else{
    let temp = first.val;
    first.val = middle.val;
    middle.val = temp;
  }
}

//Morris Travel - O(n), O(1);
const recoverTree1 = (root) => {
  let first = null;
  let middle = null;
  let prev = null;
  let last = null;

  const inOrder = (root) => {
    while(root){
      if(!root.left){
        if(prev !== null && prev.val > root.val){
          if(first === null){
            first = prev;
            middle = root;
          }else{
            last = root;
          }
        }
        prev = root;
        root = root.right;
      }else{
        let curr = root.left;
        while(curr.right && curr.right !== root){
          curr = curr.right;
        }
        if(curr.right === null){
          curr.right = root;
          root = root.left;
        }else{
          curr.right = null; //link breakage
          if(prev !== null && prev.val > root.val){
            if(first===null){
              first = prev;
              middle = root;
            }else{
              last = root;
            }
          }
          prev = root;
          root = root.right;
        }
      }
    }
  }
  inOrder(root);

  //swap
  if(first && last){
    let temp = first.val;
    first.val = last.val;
    last.val = temp;
  }else{
    let temp = first.val;
    first.val = middle.val;
    middle.val = temp;
  }
}