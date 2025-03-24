/* 3169. Count Days Without Meetings
24 March 25, Leetcode POTD
Input: days = 10, meetings = [[5,7],[1,3],[9,10]]

Output: 2
*/

/*In this we are talking about the intervals
so we can sort it first and then, we can
check the end-start-1, this will give the 
dayOff. TC: O(nlogn), SC: O(1)
*/
var countDays = function(days, meetings) {
    let dayOff = 0;
    //now sort the meetings
    meetings.sort((a,b) => a[0]-b[0]);

    let end = 0;
    for(let i=0; i<meetings.length; i++){
        //curr starttime, is greater then end
        if(meetings[i][0] > end){
            dayOff += meetings[i][0]-end-1;
        }
        end = Math.max(end, meetings[i][1])
    }

    //now check if more days left
    if(end < days){
        dayOff += days-end;
    }
    return dayOff;
};