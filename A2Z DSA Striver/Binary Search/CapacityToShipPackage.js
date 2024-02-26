/* 1011. Capacity to ship packages within D days
least capacity

Brute O((sum-max)+1 * N) ~ O(n^2)
Optimal - BS (NlogN)
*/
//find days function
function findDays(weights, cap){
  let days=1;
  let load =0;
  let len = weights.length;
  for(let i=0; i<len; i++){
    if(load+weights[i] > cap){
      days +=1; //move to next day
      laod = weights[i];
    }else{
      laod += weights[i];
    }
  }
  return days;
}
function bruteLeastWeightCapacity(weights,d){
  let max = Math.max(...weights);
  let sum = weights.reduce((sum,weight)=>sum+weight,0);
  for(let i=max; i<=sum; i++){
    if(findDays(weights, i) <= d){
      return i;
    }
  }
  return -1;
}

//optimal way
function optimalLeastWeightCapacity(weights,d){
  let low = Math.max(...weights);
  let high = weights.reduce((sum,weight) => sum+weight,0);
  while(low<=high){
    let mid = Math.floor(low+high/2);
    let numberOfDays = findDays(weights,mid);
    if(numberOfDays <= d){
      //eliminates right half
      high = mid-1;
    }else {
      low=mid+1;
    }
  }
  return low; // it will give ans, because we need least Days
}