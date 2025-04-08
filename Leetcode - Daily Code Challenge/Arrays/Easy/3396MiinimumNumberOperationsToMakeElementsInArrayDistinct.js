/* 3396. Minimum Number Operations to Make Element in Array Distinct
08 April 2025, Leetcode POTD
Input: nums = [1,2,3,4,2,3,3,5,7]

Output: 2

Explanation:

In the first operation, the first 3 elements are removed, resulting in the array [4, 2, 3, 3, 5, 7].
In the second operation, the next 3 elements are removed, resulting in the array [3, 5, 7], which has distinct elements.
Therefore, the answer is 2.
*/

 //TC: O(n), SC:O(101)
 var minimumOperations = function(nums) {
    let len = nums.length;
    let seen = Array(101).fill(0);

    //now increase the freq 
    for(let num of nums){
        seen[num]++;
    }

    //now iterate over the hash
    let idx = 0;
    let ans = 0;
    while(!unique(seen)){
        let count = 3;
        while(idx < len && count-- > 0){
            //remmove from the array
            seen[nums[idx]]--;
            idx++; //move the pointer
        }
        ans++;
    }
    return ans;
};
function unique(seen){
    for(let i=0; i<seen.length; i++){
        //if freq is greater then 1
        if(seen[i] > 1) return false;
    }
    return true;
}