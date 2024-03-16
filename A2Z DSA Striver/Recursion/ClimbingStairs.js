// Leetcode Queston Climbing Stairs, only steps are 1 and 2, reach the top
// using recursive way it will give the TLE
const climbStaris = (n) => {
  if(n <= 1){
    return 1;
  }
  return climbStaris(n-1)  + climbStaris(n-2);
}
console.log("Climbing Stairs " + climbStaris(7));

