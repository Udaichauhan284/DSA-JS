/* 3223. Minimum Length of String After Operations
13 Jan 25, Leetcode POTD, String, freq arr

Input: s = "abaacbcbb"

Output: 5

Explanation:
We do the following operations:

Choose index 2, then remove the characters at indices 0 and 3. The resulting string is s = "bacbcbb".
Choose index 3, then remove the characters at indices 0 and 5. The resulting string is s = "acbcb".

*/


/*Count the freq of every char, and them in loop, 
remove the -2, from freq only when ===3 and we deleted the
2 char, so also increase the count of delete by 2
and at last len-deleted is out ans.
TC: O(n), SC: O(26)~O(1)
*/
var minimumLength = function(s) {
    let len = s.length;
    let freq = Array(26).fill(0);
    let deleted = 0;
    //fill the freq
    for(let ch of s){
        let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        freq[idx] += 1;

        if(freq[idx] === 3){
            //now delete the 2 char
            freq[idx] -= 2;
            deleted += 2; //we deleted two things, so 
            //increase the delete count.
        }
    }
    return len - deleted;
};

/*Method 2, in this if freq[i] is even atlast deleting that
will give last 2 len string and in odd len string deleting
will give len of 1, so we will add according to that
tc: O(2n)~O(n), SC: O(26)~O(1)
*/
var minimumLength = function(s) {
    let len = s.length;
    let freq = Array(26).fill(0);
    let result = 0;
    for(let i=0; i<len; i++){
        let idx = s.charCodeAt(i) - 'a'.charCodeAt(0);
        freq[idx]++;
    }

    //now traverse over the 26
    for(let i=0; i<26; i++){
        if(freq[i] === 0) continue;

        if(freq[i] % 2 === 0){
            //even len string
            result += 2;
        }else{
            result += 1;
        }
    }
    return result;
};