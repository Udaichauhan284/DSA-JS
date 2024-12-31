/* solving using the recusion, 
2.recusion call
a. in first recursive call i am taking curr char is part of next chr
b. not taking a part of that curr char.
*/
const powerSet = (str,index,curr,result) => {
  let len = str.length;
  if(index === len){
    result.push(curr);
    return;
  }

  powerSet(str,index+1,curr+str[index],result);
  powerSet(str,index+1,curr,result);
}
let str = "abc";
let index = 0;
let curr = "";
let result = [];
powerSet(str,index,curr,result);
console.log(result);


//Best One - 31 Dec 2024
class Solution {
  //TC: O(2^n * n) for every index we have two option, then for pushing into result n
  //SC: O(n)
  AllPossibleStrings(s){
      //code here
      let result = [];
      let curr = [];
      this.solve(curr, 0, s, result);
      result.sort();
      return result;
  }
  solve(curr, idx, s, result){
      //base case
      if(idx === s.length){
          if(curr.length !== 0)
          result.push(curr.join(""));
          return;
      }
      
      //now we have option to take it and explore and then pop it out
      curr.push(s[idx]);
      this.solve(curr, idx+1, s, result);
      curr.pop();
      this.solve(curr, idx+1, s, result); //explore one more time, we dont take it
  }
}