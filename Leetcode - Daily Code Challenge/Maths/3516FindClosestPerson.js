/* 3516. Find Closest Person
04 sept 2025, leetcode POTD, EASY
Input: x = 2, y = 7, z = 4

Output: 1

Explanation:

Person 1 is at position 2 and can reach Person 3 (at position 4) in 2 steps.
Person 2 is at position 7 and can reach Person 3 in 3 steps.
Since Person 1 reaches Person 3 first, the output is 1.
*/

var findClosest = function(x, y, z) {
    let a = Math.abs(x-z);
    let b = Math.abs(y-z);
    if(a === b){
        return 0;
    }else if(a > b){
        return 2;
    }
    return 1;
};