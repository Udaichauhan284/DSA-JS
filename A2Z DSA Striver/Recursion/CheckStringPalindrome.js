// check string is palindrom or not - naman reverse it naman
const isPal = (str,start,end) => {
  if(start >= end){
    return true;
  }
  if(str[start] !== str[end]){
    return false;
  }
  return isPal(str,start+1, end-1);
}
let str = "namani";
let start = 0;
let end = str.length-1;
console.log(isPal(str,start,end));