/* This is Premium Question,
370. Range Addition.
05 Jan 25

Assume you have an array of length n initialized with all 0's and are given k update
operations.

Each operation is represented as a triplet: [startIndex, endIndex, inc] which 
increments each element of subarray A[startIndex ... endIndex] (startIndex and endIndex 
inclusive) with inc.

Return the modified array after all k operations were executed.

Given:
length = 5,
updates = 
[
[1,  3,  2],
[2,  4,  3],
[0,  2, -2]
]
return [-2, 0, 3, 5, 3]

Explanation:
Initial state:
[ 0, 0, 0, 0, 0 ]
After applying operation [1, 3, 2]:
[ 0, 2, 2, 2, 0 ]
After applying operation [2, 4, 3]:
[ 0, 2, 5, 5, 3 ]
After applying operation [0, 2, -2]:
[-2, 0, 3, 5, 3 ]
*/

//TC: O(n+n)~O(2n)~O(n), SC: O(n)~O(1)
function getModifiedArray(length, updates){
  let differenceArr = Array(length).fill(0); //in this we add operation and return
  //now traverse over the updates O(n)
  for(let [left, right, value] of updates){
    differenceArr[left] += value; 
    //and now in right+1 we minus this value
    if(right+1 < length){
      differenceArr[right+1] -= value;
    }
  }

  //now compute the cummSum
  for(let i=1; i<length; i++){ //O(n)
    differenceArr[i] += differenceArr[i-1];
  }
  return differenceArr;
}