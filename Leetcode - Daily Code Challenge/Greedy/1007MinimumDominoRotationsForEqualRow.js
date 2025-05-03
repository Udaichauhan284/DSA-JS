/* 1007. Minimum Domino Rotations For Equal Row
03 May 25, Leetcode POTD, Medium 
Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

*/


/*In this question, we have limit to check values
1 to 6, so for every num, we will check, if that is not 
present in top or bottom, we return -1, else we check 
if that is not in top, we swap with bottom, else if
we check with bottom array, if not present there we
swap with top itself. TC: O(6*n), SC: O(1)
*/
var minDominoRotations = function(tops, bottoms) {
    let result = Number.MAX_VALUE;
    //now check for each 1 to 6 vals
    for(let val=1; val<=6; val++){
        //find the min swaps required
        let swaps = findSwaps(tops,bottoms,val);
        if(swaps !== -1){
            result = Math.min(result, swaps);
        }
    }
    return (result === Number.MAX_VALUE ? -1 : result);
};
function findSwaps(tops,bottoms,val){
    let len = tops.length; //both len will be same
    let swapTops = 0;
    let swapBottoms = 0;

    for(let i=0; i<len; i++){
        //check of tops and bottom as well
        if(tops[i] !== val && bottoms[i] !== val){
            return -1;
        }else if(tops[i] !== val){
            swapTops++;
        }else if(bottoms[i] !== val){
            swapBottoms++;
        }
    }
    return Math.min(swapTops, swapBottoms);
}