/* 2924. Find Champion II
26 Nov 2024, Leetcode POTD, Graph, Indegree Count

Input: n = 3, edges = [[0,1],[1,2]]
Output: 0
Explanation: Team 1 is weaker than team 0. Team 2 is weaker than team 1. So the champion is team 0.

*/
/*In this we just need to check the indegree
of each node, if any node which have no indegree
that is our answer. if there is more node which
have no indgree measn we need to return -1;
TC: O(m+n), SC: O(n)
*/
const findChampion = (n, edges) => {
  let indegree = Array(n).fill(0);
  //now calculate indegree in edges
  for (let [u, v] of edges) {
    // u ---> v
    indegree[v]++;
  }
  //now see only one node which have indegree of zero
  let champ = -1;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      champ = i;
      count++; //this for maintaining the unique node
    }
    if (count > 1) {
      //if there are multiple node,who have
      //indegree zero, return -1;
      return -1;
    }
  }
  return champ;
};
