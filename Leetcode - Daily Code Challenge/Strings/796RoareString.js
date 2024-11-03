/* 796 Roatate String
03 Nov 2024, Leetcode POTD, String

Input: s = "abcde", goal = "cdeab"
Output: true
*/

 //TC: O(n), SC: O(n)
var rotateString = function(s, goal) {
    //edge case check
    if(s.length !== goal.length){
        return false;
    }

    return s.concat(s).includes(goal);
};

/*Use of Concat and then search for it
from i=0 to s.length TC: O(n), SC: O(n)
*/
var rotateString = function(s, goal) {
    if(s.length !== goal.length){
        return false;
    }
    let concated = s+s;
    let conLen = concated.length;
    for(let i=0; i<conLen; i++){
        let rotated = concated.substring(i, i+s.length);
        if(rotated === goal){
            return true;
        }
    }
    return false;
};