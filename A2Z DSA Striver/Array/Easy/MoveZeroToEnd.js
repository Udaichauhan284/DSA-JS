//Array section - Easy - Moving Zero in end
function moveZero(nums){
  //take a pointer for moving zeros
  let j = -1;

  //finding zero and giving that index to j
  for(let i=0; i<nums.length; i++){
    if(nums[i] === 0){
      j = i;
      break;
    }
  }

  //if there is no zero in array
  if(j === -1){
    return nums;
  }

  //moving the zero to end, i=j+1, swap the i and j, move j++
  for(let i=j+1; i<nums.length; i++){
    if(nums[i] !== 0){
      // let temp = nums[i];
      // nums[i] = nums[j];
      // nums[j] = temp;
      [nums[i],nums[j]] = [nums[j],nums[i]];
      j++;
    }
  }
  return nums;
}
let nums = [2,3,0,1,4,0,0,5,0,6];
console.log(moveZero(nums));