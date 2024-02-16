/* Leaders in array
pick one element and check if everything in right of it is greater, if yes so it is a leader.
arr = [10,22,12,3,0,6] -> last element will always a leader, So ans will be - [6,12,22]

-- Brute force : pick earch element and do linear search in the right of it.
O(n^2)
for(let i=0; i<=len-1; i++){
  leader = true;
  for(let j=i+1; j<=len-1; j++){
    if(arr[j] > arr[i]){
      leader = fasle;
      break;
    }
  }
  if(leader){
    ans.push(arr[i]);
  }
}
*/

//Optimal Approach : we travser from back and we know last elemnt is leader, and we take a max elemnt and compare each elemnt to max, if element is greater than max, we change the max and put that element in ans. 
//TC O(n), SC: O(n)
function printLeaders(arr,n){
  let ans = [];
  let max = arr[n-1];
  ans.push(arr[n-1]);

  //start checking from the end whether a number i greater than max no from right, hence leader.
  for(let i = n-2; i>=0; i--){
    if(arr[i] > max){
      max = arr[i];
      ans.push(arr[i]);
    }
  }
  return ans;
}
let arr = [10,22,12,3,0,6];
let n = arr.length;
console.log(printLeaders(arr, n));