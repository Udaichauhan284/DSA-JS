/*
1039. Minimum Score Triangulation of Polygon
29 sept 2025, leetcode potd, medium
Input: values = [1,2,3]

Output: 6

Explanation: The polygon is already triangulated, and the score of the only triangle is 6.


*/

var minScoreTriangulation = function (values) {
    const n = values.length;
    const memo = new Map();
    const dp = (i, j) => {
        if (i + 2 > j) {
            return 0;
        }
        if (i + 2 === j) {
            return values[i] * values[i + 1] * values[j];
        }
        const key = i * n + j;
        if (!memo.has(key)) {
            let minScore = Number.MAX_VALUE;
            for (let k = i + 1; k < j; k++) {
                minScore = Math.min(
                    minScore,
                    values[i] * values[k] * values[j] + dp(i, k) + dp(k, j),
                );
            }
            memo.set(key, minScore);
        }
        return memo.get(key);
    };
    return dp(0, n - 1);
};

//18 Nov 2025
/*18 Nov 2025
This approach is of solving the subproblem, if
we make one line from one edge to another, 
it will break the polygon into sub problems and
also middle one will also become the triangle, 
we can find the answer for that.
TC: O(2^n)
*/
var minScoreTriangulation = function(values) {
    let len = values.length;
    return solve(values, 0, len-1); //i and j
};
function solve(values, i, j){
    if(j-i < 2) return 0; //means edges are less then 2, so triangle can form
    //now start the loop between i and j to make
    //the triangle
    let result = Number.MAX_VALUE;
    for(let k=i+1; k<j; k++){
        let wt = solve(values, i, k) + (values[i] * values[k] * values[j]) + solve(values, k, j);
        result = Math.min(result, wt);
    }
    return result;
}


/*18 Nov 2025
This approach is of solving the subproblem, if
we make one line from one edge to another, 
it will break the polygon into sub problems and
also middle one will also become the triangle, 
we can find the answer for that.
we can also do it with Recursion with memo
TC: O(n*n*n), SC: O(n*n)
*/
var minScoreTriangulation = function(values) {
    let len = values.length;
    let dp = Array.from({length : len+1}, () => Array(len+1).fill(-1));
    return solve(values, 0, len-1, dp); //i and j
};
function solve(values, i, j, dp){
    if(j-i < 2) return 0; //means edges are less then 2, so triangle can form
    //now start the loop between i and j to make
    //the triangle
    if(dp[i][j] !== -1) return dp[i][j];
    let result = Number.MAX_VALUE;
    for(let k=i+1; k<j; k++){
        let wt = solve(values, i, k, dp) + (values[i] * values[k] * values[j]) + solve(values, k, j, dp);
        result = Math.min(result, wt);
    }
    dp[i][j] = result;
    return dp[i][j];
}