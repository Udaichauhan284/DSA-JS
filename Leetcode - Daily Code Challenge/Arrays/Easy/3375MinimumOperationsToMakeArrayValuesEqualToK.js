/* 3375. minimum Operations To Make Array Values Equal to K
09 April 25, Leetcode POTD
nput: nums = [5,2,5,4,5], k = 2

Output: 2

Explanation:

The operations can be performed in order using valid integers 4 and then 2.

Input: nums = [2,1,2], k = 2

Output: -1

Explanation:

It is impossible to make all the values equal to 2.
*/

/*In this question, we need to pick the second 
largest elem, then we can choose an h such that
y <= h <= x and replace all occurrences of x in
the array with h.
TC: O(n), SC: O(n)
*/
var minOperations = function(nums, k) {
    let unique = new Set();
    for(let num of nums){
        if(num < k){
            //if any elem is less then k
            return -1;
        }else if(num > k){
            unique.add(num);
        }
    }
    return unique.size;
};