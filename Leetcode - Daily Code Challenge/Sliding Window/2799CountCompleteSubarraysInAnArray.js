/*2799. Count Complete Subarrays in An Array
24 April 25, leetcode POTD, Medium
Input: nums = [1,3,1,2,2]
Output: 4
Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].
*/


/*In this ques, i need to find the subarray where the
count of distinct elem is same as original array, in 
this first we take a set and our og array in that
and find the size of it, then we use the map and 
sliding window approach, to find the subarray,
from i to j, if we get the one good subarray, so 
from j to n, we get the total count from that i.
then we move forward and increase i and remove from 
map.
TC: O(n), SC: O(n)
*/
var countCompleteSubarrays = function(nums) {
    let len = nums.length;
    let set = new Set(nums);
    let mainCount = set.size; //count of distinct elem

    //now sliding window
    let i=0;
    let j=0;
    let res = 0;
    let map = new Map();
    while(j < len){
        //now increase the map, freq for that k
        map.set(nums[j], (map.get(nums[j]) || 0)+1);

        //now if map.size equal to mainCount
        while(map.size === mainCount){
            //now find the ans
            res += len-j;

            //now remove that i elem
            map.set(nums[i], (map.get(nums[i]))-1);
            if(map.get(nums[i]) === 0){
                //if freq of i is zero, delete
                map.delete(nums[i]);
            }
            i++;
        }
        j++;
    } 
    return res;
};