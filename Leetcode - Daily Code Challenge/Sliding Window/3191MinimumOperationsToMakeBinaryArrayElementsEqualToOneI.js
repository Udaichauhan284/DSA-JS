/* 3191. Minimum Operations to Make Binary Array elements equal 
to One 1
19 March 25, Leetcode POTD

Input: nums = [0,1,1,1,0,0]

Output: 3

Explanation:
We can do the following operations:

Choose the elements at indices 0, 1 and 2. The resulting array is nums = [1,0,0,1,0,0].
Choose the elements at indices 1, 2 and 3. The resulting array is nums = [1,1,1,0,0,0].
Choose the elements at indices 3, 4 and 5. The resulting array is nums = [1,1,1,1,1,1].
*/

//Sliding Window TC: O(n), SC: O(1)
var minOperations = function(nums) {
    let len = nums.length;
    let count = 0;
    for(let i=0; i<(len-2); i++){
     //atleast we have 3 elem in array
     if(nums[i] === 0){
         nums[i] = 1-nums[i];
         nums[i+1] = 1-nums[i+1];
         nums[i+2] = 1-nums[i+2];
         count++;
     }
    } 
    //now check last two elem if they are flip 
    //or not
    if(nums[len-1] === 0 || nums[len - 2] === 0){
     return -1;
    }
    return count;
 };