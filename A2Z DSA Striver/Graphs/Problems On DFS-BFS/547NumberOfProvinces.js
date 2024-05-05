/* 547. Number of Provinces
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
*/
//Simple do the DFS and check the is connected or not. TC : O(n), SC : O(n)+O(n) - n for space and other n for auixlary space recursion.
const findCircleNum = (isConnected) => {
  let visited = {};
  let count = 0;
  for(let i=0; i<isConnected.length; i++){
    if(!visited[i]){
      dfsHelper(i,visited,isConnected);
      count++;
    }
  }
  return count;
}
function dfsHelper(i, visited, isConnected){
  for(let j=0; j<isConnected.length; j++){
    if(isConnected[i][j] === 1 && !visited[j]){
      visited[j] = true;
      dfsHelper(j, visited, isConnected);
    }
  }
}
console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))