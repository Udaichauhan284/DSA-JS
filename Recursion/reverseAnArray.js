//Brute Force
function reverse(arr,start,end){
  // let ans=[];
  // let n = arr.length;
  // for(let i=n-1; i>=0; i--){
  //   ans[n-i-1] = arr[i];
  // }
  // return ans;

  //using Two pointer method
  // let l = 0;
  // let r = arr.length;
  // while(l<r){
  //   let temp = arr[l];
  //   arr[l] = arr[r];
  //   arr[r] = temp;
  //   l++;
  //   r--;
  // }
  // for(let i=0; i<arr.length; i++){
  //   console.log(arr[i]);
  // }

  //recursion
  if(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverse(arr,start+1,end-1);
  }
}
function printArr(arr){
  let ans=[];
  for(let i =0;i<arr.length;i++){
    ans += arr[i] + " ";
  }
  return ans;
}
let num = [1,2,3,4,5];
reverse(num, 0, num.length-1);
console.log(printArr(num));