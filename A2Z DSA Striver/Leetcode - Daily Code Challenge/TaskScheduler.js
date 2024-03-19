/* 19 Mar 2024,
621. Task Scheduler.
Input: tasks = ["A","A","A","B","B","B"], n = 2

Output: 8

Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.

Approach : //first count the freq. task.charCodeAt(0) - "A", then sort freq in descending order (because here priority queue concept is in use). then count maxChunk freq[0]-1, iddleSpot = maxChunk * n;
*/

const leastInterval = (tasks, n) => {
  let freq = new Array(26).fill(0);

  //now putting the freq of task in freq arr, then we will sort this freq, so that max freq, element comes first, because in this Priority queue concept is in use.
  for(let task of tasks){
    freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }
  //sortiing the freq in desecinding order
  freq.sort((a,b) => b-a);

  let maxChunk = freq[0]-1;
  let iddleSpot = maxChunk * n;

  for(let i=1; i<26; i++){
    iddleSpot -= Math.min(freq[i],maxChunk);
  }
  if(iddleSpot < 0){
    return tasks.length;
  }else {
    return tasks.length+iddleSpot;
  }
}
let tasks = ["A","A","A","B","B","B"];
let n = 2;
console.log(leastInterval(tasks,n));