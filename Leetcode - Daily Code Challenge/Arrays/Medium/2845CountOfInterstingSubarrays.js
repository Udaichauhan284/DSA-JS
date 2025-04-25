/* 2845. Count of Interesting Subarrays
25 April 25, Leetcode POTD
Input: nums = [3,2,4], modulo = 2, k = 1
Output: 3
Explanation: In this example the interesting subarrays are: 
The subarray nums[0..0] which is [3]. 
- There is only one index, i = 0, in the range [0, 0] that satisfies nums[i] % modulo == k. 
- Hence, cnt = 1 and cnt % modulo == k.  
The subarray nums[0..1] which is [3,2].
- There is only one index, i = 0, in the range [0, 1] that satisfies nums[i] % modulo == k.  
- Hence, cnt = 1 and cnt % modulo == k.
The subarray nums[0..2] which is [3,2,4]. 
- There is only one index, i = 0, in the range [0, 2] that satisfies nums[i] % modulo == k. 
- Hence, cnt = 1 and cnt % modulo == k. 
It can be shown that there are no other interesting subarrays. So, the answer is 3.
*/

var countInterestingSubarrays = function(nums, modulo, k) {
    let count = new Map();
    count.set(0,1);
    let prefix = 0;
    let res = 0;
    for(let num of nums){
        prefix += (num % modulo === k) ? 1 : 0;
        let target = (prefix-k+modulo) % modulo;
        res += count.get(target) || 0;
        count.set(prefix % modulo, (count.get(prefix % modulo) || 0)+1);
    }
    return res;
};