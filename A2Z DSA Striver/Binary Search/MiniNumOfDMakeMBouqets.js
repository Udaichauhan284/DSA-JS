/* 1482. Minimum number of days to make m bouqets

*/
//Brute Method
function possible(arr, day, m, k) {
  let n = arr.length; // Size of the array
  let cnt = 0;
  let noOfB = 0;
  // Count the number of bouquets
  for (let i = 0; i < n; i++) {
      if (arr[i] <= day) {
          cnt++;
      } else {
          noOfB += Math.floor(cnt / k);
          cnt = 0;
      }
  }
  noOfB += Math.floor(cnt / k);
  return noOfB >= m;
}

function roseGarden(arr, k, m) {
  let val = m * k;
  let n = arr.length; // Size of the array
  if (val > n) return -1; // Impossible case
  // Find maximum and minimum
  let mini = Infinity, maxi = -Infinity;
  for (let i = 0; i < n; i++) {
      mini = Math.min(mini, arr[i]);
      maxi = Math.max(maxi, arr[i]);
  }

  for (let i = mini; i <= maxi; i++) {
      if (possible(arr, i, m, k))
          return i;
  }
  return -1;
}

let arr = [7, 7, 7, 7, 13, 11, 12, 7];
let k = 3;
let m = 2;
let ans = roseGarden(arr, k, m);
if (ans === -1) {
  console.log("We cannot make m bouquets.");
} else {
  console.log("We can make bouquets on day " + ans);
}

//Optimal Way
var minDays = function(bloomDay, m, k) {
  function possible(bloomDay,day,numFlower){
    let noOfB = 0;
    let count = 0;
    let len=bloomDay.length;
    for(let i=0; i<len; i++){
      if(bloomDay[i] <= day){
        count++;
      }else{
        noOfB += Math.floor(count / numFlower);
        count =0;
      }
    }
    noOfB += Math.floor(count / numFlower);
    return noOfB;
  };

  let len = bloomDay.length;
  let val = m*k;
  if(val > len) return -1;

  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);
  let ans = -1;

  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(possible(bloomDay,mid,k) >= m){
      ans = mid;
      high = mid - 1;
    }else{
      low=mid+1;
    }
  }
  return ans;
};
