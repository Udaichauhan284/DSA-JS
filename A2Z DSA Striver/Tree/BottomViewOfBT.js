/* Bottom View of BT
          20
        /    \
      8       22
    /   \        \
   5      3       25
        /   \      
      10    14
o/p: 5,10,3,14,25
*/
class Solution
{
    //Function to return a list containing the bottom view of the given tree.
    bottomView(root)
    {
        let ans = [];
        
        // Check if the tree is empty
        if (root === null) {
            return ans;
        }
        
        // Map to store the bottom view nodes
        // based on their vertical positions
        let mpp = new Map();
        
        // Queue for BFS traversal, each
        // element is a pair containing node
        // and its vertical position
        let q = [];
        
        // Push the root node with its vertical
        // position (0) into the queue
        q.push([root, 0]);
        
        // BFS traversal
        while (q.length > 0) {
            // Retrieve the node and its vertical
            // position from the front of the queue
            let [node, line] = q.shift();
            
            // Update the map with the node's data
            // for the current vertical position
            mpp.set(line, node.data);
            
            // Process left child
            if (node.left !== null) {
                // Push the left child with a decreased
                // vertical position into the queue
                q.push([node.left, line - 1]);
            }
            
            // Process right child
            if (node.right !== null) {
                // Push the right child with an increased
                // vertical position into the queue
                q.push([node.right, line + 1]);
            }
        }
        
        // Transfer values from the
        // map to the result vector
        for (let [key, value] of mpp) {
            ans.push(value);
        }
        
        return ans;
    }
}