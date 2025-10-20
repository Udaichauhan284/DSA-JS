/* 2011. Final Value of Variable After Perfroming Operations
20 oct 2025, leetcode potd, easy

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.

*/
//TC: O(n), SC: O(1)
var finalValueAfterOperations = function(operations) {
    let len = operations.length;
    let x = 0;
    for(let i=0; i<len; i++){
        if(operations[i] === "--X" || operations[i] === "X--"){
            x--;
        }else if(operations[i] === "X++" || operations[i] === "++X"){
            x++;
        }else{
            x = 0;
        }
    }
    return x;
};