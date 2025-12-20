/* 944. Delete Columns To Make Sorted
21 Dec 2025, leetcode potd, easy
Input: strs = ["cba","daf","ghi"]
Output: 1
Explanation: The grid looks as follows:
  cba
  daf
  ghi
Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.
*/

var minDeletionSize = function(strs) {
    let len = strs.length;
    let count=0;
    let k = strs[0].length;
    for(let i=0; i<k; i++){
        for(let j=1; j<len; j++){
            if(strs[j][i].charCodeAt(0) < strs[j-1][i].charCodeAt(0)){
                count++;
                break;
            }
        }
    }
    return count;
};