/* 2154. Keep Multiplying Found Values by Two
19 Nov 2025, leetcode potd, easy
Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.
*/
/*In this we need to take a map, so that we can 
easly see if we have original in map or not
TC: O(2n), SC: O(1001)
*/
var findFinalValue = function(nums, original) {
    //take an array for finite number, for the
    //freq
    let arr = Array(1001).fill(0);
    for(let num of nums){
        arr[num]++;
    }
    //now traverse over the for original till it not found in array with its freq 0
    while(original <= 1000 && arr[original] !== 0){
        original = original * 2;
    }
    return original;
};