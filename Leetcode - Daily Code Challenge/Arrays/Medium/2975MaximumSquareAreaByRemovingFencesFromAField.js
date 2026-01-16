/* 2975. Maximum Square Area By Removing Fences From a Field
16 Jan 2026, leetcode potd, medium
Input: m = 4, n = 3, hFences = [2,3], vFences = [2]
Output: 4
Explanation: Removing the horizontal fence at 2 and the vertical fence at 2 will give a square field of area 4.
*/

/*In this, we know 1 and side fences are fixed, so we need
to add 1 and m,n into the hFences and vFences respectively
Now, we need to find the maxWidth by removing the vFences
for that, need to start finding the diff of fences and need
to push into the new set called width, same for height,
but when we find the height in that we will check if that
height is there in width, if yes then we will find the 
maxSide
TC: O(h^2 + v^2), SC: O(h+v)
*/
var maximizeSquareArea = function(m, n, hFences, vFences) {
    const MOD = 1000000007n;

    // push borders
    hFences.push(1, m);
    vFences.push(1, n);

    let widths = new Set();
    let heights = new Set();

    // calculate widths
    for (let i = 0; i < vFences.length; i++) {
        for (let j = i + 1; j < vFences.length; j++) {
            widths.add(Math.abs(vFences[j] - vFences[i]));
        }
    }

    let maxSide = 0;

    // calculate heights and match
    for (let i = 0; i < hFences.length; i++) {
        for (let j = i + 1; j < hFences.length; j++) {
            let height = Math.abs(hFences[j] - hFences[i]);
            heights.add(height);

            if (widths.has(height)) {
                maxSide = Math.max(maxSide, height);
            }
        }
    }

    if (maxSide === 0) return -1;

    // SAFE BigInt multiplication
    return Number((BigInt(maxSide) * BigInt(maxSide)) % MOD);
};