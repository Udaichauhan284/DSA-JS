/* 421. Maximum XOR of Two Numbers in an Array
Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.

*/

/*Brute Method 1: use of Two nested loop to calculate maxXOR
TC: O(n^2), SC: O(1)
TLE
*/
var findMaximumXOR = function (nums) {
  let len = nums.length;
  if (len < 2) return 0; //for XOR we need 2 element

  let maxXor = 0;
  for (let i = 0; i < len - 1; i++) {
    //0 to till second last elem
    for (let j = i + 1; j < len; j++) {
      let currXor = nums[i] ^ nums[j];
      maxXor = Math.max(maxXor, currXor);
    }
  }
  return maxXor;
};

/*Method 2-optimal way, we use Trie. in trie insert bit wise
and after that we find maxxor, for maxxor, we know if we have 3
- 011 - for that we need max xor, we need to flip the 0to1, 1to0
then we get max, so in maxXor, when we get ith bit 0, we move 
right, as in trie 1 is for right, and left for 0.
TC: O(32*n), 
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
        //for maxXOR need 0 for xor, move left;
        if (curr.left !== null) {
          // maxiXOR += Math.pow(2,i);
          //pow -> right shift 1 << i
          maxiXOR += 1 << i; //this also work as pow(2,i)
          curr = curr.left;
        } else {
          curr = curr.right;
        }
      } else {
        //ithBit is 0, for maxXOr need 1, move right
        if (curr.right !== null) {
          // maxiXOR += Math.pow(2,i);
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
var findMaximumXOR = function (nums) {
  let result = 0;
  let trie = new Trie();

  //insert in trie
  for (let num of nums) {
    trie.insert(num);
  }
  //now find maxXOR
  for (let num of nums) {
    result = Math.max(result, trie.maxXOR(num));
  }
  return result;
};
