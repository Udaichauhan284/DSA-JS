/*2444.Count Subarrays With Fixed Bounds
26 April 25, Leetcode POTD, HARD
Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].
*/

/*Method1: Brute Method, find all the subarray using the
nested loop and in that, find the min is equal to mink
and max is equal to maxK
TC: O(n^2), SC: O(1)
*/
var countSubarrays = function(nums, minK, maxK) {
    let len = nums.length;
    let count = 0;
    for(let i=0; i<len; i++){
        let currMin = nums[i]; //initial min
        let currMax = nums[i]; //initial max
        for(let j=i; j<len; j++){
            //now check the min and max with currones
            currMin = Math.min(currMin, nums[j]);
            currMax = Math.max(currMax, nums[j]);

            //now check is currMin is equal to minK
            //and currMax is equal to maxK
            if(currMin === minK && currMax === maxK){
                count++;
            }
        }
    }
    return count;
};


/*In Optimal Method, we first see the elem is in range of
minK and maxK, if not, measn that is basPois, that will used
to find the count.
Now we find the index pos of minK and maxK, then we find the
min of minKpos and maxKpos and then minus it from badPos
if ans is less than equal to 0, means ans = 0, otherwise
add the count
TC: O(n), SC: O(1)
*/
var countSubarrays = function(nums, minK, maxK) {
    let len = nums.length;
    let badPos = -1;
    let minKPos = -1;
    let maxKPos = -1;
    let count = 0;
    let ans = 0;
    for(let i=0; i<len; i++){
        //now check that curr elem is in range or not
        //if not mark that as badPos
        if(nums[i] < minK || nums[i] > maxK){
            badPos = i;
        }

        //now mark the maxKpos and minKpos
        if(nums[i] === minK){
            minKPos = i;
        }
        if(nums[i] === maxK){
            maxKPos = i;
        }
        //now find the min of both pos and minus it from badone
        count = Math.min(minKPos, maxKPos) - badPos;
        //and this count into ans
        ans += count <= 0 ? 0 : count;
    }
    return ans;
};