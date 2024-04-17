/* 988 Smallest String Startiing from leaf.
You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.

Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

As a reminder, any shorter prefix of a string is lexicographically smaller.

For example, "ab" is lexicographically smaller than "aba".
A leaf of a node is a node that has no children.

Input: root = [0,1,2,3,4,3,4]
Output: "dba"

TC : O(n), if we ignore curr length, SC :O(H), recrusion call depth of height of tree
*/
const smallestString = (root) => {
  let result = "";

 const dfs = (root, curr) => {
  if(!root){
    return;
  }
  curr = String.fromCharCode(root.val + 97) + curr;

  if(root.left === null && root.right === null){
    if(result === "" || result > curr){
      result = curr;
    }
  }

  dfs(root.left, curr);
  dfs(root.right, curr);
 };

  dfs(root, "");
  return result;
};