/* 2169. Count Operations to Obtain Zero
09 Nov 2025, leetcode potd, easy
Input: num1 = 2, num2 = 3
Output: 3
Explanation: 
- Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
- Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
- Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
So the total number of operations required is 3.
*/

function countOperations(num1, num2) {
    let count = 0;

    while (num1 > 0 && num2 > 0) {
        count += Math.floor(num1 / num2);
        num1 = num1 % num2;

        // swap num1 and num2
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }

    return count;
}