/* 151. Reverse Words in a String.
*/
//TC O(n), SC O(n)
function reverseWordInString(s){
  let arr = s.split(" ");
  let reverseStr = "";
  for(let i=arr.length-1; i>=0; i--){
    if(arr[i] === " ") continue;
    if(reverseStr.length > 0) reverseStr += " ";
    reverseStr += arr[i];
  }
  return reverseStr;
}
let str = "the blue is sky";
console.log(reverseWordInString(str));