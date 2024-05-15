/*
990. Satisfiability of Equality Equations 
Input: equations = ["a==b","b!=a"]
Output: false
Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.
There is no way to assign the variables to satisfy both equations.
*/
//Simply Apply Union-Find by Rank, and see for at 1 index ! or =, if = comes measn need to do union and if ! measn need to do find, TC: O(26)+O(n), SC: O(n)
// Find function of Disjoint Set
const find = (x, parent) => {
  if (x !== parent[x]) {
      parent[x] = find(parent[x], parent);
  }
  return parent[x];
};

// Union function 
const union = (x, y, parent, rank) => {
  let xParent = find(x, parent);
  let yParent = find(y, parent);

  if (xParent === yParent) return;
  if (rank[xParent] > rank[yParent]) {
      parent[yParent] = xParent;
  } else if (rank[xParent] < rank[yParent]) {
      parent[xParent] = yParent;
  } else {
      // Make anyone parent
      parent[xParent] = yParent;
      rank[yParent]++;
  }
};

var equationsPossible = function(equations) {
  let len = equations.length;
  let parent = Array(26).fill(0); // Assuming only lowercase English letters are used
  let rank = Array(26).fill(0);

  for (let i = 0; i < 26; i++) {
      parent[i] = i;
      rank[i] = 1;
  }

  for (let s of equations) {
      if (s.charAt(1) === "=") { // a == b
          // Need to do union
          let first = s.charCodeAt(0) - 'a'.charCodeAt(0);
          let third = s.charCodeAt(3) - 'a'.charCodeAt(0);
          union(first, third, parent, rank);
      }
  }

  for (let s of equations) {
      if (s.charAt(1) === "!") { // a != b
          // Means a != b, need to do find, find parent
          let first = s.charCodeAt(0) - 'a'.charCodeAt(0);
          let third = s.charCodeAt(3) - 'a'.charCodeAt(0);
          if (find(first, parent) === find(third, parent)) {
              // Means parent same
              return false;
          }
      }
  }
  return true;
};