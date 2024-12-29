/* 1639. Number of Ways to form a target string given a dictionary
29 Dec 2024, leetcode POTD, Array, DP, String,

Input: words = ["acca","bbbb","caca"], target = "aba"
Output: 6
Explanation: There are 6 ways to form target.
"aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("caca")
"aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("caca")
"aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("acca")
"aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("acca")
"aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("acca")
"aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("caca")
*/


/*IN this we have options to pick char from that index
or skip from that char, so we have options, so we can 
use DP, also in this for particular char on one index
is same, so we dont need to go recursion for that char
too, we can take the freq arr and multiple that.
TC: O(n*k + m*k), SC: O(n*k)
*/
let MOD = 1e9+7;
var numWays = function(words, target) {
    let k = words[0].length; //col length
    let m = target.length;

    let freqArr = Array.from({length: 26}, () => Array(k).fill(0));
    //now fill the freqArr
    for(let col=0; col<k; col++){
        for(let word of words){
            freqArr[word.charCodeAt(col) - 'a'.charCodeAt(0)][col]++;
        }
    }
    let dp = Array.from({length: k+1}, () => Array(m+1).fill(-1));
    return solve(0, 0,freqArr, target, dp, k, m);
};
function solve(wordInd, targetInd, freqArr, target, dp, k, m){
    //base case, when targetInd reach at last
    if(targetInd >= m){
        return 1;
    }
    if(wordInd >= k) return 0;

    if(dp[wordInd][targetInd] !== -1) return dp[wordInd][targetInd];

    let notTake = solve(wordInd+1, targetInd, freqArr, target, dp, k, m)%MOD;
    let take = (freqArr[target.charCodeAt(targetInd) - 'a'.charCodeAt(0)][wordInd] * solve(wordInd+1,targetInd+1, freqArr, target, dp, k, m))%MOD;

    dp[wordInd][targetInd] = (notTake + take) % MOD;
    return dp[wordInd][targetInd]; 
}