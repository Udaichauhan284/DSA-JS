/* 26 Sept 2024, Leetcode POTD, INterval Based Questions - Google
729 My Calendar 1

Input
["MyCalendar", "book", "book", "book"]
[[], [10, 20], [15, 25], [20, 30]]
Output
[null, true, false, true]
*/
class MyCalendar{
  constructor(){
    this.calendar = [];
  }
  book(start, end){
    //this start and end is already blocked time.
    let len = this.calendar.length;
    for(let i=0; i<len; i++){
      let startEventTime = this.calendar[i][0];
      let endEventTime = this.calendar[i][1];
      if(!(end <= startEventTime || start >= endEventTime)){
        //first ------- second
        //.      start ---------- end
        //this overlap will give false || false, then it will true means overlap , return false
        return false; //overlapping happening.
      }
    }
    this.calendar.push([start,end]);
    return true;
  }
}


/*Optimal Method - use of set, then we sort the set, it 
will easy to find the overlap, we can simply use current
event to check with next event currS < end && start > currE
false overlap
TC: O(nlogn), SC: O(n)
*/
class MyCalendar1{
  constructor(){
    this.bookings = new Set();
  }
  book(start, end){
    //convert set into array and then sort it
    const sortedBookings = Array.from(this.bookings).sort((a,b) => a[0]-b[0]);
    //now check the curr event with next nextEvent
    for(let [currS, currE] of sortedBookings){
      if(currS < end && start < currE){
        return false; //overleap
      }
    }
    //if not overlap, add into set
    this.bookings.add([start, end]);
    return true;
  }
}