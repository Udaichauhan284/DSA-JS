/* 1625. Lexicographically Smallest String After Applying Operations
19 Oct 2025, leetcode potd, medium
Input: s = "5525", a = 9, b = 2
Output: "2050"
Explanation: We can apply the following operations:
Start:  "5525"
Rotate: "2555"
Add:    "2454"
Add:    "2353"
Rotate: "5323"
Add:    "5222"
Add:    "5121"
Rotate: "2151"
Add:    "2050"​​​​​
There is no way to obtain a string that is lexicographically smaller than "2050".
*/

var findLexSmallestString = function(s, a, b) {
    const visited = new Set();
    let smallestString = s;

    function rotate(str, b) {
        // Perform rotation using the same logic as 3 reverses
        const n = str.length;
        b %= n; // handle overflow
        return str.slice(n - b) + str.slice(0, n - b);
    }

    function dfs(curr) {
        if (visited.has(curr)) return;
        visited.add(curr);

        if (curr < smallestString) smallestString = curr;

        // Add 'a' to every odd index digit
        let added = curr.split('');
        for (let i = 1; i < added.length; i += 2) {
            added[i] = String((Number(added[i]) + a) % 10);
        }
        dfs(added.join(''));

        // Rotate by b and recurse
        const rotated = rotate(curr, b);
        dfs(rotated);
    }

    dfs(s);
    return smallestString;
};