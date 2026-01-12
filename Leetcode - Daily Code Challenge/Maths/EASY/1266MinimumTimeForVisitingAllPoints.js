/* 1266. Minimum Time Visiting All Points
12 Jan 2025, leetcode potd, EASY

Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds
*/

/*In graph, the distance from one point to another
point, on horizontal line dx=x2-x1, and on vertical
dy=y2-y1. So when we start moving from point 1 to 
point 2, in which distance is less it will meet on
that line, suppose dx is less diganoal we will meet
on dy and dx distance will be cover more distance
we need to cover => abs(dy-dx), so we the eq
will be like dx + abs(dy-dx);
TC: O(n), SC: O(1)
*/
var minTimeToVisitAllPoints = function(points) {
    let len = points.length;
    let steps = 0;
    for(let i=0; i<len-1; i++){
        let x1 = points[i][0];
        let y1 = points[i][1];

        let x2 = points[i+1][0];
        let y2 = points[i+1][1];

        let dx = Math.abs(x2-x1);
        let dy = Math.abs(y2-y1);

        steps += Math.min(dx,dy) + Math.abs(dx-dy);
    }
    return steps;
};