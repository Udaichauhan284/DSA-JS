/* 549. Longest Harmonious Subsequence
30 June 2025, Leetcode POTD, EASY
Input: nums = [1,3,2,2,5,2,3,7]

Output: 5

Explanation:

The longest harmonious subsequence is [3,2,2,2,3].
*/

/*In this we need to count the nums freq in map,
and if we have minValue=x, so maxValue=x+1,
then how we can maintain the 1 difference,
so we will check the maxValue in map, if we have,
we will add the freq of min and max and return it
TC: O(n), SC: O(1)
*/
var findLHS = function(nums) {
    let map = new Map();
    let result = 0;

    //now calculate the freq
    for(num of nums){
        map.set(num, (map.get(num) || 0)+1);
    }

    for(let num of nums){
        let minValue = num;
        let maxValue = num+1;

        if(map.has(maxValue)){
            result = Math.max(result, (map.get(minValue)+map.get(maxValue)));
        }
    }
    return result;
};