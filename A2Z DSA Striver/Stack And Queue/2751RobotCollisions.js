/* 2751. Robot Collisions (HARD)
13 July 2024, Leetcode POTD, Array,Stack,Simulation

Input: positions = [3,5,2,6], healths = [10,10,15,12], directions = "RLRL"
Output: [14]
Explanation: There are 2 collisions in this example. Firstly, robot 1 and robot 2 will collide, and since both have the same health, they will be removed from the line. Next, robot 3 and robot 4 will collide and since robot 4's health is smaller, it gets removed, and robot 3's health becomes 15 - 1 = 14. Only robot 3 remains, so we return [14].

*/

/*This question is same as Asteriod Collison, in this we just need to 
work on number line ind, as position is fpr where the robot is present
on number line pos[0] = 3 positon of number line. so we take out the
actual index in new Array, and sort it acc position, position[i]<pos[j]
3<5, so first 3 pos robot will excute. then same use Stack
TC: O(nlogn)+O(2n) ~ O(nlogn), SC: O(n)
*/

var survivedRobotsHealths = function(positions, healths, directions) {
  let len = positions.length;
  let actualIndex = Array.from({length: len}, (_,i) => i);
  //need to sort the actualIndex, acc. Number Line
  actualIndex.sort((a,b) => positions[a]-positions[b]);

  let st = []; //stack for storing the acutal index
  let result = []; //for reamining health, ans
  //movement start
  for(let currIdx of actualIndex){
      //if currIdx robot , moving in right dir, push in stack
      if(directions[currIdx] === "R"){
          st.push(currIdx);
      }else{
          //measn robot is moving in left direction
          while(st.length !== 0 && healths[currIdx] > 0){
              let topIdx = st.pop();
              //check with st top robot
              if(healths[topIdx] > healths[currIdx]){
                  healths[topIdx] -= 1;
                  healths[currIdx] = 0;
                  st.push(topIdx);
              }else if(healths[topIdx] < healths[currIdx]){
                  healths[currIdx] -= 1;
                  healths[topIdx] = 0;
              }else{
                  //measn both are same, delete it
                  healths[topIdx] = 0;
                  healths[currIdx] = 0;
              }
          }
      }
  }

  //now add in result arr, 
  for(let i=0; i<len; i++){
      if(healths[i] > 0){
          result.push(healths[i]);
      }
  }
  return result;
};