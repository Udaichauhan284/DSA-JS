/* Majority Element II
find majority elements which is more than N/3 times, you can only find 2 majority elements
*/
let majorityElement = (nums) => {
  let len = nums.length;
    let count1 = 0;
    let maj1 = null;
    let count2 = 0;
    let maj2 = null;

    for(let i=0; i<len; i++){
      if(maj1 === nums[i]){
        count1++;
      }else if(maj2 === nums[i]){
        count2++;
      }else if(count1 === 0){
        maj1 = nums[i];
        count1++;
      }else if(count2 === 0){
        maj2 = nums[i];
        count2++;
      }else {
        count1--;
        count2--;
      }
    }

    //verification if maj1 and maj2 element is in majority or not
    let result = [];
    let freq1 = 0;
    let freq2 = 0;
    for(let i=0; i<len; i++){
      if(nums[i] === maj1){
        freq1++;
      }
      if(nums[i] === maj2){
        freq2++;
      }
    }
    if(freq1 > Math.floor(len/3)){
      result.push(maj1);
    }
    if(freq2 > Math.floor(len/3)){
      result.push(maj2);
    }
    return result;
}