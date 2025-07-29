/*2411. Smallest Subarrays with Maximum Bitwise OR
29 July 2025, Leetcode POTD, Medium
Input: nums = [1,0,2,1,3]
Output: [3,3,2,2,1]
Explanation:
The maximum possible bitwise OR starting at any index is 3. 
- Starting at index 0, the shortest subarray that yields it is [1,0,2].
- Starting at index 1, the shortest subarray that yields the maximum bitwise OR is [0,2,1].
- Starting at index 2, the shortest subarray that yields the maximum bitwise OR is [2,1].
- Starting at index 3, the shortest subarray that yields the maximum bitwise OR is [1,3].
- Starting at index 4, the shortest subarray that yields the maximum bitwise OR is [3].
Therefore, we return [3,3,2,2,1]. 
*/

//Approach (Using frequency count and Xor Property)
//T.C : O(n)
//S.C : O(1)
var smallestSubarrays = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    const setBitIndex = new Array(32).fill(-1);
    // setBitIndex[j] = i => jth bit can be set by nums[i]

    for (let i = n - 1; i >= 0; i--) {
        let endIndex = i;

        for (let j = 0; j < 32; j++) {
            if ((nums[i] & (1 << j)) === 0) {
                if (setBitIndex[j] !== -1) {
                    endIndex = Math.max(endIndex, setBitIndex[j]);
                }
            } else {
                setBitIndex[j] = i;
            }
        }

        result[i] = endIndex - i + 1;
    }

    return result;
};
