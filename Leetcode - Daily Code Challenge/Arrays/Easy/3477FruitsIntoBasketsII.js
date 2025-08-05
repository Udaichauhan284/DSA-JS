/* 3477. Fruits Into Baskets II
05 Aug 2025, Leetocde POTD, Easy
Input: fruits = [4,2,5], baskets = [3,5,4]

Output: 1

Explanation:

fruits[0] = 4 is placed in baskets[1] = 5.
fruits[1] = 2 is placed in baskets[0] = 3.
fruits[2] = 5 cannot be placed in baskets[2] = 4.
Since one fruit type remains unplaced, we return 1.


*/

var numOfUnplacedFruits = function(fruits, baskets) {
    const n = fruits.length;
    const used = new Array(n).fill(false); // track used baskets
    let unplaced = 0;

    for (let i = 0; i < n; i++) {
        let placed = false;
        for (let j = 0; j < n; j++) {
            if (!used[j] && baskets[j] >= fruits[i]) {
                used[j] = true; // mark basket as used
                placed = true;
                break;
            }
        }
        if (!placed) unplaced++;
    }

    return unplaced;
};
