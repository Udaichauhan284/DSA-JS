/* 1022. Sum of Root To Leaf Binary Numbers
24 Feb 2026, leetcode potd, easy
Input: root = [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
*/

/*for finding the val, we know right now val is 1 suppose
which is root, when we append 0, left shift 1 and appending
1 to it. so simply we are doubling it 10, add 0 100, 2 to 4
TC: O(n), SC: O(height of tree) log(n)
*/
var sumRootToLeaf = function(root) {
    return solve(root, 0);
};
function solve(root, val){
    if(root === null) return 0;

    // Shift left (multiply by 2) and add current bit
    val = (val << 1) | root.val;

    // If this is a leaf node → return the value
    if (root.left === null && root.right === null) {
        return val;
    }
    return (solve(root.left, val)+solve(root.right,val));
}