/* 2379. Minimum Recolors to Consecutive Black Blocks
08 March 25, Leetcode POTD, Two Pointer and Sliding Window

Input: blocks = "WBBWWBBWBW", k = 7
Output: 3
Explanation:
One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
so that blocks = "BBBBBBBWBW". 
It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
Therefore, we return 3.

*/

/*Brute Method, we use the nested loop 
i will goes till the n-k, because we are checking
the len of 7, and j will go for from i+1 to check
the W, as we need to change that only for finding
the min ops for finding the Black
TC: O(n*k) *k because we are till k len, SC: O(1)
*/
var minimumRecolors = function(blocks, k) {
    let len = blocks.length;
    let ops = Number.MAX_VALUE;
    for(let i=0; i<=len-k; i++){
        let W = 0;
        for(let j=i; j-i+1<=k; j++){
            if(blocks[j] === "W"){
                W++;
            }
        }
        ops = Math.min(ops, W);
    }
    return ops;
};

/*Optimal Method, we can use the Sliding Window Method,
in which we can use the two pointer, j will move till
len and count the W and i will start moving from left and
remove the W from it. TC: O(n), SC: O(1)
*/
var minimumRecolors = function (blocks, k) {
    let len = blocks.length;
    let W = 0;
    let i=0, j=0;
    let ops = Number.MAX_VALUE;

    while(j < len){
        //count the W
        if(blocks[j] === "W"){
            W++;
        }

        //now when you reach len k, find ops
        if((j-i+1) === k){
            //find the min ops
            ops = Math.min(ops, W);

            //now remove the W from left
            if(blocks[i] === "W"){
                W--;
            }
            i++;
        }
        j++;
    }
    return ops;
};