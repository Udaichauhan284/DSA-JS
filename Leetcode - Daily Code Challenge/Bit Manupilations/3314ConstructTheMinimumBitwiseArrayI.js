/* 3314. Construct the Minimum Bitwise Array 1
20 Jan 2026, leetcode potd, easy
Input: nums = [2,3,5,7]

Output: [-1,1,4,3]

Explanation:

For i = 0, as there is no value for ans[0] that satisfies ans[0] OR (ans[0] + 1) = 2, so ans[0] = -1.
For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 3 is 1, because 1 OR (1 + 1) = 3.
For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 5 is 4, because 4 OR (4 + 1) = 5.
For i = 3, the smallest ans[3] that satisfies ans[3] OR (ans[3] + 1) = 7 is 3, because 3 OR (3 + 1) = 7.
*/

/*
In this we need to find the x till num[i]
by checking one by one
TC: O(n*max(nums[i])), SC: O(1)
*/
var minBitwiseArray = function(nums) {
    let len = nums.length;
    let ans = [];
    
    for(let i=0; i<len; i++){
        let found = false;
        for(let x=0; x<=nums[i]; x++){
            if((x | (x+1)) === nums[i]){
                //means we able to find the x
                ans.push(x);
                found = true;
                break; //need to break when we found
            }
        }
        //now check if we able to find the x
        if(! found){
            ans.push(-1);
        }
    }
    return ans;
};