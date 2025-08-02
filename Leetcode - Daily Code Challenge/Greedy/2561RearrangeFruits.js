/*2561. Rearrange Fruits
LC POTD 2 August 2025, HARD
Input: basket1 = [4,2,2,2], basket2 = [1,4,1,2]
Output: 1
Explanation: Swap index 1 of basket1 with index 0 of basket2, which has cost 1. Now basket1 = [4,1,2,2] and basket2 = [2,4,1,2]. Rearranging both the arrays makes them equal.
*/

//Approach (Greedily swapping directly element or swapping via minimum element)
//T.C : O(n), Average time complexity of nth_element is O(n)
//S.C : O(n)
var minCost = function(basket1, basket2) {
    const mp = new Map();
    let minEl = Infinity;

    for (const x of basket1) {
        mp.set(x, (mp.get(x) || 0) + 1);
        minEl = Math.min(minEl, x);
    }

    for (const x of basket2) {
        mp.set(x, (mp.get(x) || 0) - 1);
        minEl = Math.min(minEl, x);
    }

    const finalList = [];

    for (const [cost, count] of mp.entries()) {
        if (count === 0) continue;

        if (Math.abs(count) % 2 !== 0) return -1;

        for (let i = 0; i < Math.abs(count) / 2; i++) {
            finalList.push(cost);
        }
    }

    finalList.sort((a, b) => a - b); // for correct half-partition

    let result = 0;
    const half = finalList.length / 2;

    for (let i = 0; i < half; i++) {
        result += Math.min(finalList[i], minEl * 2);
    }

    return result;
};