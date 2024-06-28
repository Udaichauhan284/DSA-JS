/* 2235 Maximum Total Importance of Roads
28 June 2024 Leetcode POTD Graph
Input: n = 5, roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
Output: 43
Explanation: The figure above shows the country and the assigned values of [2,4,5,3,1].
- The road (0,1) has an importance of 2 + 4 = 6.
- The road (1,2) has an importance of 4 + 5 = 9.
- The road (2,3) has an importance of 5 + 3 = 8.
- The road (0,2) has an importance of 2 + 5 = 7.
- The road (1,3) has an importance of 4 + 3 = 7.
- The road (2,4) has an importance of 5 + 1 = 6.
The total importance of all roads is 6 + 9 + 8 + 7 + 7 + 6 = 43.
It can be shown that we cannot obtain a greater total importance than 43.
*/

/*we need to give the max number to max visted city, so 
find out the degree of node and then we will give 1 to n to 
low to high degree city, measn after find out degree we need
to sort the degree
TC: O(E+nlogn), SC: O(n)
*/
var maximumImportance = function(n, roads) {
  let degree = Array(n).fill(0);
  //fill the degree map, using edegs array
  for(let [u,v] of roads){
      degree[u]++;
      degree[v]++;
  }

  //now assign 1 to n to sorted dregee map
  degree.sort((a,b) => a-b);
  let value = 1;
  let sum = 0;
  for(let i=0; i<n; i++){
      sum += (degree[i] * value);
      value++;
  }
  return sum;
};