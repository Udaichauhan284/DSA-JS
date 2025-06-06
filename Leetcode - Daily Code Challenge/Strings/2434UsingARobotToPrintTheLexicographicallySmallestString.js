/* 2434. Using a Robot to print the lexicographically Smallest String
06 June 2025, Leetcode POTD, Medium

Input: s = "zza"
Output: "azz"
Explanation: Let p denote the written string.
Initially p="", s="zza", t="".
Perform first operation three times p="", s="", t="zza".
Perform second operation three times p="azz", s="", t="".
*/

/*In this we use the stack to push the s char and also maintain the map
to see the freq of every char
TC: O(n), SC: O(n+26)
*/
var robotWithString = function(s) {
    let freq = Array(26).fill(0); //O(26)
    let stack = []; //SC: O(n)
    let minChar = "a";
    let res="";
    //now increase the freq in freq map
    for(let ch of s){ //TC: O(n)
        freq[ch.charCodeAt(0)-"a".charCodeAt(0)]++;
    }

    //iterate over the s string
    for(let ch of s){ //TC: O(n)
        stack.push(ch); //push the ch in stack
        freq[ch.charCodeAt(0)-"a".charCodeAt(0)]--; //decrease the freq of freq

        //now check for the minChar and last freq not zero
        while(minChar !== "z" && freq[minChar.charCodeAt(0)-"a".charCodeAt(0)] === 0){
            //change the minChar
            minChar = String.fromCharCode(minChar.charCodeAt(0)+1);
        }while(stack.length > 0 && stack[stack.length-1] <= minChar){
            res += stack.pop();
        }
    }
    return res;
};