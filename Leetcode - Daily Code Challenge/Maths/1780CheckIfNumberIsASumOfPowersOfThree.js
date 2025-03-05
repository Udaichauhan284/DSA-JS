/*1780. Check if Number if A Sum of Powers of Three
04 March 25, leectode POTD, Math Medium
Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

An integer y is a power of three if there exists an integer x such that y == 3x.

Example 1:

Input: n = 12
Output: true
Explanation: 12 = 31 + 32
*/

/*In this we can use the Maths, we minus the
pow from n and keep on doing it, till n become
zero, and in that loop if n is still greater
then pow we will return false
TC: O(log3(n)) in ques pow of 3, SC: O(1)
*/
var checkPowersOfThree = function(n) {
    let p = 0;
    //now increase the power, till it
    //less and equal to n 
    while(n >= Math.pow(3,p)){
        p++;
    }

    //now use that and check from n, by doing
    //the minus from n
    while(n > 0){
        //check if n is small from pow
        if(n >= Math.pow(3,p)){
            n = n - Math.pow(3,p);
        }

        //now check, if still n is greater
        if(n >= Math.pow(3,p)){
            return false;
        }
        p--;
    }
    return true;
};