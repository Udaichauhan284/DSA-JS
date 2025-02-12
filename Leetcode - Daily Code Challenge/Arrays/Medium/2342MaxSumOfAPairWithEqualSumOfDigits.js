/*2342 Max Sum of a Pair With Equal Sum of Digits
12 Feb 25, Leetcode POTD, Array, Hash Table

Input: nums = [18,43,36,13,7]
Output: 54
Explanation: The pairs (i, j) that satisfy the conditions are:
- (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
- (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
So the maximum sum that we can obtain is 54.
*/

/*Brute Method, simple use of two nested loops,
and inside that find the digitSum, if digitSum equals
find the max of nums[i]+nums[j]
TC: O(n^2 * m), SC: O(1)
*/
var maximumSum = function(nums) {
    let len = nums.length;
    let result = -1;
    for(let i=0; i<len; i++){
        let digitSumI = getDigitSum(nums[i]);
        for(let j=i+1; j<len; j++){
            let digitSumJ = getDigitSum(nums[j]);

            if(digitSumI === digitSumJ){
                result = Math.max(result, (nums[i]+nums[j]))
            }
        }
    }
    return result;
};
function getDigitSum(num){
    let sum = 0;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}


/*Optimal Method, in this we can take the array
of size 82 why because nums[i] < 10^9,
so last biggest sum will be of 999999999 => 81
so take array of size 82
TC: O(n*m) m is for digit sum , SC: O(82)
*/
var maximumSum = function(nums) {
    let len = nums.length;
    let arr = Array(82).fill(0);
    let result = -1;
    for(let i=0; i<len; i++){
        let digitSum = getDigitSum(nums[i]);

        if(arr[digitSum] > 0){
            //if digitSum is greater then 0
            //find out the result
            result = Math.max(result, arr[digitSum]+nums[i]);
        }
        arr[digitSum] = Math.max(arr[digitSum], nums[i]);
    }
    return result;
};
function getDigitSum(num){
    let sum = 0;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}