// Sum of All element in arr
const sumElem = (arr,index) => {
  let len = arr.length;
  if(index === len){
    return 0;
  }
  return arr[index] + sumElem(arr,index+1);
}
console.log(sumElem([1,2,3,4,5],0));