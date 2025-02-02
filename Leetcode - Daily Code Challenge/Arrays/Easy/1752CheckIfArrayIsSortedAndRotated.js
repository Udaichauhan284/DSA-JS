/* 1752. Check if Array Is Sorted And Rotated
02 Feb 25, Leetcode POTD, Array
Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
*/

/*IN this we will check the prev elem with curr
elem, if that is bigger then currOne, we incre
the count, and when the count is less or equal
to 1, return true, otherwie false
TC: O(n), SC: O(1)
*/
const check = (nums) => {
    let len = nums.length;
    let count = 0;
    for(let i=0; i<len-1; i++){
        if(nums[i] > nums[i+1]){
            count++;
        }
    }

    if(nums[len-1] > nums[0]){
        count++;
    }

    if(count <= 1){
        return true;
    }
    return false;
}