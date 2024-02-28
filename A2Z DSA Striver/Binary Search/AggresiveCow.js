/* Aggressive Cow
we need to place cown like the ways 
(mini dist between the cows) is max
*/
//for this first we need a function canWePlace cow  canWePlace(stalls,dist,cows) dist is the dist at where we can put cows.
//Brute Use linear search and first find the range to use to sort method so that we can sort given arr O(nlogn) + O(n^2)
const canWePlace = (stalls,dist,cows) =>{
  let len = stalls.length;
  let last = stalls[0]; //put the last cow
  let cntCows = 1;
  for(let i=1; i<len; i++){
    if(stalls[i]-last >= dist){
      cntCows++; //place the next cow
      last = stalls[i]; //update the last cow
    }
    if(cntCows >= cows) return true;
  }
  return false;
}
const bruteAggressiveCows = (stalls, k) => {
  let len = stalls.length;
  stalls.sort((a,b)=>a-b);
  let limit = stalls[len-1] - stalls[0];
  for(let i=1; i<=limit; i++){
    if(canWePlace(stalls,i,k)===false){
      return i-1;
    }
  }
  return limit;
}

//Optimal way - O(nlogN + nlogN) - O(nlogn)
const optimalAggressiveCows = (stalls, k) => {
  let len = stalls.length;
  stalls.sort((a,b) => a-b);
  let low = 1, high=stalls[len-1] - stalls[0];
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(canWePlace(stalls,mid,k)){
      low=mid+1;
    }else{
      high=mid-1;
    }
  }
  return high; //it will return max
}
let arr = [0,3,4,7,10,9]
console.log(bruteAggressiveCows(arr,4))
console.log(optimalAggressiveCows(arr,4))