//Minimum element in arr.
const miniElem = (arr,index) => {
  let len = arr.length;
  if(index === len-1){
    return arr[index];
  }
  return Math.min(arr[index], miniElem(arr,index+1));
}
console.log(miniElem([4,5,6,1,0,8,9],0));