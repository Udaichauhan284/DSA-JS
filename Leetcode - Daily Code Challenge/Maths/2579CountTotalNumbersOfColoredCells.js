/*2579 Count Total Numbers of Colored Cells
05 March 25, Leetcode POTD
There exists an infinitely large two-dimensional grid of uncolored unit cells. You are given a positive integer n, indicating that you must do the following routine for n minutes:

At the first minute, color any arbitrary unit cell blue.
Every minute thereafter, color blue every uncolored cell that touches a blue cell.

Example 1:

Input: n = 1
Output: 1
Explanation: After 1 minute, there is only 1 blue cell, so we return 1.
Example 2:

Input: n = 2
Output: 5
Explanation: After 2 minutes, there are 4 colored cells on the boundary and 1 in the center, so we return 5.
*/

/*In this we know the for n=2, we have 
already 1 cells, for that 4 bounday we can 
add 4*(n-1), because for n=2 cells is 5
TC: O(n), SC: O(1)
*/
var coloredCells = function(n) {
    if(n === 1){
        return 1;
    }
    let cells = 1;
    while(n > 0){
        cells += 4*(n-1);
        n--;
    }
    return cells;
};

var coloredCells = function(n) {
    if(n === 1){
        return 1;
    }
    return (1 + 2*(n-1)*n)
};