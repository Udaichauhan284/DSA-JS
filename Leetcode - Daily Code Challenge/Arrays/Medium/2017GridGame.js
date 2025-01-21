/* 2017. Grid Game
21 Jan 25, leetcode potd, array, game grid

Input: grid = [[2,5,4],[1,5,1]]
Output: 4
Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
The cells visited by the first robot are set to 0.
The second robot will collect 0 + 0 + 4 + 0 = 4 points.

*/

//TC: O(col), SC: O(1)
const gridGame = (grid) => {
    let firstRowSum = 0;
    for(let num of grid[0]){
        firstRowSum += num;
    }
    let secondRowSum = 0;
    let miniSum = Number.MAX_VALUE;

    for(let r1col=0; r1col<grid[0].length; r1col++){
        firstRowSum -= grid[0][r1col];

        let bestOfR2 = Math.max(firstRowSum, secondRowSum);

        miniSum = Math.min(bestOfR2, miniSum);

        secondRowSum += grid[1][r1col];
    }
    return miniSum;
}