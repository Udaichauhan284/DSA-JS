/* 1317. Convert Integer To The Sum of Two No-Zero Integers
08 Sept 2025, Leetcode POTD, EASY

Input: n = 2
Output: [1,1]
Explanation: Let a = 1 and b = 1.
Both a and b are no-zero integers, and a + b = 2 = n.
*/

//TC: O(n*logd)
var getNoZeroIntegers = function(n) {
    for(let a=1; a<=n-1; a++){
        let b = n-a;
        if(checkZeros(a) && checkZeros(b)){
            return [a,b];
        }
    }
    return [];
};
function checkZeros(num){
    while(num > 0){
        if(num%10 === 0){
            return false;
        }
        num = Math.floor(num/10);
    }
    return true;
}