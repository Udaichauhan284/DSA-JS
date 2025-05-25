/* 2131. Longest Palindrome by Concatenating Two Letter Words
25 May 25, Leetcode POTD, Medium
Input: words = ["lc","cl","gg"]
Output: 6
Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
Note that "clgglc" is another longest palindrome that can be created.
*/

/*In this, we first traverse over the words array 
and see if the reverse of that word is present in 
array or not, for that we use the map, in that
we store the freq, if present, we use that word and
add in result +4, because we are using the word and 
reverseWord, and also remove that word freq, if not
we add that word in map. Now we see in the map
for word which are same, we check if both char is 
same and freq > 0, we add that in middle with +2
TC: O(2n)~O(n), SC: O(n)
*/
var longestPalindrome = function(words) {
    let result = 0;
    let freqMap = new Map();
    //iterate over the words
    for(let word of words){ //O(n)
        //assign the curr word to reverse word var
        let reverseWord = word[1]+word[0];
        if(freqMap.has(reverseWord) && freqMap.get(reverseWord) > 0){
            result += 4; //use that word and reverseword
            //after using it, remove the freq from map
            freqMap.set(reverseWord, (freqMap.get(reverseWord) || 0)-1);
        }else{
            freqMap.set(word, (freqMap.get(word) || 0)+1);
        }
    }
    //now check for same words
    for(let [word, count] of freqMap){ //O(n)
        //now check if word is same and count > 0
        if(word[0] === word[1] && count > 0){
            //add that word in result, only one time
            result += 2;
            break;
        }
    } 
    return result;   
};