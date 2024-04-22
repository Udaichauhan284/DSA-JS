/* 987. vertical order Traversal of a Binary Tree
left child: - (row+1,col-1), right child: (row+1,col+1)
Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
Explanation:
Column -1: Only node 9 is in this column.
Column 0: Nodes 3 and 15 are in this column in that order from top to bottom.
Column 1: Only node 20 is in this column.
Column 2: Only node 7 is in this column.
*/
//First take a map, stroe x means vertical points and node val, then do level traversal and then sort the points and val anf return the array: TC : O(nlogn), SC : O(n)
//TC : O(nlogn), SC : O(n)
var verticalTraversal = function (root) {
  const nodes = new Map(); // Map to store nodes based on their vertical position

  // Helper function to perform DFS traversal
  const traverse = (node, x, y) => {
    if (!node) return;

    if (!nodes.has(x)) {
      nodes.set(x, []);
    }
    nodes.get(x).push({ value: node.val, y });

    traverse(node.left, x - 1, y + 1);
    traverse(node.right, x + 1, y + 1);
  };

  // Perform DFS traversal
  traverse(root, 0, 0);

  // Sort nodes based on x-coordinate and y-coordinate
  const sortedNodes = Array.from(nodes.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([x, values]) =>
      values
        .sort((a, b) => (a.y !== b.y ? a.y - b.y : a.value - b.value))
        .map((node) => node.value)
    );

  return sortedNodes;
};
console.log(verticalTraversal([3, 9, 20, null, null, 15, 7]));
