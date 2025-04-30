/* 1295. Find Numbers With Even number of digits
30 April 25, Leetcode POTD EASY
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
*/

//TC: O(nlogM), SC: O(1)
var findNumbers = function(nums) {
    let count = 0;
    for(let num of nums){
        let countDigit = findCountDigit(num);
        if(countDigit % 2 === 0){
            count++;
        }
    }
    return count;
};
const findCountDigit = (num) => {
    let count = 0;
    while(num > 0){
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}