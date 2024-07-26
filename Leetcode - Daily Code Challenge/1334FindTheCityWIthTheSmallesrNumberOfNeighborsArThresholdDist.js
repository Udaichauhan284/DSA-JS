/* 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance

-> This question i have done in Graph section -> sortest distance section
-> 26 July 2024, For LEETCODE POTD, so putting this in leetcode coding section
for partice.

Input: n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
Output: 3
Explanation: The figure above describes the graph. 
The neighboring cities at a distanceThreshold = 4 for each city are:
City 0 -> [City 1, City 2] 
City 1 -> [City 0, City 2, City 3] 
City 2 -> [City 0, City 1, City 3] 
City 3 -> [City 1, City 2] 
Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.
*/


/* 26 July LC POTD
Method 1 - use of Dijkstra Algo, as this question is of Multisouce
point, but can be solve using Dij Algo, use of MinHeap
Dijkstra Algo TC: O(V + ElogE), so overavll O(V.(V+ElogE)) ~ O(n.(n+ElogE))
SC: O(n^2 + n + e)
*/
const findTheCity1 = (n, edges, distanceThreshold) => {

}


/*26 July LC POTD
Method 2 - this is multisource node question, need to find city from multiple node, 
so for this we can use Floy Warshall Algo, build the dist 2d matrix, fill it
and then find the city.
TC: O(n)+O(n^2)+O(n^2) ~ O(n^2)
SC: O(n^2)
*/
var findTheCity = function(n, edges, distanceThreshold) {
  let dist = Array.from({length: n}, () => Array(n).fill(Number.MAX_VALUE));
  //now fill the dist from using edges
  for(let [u,v,wt] of edges){
      dist[u][v] = wt;
      dist[v][u] = wt;
  }

  //now fill the disr, first for distance from itself
  for(let i=0; i<n; i++) dist[i][i] = 0;

  //now fill the dist, use of FloyWarshall Algo, using via method
  for(let via=0; via<n; via++){
      for(let i=0; i<n; i++){
          for(let j=0; j<n; j++){
              //first condition if dist[i][j] is max, no need to proced as we need min
              if(dist[i][via] === Number.MAX_VALUE || dist[via][j] === Number.MAX_VALUE){
                  continue;
              }

              dist[i][j] = Math.min(dist[i][j] , dist[i][via] + dist[via][j]);
          }
      }
  }

  //now find the city
  let minReachableCities = n;
  let resultCity = -1;
  for(let city=0; city<n; city++){
      let cnt = 0;
      for(let adjCity=0; adjCity < n; adjCity++){
          if(dist[city][adjCity] <= distanceThreshold){
              cnt++;
          }
      }
      if(cnt <= minReachableCities){
          minReachableCities = cnt;
          resultCity = city;
      }
  }
  return resultCity;
};