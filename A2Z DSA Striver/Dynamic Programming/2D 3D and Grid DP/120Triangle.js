/* 120 Triangle
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
*/
/* Method 1- use of Memoization (use of dp array)
in this at last row we have 4 value which will be our ans.
so its good to start from 0,0.
TC: O(n*n), SC: O(n*n)+O(n*n)
*/
var minimumTotal = function(triangle) {
  let n = triangle.length;
  let dp = Array(n).fill(-1).map(() => Array(n).fill(-1));
  return solve(0,0,dp,triangle,n);
};
function solve(i,j,dp,arr,n){
  //base case
  if(dp[i][j] !== -1) return dp[i][j];
  if(i === n-1) return arr[i][j]; //last rpw
  let down = arr[i][j] + solve(i+1,j,dp,arr,n);
  let diagonal = arr[i][j] + solve(i+1,j+1,dp,arr,n);

  dp[i][j] = Math.min(down,diagonal);
  return dp[i][j];
}

/* Method 2- use of Tabulization (use of dp array)
see in this we need to do base case first so, base case if n-1,j
set this in dp[n-1][j]. and ans will be at0,0. so we need to start
loop from n-2 to 0 and j loop from 0 to j
TC: O(n*n), SC: O(n*n)
*/
var minimumTotal = function(triangle) {
    let n = triangle.length;
    let dp = Array(n).fill(-1).map(() => Array(n).fill(-1));
    //base case n-1,j need to set to dp array
    for(let j=0; j<n; j++){
        dp[n-1][j] = triangle[n-1][j];
    }
    //we already set the last row value into dp and need to start 
    //from last to 0,0, as we get the ans from 0,0
    for(let i=n-2; i>=0; i--){
        for(let j=0; j<=i; j++){
            let down = triangle[i][j] + dp[i+1][j];
            let diagonal = triangle[i][j] + dp[i+1][j+1];

            dp[i][j] = Math.min(down, diagonal);
        }
    }
    return dp[0][0];
};

/* Method 3- use of Space Optimization (use of only one last row)
see in this we need to do base case first so, base case if n-1,j
set this in dp[n-1][j]. and ans will be at0,0. so we need to start
loop from n-2 to 0 and j loop from 0 to j
TC: O(n*n), SC: O(n)
*/
var minimumTotal = function(triangle) {
    let n = triangle.length;
    let prev = Array(n).fill(-1)
    //base case n-1,j need to set to dp array
    for(let j=0; j<n; j++){
        prev[j] = triangle[n-1][j];
    }
    //we already set the last row value into dp and need to start 
    //from last to 0,0, as we get the ans from 0,0
    for(let i=n-2; i>=0; i--){
        let curr = Array(n).fill(-1);
        for(let j=0; j<=i; j++){
            let down = triangle[i][j] + prev[j];
            let diagonal = triangle[i][j] + prev[j+1];

            curr[j] = Math.min(down, diagonal);
        }
        prev = curr;
    }
    return prev[0];
};


//====> 25 Sept 2025, Leetcode POTD <===

/*
we can also use the Bottom Up Dp approach, start from
last to top
TC: O(n^2), SC: O(n)
*/
var minimumTotal = function(triangle) {
    let n = triangle.length;
    // start with last row
    let dp = [...triangle[n-1]];

    // go from second last row to top
    for (let i = n - 2; i >= 0; i--) {
        let newDp = [];
        for (let j = 0; j <= i; j++) {
            let down = triangle[i][j] + dp[j];
            let diagonal = triangle[i][j] + dp[j+1];
            newDp[j] = Math.min(down, diagonal);
        }
        dp = newDp;
    }
    return dp[0];
};

// ======> 23 Nov <=====
//Revision of this question
/*Method 1; In this, we have option to go row+1,col
or row+1,col+1, so we can use the recursion
TC: O(2^n), SC: O(n)
*/
var minimumTotal = function(triangle) {
    let len = triangle.length;
    return solve(triangle,0, 0,len);
};
function solve(triangle, row, col, len){
    //base case
    if(row === len-1){
        //measn we reach last row, no last row to
        //return, return that elem
        return triangle[row][col];
    }
    //take the curr elem of triangle, and next min
    //of solve(row+1,col, row+1,col+1)
    let minPath = triangle[row][col] + Math.min(solve(triangle, row+1, col, len), solve(triangle, row+1, col+1, len));
    return minPath;
};


/*Method 2; In this, we have option to go row+1,col
or row+1,col+1, so we can use the recursion
+memo -> DP method, top to bottom approach,
in this we can use the dp of 201 space
TC: O(n^2), SC: O(n^2)
*/
var minimumTotal = function(triangle) {
    let len = triangle.length;
    let dp = Array.from({length : 201}, () => Array(201).fill(Number.MAX_VALUE));
    return solve(triangle,0, 0,len,dp);
};
function solve(triangle, row, col, len, dp){
    //base case
    if(row === len-1){
        //measn we reach last row, no last row to
        //return, return that elem
        return triangle[row][col];
    }

    //now check with the dp
    if(dp[row][col] !== Number.MAX_VALUE){
        return dp[row][col];
    }
    //take the curr elem of triangle, and next min
    //of solve(row+1,col, row+1,col+1)
    let minPath = triangle[row][col] + Math.min(solve(triangle, row+1, col, len, dp), solve(triangle, row+1, col+1, len, dp));

    dp[row][col] = minPath;
    return dp[row][col];
}

/*Method 3: , use of Bottom-Up approach, we can take a 
copy of traingale in t and iterate from row-2 and check the
bottom row, what is minPath of that points, this is how we
will calculate the minSumPath
TC: O(n^2), SC: O(n^2)
*/
var minimumTotal = function(triangle) {
    let len = triangle.length;
    //take a copy of triangle 
    let t = [...triangle];

    //now traverse from bottom to up
    for(let row=len-2; row>=0; row--){
        for(let col=0; col<=row; col++){
            t[row][col] += Math.min(t[row+1][col], t[row+1][col+1]);
        }
    }
    return t[0][0]; //moving up we will have the ans in top row, col
};


/*Method 4: , optimize Bottom-Up, as we moving up, we only
need the last row, for checking the till that row,col 
what is minPathSUm, so take the whole traingle, we only take it
lastRow
TC: O(n^2), SC: O(n)
*/
var minimumTotal = function(triangle) {
    let len = triangle.length;
    //take a copy of triangle 
    let t = [...triangle[len-1]];

    //now traverse from bottom to up
    for(let row=len-2; row>=0; row--){
        for(let col=0; col<=row; col++){
            t[col] = triangle[row][col] + Math.min(t[col], t[col+1]);
        }
    }
    return t[0]; //moving up we will have the ans in top row, col
};