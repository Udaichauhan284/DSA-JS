/* 875. Koko Eating Bananas
1. find the range 1 to max of arr
2. find the total time eating the banan of each pile we need ceil number
3. find the ans reqTime <= h
*/
//Brute Force O(max(arr)*n)
const findMax = (nums) => {
  let maxi = Number.MAX_SAFE_INTEGER;
  let len = nums.length;
  for(let i=0; i<len; i++){
    maxi = Math.max(maxi, nums[i]);
  }
  return maxi;
}
//calculate total time each banana of pile
const calculateTime = (nums,hourly) =>{
  let totalH = 0;
  let len = nums.length;
  for(let i=0; i<len; i++){
    totalH += Math.ceil(nums[i]/hourly);
  }
  return totalH;
}

//find the minEatingSpeed
const bruteMinEatingSpeed = (piles,h) => {
  let max = findMax(piles);
  for(let i=1; i<=max; i++){
    let reqTime = calculateTime(piles,i) //piles, 1-hour check kare, uske 2 hour kye liye check ....
    if(reqTime <= h){
      return i;
    }
  }
  return max; //dummy return
} 

//Optimal using Binary Search on answer - O(max(arr)*logN) - range 1 to max of arr
const optimalMinEatingSpeed = (piles,h) =>{
  let low =1;
  let high = findMax(piles); //range
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    let reqTime = calculateTime(piles,mid);
    if(reqTime <= h){
      high = mid-1; //find on left part
    }else {
      low = mid+1; //find on right part
    }
  }
  return low; //at last low will be ans, because we need minimum k speed
}
let arr = [7,15,6,3];
let h=8;
console.log(bruteMinEatingSpeed(arr,h));
console.log(optimalMinEatingSpeed(arr,h));