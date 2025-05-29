/* 3373. Maximize the Number of Target Nodes After Connecting Trees II
29 May 25, Leetcode POTD
*/

var maxTargetNodes = function (edges1, edges2) {
    function dfs(node, parent, depth, children, color) {
        let res = 1 - (depth % 2);
        color[node] = depth % 2;
        for (let child of children[node]) {
            if (child === parent) {
                continue;
            }
            res += dfs(child, node, depth + 1, children, color);
        }
        return res;
    }

    function build(edges, color) {
        const n = edges.length + 1;
        const children = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            children[u].push(v);
            children[v].push(u);
        }
        const res = dfs(0, -1, 0, children, color);
        return [res, n - res];
    }

    const n = edges1.length + 1;
    const m = edges2.length + 1;
    const color1 = new Array(n).fill(0);
    const color2 = new Array(m).fill(0);
    const count1 = build(edges1, color1);
    const count2 = build(edges2, color2);
    const res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        res[i] = count1[color1[i]] + Math.max(count2[0], count2[1]);
    }
    return res;
};