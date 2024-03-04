/* 796. Rotate String

*/
//using simple method using includes, which gives worst case TC O(n^2) and SC O(n)
var rotateString = function(s, goal) {
  if(s.length !== goal.length) return false;

  return s.concat(s).includes(goal);
};

//without using includes TC O(n), SC O(n)
const rotateString = (s,goal) => {
  if(s.length !== goal.length) return false;

  let concated = s + s;
  for(let i=0; i<concated.length; i++){
    let rotated = concated.substring(i, i+s.length);
    if(rotated === goal) return true;
  }
  return false;
}