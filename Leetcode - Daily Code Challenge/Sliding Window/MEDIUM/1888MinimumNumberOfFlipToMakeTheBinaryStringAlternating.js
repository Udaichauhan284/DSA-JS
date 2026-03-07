/* 1888. Minimum Number of Flips to Make the Binary String Alternating
07 March 2026, leetcode potd, medium

Input: s = "111000"
Output: 2
Explanation: Use the first operation two times to make s = "100011".
Then, use the second operation on the third and sixth elements to make s = "101010".
*/

/*Method 1, in type-1, we need to move the
string, it will be same after its len of 
movement, so just append s+s and form two
string of alternative 0 and 1, to check 
how many count we need
s1=01010101---, s2=1010101---
TC: O(2*n) ~ O(n), SC: O(2*n)

When we rotate a string, its pattern repeats after length n.
So we duplicate the string (s + s) to simulate all rotations.

Then we compare every window of size n with two alternating patterns:

Pattern1: 010101...
Pattern2: 101010...

Using sliding window we track mismatches (flips required).
*/
var minFlips = function(s) {
    let len = s.length;
    s = s+s; //0011 -> 00110011
    let s1 = ""; 
    let s2 = "";
    //now create the alternative string
    //s1 -> 01010101...
    for(let i=0; i<(2*len); i++){
        s1 += (i%2 ? '0' : '1');
        s2 += (i%2 ? '1' : '0');
    }

    let flip1 = 0, flip2 = 0;
    let result = Number.MAX_VALUE;
    let i = 0; 
    let j = 0;
    while(j < (2*len)){
        //now add the flip count
        if(s[j] !== s1[j]){
            //means new char if not equal, need to flip
            flip1++;
        }

        if(s[j] !== s2[j]){
            flip2++;
        }

        //now shrink the window
        if(j-i+1 > len){
            //now remove the i char from left
            if(s[i] !== s1[i]){
                flip1--;
            }

            if(s[i] !== s2[i]){
                flip2--;
            }
            i++;
        }

        if(j-i+1 === len){
            result = Math.min(result, Math.min(flip1, flip2));
        }
        j++;
    }
    return result;
};

/*
Method 2 (Optimal)

Instead of physically rotating the string (s+s),
we simulate rotation using index % len.

Also instead of creating alternating strings,
we compute expected characters using parity.

Pattern1 → 010101...
Pattern2 → 101010...

We maintain a sliding window of size = original length
and count flips needed for both patterns.
TC: O(2*n), SC: O(1)
*/
var minFlips = function(s) {
    let len = s.length;
    let flip1 = 0;
    let flip2 = 0;
    let result = Number.MAX_VALUE;
    let i = 0;
    let j = 0;

    //sliding window
    while(j < (2*len)){
        //now find the expected char at j
        let expectedCharS1 = (j%2) ? "1" : "0";
        let expectedCharS2 = (j%2) ? "0" : "1";

        //now check the new char
        if(s[j%len] !== expectedCharS1){
            flip1++;
        }
        if(s[j%len] !== expectedCharS2){
            flip2++;
        }

        //now shrink the window from left
        if(j-i+1 > len){
            //what will be expected char at i, find again
            expectedCharS1 = (i%2) ? "1" : "0";
            expectedCharS2 = (i%2) ? "0" : "1";

            if(s[i%len] !== expectedCharS1){
                flip1--;
            }
            if(s[i%len] !== expectedCharS2){
                flip2--;
            }
            i++;
        }

        if(j-i+1 === len){
            result = Math.min(result, Math.min(flip1, flip2));
        }

        j++;
    }
    return result;
};

/*
in slinding window, use IF

window size increases by exactly 1
and only one removal is needed

use while
multiple removals may be needed

*/