/*1718. Construct the Lexicographically Largest Valid Sequence
16 Feb 25, Leetcode POTD, Array, Backtracking

Input: n = 3
Output: [3,1,2,3,2]
Explanation: [2,3,2,1,3] is also a valid sequence, but [3,1,2,3,2] is the lexicographically largest valid sequence.
*/

/*Use of Bactracking
TC: O(n!), SC: O(n)
*/
var constructDistancedSequence = function(n) {
    let result = Array(2*n-1).fill(-1);
    let used = Array(n+1).fill(false);
    solve(0,n,result,used);
    return result;
};
function solve(i, n, result, used){
    if(i >= result.length){
        return true; //if i is larger then size
        //of result length, means we have large
        //number now
    }
    if(result[i] !== -1){
        return solve(i+1,n,result,used);
    }
    for(let num=n; num>=1; num--){
        if(used[num]) continue;

        used[num]=true;
        result[i]=num;
        //if num === 1, simple call for next one
        if(num === 1){
            if(solve(i+1,n,result,used) === true){
                return true;
            }
        }else{
            let j = i+result[i];
            if(j < result.length && result[j] === -1){
                result[j] = num
                if(solve(i+1,n,result,used)===true){
                    return true;
                }
                result[j] = -1;
            }
            
        }
        used[num] = false;
        result[i] = -1;
    }
    return false;
}