/* 3105 Longest Strictly Increasing or Strictly Decreasing Subarray
03 Feb 25, Leetcode POTD, Array
Input: nums = [1,4,3,3,2]

Output: 2

Explanation:

The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].

The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].

Hence, we return 2.

Input: nums = [3,2,1]

Output: 3

Explanation:

The strictly increasing subarrays of nums are [3], [2], and [1].

The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].

Hence, we return 3.
*/

/*In Brute Method, we use the two pointer, 
and check if that is in decreasing or increasing
order.
TC: O(n^2), SC: O(1)
*/

const longestMonotonicSubarray = (nums) => {
    let len = nums.length;
    let result = 1;
    for(let i=0; i<len; i++){
        let currLen = 1;
        for(let j=i+1; j<len; j++){
            if(nums[j] > nums[j-1]){
                currLen++;
            }else{
                break;
            }
        }   
        result = Math.max(result, currLen);

        currLen = 1;
        for(let j=i+1; j<len; j++){
            if(nums[j] < nums[j-1]){
                currLen++;
            }else{
                break;
            }
        }
        result = Math.max(result, currLen);
    }
    return result;
}


/*Optimal Method, we can use the declare the
global variable of incre and decrement and use the
if else in for loop
TC: O(n), SC: O(1)
*/
var longestMonotonicSubarray1 = function(nums) {
    let len = nums.length;
    let result = 1;
    let incre = 1;
    let decre = 1;
    for(let i=1; i<len; i++){
        if(nums[i] > nums[i-1]){
            incre++;
            decre = 1;
        }else if(nums[i] < nums[i-1]){
            decre++;
            incre = 1;
        }else{
            incre = 1;
            decre = 1;
        }
        result = Math.max(result, incre, decre);
    }
    return result;
};