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



/*In this we can use the LC 974 logic, subarray sum 
equal to k, sum1 is something, s2, is something
we can find the (sum1-sum2)%mod === k, in this we can add
mod (sum1%mod - sum2%mod + mod)%mod === k
sum1%mod = r1, sum2mod =r2
(r1-r2)%mod === k => (r1-k+mod)%mod === r2
TC: O(n), SC: O(n)
*/
var countInterestingSubarrays = function(nums, modulo, k) {
    let len = nums.length;
    for(let i=0; i<len; i++){
        if(nums[i] % modulo === k){
            nums[i] = 1;
        }else{
            nums[i] = 0;
        }
    }
    //now using this, it will easy to find the sum
    //subarray
    let count = 0;
    let sum = 0;
    let map = new Map(); //remainder -> count
    //we alredy seen 0 rem
    map.set(0,1);
    for(let i=0; i<len; i++){
        sum += nums[i];

        let r1 = sum % modulo;
        let r2 = (r1-k+modulo)%modulo;

        //increase the count if r2 seen in map
        if(map.has(r2)){
            count += map.get(r2) || 0;
        }
        map.set(r1, (map.get(r1) || 0)+1);
    }
    return count;
};