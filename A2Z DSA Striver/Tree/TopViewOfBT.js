/* Top view of BT
     1
    /  \
   2    3
  / \  / \
4   5 6   7

Top view will be: 4 2 1 3 7
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//O(n), O(n/2)+O(n/2) ~ O(n)
class Solution {
  //Function to return a list of nodes visible from the top view
  //from left to right in Binary Tree.
  topView(root) {
    let ans = [];
    if (!root) return ans;

    let map = new Map();
    let q = [];
    q.push([root, 0]); // Initialize queue with root node
    while (q.length > 0) {
      let [node, line] = q.shift();

      if (!map.has(line)) {
        map.set(line, node.data);
      }

      // Traverse left and right
      if (node.left) q.push([node.left, line - 1]);
      if (node.right) q.push([node.right, line + 1]);
    }

    // Form result array
    for (let [key, value] of map) {
      ans.push(value);
    }
    return ans;
  }
}
