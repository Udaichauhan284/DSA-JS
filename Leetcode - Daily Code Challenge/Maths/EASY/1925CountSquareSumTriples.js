/* 1925. Count Square Sum Triples
08 Dec 2025, leetcode potd, easy
Input: n = 5
Output: 2
Explanation: The square triples are (3,4,5) and (4,3,5).
*/

 //TC: O(n^2) ~ O(250*250)
var countTriples = function(n) {
    let count = 0;
    for(let a=1; a <= n; a++){
        for(let b=1; b<=n; b++){
            let sum = a*a + b*b;
            let c = Math.sqrt(sum);
            if(c <= n && c % 1 === 0){
                //in and, we are checking c is interger,
                //if we have c is interger, it will equal
                //to a^2+b^2
                count++;
            }
        }
    }
    return count;
};