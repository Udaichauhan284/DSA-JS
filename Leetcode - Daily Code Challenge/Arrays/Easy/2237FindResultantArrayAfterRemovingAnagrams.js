/* 2237. Find Resultant Array After Removing Anagrams
13 Oct 2025, leetcode potd, EASY
Input: words = ["abba","baba","bbaa","cd","cd"]
Output: ["abba","cd"]
Explanation:
One of the ways we can obtain the resultant array is by using the following operations:
- Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
  Now words = ["abba","baba","cd","cd"].
- Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
  Now words = ["abba","cd","cd"].
- Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
  Now words = ["abba","cd"].
We can no longer perform any operations, so ["abba","cd"] is the final answer.
*/

/*Method 1, for finding the anagram, i will take the
26 size array and first for s1 i will add in array
and for s2 i will minus from array, at last i will
traverse over the array if that is zero return true
other false, and in main function always first letter 
will be there so i will start checking from i=1 and
check the anagram and push into the result array
TC: O(n*m) m for checking the s1 and s2
SC: O(n + 26) for result otherwise and 26 letter array
~ O(1)
*/
var removeAnagrams = function(words) {
    let len = words.length;
    let result = [];
    //now add first letter into it
    result.push(words[0]);
    //now start traversing the array
    for(let i=1; i<len; i++){
        //in this checkAnagram function give curr word and previous word which is in result to check if they are anagram or not only add which are not anagram
        if(!checkAnagram(words[i], result[result.length-1])){
            result.push(words[i]);
        }
    }
    return result;
};
const checkAnagram = (s1, s2) => {
    let freq = Array(26).fill(0);
    //first traverse over the s1
    for(let ch of s1){
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    //now traverse over the s2
    for(let ch of s2){
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    //now check the freq array
    for(let i=0; i<26; i++){
        if(freq[i] !== 0){
            return false; //if both string are same, so after minus whole arrya will be zero, so thats why checking if not zero return the false;
        }
    }
    return true;
};



/*Method 2, simple sort the words, if they both are same, means
they are anagram and remove it from resulting array
TC: O(nlogn), SC: O(n)~O(1)
*/
var removeAnagrams = function(words) {
    //now take the result array and put the first word into it, so it will help
    //in comparing
    let result = [words[0]];
    //now traverse over the words string
    for(let i = 1; i < words.length; i++){
        //now take out the prev word in result
        let prev = result[result.length - 1];
        //now sort the prev and curr word
        let sortedPrev = prev.split('').sort().join('');
        let sortedCurr = words[i].split('').sort().join('');

        //now compare both
        if(sortedPrev !== sortedCurr){
            //means they are not equall, means they are not anagram
            result.push(words[i]);
        }
    }
    return result;
};