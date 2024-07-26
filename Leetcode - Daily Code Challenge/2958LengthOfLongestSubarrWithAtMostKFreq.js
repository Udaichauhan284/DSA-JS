/* 28 Mar 2024.
2958. Length of Longest Subarray With at Most K Frequency.
i/p nums = [1,2,3,1,2,3,1,2], k=2
o/p: 6 
explaintation : elem freq atmost k=2, [1,2,3,1,2,3];

Optimal Method: Use simple Sliding Window Approach - 
take i and j pointer at 0, take freq {}, count freq, if freq is greater than k, then move the i pointer.
*/
const maxSubarrayLength = (nums,k) => {
  let n = nums.length;
  let i=0;
  let j=0;
  let result = 0;
  let freq = {};
  while(j < n){
    //count the freq, and set the freq, is that elem already present in freq increase by 1.
    freq[nums[j]] = (freq[nums[j]] || 0) + 1;

    //now check the freq if it is not more than k, so move the i pointer
    while(i < j && freq[nums[j]] > k){
      freq[nums[i]]--;
      i++; //remove the i elem, and move i pointer, so window also move
    }
    result = Math.max(result, (j-i+1));
    j++;
  }
  return result;
}
let nums = [1,2,3,1,2,3,1,2];
let k = 2;
console.log(maxSubarrayLength(nums,k));