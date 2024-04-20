/* 124 Binary Tree Maximum Path Sum

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

//Same as Diameter of BT, here we need to find the leftMaxPath and same for right path, in a recursive function and need to return the max. TC : O(n). SC : O(1)
*/
const maxPathSum = (root) => {
  if(root === null) return 0;
  let maxi = [Number.MIN_SAFE_INTEGER]; //array for reference
  findTheMaxPath(root,maxi);
  return maxi[0];
}
function findTheMaxPath(root,maxi){
  if(root === null) return 0;

  const leftMaxPath = Math.max(0, findTheMaxPath(root.left, maxi));
  const rightMaxPath = Math.max(0, findTheMaxPath(root.right,maxi));

  maxi[0] = Math.max(maxi[0], leftMaxPath+rightMaxPath+root.val);

  return root.val + Math.max(leftMaxPath,rightMaxPath);
}