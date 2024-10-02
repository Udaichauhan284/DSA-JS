/* 1331. Rank Transform of an Array
02 Oct 2024, Leetcode POTD, Hashing, Mao, Sorting

Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
*/


/*IN this we can use map, as we need to return the rank
for elem, if ele is same, return the same rank, so 
first we sort the arr take copy also, then we traverse
on sprtedArr and add on set withh increasing rank and 
at last forloop on len and theb we again initial the main arr
TC: O(nlogn)+O(n) ~ O(nlogn), SC: O(n)
*/

const arrayRankTransform = (arr) => {
  let len = arr.length;
  let rankMap = new Map();
  let rank = 1;
  let sortedArr = [...arr]; //copy of main arr
  //need to sort theh arr
  sortedArr.sort((a,b) => a-b);

  for(let i=0; i<len; i++){
    if(!rankMap.has(sortedArr[i])){
      rankMap.set(sortedArr[i], rank);
      rank++;
    }
  }

  for(let i=0; i<len; i++){
    arr[i] = rankMap.get(arr[i]);
  }
  return arr;
}