/* 889. Constructs Binary Tree from Preorder and Postorder Traversal
23 Feb 25, Leetcode POTD, Binary Tree

Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
Output: [1,2,3,4,5,6,7]
*/


//tc: o(n^2), SC: O(n)
var constructFromPrePost = function(preorder, postorder) {
    let len = preorder.length;
    return solve(0,0,len-1,preorder,postorder);
};
function solve(prestart, poststart, preend, preorder, postorder){
    if(prestart > preend){
        return null;
    }
    let node = new TreeNode(preorder[prestart]);
    if(prestart === preend){
        return node
    }
    let nextNode = preorder[prestart+1];
    let j = poststart;
    while(postorder[j] !== nextNode){
        j++;
    }
    let num = j - poststart + 1;

    node.left = solve(prestart+1, poststart, prestart+num, preorder, postorder);
    node.right = solve(prestart+num+1, j+1, preend, preorder, postorder);
    
    return node;
}