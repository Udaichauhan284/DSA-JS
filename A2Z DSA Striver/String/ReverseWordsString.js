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

// more optimize
const optimize = (s) => {
  let str = s.split(" ");
  let output = "";
  for(let i=str.length-1; i>=0; i--){
    if(str[i]){
      if(output.length > 0){
        output += " ";
      }
      output += str[i];
    }
  }
  return output;
}
let str = "the sky is blue";
console.log(reverseWordInString(str));
console.log(optimize(str));