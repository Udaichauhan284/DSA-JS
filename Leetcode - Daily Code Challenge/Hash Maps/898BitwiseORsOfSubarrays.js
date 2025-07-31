/*898. Bitwise ORs of subarrays
31 July 2025, Leetcode POTD
Input: arr = [0]
Output: 1
Explanation: There is only one possible result: 0.
*/

var subarrayBitwiseORs = function(arr) {
    let prev = new Set();
    let result = new Set();

    for (let i = 0; i < arr.length; i++) {
        let curr = new Set();

        for (let x of prev) {
            curr.add(x | arr[i]);
            result.add(x | arr[i]);
        }

        curr.add(arr[i]);
        result.add(arr[i]);

        prev = curr;
    }

    return result.size;
};
