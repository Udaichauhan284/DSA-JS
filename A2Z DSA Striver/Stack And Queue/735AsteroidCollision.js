/* 735. Asteroid Collision
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
*/
//Optimal Approach - use of stack O(n), O(n)
const asteroidCollision = (asteroid) => {
  let st = [];
  for(let val of asteroid){
    //collision condition when it will happen
    while(st.length !== 0 && val < 0 && st[st.length-1] > 0){
      let sum = val + st[st.length-1];

      if(sum < 0){  //collision happen
        st.pop();
      }else if(sum > 0){ //when sum is bigger than 0.
        val = 0; // change it 0 and it will work as 
      }else {
        st.pop();
        val = 0; //work as 
      }
    }
    if(val !== 0){
      st.push(val);
    }
  }
  return st;
}
let nums = [5,10,-5];
console.log(asteroidCollision(nums));