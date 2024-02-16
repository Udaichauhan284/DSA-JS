/* 31. Leetcode Next Permutation
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
*/
//TC : 3*O(n) => O(3N),
//SC : O(1)
let nextPermutation = function (nums) {
  let ind = -1;
  let len = nums.length;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      ind = i; //break point
      break;
    }
  }
  if (ind === -1) {
    //if there is no break point
    nums.reverse();
    return nums;
  }
  //step2 find the next greater element
  for (let i = len - 1; i > ind; i--) {
    if (nums[i] > nums[ind]) {
      [nums[i], nums[ind]] = [nums[ind], nums[i]]; //swap
      break;
    }
  }
  //step3 reverse the right half
  nums.splice(ind + 1, len - ind - 1, ...nums.slice(ind + 1).reverse());
  return nums;
};
