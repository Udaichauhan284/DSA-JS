/* 2471. Minimum Number Of Operation to Sort a Binary Tree by Level
23 Dec 2024, Leetcode POTD, Binary Tree, BFS, Level Order, Minimum No. of Swap to sort

Input: root = [1,4,3,7,6,8,5,null,null,null,null,9,null,10]
Output: 3
Explanation:
- Swap 4 and 3. The 2nd level becomes [3,4].
- Swap 7 and 5. The 3rd level becomes [5,6,8,7].
- Swap 8 and 7. The 3rd level becomes [5,6,7,8].
We used 3 operations so return 3.
It can be proven that 3 is the minimum number of operations needed.
*/

/*In this we need to first iterate over tree doing level order
and then we tale elem into arr and then we pass that array 
to count minSwap to make it sorted. TC: O(n + level*mlogm), SC: O(n)
*/
var minimumOperations = function (root) {
  let que = [];
  que.push(root);
  let result = 0;
  while (que.length > 0) {
      let n = que.length;
      let levelNodes = [];
      while (n--) {
          let curr = que.shift();
          levelNodes.push(curr.val);

          if (curr.left !== null) {
              que.push(curr.left);
          }
          if (curr.right !== null) {
              que.push(curr.right);
          }
      }
      result += countNumOfSwap(levelNodes);
  }
  return result;
};
function countNumOfSwap(arr) {
  let len = arr.length;
  let swaps = 0;
  let sortedArr = [...arr];
  //now sort the arr
  sortedArr.sort((a, b) => a - b);
  let map = new Map(); //this is for elem -> index
  for (let i = 0; i < len; i++) {
      map.set(arr[i], i);
  }
  //now traverse over the arr
  for (let i = 0; i < len; i++) {
      if (arr[i] === sortedArr[i]) {
          continue; //no need of swaps;
      }
      let currIdx = map.get(sortedArr[i]);
      map.set(arr[i], currIdx);
      map.set(arr[currIdx], i);
      [arr[i], arr[currIdx]] = [arr[currIdx], arr[i]];
      swaps++;
  }
  return swaps;
}