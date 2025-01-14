/* 2657. Find the prefix Common Array of Two Arrays
14 Jan 25, Leetcode POTD, Array, Nested Loop and use of Map

Input: A = [1,3,2,4], B = [3,1,2,4]
Output: [0,2,3,4]
Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.
*/


/*IN brute method, we use the main loop which go from
i=0 to n, and then in nested loop i will look for in
A array from A_i=0 to i and then B_i=0 to i
to see they both are in A and B array or not
TC: O(n^3), SC: O(1)
*/
var findThePrefixCommonArray = function(A, B) {
    let len = A.length;
    let result = Array(len).fill(0);
    for(let i=0; i<len; i++){
        let count = 0;
        for(let A_i=0; A_i<=i; A_i++){
            for(let B_i=0; B_i<=i; B_i++){
                if(A[A_i] === B[B_i]){
                    count++;
                    break;
                }
            }
        }
        result[i] = count;
    }
    return result;
};


/*Optimal Method, use of Map, and see if map key have
count === 2 if yes increase the count.
TC: O(n), SC: O(n)
*/
var findThePrefixCommonArray = function(A, B) {
    let len = A.length;
    let result = Array(len).fill(0);
    let count = 0;
    let map = new Map();

    for(let i=0; i<len; i++){
        
        map.set(A[i], (map.get(A[i]) || 0)+1);
        if(map.get(A[i]) === 2){
            count++;
        }

        map.set(B[i], (map.get(B[i]) || 0)+1);
        if(map.get(B[i]) === 2){
            count++;
        }

        result[i] = count;
    }
    return result;
};
