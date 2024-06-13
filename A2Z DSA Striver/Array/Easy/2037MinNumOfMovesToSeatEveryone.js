/* 2037. Minimum Number of Moves to Seat Everyone
13 June 2024 Leetcode POTD - Array, Greedy, Sorting
(its explaination in Sorting section of notes) - Note for myself.

There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.
You may perform the following move any number of times:
Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.
Note that there may be multiple seats or students in the same position at the beginning.

Input: seats = [3,1,5], students = [2,7,4]
Output: 4
Explanation: The students are moved as follows:
- The first student is moved from from position 2 to position 1 using 1 move.
- The second student is moved from from position 7 to position 5 using 2 moves.
- The third student is moved from from position 4 to position 3 using 1 move.
In total, 1 + 2 + 1 = 4 moves were used.
*/

/* Method1 - apply sort on both seats and students
as we need closest seat from student to sit on it.
TC: O(2nlogn) + O(n) ~ O(nlogn), SC: O(1)
*/
var minMovesToSeat = function(seats, students) {
  seats = seats.sort((a,b) => a-b);
  students = students.sort((a,b) => a-b);

  let len = seats.length; //len of seats and students will be same
  let moves = 0;
  for(let i=0; i<len; i++){
      moves += Math.abs(students[i] - seats[i]);
  }
  return moves;
};

/* Method 2 - use of couting sort
take a array of 100, as there in constraints.
TC: O(n)+O(n)+O(n), SC: O(n)

- method 1 is good
*/
var minMovesToSeat1 = function(seats, students) {
  let positionSeat = Array(101).fill(0);
  let positionStudents = Array(101).fill(0);
  let len = seats.length;
  for(let pos of seats){
      positionSeat[pos]++;
  }
  for(let pos of students){
      positionStudents[pos]++;
  }

  let i=0, j=0, moves = 0;
  while(len > 0){
      if(positionSeat[i] === 0) i++;
      if(positionStudents[j] === 0) j++;
      if(positionSeat[i] !== 0 && positionStudents[j] !== 0){
          moves += Math.abs(i-j);
          //decrease the freq at that pos
          positionSeat[i]--;
          positionStudents[j]--;
          len--;
      }
  }
  return moves;
};