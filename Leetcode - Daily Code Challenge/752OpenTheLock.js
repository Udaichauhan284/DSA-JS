/* 752. Open the lock
Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6
Explanation: 
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".
*/
 //This is done by graph, why graph because we cannot directly jump from 0000 to 0101 we need neighbour 0100, i graph when we need neighbour BFS is best TC : O(n^w), Sc : O(n^w), n is number of slots and w is wheel
const openLock = (deadends, target) => {
  let dead = new Set(deadends);
  let start = "0000";
  if(dead.has(start)) return -1;

  let level = 0;
  let que = [];
  que.push(start);
  while(que.length > 0){
    let n = que.length;
    while(n--){
      let curr = que.shift();

      if(curr === target) return level;

      fillNeighbours(que,curr,dead);
    }
    level++;
  }
  return -1;
}
function fillNeighbours(que,curr,dead){
  for(let i=0; i<4; i++){
    let ch = curr[i];
    let dec = ch === "0" ? "9" : String.fromCharCode(ch.charCodeAt(0)-1);
    let inc = ch === "9" ? "0" : String.fromCharCode(ch.charCodeAt(0)+1);

    curr = curr.substr(0,i)+dec+curr.substr(i+1);
    if(!dead.has(curr)){
      dead.add(curr);
      que.push(curr);
    }
    
    curr = curr.substr(0,i)+inc+curr.substr(i+1);
    if(!dead.has(curr)){
      dead.add(curr);
      que.push(curr);
    }

    curr = curr.substr(0,i)+ch+curr.substr(i+1);
  }
}

console.log(openLock(["0201","0101","0102","1212","2002"], "0202"));