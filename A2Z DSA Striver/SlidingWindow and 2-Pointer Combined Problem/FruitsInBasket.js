/* Fruit in Basket
suppose i have 2 basket, in these 2 basket i can only 2 types of fruit whihc will be sametype, means, in 1 basket i ave to put 1 type of fruit and in basket 2 i need to put other type of fruit.
so if we see this question this question is same as Longest Subarray with atmost 2 type of number(fruit).
fruits = [3,3,3,1,2,1,1,2,3,3,4]
o/p: [1,2,1,1,2], new to return the maxLen = 5.
*/
//Brute Method - generate the subarray, and count the length of that subarray, also take a set, who will store the unique elem, set size will be only 2, because we need only 2 type of fruits in this questiom TC : O(n^2), SC : O(3) ~ O(1)
const fruitsBasket = (fruits) => {
  let len = fruits.length;
  let maxLen = Number.MIN_SAFE_INTEGER;
  for(let i=0; i<len; i++){
    let set = new Set();
    for(let j=i; j<len; j++){
      set.add(fruits[j]);
      if(set.size <= 2){
        maxLen = Math.max(maxLen, j-i+1);
      }else {
        break;
      }
    }
  }
  return maxLen;
}
console.log(fruitsBasket([3,3,3,1,2,1,1,2,3,3,4]));

//Optimal Method - use of sliding Window approach tC : O(n), SC : O(3)
const optimal = (nums) => {
  let len = nums.length;
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let map = new Map();
  while(right < len){
    map.set(nums[right],(map.get(nums[right]) || 0)+1);
    if(map.size > 2){
      map.set(nums[left],(map.get(nums[left]) || 0)-1);
      if(map.get(nums[left]) === 0){
        map.delete(nums[left]);
      }
      left++;
    }

    if(map.size <= 2){
      maxLen = Math.max(maxLen, right+1-left);
    }
    right++;
  }
  return maxLen;
}
console.log(optimal([3,3,3,1,2,1,1,2,3,3,4]))