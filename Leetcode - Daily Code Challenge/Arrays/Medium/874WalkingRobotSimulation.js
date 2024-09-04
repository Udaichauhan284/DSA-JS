/* 874 Walking Robot Simulation
04 Sep 2024, Leetcode POTD, Array, Simulation

Input: commands = [4,-1,3], obstacles = []
Output: 25
Explanation: The robot starts at (0, 0):
1. Move north 4 units to (0, 4).
2. Turn right.
3. Move east 3 units to (3, 4).
The furthest point the robot ever gets from the origin is (3, 4), which squared is 32 + 42 = 25 units away.
*/

/*Simulation question, we tak eset for obstacles and add in it.
and for loop on commands to check where to move left and right
and there is unit need to travel that unit, while travling check
with set, for left 90deg x,y => [-y,x], for right 90deg x,y =>
[y,-x]
TC: O(obes len) + O(command len * maxValue of command)
~ O(n * maxValue) ~ O(n), SC: O(n)
*/
const robotSim = (commands, obstacles) => {
  let len = commands.length;
  let set = new Set(); //for obstacles;
  for(let obs of obstacles){
    set.add(obs[0]+","+obs[1]);
  }
  let x=0,y=0;
  let maxD = 0;
  let dir = [0,1]; //in starting facing north, direction
  for(let i=0; i<len; i++){
    if(commands[i] === -2){
      //for 90deg turn left, need to change the direction
      dir = [-dir[1], dir[0]]; //-y,x
    }else if(commands[i] === -1){
      //for 90deg turn right, need to chnage the direction
      dir = [dir[1], -dir[0]]; //y,-x
    }else{
      //move the unit of that commands[i]
      for(let step=0; step<commands[i]; step++){
        let newX = x + dir[0];
        let newY = y + dir[1];
        if(set.has(newX+","+newY)){
          break; //measn there is obstacle
        }
        x = newX;
        y = newY;
      }
    }
    maxD = Math.max(maxD, (x*x + y*y));
  }
  return maxD;
}
let ans = robotSim([4,-1,3], []);
console.log(ans);