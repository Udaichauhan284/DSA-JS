/* 2938 Separate Black and White Balls
15 Oct 2024, LEETCODE POTD, String

Input: s = "101"
Output: 1
Explanation: We can group all the black balls to the right in the following way:
- Swap s[0] and s[1], s = "011".
Initially, 1s are not grouped together, requiring at least 1 step to group them to the right.
*/

/*We need to shift 0(white ball to left) and 1(black ball)
to right, so we traverse over the s from left to right and
keep the count of 1(black) when ever i see the white ball(0)
i need to swap the amount of black ball on left
swap += black. TC: O(n), SC: O(1)
*/
const minimumSteps = (s) => {
  let len = s.length;
  let blackBalls = 0; //keep the black balls count on left
  let swap = 0; //this we need to return
  for(let i=0; i<len; i++){
    if(s[i] === "1"){
      //measn we see the black ball on left
      blackBalls++;
    }else{
      // means we are at white ball, so we need to send it to left
      swap += blackBalls; //for swap we need to go left till blackballs count
    }
  }
  return swap;
}