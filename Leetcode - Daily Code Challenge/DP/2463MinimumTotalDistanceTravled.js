/* 2463 Minimum Total Distance Traveled
31 Oct 2024, Leetcode POTD, DP, sorting

Input: robot = [0,4,6], factory = [[2,2],[6,2]]
Output: 4
Explanation: As shown in the figure:
- The first robot at position 0 moves in the positive direction. It will be repaired at the first factory.
- The second robot at position 4 moves in the negative direction. It will be repaired at the first factory.
- The third robot at position 6 will be repaired at the second factory. It does not need to move.
The limit of the first factory is 2, and it fixed 2 robots.
The limit of the second factory is 2, and it fixed 1 robot.
The total distance is |2 - 0| + |2 - 4| + |6 - 6| = 4. It can be shown that we cannot achieve a better total distance than 4.
*/

/*IN Dp recursion + memoization robot size and foactory size
need to sort also
*/
var minimumTotalDistance = function(robot, factory) {
    //sorting
    robot.sort((a,b) => a-b);
    factory.sort((a,b) => a[0]-b[0]);

    let factories = [];
    //change 2d factoryies into 1D
    for(let i=0; i<factory.length; i++){
        let pos = factory[i][0];
        let count = factory[i][1];
        for(let j=0; j<count; j++){
            factories.push(pos);
        }
    }
    let dp = Array.from({length: robot.length}, () => Array(factories.length).fill(-1));
    return minCost(robot, robot.length-1, factories, factories.length-1, dp);
};
function minCost(robot, robPos, factories, facPos, dp){
    if(robPos < 0) return 0; //if all robot done
    if(facPos < 0) return Number.MAX_VALUE;

    if(dp[robPos][facPos] !== -1){
        return dp[robPos][facPos];
    }

    //taken and not taken in factories
    let taken = Math.abs(robot[robPos] - factories[facPos]) + 
    minCost(robot, robPos-1, factories, facPos-1, dp);
    let notTaken = minCost(robot, robPos, factories, facPos-1, dp);
    //chossing next factory

    dp[robPos][facPos] = Math.min(taken, notTaken);
    return dp[robPos][facPos];
}