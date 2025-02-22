/*1028. Recover a Tree From Preorder Traversal
Leetcode POTD, Binary Search
*/

 //TC: O(n), SC: O(n)
 var recoverFromPreorder = function(traversal) {
    let len = traversal.length;
    let index = { value: 0 }; // Use an object to maintain a reference to index across recursion
    return solve(traversal, index, 0, len);
};

function solve(traversal, index, depth, len) {
    if (index.value >= len) return null;

    // Count the dashes
    let j = index.value;
    while (j < len && traversal[j] === "-") {
        j++;
    }
    let dash = j - index.value;

    // If depth doesn't match, return null
    if (depth !== dash) return null;

    index.value = j; // Move index to the digit position

    // Extract the value of the node
    let value = 0;
    while (index.value < len && traversal[index.value] >= '0' && traversal[index.value] <= '9') {
        value = value * 10 + (traversal[index.value] - '0');
        index.value++;
    }

    let temp = new TreeNode(value);
    temp.left = solve(traversal, index, depth + 1, len);
    temp.right = solve(traversal, index, depth + 1, len);

    return temp;
}