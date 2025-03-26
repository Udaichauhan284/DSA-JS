/* 2033. Minimum Operations to Make a Uni-Value Grid
26 Mar 25, Leetcode POTD
You are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x to or subtract x from any element in the grid.

A uni-value grid is a grid where all the elements of it are equal.

Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1.

Input: grid = [[2,4],[6,8]], x = 2
Output: 4
Explanation: We can make every element equal to 4 by doing the following: 
- Add x to 2 once.
- Subtract x from 6 once.
- Subtract x from 8 twice.
A total of 4 operations were used.
*/

/*Flattening the grid O(m*n), Sorting
the arr O(m*n(log(m*n)))
TC: O(m*n(log(m*n))), SC: O(m*n)
*/
var minOperations = function(grid, x) {
    let flattenArr = [];
    for(let row of grid){
        for(let num of row){
            flattenArr.push(num);
        }
    }
    flattenArr.sort((a,b) => a-b);
    let median = flattenArr[Math.floor(flattenArr.length / 2)];
    let operations = 0;
    for(let num of flattenArr){
        let diff = Math.abs(num - median);
        if(diff % x !== 0) return -1;
        operations += diff/x;
    }
    return operations;
}