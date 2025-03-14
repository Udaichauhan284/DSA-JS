/* 2226. Maximum Candies Allocated to K Children
14 March 25, Leetcode POTD Binary Seach

Input: candies = [5,8,6], k = 3
Output: 5
Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.

*/

/*Method1, in this we find the max candy and start giving to child from
max to 1 and see we able to give all or not, we will have a var of count
if count <= k, return that c otherwise return 0.
TC: O(n * maxC), SC: O(1)
*/
var maximumCandies = function (candies, k) {
    let len = candies.length;
    let maxC = Number.MIN_VALUE;
    let total = 0;
    for (let num of candies) {
        maxC = Math.max(num, maxC);
        total += num;
    }
    //now if total is less k, return 0
    if (total < k) return 0;

    //now traverse over maxC to 1, and start checking it
    for (let c = maxC; c >= 1; c--) {
        let count = 0;
        for (let i = 0; i < candies.length; i++) {
            count += Math.floor(candies[i] / c);
        }
        if (count >= k) {
            return c;
        }
    }
    return 0;
};



/*Method2, rather then going from maxC to 1, we can use the Binary Search
TC: O(n * log(maxC)), SC: O(1)
*/
var maximumCandies = function (candies, k) {
    let len = candies.length;
    let total = 0;
    let maxC = Number.MIN_VALUE;
    for (let num of candies) {
        maxC = Math.max(num, maxC);
        total += num;
    }
    //now if total is less k, we cannot divide into equal k part
    if (total < k) return 0;

    //now apply the Binary Search on MaxC
    let low = 0;
    let high = maxC;
    let result = 0;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (canDistribute(candies, mid, k)) {
            result = mid;
            low = mid + 1; //we want more max
        } else {
            high = mid - 1;
        }
    }
    return result;
};
function canDistribute(candies, mid, k) {
    let len = candies.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        count += Math.floor(candies[i] / mid);

        if (count >= k) { //all children got mid candies
            return true; //Early return
        }
    }
    return count >= k;
}