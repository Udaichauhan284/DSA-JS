/* 7769. Max Chunks TO Make Sorted
19 Dec 2024, Leetcode POTD, Array, MonoSt, Optimal Method, find maxElem, and chekc with i
Input: arr = [1,0,2,3,4]
Output: 4
Explanation:
We can split into two chunks, such as [1, 0], [2, 3, 4].
However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.
*/

/*Brute Method, in this we use the Monotonic St,
if the curr elem is bgger then the top of the monotonic
st, we will push it into stack, so that it will form the
new chunk. if the currone is smaller, then monotonic st
we will merge into the chunk,
TC: O(n), SC: O(n)
*/
var maxChunksToSorted = (arr) => {
  let len = arr.length;
  let monoSt = [];
  for(let i=0; i<len; i++){
    //check here, if curr elem is greater than the monoSt top
    //if yes, it will start the its own chunks
    if(monoSt.length === 0 || arr[i] > monoSt[monoSt.length-1]){
      monoSt.push(arr[i]);
    }else{
      //if curr elem is smaller then the monoSt top, we will remove the
      //elem, we are maintaining the increasing the monoSt 
      let maxElem = monoSt[monoSt.length-1];
      while(monoSt.length > 0 && arr[i] < monoSt[monoSt.length-1]){
        monoSt.pop();
      }
      //now after removing the mini one, push the maxElem
      monoSt.push(maxElem);
    }
  }
  return monoSt.length; //this will give you the chunks
}

/*Optimal Method
TC: O(n), SC: O(1)
*/
var maxChunksToSorted = (arr) => {
  let len = arr.length;
  let chunks = 0;
  let maxElem = 0;
  for(let i=0; i<len; i++){
    //lets find the maxElem
    maxElem = Math.max(maxElem, arr[i]);
    //now we will check that maxElem with the curr index
    if(maxElem === i){
      chunks++;
    }
  }
  return chunks;
}