//Print element of arr
const printArr = (arr,index) => {
  let len = arr.length
  if(index===len){
    return arr[len];
  }
  console.log(arr[index]);
  return printArr(arr,index+1);
}
let arr = [4,5,6,7,8];
printArr(arr,0);

//Print element of arr in reverse order
const printInReverseOrder = (arr,index) => {
  let len = arr.length;
  if(index === len){
    return arr[len];
  } 
  printInReverseOrder(arr,index+1);
  console.log(arr[index]);
}
let arr1 = [4,5,6,7,8];
printInReverseOrder(arr1,0)