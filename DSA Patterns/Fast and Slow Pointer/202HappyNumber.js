/* 202. Happy Number 
03 Feb 2026, leetcode potd, EASY
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/


/*Method 1. use of Set, this will help, if we
have that number same in set, we will return 
false, otherwise, we will return true
*/
var isHappy = function(n) {
    let visit = new Set();
    while(!visit.has(n)){
        //if num is not in set, inside loop
        //first add n in set
        visit.add(n);
        n = findNextNumber(n);
        if(n === 1){
            return true;
        }
    }
    return false;
};
const findNextNumber = (n) => {
    let output = 0;
    while(n > 0){
        let digit = n%10;
        output += digit*digit;
        n = Math.floor(n/10);
    }
    return output;
}



var isHappy = function(n) {
    let slow = n, fast = n;
    while(fast !== 1){
        //move the pointer and find the next 
        //number
        slow = findNextNumber1(slow);
        fast = findNextNumber1(findNextNumber1(fast));
        if(slow === fast && slow !== 1){
            //means we are in loop, which is not end
            //at 1. so no happy number
            return false;
        }
    }
    return true;
};
const findNextNumber1 = (n) => {
    let output = 0;
    while(n > 0){
        let digit = n%10;
        output += digit*digit;
        n = Math.floor(n/10);
    }
    return output;
}