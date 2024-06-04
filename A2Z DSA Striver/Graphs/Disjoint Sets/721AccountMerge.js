/* 721. Accounts Merge
Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Explanation:
The first and second John's are the same person as they have the common email "johnsmith@mail.com".
The third John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
*/
class DSU {
  constructor(n) {
    this.parent = Array(n).fill(0);
    this.rank = Array(n).fill(1);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  find(x) {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    let parentX = this.find(x);
    let parentY = this.find(y);
    if (parentX === parentY) {
      return;
    }
    if (this.rank[parentX] < this.rank[parentY]) {
      this.parent[parentX] = parentY;
    } else if (this.rank[parentX] > this.rank[parentY]) {
      this.parent[parentY] = parentX;
    } else {
      this.parent[parentY] = parentX;
      this.rank[parentX]++;
    }
  }
}
/*in this we need to connect the email, so connection is 
happening we can use DSU, we need to implement in 3 steps
1 we need to find the common one and need to add into that indx
which have that same one, use union method
2. now merge the same index mail into one place.
3. sort the merge one and find the ans.
*/
var accountsMerge = function (accounts) {
  //step1 lets find the common one and assign it to orignal name place
  let n = accounts.length;
  let dsu = new DSU(n);
  let mailMap = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      let mail = accounts[i][j];
      if (!mailMap.has(mail)) {
        mailMap.set(mail, i);
      } else {
        dsu.union(i, mailMap.get(mail));
      }
    }
  }
  //step2 now we have to merge these mail into final space
  let mergeMail = Array(n)
    .fill(0)
    .map(() => []);
  for (let [mail, nextMail] of mailMap) {
    let node = dsu.find(nextMail);
    mergeMail[node].push(mail);
  }
  // Step 3: Construct the result
  let ans = [];
  // for(let i=0; i<n; i++){
  //     if(mergeMail[i].length === 0) continue;
  //     mergeMail[i].sort();
  //     let temp = [];
  //     temp.push(accounts[i][0]);
  //     for(let node of mergeMail[i]){
  //         temp.push(node);
  //     }
  //     ans.push(temp);
  // }
  for (let i = 0; i < n; i++) {
    if (mergeMail[i].length > 0) {
      mergeMail[i].sort();
      let temp = [accounts[i][0], ...mergeMail[i]];
      ans.push(temp);
    }
  }
  return ans;
};
