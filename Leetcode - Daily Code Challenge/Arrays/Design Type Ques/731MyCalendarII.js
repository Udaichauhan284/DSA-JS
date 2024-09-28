/* 27 Sept 2024, Leetcode POTD
731. My Calendar II, Array, Design, Intervals

Input
["MyCalendarTwo", "book", "book", "book", "book", "book", "book"]
[[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
Output
[null, true, true, true, false, true, true]

Explanation
MyCalendarTwo myCalendarTwo = new MyCalendarTwo();
myCalendarTwo.book(10, 20); // return True, The event can be booked. 
myCalendarTwo.book(50, 60); // return True, The event can be booked. 
myCalendarTwo.book(10, 40); // return True, The event can be double booked. 
myCalendarTwo.book(5, 15);  // return False, The event cannot be booked, because it would result in a triple booking.
myCalendarTwo.book(5, 10); // return True, The event can be booked, as it does not use time 10 which is already double booked.
myCalendarTwo.book(25, 55); // return True, The event can be booked, as the time in [25, 40) will be double booked with the third event, the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.
*/


/*In this we need to check the any schedule causing
triple overlapping, fpr that we need to put the doubleOverlap
ones into array, and while trvaering need to check first in
doubleOverlapping ones and then in booking ones.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
How to check Overlap - max(start1,start2) < min(end1, end2)
How to find the region - [max(start1, start2), min[end1,end2]]
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
TC: O(n + n) * 1000 ~ O(2n)*1000, 1000 is number of booking
~O(n*1000) ~ O(n)
SC: O(2n) ~ O(n)
*/
class MyCalendarTwo {
  constructor(){
      this.doubleOverlapping = [];
      this.bookings = [];
  }
  book(start, end){
      //first we need to check in doubleOverlapping arr,
      //if in the arr of doubleOverlapping region is causing the triple overlapping with 
      // new new start,end so, how we check overLapping, we call function and them return false
      for(let [regionStart, regionEnd] of this.doubleOverlapping){
          if(this.checkOverlapping(start,end,regionStart,regionEnd)){
              return false;
          }
      }
      //now need to store the double  overlapping
      //as these both allowed
      for(let [start2, end2] of this.bookings){
          if(this.checkOverlapping(start,end,start2,end2)){
              //doubltoverlapping possible
              //so add the overlapping region in it.
              //with this region third booking will check and
              //see it that one is causing triple overlapping
              //or not in above for loop
              let overLapRegion = this.findOverLappingRegion(start, end, start2, end2);
              this.doubleOverlapping.push(overLapRegion);
          }
      }
      //at last booking possible add in booking arr
      this.bookings.push([start,end]);
      return true;
  }

  //check overlapping method
  checkOverlapping(start,end, start2, end2){
      return (Math.max(start,start2) < Math.min(end,end2));
  }
  //region will give max of start and min of end
  findOverLappingRegion(start,end, start2,end2){
      return [Math.max(start,start2), Math.min(end,end2)];
  }
}