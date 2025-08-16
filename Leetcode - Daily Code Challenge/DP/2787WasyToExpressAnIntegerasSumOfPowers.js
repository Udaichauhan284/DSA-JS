/* 2787. Ways to Express an Integers as Sum of Powers
12 Aug 2025, leetcode potd
Input: n = 10, x = 2
Output: 1
Explanation: We can express n as the following: n = 32 + 12 = 10.
It can be shown that it is the only way to express 10 as the sum of the 2nd power of unique integers.
*/
const M = 1e9 + 7;
let t;

function solve(n, num, x) {
    if (n === 0) return 1;
    if (n < 0) return 0;

    const currPowerValue = Math.pow(num, x);
    if (currPowerValue > n) {
        return 0;
    }

    if (t[n][num] !== -1) {
        return t[n][num];
    }

    const take = solve(n - currPowerValue, num + 1, x);
    const skip = solve(n, num + 1, x);

    return t[n][num] = (take + skip) % M;
}

var numberOfWays = function(n, x) {
    // Initialize memo table with -1
    t = Array.from({ length: n + 1 }, () => Array(301).fill(-1));
    return solve(n, 1, x);
};



/*In this we can use the recursion, we can simple
take num start from 1 and check 1^x is less then
n, means we can take that num or skip it, if we
take it, minus from n or skip it
TC: O(2^n), for recursion
SC: O(n) for recursion stack space 
TLE
*/
var numberOfWays = function(n, x) {
    return solve(n,1,x); //n,num,x
};
const solve = (n,num,x) => {
    //base case
    if(n === 0) return 1;
    if(n < 0) return 0;
    let powerOfNum = Math.pow(num,x);
    if(powerOfNum > n) return 0;
    //now use the recursion
    let take = solve(n-powerOfNum, num+1, x);
    let skip = solve(n,num+1,x);
    return take+skip;
}


/* Method 2, for removing the TLE, we can Memoize it.
In this we can use the recursion, we can simple
take num start from 1 and check 1^x is less then
n, means we can take that num or skip it, if we
take it, minus from n or skip it
TC: O(2^n), for recursion
SC: O(n) for recursion stack space 
TLE

TC: (n*n), SC: O(n*n)
*/
const M = 1e9 + 7;
var numberOfWays = function(n, x) {
    let dp = Array.from({length: n+1}, () => Array(n+1).fill(-1));
    return solve(n,1,x,dp); //n,num,x
};
const solve = (n,num,x,dp) => {
    //base case
    if(n === 0) return 1;

    if(n < 0) return 0;

    if(num > n) return 0;

    let powerOfNum = Math.pow(num,x);

    //now check the dp array
    if(dp[n][num] !== -1) return dp[n][num];

    if(powerOfNum > n) return 0;
    //now use the recursion
    let take = solve(n-powerOfNum, num+1, x,dp);
    let skip = solve(n,num+1,x,dp);
    dp[n][num] = (take+skip)%M;
    return dp[n][num];
}