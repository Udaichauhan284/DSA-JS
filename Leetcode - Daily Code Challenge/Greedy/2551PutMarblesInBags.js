/* 2551. Put Marbles in Bags
31 March 25, Leetcode POTD HARD
Input: weights = [1,3,5,1], k = 2
Output: 4
Explanation: 
The distribution [1],[3,5,1] results in the minimal score of (1+1) + (3+1) = 6. 
The distribution [1,3],[5,1], results in the maximal score of (1+3) + (5+1) = 10. 
Thus, we return their difference 10 - 6 = 4.

*/

/*This question feel like we need to implement DP,
but the constraint is high, so we cant, in this we can 
use the Greedy Method, in this we do the partition 
by k, then we find the max and min, then we will have our 
ans, but what can we do, parition left and right elem
will be always there, in every partition, so we can 
find the pairSum, and then we find the max and min SUM
TC: O(nlogn), SC: O(n)
*/
var putMarbles = function(weights, k) {
    let len = weights.length;
    let pairSum = Array(len-1).fill(0);
    //find the pairSum 
    for(let i=0; i<len-1; i++){
        pairSum[i] = weights[i]+weights[i+1];
    }

    //now find the max and min sum from pairSum
    //need to sort it first
    pairSum.sort((a,b) => a-b);

    let maxSum = 0;
    let minSum = 0;
    //traverse over the pairSum, till k-1
    for(let i=0; i<k-1; i++){
        minSum += pairSum[i]; //first elem
        maxSum += pairSum[len-i-2]; //last elem
    }
    return maxSum - minSum;
};