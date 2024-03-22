/* 17. Letter Combination
ex: digits : "23", 2-abc, 3-def 
output: ["ad","ae","af","bd","be","bf","cd","ce","cf"];
*/
//Same Backtracking adn recusion happeining here - O(4^n * n) - 4 is combining from constranits and n combining from for loop
const letterCombination = (digits) => {
  let temp = [];
  let ans = [];
  if (digits.length === 0) {
    return ans;
  }

  let map = new Map();
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");

  doSolve(0,digits,temp,ans,map);
  return ans;
};
const doSolve = (idx,digits,temp,ans,map) => {
  //base condition
  if(idx >= digits.length){
    ans.push(temp.join("")); //using join so that ad will combine
    return;
  }

  //main code
  let ch = digits[idx];
  let str = map.get(ch);
  for(let i=0; i<str.length; i++){
    temp.push(str[i]);
    doSolve(idx+1,digits,temp,ans,map);
    temp.pop();
  }
}
let digits = "23";
console.log(letterCombination(digits));
