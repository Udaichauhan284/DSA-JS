/* 1539 Kth missing positive number
find the kth position number which is missing from arr
Brute app. O(n) 
Optimal app. O(logn)
*/
//brute
function kthMissingNumber(arr,k){
  let len= arr.length;
  for(let i=0; i<len; i++){
    if(arr[i] <= k){
      k++;
    }else{
      break;
    }
  }
  return k;
}

//Optimal
function OkthMissingNumber(arr,k){
  let low=1;
  let len = arr.length;
  if(len <= 1) return arr[0]-1;
  let high=len-1;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    let missingNumber = arr[mid] - (mid+1);
    if(missingNumber < k){
      low=mid+1;
    }else {
      high=mid-1;
    }
  }
  // return k+high+1;
  return low+k 
}

console.log(OkthMissingNumber([2],1));