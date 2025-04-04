/* 1123. Lowest Common Ancestor Deepest Leaves
04 April 25, Leetcode POTD
Input: root = [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation: We return the node with value 2, colored in yellow in the diagram.
The nodes coloured in blue are the deepest leaf-nodes of the tree.
Note that nodes 6, 0, and 8 are also leaf nodes, but the depth of them is 2, but the depth of nodes 7 and 4 is 3.
*/
//TC: O(n), SC: O(n)
var lcaDeepestLeaves = function(root) {
    if(root === null) return null;

    let lh = height(root.left);
    let rh = height(root.right);

    if(lh === rh){
        return root;
    }
    if(lh > rh){
        return lcaDeepestLeaves(root.left);
    }

    return lcaDeepestLeaves(root.right);
};
function height(root){
    if(root === null) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
}