/* Alien Dictonary

*/
/* In this question , we have to find the alien order, measn something is coming
before something, measn we need to implement the Topo sort, and need to work on 
index number insted of char.
*/
class Solution {
  findOrder(dict, N, K) {
    let dictArr = dict.split("");
    let adj = Array(K)
      .fill(null)
      .map(() => []);
    // Initialize adj as an array of empty arrays

    for (let i = 0; i < N - 1; i++) {
      let s1 = dictArr[i];
      let s2 = dictArr[i + 1];
      let len = Math.min(s1.length, s2.length);
      for (let ptr = 0; ptr < len; ptr++) {
        if (s1[ptr] !== s2[ptr]) {
          adj[s1[ptr].charCodeAt(0) - "a".charCodeAt(0)].push(
            s2[ptr].charCodeAt(0) - "a".charCodeAt(0)
          );
        }
      }
    }

    let topo = this.topoSort(K, adj);
    let ans = "";
    for (let it of topo) {
      ans += String.fromCharCode(it + "a".charCodeAt(0));
    }
    return ans;
  }

  topoSort(K, adj) {
    let indegree = Array(K).fill(0);
    let queue = [];
    let result = [];
    for (let i = 0; i < K; i++) {
      for (let v of adj[i]) {
        indegree[v]++;
      }
    }
    for (let i = 0; i < K; i++) {
      if (indegree[i] === 0) {
        queue.push(i);
      }
    }

    while (queue.length > 0) {
      let curr = queue.shift();
      result.push(curr);
      for (let v of adj[curr]) {
        indegree[v]--;
        if (indegree[v] === 0) {
          queue.push(v);
        }
      }
    }
    return result;
  }
}
