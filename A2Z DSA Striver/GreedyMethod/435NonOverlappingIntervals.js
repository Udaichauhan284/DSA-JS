/* 435. Non Overlapping Intevrals.
Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
*/
//Approach 1. sort the intervals according to its, start point in ascending order and then see, which one is overlapping and which one is not. currEnd <= nextStart non overlapting, and currEnd <= nextEnd overlapping, remove the bigger one nextEnd, currEnd > nextEnd , overlapping, remove the currEnd, take two pointer i=0 and j=1 TC : O(n), SC : O(1)

const eraseOverlapIntervals = (intervals) => {
  //sort the intervals according to the start point
  intervals.sort((a, b) => a[0] - b[0]);
  let len = intervals.length;
  let i = 0,
    j = 1;
  let count = 0;
  while (j < len) {
    let currInterval = intervals[i];
    let nextInterval = intervals[j];
    let cs = currInterval[0];
    let ce = currInterval[1];

    let ns = nextInterval[0];
    let ne = nextInterval[1];

    if (ce <= ns) {
      //no overlapping
      i = j; //move i to j location
      j++; //move j to next interval location
    } else if (ce <= ne) {
      //currEne is less than nextEnd, means overlapping, so remove bigger one which is nextEnd
      j++; //move j
      count++; // count increase, this we to need to remove
    } else if (ce > ne) {
      //currEnd is bigger than nextEnd, so remove currEne
      i = j;
      j++;
      count++;
    }
  }
  return count;
};
