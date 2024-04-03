/* 2104 Sum of Subarray Ranges.
nums=[1,2,3]
o/p

this is question is same as Sum of Subarray Min - 907
in this we just need to find max number also and sum of Min and sum of Max and after that we will return the difference of that both.
*/
//Brute Method - TC O(n^2), Sc : O(1)
const subArrayRanges = (nums) => {
  let result = 0;
  let len = nums.length;
  for(let i=0; i<len; i++){
    let smallest = nums[i];
    let greater = nums[i];
    for(let j=i; j<len; j++){
      smallest = Math.min(smallest,nums[j]);
      greater = Math.max(greater,nums[j]);
      result += greater - smallest;
    }
  }
  return result;
}
let nums = [1,2,3];
// console.log(subArrayRanges(nums));

//Optimal Method 
//Optimal Method - same as Sum of Subarray Min, just need to find for next greater and prev greater eleme. TC overall - O(n), SC O(n)
var subArrayRanges1 = function(nums) {
  let len = nums.length;
  let sumForGreater = 0;
  let sumForSmaller = 0;
  let NSL = getNextSmallerElemLeft(nums,len);
  let NSR = getNextSmallerElemRight(nums,len);
  let NGL = getNextGreaterElemLeft(nums,len);
  let NGR = getNextGreaterElemRight(nums,len);

  for(let i=0; i<len; i++){
    //for smaller
    let d1 = i-NSL[i];
    let d2 = NSR[i]-i;

    let totalSubArray = d1*d2;
    let totalSubArrayForCurrElem = nums[i]*totalSubArray;
    sumForSmaller += totalSubArrayForCurrElem;
  }

  for(let i=0; i<len; i++){
    //for greter elem
    let d1 = i-NGL[i];
    let d2 = NGR[i]-i;

    let totalSubArray = d1*d2;
    let totalSubArrayForCurrElem = nums[i]*totalSubArray;
    sumForGreater += totalSubArrayForCurrElem;
  }

  return sumForGreater - sumForSmaller;
};
function getNextSmallerElemLeft(nums,n){
let st = [];
let result = [];
for(let i=0; i<n; i++){
  let ele = nums[i];
  while(st.length !== 0 && nums[st[st.length-1]] >= ele){
    st.pop();
  }
  result[i] = (st.length === 0) ? -1 : st[st.length-1];
  st.push(i);
}
return result;
}
function getNextSmallerElemRight(nums,n){
let result = [];
let st = [];
for(let i=n-1; i>=0; i--){
  let ele = nums[i];
  while(st.length !== 0 && nums[st[st.length-1]] > ele){
    st.pop();
  }
  result[i] = (st.length === 0) ? n : st[st.length-1];
  st.push(i);
}
return result;
}

//for greater eleme
function getNextGreaterElemLeft(nums,n){
let result = [];
let st = [];
for(let i=0; i<n; i++){
  let ele = nums[i];
  while(st.length !== 0 && nums[st[st.length-1]] <= ele){
    st.pop();
  }
  result[i] = (st.length === 0) ? -1 : st[st.length-1];
  st.push(i);
}
return result;
}
function getNextGreaterElemRight(nums,n){
let result = [];
let st = [];
for(let i=n-1; i>=0; i--){
  let ele = nums[i];
  while(st.length !== 0 && nums[st[st.length-1]] < ele){
    st.pop();
  }
  result[i] = (st.length === 0) ? n : st[st.length-1];
  st.push(i);
}
return result;
}
console.log(subArrayRanges1(nums));
