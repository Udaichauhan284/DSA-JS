/* Minimum Multiplication to reach end
Given start, end and an array arr of n numbers. At each step, start is multiplied with any number in the array and then mod operation with 100000 is done to get the new start.

Your task is to find the minimum steps in which end can be achieved starting from start. If it is not possible to reach end, then return -1.
arr[] = {2, 5, 7}
start = 3, end = 30
Output:
2
Explanation:
Step 1: 3*2 = 6 % 100000 = 6 
Step 2: 6*5 = 30 % 100000 = 30
*/
//This is simple BFS, level wise traversal. TC: O(100000*n), SC: O(n)
const minimumMultiplications = (arr, start, end) => {
  let n = arr.length;
  let mod = 100000;
  let dist = Array(100000).fill(Number.MAX_SAFE_INTEGER);
  let queue = [];
  queue.push([start,0]); //node, steps
  dist[start] = 0;
  while(queue.length > 0){
    let [node, steps] = queue.shift();
    for(let i=0; i<n; i++){
      let num = (arr[i] * node) % mod;
      if(steps + 1 < dist[num]){
        dist[num] = steps+1;
        if(num === end) return steps + 1;
        queue.push([num, steps+1]);
      }
    }
  }
  return -1;
}