/* leetcode 128. Longest Consecutive Sequence
arr[] = [102,4,100,1,101,3,2,1];
arr1 = [1,2,3,4, arr2 = [100,101,102]
ans = [1,2,3,4] - 4
*/
//Brute Force - O(n^2) - 
function linearSearch(arr,num){
  let n = arr.length;
  for(let i=0; i<n; i++){
    if(arr[i] === num){
      return true;
    }
  }
  return false;
}
function BruteLongestSuccessiveElement(arr){
  let Longest = 1;
  let n = arr.length;
  for(let i=0; i<n; i++){
    let curr = arr[i];
    let cnt = 1;
    while(linearSearch(arr, curr+1) === true){
      curr++;
      cnt++;
    }
    Longest = Math.max(Longest,cnt);
  }
  return Longest;
}
console.log(BruteLongestSuccessiveElement([102,4,100,1,101,3,2,1,1]));

//Optimal Approach - using set
//TC - O(n) + O(2n) => O(3n), SC - O(n)
 function OptimalLongestSuccessiveElement(arr){
  let n = arr.length;
  let Longest = 1;
  let set = new Set();

  if(n===0){
    return;
  }
  for(let i=0; i<n ; i++){
    set.add(arr[i]);
  }
  for(let it of set){
    //if 'it' is a starting point/number
    if(!set.has(it-1)){
      let cnt = 1;
      let curr = it;
      while(set.has(curr+1)){
        curr++;
        cnt++
      }
      Longest = Math.max(Longest,cnt);
    }
  }
  return Longest;
 }
 console.log("Optimal Approach " + OptimalLongestSuccessiveElement([102,4,100,2,3,4,1,1])); 