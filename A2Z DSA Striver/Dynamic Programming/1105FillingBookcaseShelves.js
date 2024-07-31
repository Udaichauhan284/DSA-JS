/* 1105 Filling Bookcase Shelves
31 July 2024, Leetcode POTD, Array, DP

Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4
Output: 6
Explanation:
The sum of the heights of the 3 shelves is 1 + 3 + 2 = 6.
Notice that book number 2 does not have to be on the first shelf.

*/

/*Method 1- in this question we have the option to choose
whether you want to keep the book in sameshelf, if remain
width is there, or move to next shefl and increase the H
we can use Recursion
TC: O(2^n), SC: O(n)
*/
var minHeightShelves = function(books, shelfWidth) {

  //recursion function
  const solve = (i,books,remainingW, maxH) => {
  if(i >= books.length){
      return maxH; //base case
  }
  let bookW = books[i][0];
  let bookH = books[i][1];

  let keep = Number.MAX_VALUE;
  //keep in the same shefl, if possible
  if(bookW <= remainingW){
      keep = solve(i+1, books, remainingW-bookW, Math.max(maxH, bookH));
  }

  //skip to next shelf
   let skipToNext = maxH + solve(i+1, books, shelfWidth-bookW, bookH);

  return Math.min(keep, skipToNext)
}


  return solve(0,books,shelfWidth, 0);
};



/*Method 2- in this question we have the option to choose
whether you want to keep the book in sameshelf, if remain
width is there, or move to next shefl and increase the H
we can use Recursion , In this use Recursion + memoization
DP
TC: O(n * shelfWidth), SC: O(n * shelfWidth)
*/
var minHeightShelves = function(books, shelfWidth) {
  //dp array
  let n = books.length
  let dp = Array.from({length: n}, () => Array(shelfWidth+1).fill(-1));

  //recursion function
  const solve = (i,books,remainingW, maxH) => {
  if(i >= books.length){
      return maxH; //base case
  }
  if(dp[i][remainingW] !== -1) return dp[i][remainingW];
  let bookW = books[i][0];
  let bookH = books[i][1];

  let keep = Number.MAX_VALUE;
  //keep in the same shefl, if possible
  if(bookW <= remainingW){
      keep = solve(i+1, books, remainingW-bookW, Math.max(maxH, bookH));
  }

  //skip to next shelf
   let skipToNext = maxH + solve(i+1, books, shelfWidth-bookW, bookH);

  dp[i][remainingW] = Math.min(keep, skipToNext);
  return dp[i][remainingW];
}


  return solve(0,books,shelfWidth, 0);
};
