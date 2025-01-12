/* 2116. Check if a Parentheses String Can be Valid
12 Jan 25, Leetcode POTD, Stack

Input: s = "))()))", locked = "010100"
Output: true
Explanation: locked[1] == '1' and locked[3] == '1', so we cannot change s[1] or s[3].
We change s[0] and s[4] to '(' while leaving s[2] and s[5] unchanged to make s valid.
*/

/*In Method1, we use the open stack and openClose stack
in this we push the open bracker and push the locked[i]
=== 0 in openClose, and then we check if we have open
st, we pop from that, or from openClose, at last when
open st is empty, means we have reached the validation
TC: O(n), SC: O(n)
*/
var canBeValid = function(s, locked) {
    let len = s.length;
    if(len%2 !== 0) return false;
    let open = [];
    let openClose = [];

    //now traverse over the string
    for(let i=0; i<len; i++){
        //first check is i is 0
        if(locked[i] === "0"){
            openClose.push(i); //push the index
        }else if(s[i] === "("){
            open.push(i);
        }else if(s[i] === ")"){
            //check in the open and openClose Stack
            if(open.length !== 0){
                open.pop();
            }else if(openClose.length !== 0){
                openClose.pop();
            }else{
                return false;
            }
        }
    }

    //now if both are not empty so now compare the index
    //open st ind shoul less then openClose index
    //thats how we can make valid, ( )
    while(open.length !== 0 && openClose.length !== 0 &&
    open[open.length-1] < openClose[openClose.length-1]){
        open.pop();
        openClose.pop();
    }

    //now atlast, both open is empty or not
    if(open.length === 0){
        return true;
    }
    return false;
};


/*In method2, we can have variable, open and close
and maintain the open count from left to right traverse
when we hvae open < 0 return false
in right to left, we maintain the close variable
for ) || 0 we increase the count len
TC: O(n + n) ~ O(2n) ~ O(n), SC: O(1)
*/
var canBeValid = function(s, locked) {
    let len = s.length;
    //edge case
    if(len % 2 === 1) return false;

    let open = 0;
    //traverse from left to right
    for(let i=0; i<len; i++){
        if(s[i] === "(" || locked[i] === "0"){
            //this "0" we consider as open 
            open++;
        }else{
            open--;
        }

        if(open < 0) return false; //when open is negative
    }

    //now traverse from right to left
    let close = 0;
    for(let i=len-1; i>=0; i--){
        if(s[i] === ")" || locked[i] === "0"){
            close++;
        }else{
            close--;
        }

        if(close < 0) return false;
    }

    return true;
};