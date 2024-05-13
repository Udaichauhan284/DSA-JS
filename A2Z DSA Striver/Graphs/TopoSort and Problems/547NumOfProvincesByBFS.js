/* 547. Number of Provinces
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
*/
//By BFS
const findCircleNum = (isConnected) => {
  let visited = {};
  let count = 0;
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      bfsHelper(i, visited, isConnected);
      count++;
    }
  }
  return count;
};
function bfsHelper(i, visited, isConnected) {
  visited[i] = true;
  let queue = [];
  queue.push(i);
  for (let v = 0; v < isConnected.length; v++) {
    if (!visited[v] && isConnected[i][v] === 1) {
      bfsHelper(v, visited, isConnected);
    }
  }
}
