/*There is one meeting room in a firm. There are N meetings in the form of (start[i], end[i]) where start[i] is start time of meeting i and end[i] is finish time of meeting i.
What is the maximum number of meetings that can be accommodated in the meeting room when only one meeting can be held in the meeting room at a particular time?

Note: Start time of one chosen meeting can't be equal to the end time of the other chosen meeting.

Input:
N = 6
start[] = {1,3,0,5,8,5}
end[] =  {2,4,6,7,9,9}
Output: 
4
Explanation:
Maximum four meetings can be held with
given start and end timings.
The meetings are - (1, 2),(3, 4), (5,7) and (8,9)
*/
//O(n)+O(nlogn) + O(n) ~ O(nlogn)
class Meeting{
  constructor(start,end,pos){
    this.start = start;
    this.end = end;
    this.pos = pos;
  }
}
class Solution{
  static comp(a,b){
    if(a.end < b.end) return -1;
    else if(a.end > b.end) return 1;
    else if(a.pos < b.pos) return -1;
    return 1;
  }
  maxMeetings(start,end,n){
    const meetings = [];
    for(let i=0; i<n; i++){ //O(n)
      meetings.push(new Meeting(start[i],end[i],i+1));
    }
    meetings.sort(Solution.comp); //O(nlogn)

    let ans = [];
    let limit = meetings[0].end;
    ans.push(meetings[0].pos);

    for(let i=1; i<n; i++){ //O(n)
      if(meetings[i].start > limit){
        limit = meetings[i].end;
        ans.push(meetings[i].pos);
      }
    }
    return ans.length;
  }
}