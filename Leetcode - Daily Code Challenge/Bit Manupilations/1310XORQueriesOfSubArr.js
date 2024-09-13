/* 1310. XOR Queries of a Subarray
13 Seot 2024, Leetcode POTD, Array, Bit Manipuation

Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
Output: [2,7,14,8] 
Explanation: 
The binary representation of the elements in the array are:
1 = 0001 
3 = 0011 
4 = 0100 
8 = 1000 
The XOR values for queries are:
[0,1] = 1 xor 3 = 2 
[1,2] = 3 xor 4 = 7 
[0,3] = 1 xor 3 xor 4 xor 8 = 14 
[3,3] = 8
*/


/*Method 1- brute method, we go on each queries and inside
inner loop we set left and right and then in for loop from
left to right we find xor, and push in ans
TC: O(n * m), SC: O(n) if we consider ans arr
*/
var xorQueries = function(arr, queries) {
  let ans = [];
  for(let i=0; i<queries.length; i++){ //O(n)
      let left = queries[i][0];
      let right = queries[i][1];
      let xorValue = 0;
      for(let start=left; start<=right; start++){ //O(n)
          xorValue ^= arr[start];
      }
      ans.push(xorValue);
  }
  return ans;
};


/*Method 2 - optimal method, take cumXor arr and first find
the cumulative XOR and then find the xor from that cumxor
arr. TC: O(n + q), SC: O(n)
*/
var xorQueries = function(arr, queries) {
  let len = arr.length;
  let cumXOR = Array(len).fill(0);
  //first value will be same as arr[0]
  cumXOR[0] = arr[0];
  for(let i=1; i<len; i++){
      cumXOR[i] = cumXOR[i-1] ^ arr[i];  
  }
  //now main code
  let ans = [];
  for(let query of queries){
      let left = query[0];
      let right = query[1];
      let xorValue = cumXOR[right] ^ (left === 0 ? 0 : cumXOR[left - 1]);

      ans.push(xorValue);
  }
  return ans;
};