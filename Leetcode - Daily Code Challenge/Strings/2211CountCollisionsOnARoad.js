/* 2211. Count Collisions On A Road
04 Dec 2025, leetcode potd, medium

Input: directions = "RLRSLL"
Output: 5
Explanation:
The collisions that will happen on the road are:
- Cars 0 and 1 will collide with each other. Since they are moving in opposite directions, the number of collisions becomes 0 + 2 = 2.
- Cars 2 and 3 will collide with each other. Since car 3 is stationary, the number of collisions becomes 2 + 1 = 3.
- Cars 3 and 4 will collide with each other. Since car 3 is stationary, the number of collisions becomes 3 + 1 = 4.
- Cars 4 and 5 will collide with each other. After car 4 collides with car 3, it will stay at the point of collision and get hit by car 5. The number of collisions becomes 4 + 1 = 5.
Thus, the total number of collisions that will happen on the road is 5. 
*/


var countCollisions = function(directions) {
    let len = directions.length;
    let i=0;
    while(i < len && directions[i] === "L"){
        i++;
    }

    let j = len-1;
    while(j >= 0 && directions[j] === "R"){
        j--;
    }

    let collisions = 0;
    while(i <= j){
        if(directions[i] !== "S"){
            collisions++;
        }
        i++;
    }
    return collisions;
};