/* 1015. Smallest Integer Divisble by K
25 Nov 2025, leetcode potd, medium
Input: k = 3
Output: 3
Explanation: The smallest answer is n = 111, which has length 3.
*/

/*In this, we start the loop of length, len
will increase linear till k, and inside this 
loop we will use the num = num*10+1 % k
take the remaining and see if we have num equal
to zero we have our len, otherwise use it for
next iterartion.
TC: O(n), SC: O(1)
*/
var smallestRepunitDivByK = function(k) {
    let num = 0;
    for(let len=1; len <= k; len++){
        num = (num*10+1)%k;
        if(num === 0){
            return len;
        }
    }
    return -1;
};