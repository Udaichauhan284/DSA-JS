/* 2070 Most Beautiful Item for Each Query
12 Nov 2024, Leetcode POTD, Array, Binary Search

Input: items = [[1,2],[3,2],[2,4],[5,6],[3,5]], queries = [1,2,3,4,5,6]
Output: [2,4,5,5,6,6]
Explanation:
- For queries[0]=1, [1,2] is the only item which has price <= 1. Hence, the answer for this query is 2.
- For queries[1]=2, the items which can be considered are [1,2] and [2,4]. 
  The maximum beauty among them is 4.
- For queries[2]=3 and queries[3]=4, the items which can be considered are [1,2], [3,2], [2,4], and [3,5].
  The maximum beauty among them is 5.
- For queries[4]=5 and queries[5]=6, all items can be considered.
  Hence, the answer for them is the maximum beauty of all items, i.e., 6.
*/

/*In this we use sorting first on items based
on price and then fix the beauty in one traverse
then we use the binary search for it.
TC: O(n+mlogn)
*/
var maximumBeauty = function(items, queries) {
  let n = items.length;
  let m = queries.length;
  let result = Array(m).fill(0);
  //sort the items based on prices
  items.sort((a,b) => a[0]-b[0]); //O(nlogn), //sorted by price.
  //now fix the maxbeauty
  let maxBeauty = items[0][1];
  for(let i=1; i<n; i++){
      maxBeauty = Math.max(maxBeauty, items[i][1]);
      items[i][1] = maxBeauty;
  }
  //now traverse on queries to find the result
  for(let i=0; i<m; i++){ //O(m)
      result[i] = customeBS(items, queries[i]);
      //O(logm)
  }
  return result;
};
function customeBS(items, queryPrice){
  let left = 0;
  let right = items.length-1;
  //in this binary search we need right one which
  //have the max Beauty in it.
  let maxBeauty = 0;
  while(left <= right){
      let mid = left + Math.floor((right-left)/2);

      if(items[mid][0] > queryPrice){
          //move the right pointer
          right = mid - 1;
      }else{
          //now in this we need max beauty which 
          //we will get on right side
          maxBeauty = Math.max(maxBeauty, items[mid][1]);
          left = mid + 1;
      }
  }
  return maxBeauty;
}