/*2145. Count The Hidden Sequences
21 April 25, Leetcode POTD
Input: differences = [1,-3,4], lower = 1, upper = 6
Output: 2
Explanation: The possible hidden sequences are:
- [3, 4, 1, 5]
- [4, 5, 2, 6]
Thus, we return 2.
*/

/*In this we can use the maths, we need to maintain the 
lower and upper value
TC: O(n), SC:O(1)
*/
var numberOfArrays = function(differences, lower, upper) {
    let curr = 0;
    let minValue = 0;
    let maxValue = 0;

    for(let d of differences){
        curr = curr + d;

        minValue = Math.min(minValue, curr);
        maxValue = Math.max(maxValue, curr);

        if((upper-maxValue) - (lower-minValue) + 1 <= 0){
            return 0;
        }
    }
    return (upper-maxValue)-(lower-minValue)+1;
};