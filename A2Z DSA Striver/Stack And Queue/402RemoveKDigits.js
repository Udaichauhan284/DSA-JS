/* 402 Remove K Digits
num = "1432219", k=3
o.p: "1219"
remove the peak element from the left, we need to reomve the first peak element, and if we see leading 0 we need to remove that too
*/
const removeKDigits = (num,k) => {
  let result = "";
  let st = [];
  for(let ch of num){
    while(st.length > 0 && k>0 && st[st.length-1] > ch){
      st.pop();
      k--;
    }
    st.push(ch);
  }

  //now popping happen, if there k left
  while(st.length && k>0){
    st.pop();
    k--;
  }

  //now take out the ans
  let i=0;
  while(st[i] === "0"){
    i++; //skip the zero
  }
  while(i < st.length){
    result = result + st[i];
    i++;
  }
  //if if result length is 0
  if(result.length === 0) return "0";
  return result;
}
// let num = "1432219";
// let k=3;
// let num = "10200";
// let k = 1;

let num = "10";
let k = 2;
console.log(removeKDigits(num,k));