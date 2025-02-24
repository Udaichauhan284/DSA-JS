/*2467. Most Profitable Path in a Tree
24 feb 25, graph
*/
function mostProfitablePath(edges, bob, amount) {
    const graph = new Map();
    
    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    let bobPath = new Array(amount.length).fill(-1);
    let path = [];
fillBobPath(bob, -1, path, graph);

    for (let i = 0; i < path.length; i++) {
        bobPath[path[i]] = i;
    }

    return getAliceMaxScore(0, -1, 0, bobPath, graph, 0, amount);
}

function fillBobPath(node, parent, path, graph) {
    if (node === 0) return true;
    for (const neighbor of graph.get(node) || []) {
        if (neighbor !== parent) {
            path.push(node);
            if (fillBobPath(neighbor, node, path, graph)) return true;
            path.pop();
        }
    }
    return false;
}

function getAliceMaxScore(node, parent, currScore, bobPath, graph, timestamp, amount) {
    if (bobPath[node] === -1 || bobPath[node] > timestamp) {
        currScore += amount[node];
    } else if (bobPath[node] === timestamp) {
        currScore += Math.floor(amount[node] / 2);
    }

    if ((graph.get(node) || []).length === 1 && node !== 0) return currScore;
    let maxScore = -Infinity;
    for (const neighbor of graph.get(node) || []) {
        if (neighbor !== parent) {
            maxScore = Math.max(
                maxScore, 
                getAliceMaxScore(neighbor, node, currScore, bobPath, graph, timestamp + 1, amount)
            );
        }
    }
    return maxScore;
}
