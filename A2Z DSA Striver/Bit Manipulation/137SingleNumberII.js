/* 137. Single Number II.
nums = [2,2,3,2]
o/p = 3.
*/
//1.Brute method use the mao, count the freq of elemm, and then traverse the map, to see the value === 1 and return key. TC O(n+m), SC O(n);
const singleNumberMap = (nums) => {
  let map = new Map();
  for(let i=0; i<nums.length; i++){
    map.set(nums[i], (map.get(nums[i]) || 0)+1);
  }

  //traverse the map
  let result = 0;
  map.forEach((value,key) => {
    if(value === 1){
      result = key;
    }
  });
  return result;
}
let nums = [0,1,0,1,0,1,99];
// console.log(singleNumberMap(nums));

//Optimal method 2. use of bitwise, first count the set bit of nums, use loop from 0 to 31 and left shif , and then see if count%3==1, set the bit in ans, so we get that number, which comes only one time. TC O(n*32), SC O(1)
const singleNumber = (nums) => {
  let result = 0;
  for(let bitIndex = 0; bitIndex<31; bitIndex++){
    let count = 0;
    //now traverse the nums array for counting the set bits.
    for(let i=0; i<nums.length; i++){
      if(nums[i] & (1<<bitIndex)){ //counting the setbit - AND and left shift
        count++;
      }
    }
    if(count % 3 === 1){
    result = result | (1<<bitIndex); // now , if count %3 ===1 , change the ans to set bit, it return that ans, which comes only 1 in nums array.
    }
  }
  return result;
} 
// console.log(singleNumber(nums));

//Optimal 2. sort the nums, and set the i pointer at 1 and move that pointer i=i+3, because after the sorting every elem will come in 3 groups, and it will eay to find the single elem if i-1 !== i. return i-1 TC : O(nlogn + n/3) => O(4nlogn) => O(nlogn), SC O(1)
const singleNumber1 = (nums) => {
  let len = nums.length;
  nums.sort((a,b) => a-b);

  for(let i=1; i<len; i=i+3){
    if(nums[i-1] !== nums[i]){
      return nums[i-1];
    }
  }
  return nums[len-1]; //return the last elemen, if for loop not able to find the ans, this means singkle elem is bigger elem and it will at last.
}
console.log(singleNumber1(nums));