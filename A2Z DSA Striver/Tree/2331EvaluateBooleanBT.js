/* 2331. Evaluate Boolean Binary Tree
0-false, 1-true leaf Nodes
non leaf node, 2 -OR, 3 - AND

16 May 2024, Leetcode Code Daily Challenge, Topic: Binary Tree, Easy
Input: root = [2,1,3,null,null,0,1]
Output: true
Explanation: The above diagram illustrates the evaluation process.
The AND node evaluates to False AND True = False.
The OR node evaluates to True OR False = True.
The root node evaluates to True, so we return true.
*/
class TreeNode {
  constructor(left, right, val) {
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.val = val === undefined ? 0 : val;
  }
}
const evaluateTree = (root) => {
  if (root.left === null && root.right === null) {
    return root.val;
  }
  let leftValue = evaluateTree(root.left);
  let rightValue = evaluateTree(root.right);
  if (root.val === 2) {
    return leftValue | rightValue;
  } else {
    return leftValue & rightValue;
  }
};
