/* 1903 Largest Odd Number in String
"52" return odd one - "5"
*/
const largestOddNumber = (nums) => {
  let len = nums.length;
  for(let i=len-1; i>=0; i--){
    if(parseInt(nums[i])%2 === 1){
      return nums.substring(0,i+1);
    }
  }
  return "";
}
let num = "52";
console.log(largestOddNumber(num));