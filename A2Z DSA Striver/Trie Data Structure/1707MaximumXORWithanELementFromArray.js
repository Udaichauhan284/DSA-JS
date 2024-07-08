/* 1707. Maximum XOR With an Element From Array
HARD
You are given an array nums consisting of non-negative integers. You are also given a queries array, where queries[i] = [xi, mi].

The answer to the ith query is the maximum bitwise XOR value of xi and any element of nums that does not exceed mi. In other words, the answer is max(nums[j] XOR xi) for all j such that nums[j] <= mi. If all elements in nums are larger than mi, then the answer is -1.

Return an integer array answer where answer.length == queries.length and answer[i] is the answer to the ith query.
Input: nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]
Output: [3,3,7]
Explanation:
1) 0 and 1 are the only two integers not greater than 1. 0 XOR 3 = 3 and 1 XOR 3 = 2. The larger of the two is 3.
2) 1 XOR 2 = 3.
3) 5 XOR 2 = 7.
*/

/*In this we need to see which nums are smaller from queries[i][1]
those are small, we need to do XOR with nums[j], and find the max
one
TC: O(n*m), SC: O(n) for ans
TLE
*/
var maximizeXor = function (nums, queries) {
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    let flag = false;
    let maxXOR = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] <= queries[i][1]) {
        flag = true;
        maxXOR = Math.max(maxXOR, nums[j] ^ queries[i][0]);
      }
    }
    if (flag === false) ans.push(-1);
    else ans.push(maxXOR);
  }
  return ans;
};

/*In this we use trie DS, but we need to do
1. sort the nums arr
2. maintain the origianl index of queries and then sort it
by m
3. loop on queries and the insert those nums[ind] which are
small and equal by m.
4. check if still ind === 0, psuh -1
other push maxXOR(x);
Overall time complexity: O(N log N + Q log Q + N + Q) ≈ 
O(N log N + Q log Q).
*/
class Node {
  constructor() {
    this.left = null; //for 0
    this.right = null; //for 1
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(num) {
    let curr = this.root;
    for (let i = 31; i >= 0; i--) {
      let ithBit = (num >> i) & 1;
      if (ithBit === 0) {
        if (curr.left === null) {
          curr.left = new Node();
        }
        curr = curr.left;
      } else {
        if (curr.right === null) {
          curr.right = new Node();
        }
        curr = curr.right;
      }
    }
  }
  maxXOR(num) {
    let maxiXOR = 0;
    let curr = this.root;
    for (let i = 31; i >= 0; i--) {
      let ithBit = (num >> i) & 1;
      if (ithBit === 1) {
        if (curr.left !== null) {
          maxiXOR += 1 << i; // pow(2,i)
          curr = curr.left;
        } else {
          curr = curr.right;
        }
      } else {
        if (curr.right !== null) {
          maxiXOR += 1 << i;
          curr = curr.right;
        } else {
          curr = curr.left;
        }
      }
    }
    return maxiXOR;
  }
}
var maximizeXor = function (nums, queries) {
  //sort the nums
  nums.sort((a, b) => a - b);
  //take updateQ, maintain the index and sort it
  let updateQ = queries.map((query, index) => [...query, index]);
  updateQ.sort((a, b) => a[1] - b[1]); //dort by m

  let qLen = updateQ.length;
  let result = new Array(qLen);
  let ind = 0;
  let trie = new Trie();
  for (let i = 0; i < qLen; i++) {
    let [x, m, originalIndex] = updateQ[i];
    while (ind < nums.length && nums[ind] <= m) {
      trie.insert(nums[ind]);
      ind++;
    }
    if (ind === 0) {
      result[originalIndex] = -1; // no num <= m
    } else {
      result[originalIndex] = trie.maxXOR(x);
    }
  }
  return result;
};
