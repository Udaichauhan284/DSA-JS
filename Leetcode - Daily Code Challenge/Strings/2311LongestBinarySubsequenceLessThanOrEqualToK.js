/* 2311. Longest Binary Subsequence Less Than or Equal to K
26 June 25, Medium

Input: s = "1001010", k = 5
Output: 5
Explanation: The longest subsequence of s that makes up a binary number less than or equal to 5 is "00010", as this number is equal to 2 in decimal.
Note that "00100" and "00101" are also possible, which are equal to 4 and 5 in decimal, respectively.
The length of this subsequence is 5, so 5 is returned.
*/

/*Method 1, this is subsequence question, we have the options to take it or not, we can use the 
recursion, take or skip one
TC: O(2^n), SC: O(n)
*/
var longestSubsequence = function(s, k) {
    let len = s.length;
    return solve(s,k,len-1);
};
function solve(s,k,i){
    let n = s.length;
    //base case, when the i reaches to the neg num
    if(i < 0){
        return 0;
    }
    let take = 0;
    let bit = s[i]-'0'; //this will change to 0
    //now we have the bit, find the val
    let val = (bit === 1) ? (1 << (n-i-1)) : 0;
    if(val <= k){
        take = 1 + solve(s, k-val, i-1);
    }
    let skip = solve(s,k,i-1);

    return Math.max(take,skip);
}


/*Method 2, we can use the Greedy Method, in this we know the
have 0 will no change in val, so take it increase the len
else when we get the 1, find the val = 1 * (1 << powerVal)
TC: O(n), SC:O(1)
*/
var longestSubsequence = function(s, k) {
    let length = 0;
    let powerValue = 1;

    for (let i = s.length - 1; i >= 0; --i) {
        if (s[i] === '0') {
            length++;
        } else if (powerValue <= k) {
            length++;
            k -= powerValue;
        }

        if (powerValue <= k) {
            powerValue <<= 1; // same as powerValue *= 2
        }
    }

    return length;
};
