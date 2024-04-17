/* 45. Jump Game II
0-based index array given, reach at th elast, find the mini number of jumps
nums[2,3,1,1,4], o/p: 2
*/
const minJump = (nums) => {
  let len = nums.length;
  let curr = 0;
  let farthest = 0;
  let jumps = 0;
  for(let i=0; i<len-1; i++){
    farthest = Math.max(farthest,nums[i]+i);

    if(i === curr){
      curr = farthest;
      jumps++;
    }
  }
  return jumps;
}
console.log(minJump([2,3,1,1,4]));