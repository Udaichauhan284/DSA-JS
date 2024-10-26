/* 2458 Height of Binary Tree After Subtrr Removal Queries
26 Oct 2024, Leetcode POTD

Input: root = [1,3,4,2,null,6,5,null,null,null,null,null,7], queries = [4]
Output: [2]
Explanation: The diagram above shows the tree after removing the subtree rooted at node with value 4.
The height of the tree is 2 (The path 1 -> 3 -> 2).
*/

const treeQueries = (root, queries) => {
  // Scoped arrays to store information per call
  let level = Array(1000001).fill(0);  // Stores level of each node
  let height = Array(100001).fill(0);  // Stores height of each node
  let levelMaxHt = Array(100001).fill(0);  // Maximum height at each level
  let levelSecondMaxHt = Array(100001).fill(0);  // Second max height at each level

  function findHeight(node, l) {
      if (!node) return 0;

      level[node.val] = l;
      height[node.val] = Math.max(findHeight(node.left, l + 1), findHeight(node.right, l + 1)) + 1;

      if (levelMaxHt[l] < height[node.val]) {
          levelSecondMaxHt[l] = levelMaxHt[l];
          levelMaxHt[l] = height[node.val];
      } else if (levelSecondMaxHt[l] < height[node.val]) {
          levelSecondMaxHt[l] = height[node.val];
      }

      return height[node.val];
  }

  // Step 1: Calculate height and level information
  findHeight(root, 0);

  // Step 2: Process each query
  const result = [];
  for (const node of queries) {
      const L = level[node];  // Level of the node to be deleted

      // Calculate the result for this query
      const tempResult = L + (levelMaxHt[L] === height[node] ? levelSecondMaxHt[L] : levelMaxHt[L]) - 1;
      result.push(tempResult);
  }

  return result;
};

