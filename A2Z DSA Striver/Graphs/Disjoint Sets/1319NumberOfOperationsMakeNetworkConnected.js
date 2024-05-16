/* 1319. Number of Operations to Make Network Connected
input: n = 4, connections = [[0,1],[0,2],[1,2]]
Output: 1
Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.
*/
//Here we need to see the component, mini edge need to connect is component-1, in starting everyonw is thier own parent, so we can Apply DSU(union-find) by rank.
var makeConnected = function (n, connections) {
  let parent = Array(n).fill(0);
  let rank = Array(n).fill(0);
  if (connections.length < n - 1) {
    return -1;
  }
  //fill teh parent
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }
  //fill components
  let components = n;
  for (let [first, second] of connections) {
    if (find(first, parent) !== find(second, parent)) {
      //coonect these component
      Union(first, second, parent, rank);
      //decrease the size of component
      components--;
    }
  }
  return components - 1; //these are mini edges need to connected ramining components.
};
//helper function od DSU (union-find)
const find = (x, parent) => {
  if (x !== parent[x]) {
    parent[x] = find(parent[x], parent);
  }
  return parent[x];
};
const Union = (x, y, parent, rank) => {
  let xParent = find(x, parent);
  let yParent = find(y, parent);

  if (xParent === yParent) return;
  if (rank[xParent] > rank[yParent]) {
    parent[yParent] = xParent;
  } else if (rank[xParent] < rank[yParent]) {
    parent[xParent] = yParent;
  } else {
    parent[xParent] = yParent;
    rank[yParent]++;
  }
};
