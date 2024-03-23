/* 131. Palindrome Partitioning
s = "aab"
output : [["a","a","b"],["aa","b"]]
*/
const parition = (s) => {
  let temp = [];
  let ans = [];

  findSolve(0,s,temp,ans);
  return ans;
}
function findSolve(idx,s,temp,ans){
  if(idx === s.length){
    ans.push([...temp]);
    return;
  }

  //main code 
  for(let i=idx; i<s.length; i++){
    if(isPal(s,idx,i)){
      temp.push(s.substring(idx,i+1));
      findSolve(i+1,s,temp,ans);
      temp.pop();
    }
  }
}
function isPal(s,start,end){
  while(start <= end){
    if(s.charAt(start) !== s.charAt(end)){
      //if(s[start] !== s[end]){}
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(parition("aab"));