/* Floyd Warshall Algo
- Mutlisource shortest path algo
- find the shortest distance between every pair of vertces in a given edge-weighted directed graph.
- if we going to 1 to 0, so go "via" every vertice to see the mini(shortest dist) 1 to k to 0.
O(n^3), SC: O(1)
*/
class Solution {
  //Function to find the shortest distance of all the cells from 0 present in the matrix.
  shortest_distance(matrix) {
    //your code here
    let n = matrix.length;

    //fill matrix with large value, where value is -1
    for (let i = 0; i < n; i++) {
      for (let j = 0; i < n; j++) {
        if (matrix[i][j] === -1) {
          matrix[i][j] = 100000;
        }
      }
    }

    //main code
    for (let via = 0; via < n; via++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          matrix[i][j] = Math.min(
            matrix[i][j],
            matrix[i][via] + matrix[via][j]
          );
        }
      }
    }

    // change to -1
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 100000) {
          matrix[i][j] = -1;
        }
      }
    }
  }
}

//Java solution
// class Solution
// {
//     public void shortest_distance(int[][] matrix)
//     {
//         // Code here 
//         int n = matrix.length;
        
//         for(int i=0; i<n; i++){
//             for(int j=0; j<n; j++){
//                 if(matrix[i][j] == -1){
//                     matrix[i][j] = 100000;
//                 }
//             }
//         }
        
//         //main code
//         for(int via=0; via<n; via++){
//             for(int i=0; i<n; i++){
//                 for(int j=0; j<n; j++){
//                     matrix[i][j] = Math.min(matrix[i][j], matrix[i][via]+matrix[via][j]);
//                 }
//             }
//         }
        
//         for(int i=0; i<n; i++){
//             for(int j=0; j<n; j++){
//                 if(matrix[i][j] == 100000){
//                     matrix[i][j] = -1;
//                 }
//             }
//         }
//     }
// }
