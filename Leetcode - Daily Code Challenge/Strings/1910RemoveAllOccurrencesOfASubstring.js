/*1910. Remove All Occurrences of a Substrings
LC POTD 11 Feb 2025, String, Stack

Input: s = "daabcbaabcbc", part = "abc"
Output: "dab"
Explanation: The following operations are done:
- s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
- s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
- s = "dababc", remove "abc" starting at index 3, so s = "dab".
Now s has no occurrences of "abc".

*/

/*Method 1, use of stacks, we will check last of part and
stack, if matched we start removing from stack
TC: O(m*n), SC: O(n)
*/
var removeOccurrences = function(s, part) {
    let st = [];
    let pLen = part.length;

    for (let i = 0; i < s.length; i++) {
        st.push(s[i]);
        
        // Check if the last pLen characters in stack match `part`
        if (st.length >= pLen && check(st, part)) {
            for (let j = 0; j < pLen; j++) {
                st.pop();
            }
        }
    }

    return st.join(""); 
};

// Function to check if the last `pLen` elements in `st` match `part`
function check(st, part) {
    let start = st.length - part.length;
    if (start < 0) return false; // Not enough characters to compare
    
    for (let i = 0; i < part.length; i++) {
        if (st[start + i] !== part[i]) {
            return false;
        }
    }
    return true;
}

/*Method 2, use of String, we this as stack, and use of slice 
method, TC: O(m*n), SC: O(1), if we ignore result 
*/
var removeOccurrences = function(s, part) {
    let result = "";
    let pLen = part.length;
    for(let ch of s){
        result += ch;

        if(result.length >= pLen && result.slice(-pLen) === part){
            result = result.slice(0, -pLen);
        }
    }
    return result;
};