/* 2197. Replace Non-Coprime Numbers in Array
16 Sept 2025, leetcode potd, HARD
Input: nums = [6,4,3,2,7,6,2]
Output: [12,7,6]
Explanation: 
- (6, 4) are non-coprime with LCM(6, 4) = 12. Now, nums = [12,3,2,7,6,2].
- (12, 3) are non-coprime with LCM(12, 3) = 12. Now, nums = [12,2,7,6,2].
- (12, 2) are non-coprime with LCM(12, 2) = 12. Now, nums = [12,7,6,2].
- (6, 2) are non-coprime with LCM(6, 2) = 6. Now, nums = [12,7,6].
There are no more adjacent non-coprime numbers in nums.
Thus, the final modified array is [12,7,6].
Note that there are other ways to obtain the same resultant array.
*/

var replaceNonCoprimes = function(nums) {
    let result = [];

    for (let num of nums) {
        while (result.length > 0) {
            let prev = result[result.length - 1];
            let curr = num;
            let g = gcd(prev, curr);

            if (g === 1) {
                break;
            }

            result.pop();
            let lcm = (prev / g) * curr;
            num = lcm; // merged number
        }
        result.push(num);
    }

    return result;
};

// Helper function for GCD
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
