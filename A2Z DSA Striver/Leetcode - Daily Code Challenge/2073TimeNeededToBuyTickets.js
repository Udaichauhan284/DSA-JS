/* 2073 Time needed to buy tickets.
09-Apr-2024, topic: Aray Queue, Simulation
tickets = [2,3,2] k=2 (0 index pos)
o/p: 6
*/
 //Brute method - use of queue, first push the index of tickets in queue, and then start the loop till que not empty, remove from the front and push it back : TC: O(n*m), SC : O(n)
const timeRequiredToBuy = (tickets,k) => {
  let len = tickets.length;
  let que = [];
  for(let i=0; i<len; i++){
    que.push(i);
  }

  let time = 0;
  while(que.length !== 0){
    time++;
    let front = que[0];
    que.shift();

    tickets[front]--;
    if(k===front && tickets[front] === 0){
      return time;
    }
    if(tickets[front] !== 0){
      que.push(front);
    }
  }
  return time;
}
console.log(timeRequiredToBuy([2,3,2],2));

//Optimal Method - simple travser the array and see if i is smlller than and equal to k, add min of both in time, because min one add the in time, to make that 0, if i > k, take min of tickets[k]-1 and tickets[i], why -1, beacuse greater i will decrement till tickets[k]-1 and that will add in time.
const timeRequiredToBuy1 = (tickets,k) => {
  let len = tickets.length;
  let time = 0;
  for(let i=0; i<len; i++){
    if(i <= k){
      time += Math.min(tickets[i], tickets[k]);
    }else{
      time += Math.min(tickets[i], tickets[k]-1);
    }
  }
  return time;
}
console.log(timeRequiredToBuy1([2,3,2],2));