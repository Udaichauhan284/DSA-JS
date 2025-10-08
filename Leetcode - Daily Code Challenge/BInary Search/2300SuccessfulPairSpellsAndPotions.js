/*2300. Successful Pair Spells And Potions
08 Oct 2025, leetcode potd, medium
Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
Output: [4,0,3]
Explanation:
- 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
- 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
- 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
Thus, [4,0,3] is returned.
*/

var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b); // sort potions ascending
    const n = potions.length;
    const maxPotion = potions[n - 1];
    const answer = [];

    // helper binary search function
    function binarySearch(l, r, target) {
        let index = -1;
        while (l <= r) {
            const mid = Math.floor(l + (r - l) / 2);
            if (potions[mid] >= target) {
                index = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return index;
    }

    for (let i = 0; i < spells.length; i++) {
        const spell = spells[i];
        const minPotion = Math.ceil(success / spell);

        if (minPotion > maxPotion) {
            answer.push(0);
            continue;
        }

        const index = binarySearch(0, n - 1, minPotion);
        answer.push(n - index);
    }

    return answer;
};