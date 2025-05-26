/* 1857. Largest Color Value in a Directed Graph
26 May 25
Input: colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]
Output: 3
Explanation: The path 0 -> 2 -> 3 -> 4 contains 3 nodes that are colored "a" (red in the above image).
*/

/*In this we want sorted order, so we do the Topo sort using
BFS means Kahn's Algo, in this we also maintain the freq 
2d array where per nodes, we maintain the different color 
freq from a to z, this is same as Kahn Algo, jsut we need to 
fill the 2d freq array. TC: O(V+E), SC: O(V+E)
*/
var largestPathValue = function(colors, edges) {
    const len = colors.length;

    // Step 1: Build the adjacency list
    const adj = new Map();
    const indegree = Array(len).fill(0);

    for (const [u, v] of edges) {
        if (!adj.has(u)) adj.set(u, []);
        adj.get(u).push(v);
        indegree[v]++;
    }

    // Step 2: Prepare queue and color frequency table
    const queue = [];
    const freq = Array.from({ length: len }, () => Array(26).fill(0));

    for (let i = 0; i < len; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
            freq[i][colors.charCodeAt(i) - 'a'.charCodeAt(0)] = 1;
        }
    }

    let answer = 0;
    let countNodes = 0;

    while (queue.length > 0) {
        const u = queue.shift();
        countNodes++;

        // Update answer with the max color frequency at node u
        answer = Math.max(answer, freq[u][colors.charCodeAt(u) - 'a'.charCodeAt(0)]);

        if (!adj.has(u)) continue;

        for (const v of adj.get(u)) {
            for (let i = 0; i < 26; i++) {
                const add = (colors.charCodeAt(v) - 'a'.charCodeAt(0) === i) ? 1 : 0;
                freq[v][i] = Math.max(freq[v][i], freq[u][i] + add);
            }

            indegree[v]--;
            if (indegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    return countNodes < len ? -1 : answer;
};