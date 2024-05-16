//By Using Set, justneed to add some set lines, otherwie logic same
class Solution {
  //Function to find the shortest distance of all the vertices
  //from the source vertex S.
  dijkstra(V, Adj, S) {
    //code here
    let set = new Set();
    let result = Array(V).fill(Number.MAX_VALUE_INTEGER);
    result[S] = 0;
    set.add([0, S]);
    while (set.size !== 0) {
      let [dist, node] = set.values().next().value;
      //delete from set
      set.delete([dist, node]);
      for (let [adjNode, wt] of Adj[node]) {
        let currWeight = dist + wt;
        if (currWeight < result[adjNode]) {
          //need to set is result->adjNode is MAX value or not
          if (result[adjNode] !== Number.MAX_VALUE_INTEGER) {
            set.delete(result[adjNode], adjNode);
          }

          //now push in set and result
          result[adjNode] = currWeight;
          set.add([currWeight, adjNode]);
        }
      }
    }
    return result;
  }
}
