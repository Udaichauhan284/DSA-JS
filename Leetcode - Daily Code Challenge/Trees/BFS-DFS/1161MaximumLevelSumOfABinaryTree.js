/* 1161. Maximum Level Sum of a Binary Tree
06 Jan 2026, leetcode POTD, MEDIUM
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

*/

/*Approach 1, we use the BFS, in this we will take
queue, and start traversing on it, till queue not
empty, in that we will traverse on the level
and take sum of it eleme and add left and right child
in que.
TC: O(n), SC: O(n)
*/
var maxLevelSum = function(root) {
    let currLevel = 1; //because we are at root
    let resultLevel = 0;
    let maxSum = -Infinity;

    let queue = [root];
    let idx = 0;

    while (idx < queue.length) {
        let levelSize = queue.length - idx;
        let sum = 0;

        for (let i = 0; i < levelSize; i++) {
            let node = queue[idx++];
            sum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (sum > maxSum) {
            maxSum = sum;
            resultLevel = currLevel;
        }

        currLevel++;
    }
    return resultLevel;
};