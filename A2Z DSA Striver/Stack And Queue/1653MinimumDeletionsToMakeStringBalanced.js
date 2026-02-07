/* 1653. Minimum Deletions to Make String Balanced
30 July 2024, Leetcode POTD, String, Stack

You are given a string s consisting only of characters 'a' and 'b'​​​​.

You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.

Return the minimum number of deletions needed to make s balanced.

Input: s = "aababbab"
Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").

*/

/*Method 1- in this ques, we need to modify the string, measn
we need to delete one char, to make it balanced, when case 
comes of moditifcation of string, Try Stack, we start pushing
char in stack, we need that no b on left side of a "ba", so 
psuh in stack, when you see the a and check the top of stack
when top of stack is b. remove the top and increase the count
measn we deleted that occurence. We just need the count of chr
TC: O(n), SC: O(n)
*/
var minimumDeletions = function (s) {
    let st = [];
    let len = s.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (st.length > 0 && s[i] === "a" && st[st.length - 1] === "b") {
        //means pair form ba, increase the count
        count++;
        //pop the elem, st top
        st.pop();
        } else {
        st.push(s[i]);
        }
    }
    return count;
};

/*Method 2- use of variables instead of stack, we need to maintain 
that b not comes at left side of a, so we take a counter of b, when
we see the b increase the count of b, and when we see the a, first 
increase the count of a and also check that b is bigger then a, if yes
incresae the deletionCount and increase the count of a.
TC: O(n), SC: O(1)
*/
var minimumDeletions = function (s) {
    let len = s.length;
    let bCount = 0;
    let aCount = 0;
    let delCount = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] === "b") {
        bCount++;
        } else if (s[i] === "a" && bCount > aCount) {
        aCount++;
        delCount++;
        }
    }
    return delCount;
};



//07 Feb 2026
/*In this we need to check the string n also modified
it. so for this we can take the stack, we need to 
check no a after the b, so we will push char in stack
when curr char is a and top of stack is b, means
a is comming after the b, need to delete that one
TC: O(n), SC: O(n)
*/
var minimumDeletions = function(s) {
    let st = [];
    let delCount = 0;
    for(let char of s){
        //check the condition first
        if(st.length > 0 && char === 'a' && st[st.length-1] === 'b'){
            //means a is comming after the b, remove
            delCount++;
            st.pop();
        }else{
            st.push(char);
        }
    }
    return delCount;
};


/*Method2, we can use the variable instead of stack
we need b should not comes before the a, means on the 
left of a. we will maintain the count, when we are
at char a, and bcount is greater than a, it measn
b comes before a, need to delete it
TC: O(n), SC: O(1)
*/
var minimumDeletions = function(s) {
    let delCount = 0;
    let aCount = 0;
    let bCount = 0;
    for(let char of s){
        if(char === 'b'){
            bCount++;
        }else if(char === 'a' && bCount > aCount){
            //means b is on left side of a
            aCount++;
            //increase the delCount, need to remove it
            delCount++;
        }
    }
    return delCount;
};