/* 2537. Count the Number of Good Subarrays
16 April 25, Leetcode POTD
Input: nums = [3,1,4,3,2,2,4], k = 2
Output: 4
Explanation: There are 4 different good subarrays:
- [3,1,4,3,2,2] that has 2 pairs.
- [3,1,4,3,2,2,4] that has 3 pairs.
- [1,4,3,2,2,4] that has 2 pairs.
- [4,3,2,2,4] that has 2 pairs.
*/

/*In this we can use the map for freq, to check if we have already
seen it before or not, and use the sliding window method.
TC: O(n), SC: O(n)
*/
var countGood = function(nums, k) {
    let len = nums.length;
    let i=0, j=0;
    let freq = []
    let pairs = 0;
    let result = 0; //give the count of good subarray
    while(j < len){
        freq[nums[j]] = (freq[nums[j]] || 0);
        //add in pairs, to see if we have this j already seen
        pairs += freq[nums[j]]
        freq[nums[j]]++;

        while(pairs >= k){
            result += (len - j);

            freq[nums[i]]--;
            pairs -= freq[nums[i]];
            i++;
        } 
        j++;
    }
    return result;
};