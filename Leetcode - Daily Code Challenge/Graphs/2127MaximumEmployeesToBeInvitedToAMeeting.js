/* 2127. Maximum Employees To Be Invited To A Meeting
26 Jan 25, Leetcode POTD, Graph

Input: favorite = [2,2,1,2]
Output: 3
Explanation:
The above figure shows how the company can invite employees 0, 1, and 2, and seat them at the round table.
All employees cannot be invited because employee 2 cannot sit beside employees 0, 1, and 3, simultaneously.
Note that the company can also invite employees 1, 2, and 3, and give them their desired seats.
The maximum number of employees that can be invited to the meeting is 3. 
*/

var maximumInvitations = function(favorite) {
    let len = favorite.length;
    let longestCycle = 0;
    let twoCycle = 0;
    let indegree = Array(len).fill(0);
    let depth = Array(len).fill(1);
    for(let person=0; person<len; person++){
        indegree[favorite[person]]++;
    }
    let queue = [];
    for(let person=0; person<len; person++){
        if(indegree[person] === 0){
            queue.push(person);
        }
    }

    while(queue.length > 0){
        let curr = queue.shift();
        let next = favorite[curr];
        depth[next] = Math.max(depth[next], depth[curr]+1);
        if(--indegree[next] === 0){
            queue.push(next);
        }
    }

    for(let person=0; person<len; person++){
        if(indegree[person] === 0) continue;
        let cycleLength = 0;
        let curr = person;
        while(indegree[curr] !== 0){
            indegree[curr] = 0;
            cycleLength++;
            curr = favorite[curr];
        }
        if(cycleLength === 2){
            twoCycle += depth[person]+depth[favorite[person]];
        }else{
            longestCycle = Math.max(longestCycle, cycleLength);
        }
    }

    return Math.max(longestCycle, twoCycle);
};