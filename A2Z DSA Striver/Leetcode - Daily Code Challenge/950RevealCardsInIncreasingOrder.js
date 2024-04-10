/* 950. Reveal Cards in Increasing Order
10 Apr 2024
topic : array, queue, stack, simulation
deck: [17,13,11,2,3,5,7]
o/p: [2,13,3,11,5,17,7]
*/
//Aproach Mthod 1: use of result araay, and store in that only usin skip, place on alternative position, also first sort the deck TC : O(2nlogn) ~ O(nlogn), SC : O(n) just for result arr
const deckRevealedIncreasing = (deck) => {
  deck.sort((a,b) => a-b);
  let len = deck.length;
  let result = new Array(len).fill(0);
  let i=0; //for deck moving
  let j=0; //for result moving
  let skip = false;
  while(i < len){// move in deck till len
    if(result[j] === 0){
      if(skip === false){
        result[j] = deck[i];
        i++;
      }
      skip = !skip;
    }
    j = (j+1)%len; //for storing on alternative position, circular loop
  }
  return result;
}
console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));

//Optimal Method : use of Queue, we can use this skip functionality in queue easily, first push in result front and then delete the front, and move second ele from front to back of queue. TC : O(nlogn), SC: O(n) for queue - nlogn we do sorting 
const deckRevealedIncreasing1 = (deck) => {
  let que = [];
  let result = [];
  deck.sort((a,b) => a-b);
  for(let i=0; i<deck.length; i++){
    que.push(i);
  }

  for(let i=0; i<deck.length; i++){
    let idx = que[0];
    que.shift(); //remove the front 
    result[idx] = deck[i];

    if(que.length !== 0){
      que.push(que.shift());
    }
  }
  return result;
}
console.log(deckRevealedIncreasing1([17,13,11,2,3,5,7]));