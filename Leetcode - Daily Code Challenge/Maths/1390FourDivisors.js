/*1390. Four Divisors
04 Jan 2026, leetcode potd, medium
Input: nums = [21,4,7]
Output: 32
Explanation: 
21 has 4 divisors: 1, 3, 7, 21
4 has 3 divisors: 1, 2, 4
7 has 2 divisors: 1, 7
The answer is the sum of divisors of 21 only.

*/

var sumFourDivisors = function(nums) {
    let result = 0;
    for(let num of nums){
        result += findSum(num);
    }
    return result;
};
function findSum(num){
    let divisorCount = 0;
    let sum = 0;

    for (let fact = 1; fact * fact <= num; fact++) {
        if (num % fact === 0) {
            let otherDiv = num / fact;

            if (fact === otherDiv) {
                divisorCount += 1;
                sum += fact;
            } else {
                divisorCount += 2;
                sum += fact + otherDiv;
            }
        }

        if (divisorCount > 4) return 0;
    }

    return divisorCount === 4 ? sum : 0;
}