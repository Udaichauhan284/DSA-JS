/*
2997. Minimum Number of Operations to Make Array XOR Equal to K
29 Apr 2024 - topic Array, Bit Manipulation
Daily Leetcode code challenge 

You are given a 0-indexed integer array nums and a positive integer k.

You can apply the following operation on the array any number of times:

Choose any element of the array and flip a bit in its binary representation. Flipping a bit means changing a 0 to 1 or vice versa.
Return the minimum number of operations required to make the bitwise XOR of all elements of the final array equal to k.

Note that you can flip leading zero bits in the binary representation of elements. For example, for the number (101)2 you can flip the fourth bit and obtain (1101)2.

Example 1:
Input: nums = [2,1,3,4], k = 1
Output: 2
Explanation: We can do the following operations:
- Choose element 2 which is 3 == (011)2, we flip the first bit and we obtain (010)2 == 2. nums becomes [2,1,2,4].
- Choose element 0 which is 2 == (010)2, we flip the third bit and we obtain (110)2 = 6. nums becomes [6,1,2,4].
The XOR of elements of the final array is (6 XOR 1 XOR 2 XOR 4) == 1 == k.
It can be shown that we cannot make the XOR equal to k in less than 2 operations.
*/
//First find the XOR of all element, then do the xor of totalXOr and k, you will get the diff, now you need to change the number of set bit in that diff to make equall to k, TC : O(n) time comp will differ on how we count the set bit, Sc : O(1)
const minOperation = (nums,k) => {
  let totalXOR = 0;
  for(let num of nums){
    totalXOR ^= num;
  }
  let diff = totalXOR ^ k;

  //count the set bit, method 1 use of while loop and bit wise opertiaon, AND with 1 and right shift dividing the diff TC : O(logn), so Total: TC : O(nlogn)
  let count = 0;
  // while(diff > 1){
  //   count += diff & 1;

  //   diff = diff >> 1;
  // }
  // if(count === 1) count++;

  //Method 2- optimized method to count the set bit TC : O(num of set bit), worst case O(31), total TC : O(n)+O(31) ~ O(n)
  while(diff !== 0){
    diff = diff & (diff-1);
    count++;
  }
  return count;
}
console.log(minOperation([2,1,3,4],1));