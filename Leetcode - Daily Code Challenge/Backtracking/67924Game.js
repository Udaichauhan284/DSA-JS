/* 679. 24 Game
18 August 2025, Leetcode POTD, HARD
Input: cards = [4,1,8,7]
Output: true
Explanation: (8-4) * (7-1) = 24
*/

//Approach (Khandani Backtracking template and all possible options)
//T.C : O(1), size of input is constant and of size 4
//S.C : O(1), size of input is constant and of size 4
function judgePoint24(cards) {
    const epsilon = 1e-6; // tolerance for floating-point comparison

    function solve(nums) {
        if (nums.length === 1) {
            return Math.abs(nums[0] - 24) <= epsilon;
        }

        // pick two numbers
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;

                let temp = [];
                for (let k = 0; k < nums.length; k++) {
                    if (k !== i && k !== j) {
                        temp.push(nums[k]);
                    }
                }

                let a = nums[i], b = nums[j];
                let possibleVals = [a + b, a - b, a * b];

                if (Math.abs(b) > epsilon) {
                    possibleVals.push(a / b);
                }

                // try all possible next steps
                for (let val of possibleVals) {
                    temp.push(val);
                    if (solve(temp)) return true; // recursion
                    temp.pop(); // backtrack
                }
            }
        }
        return false;
    }

    return solve(cards.map(c => c * 1.0)); // ensure numbers are floats
}
