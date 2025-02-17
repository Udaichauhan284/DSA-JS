/*1079 Letter Tile Possibilities
17 Feb 25, leetcode POTD, String, Backtracking
Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
*/

/*In this method, we use the recursion, in which
we explore every char, and need to start from
idx=0, so that we can take BA like possibility
TC: O(n!), SC: O(n * n!)+O(n) O(n) is for system
stack, and n! is for possible and n is len for 
tiles
*/
var numTilePossibilities = function(tiles) {
    let len = tiles.length;
    let result = new Set();  // Use Set to avoid duplicates
    let used = Array(len).fill(false);
    solve([], tiles, result, used);
    return result.size; // Return unique permutations count
};

function solve(curr, tiles, result, used) {
    if (curr.length > 0) {
        result.add(curr.join(''));  // Store non-empty permutations
    }

    for (let i = 0; i < tiles.length; i++) {
        if (used[i]) continue;

        // Skip duplicate characters at the same level
        if (i > 0 && tiles[i] === tiles[i - 1] && !used[i - 1]) continue;

        // DO
        used[i] = true;
        curr.push(tiles[i]);

        // EXPLORE
        solve(curr, tiles, result, used);

        // UNDO
        used[i] = false;
        curr.pop();
    }
}