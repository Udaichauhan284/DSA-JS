/* 1400 Construct K Palindrome Strings
11 Jan 25, Leetcode POTD, Strings, Map, Count the Char Len, Array of 26

Input: s = "annabelle", k = 2
Output: true
Explanation: You can construct two palindromes using all characters in s.
Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"

*/ 

/*In this question, try to focus on char len which is 
comes odd times, if that is less then <= k, means we
can form the palindrome strings, return true, otherwise
false.
TC: O(n + n) ~ O(n), SC: O(n)
*/
var canConstruct = function(s, k) {
    //edge case, if s.length === k
    if(s.length === k) return true; //every char is palindorme
    //if s.length is small then k, how can we form
    if(s.length < k) return false;

    let countChar = new Map(); //O(n)
    //now place the char count into map
    for(let ch of s){//O(n)
        countChar.set(ch, (countChar.get(ch) || 0) + 1);
    }

    //now traverse over the map, to see the odd count
    let oddLenChar = 0;
    for(let [key, count] of countChar){//O(n)
        if(count%2 !== 0){
            oddLenChar++;
        }
    }

    //if oddLenChar is 1 and we need to find k=2
    //them we able to form the palindrome string
    return oddLenChar <= k;
};



/*In Method2, we also count the char, but in this we use the
array of 26, so we use the less space for counting each char
TC: O(n+n) ~ O(n), SC: O(26)~O(1)
*/
var canConstruct = function(s, k) {
    let len = s.length;
    //edge case
    if(len === k) return true;
    //if len is small then k, we can perform the palindrome
    if(len < k) return false;

    //now take the array of len 26
    let countChar = Array(26).fill(0);
    //now fill it
    for(let i=0; i<len; i++){
        let idx = s.charCodeAt(i)-'a'.charCodeAt(0);
        countChar[idx]++; //increase the count at that 
        //index of a-0, b-1, 
    }

    //now traverse over the array
    let oddCharLen=0;
    for(let i=0; i<26; i++){
        if(countChar[i]%2 !== 0){
            //if we have odd char len, take it out to 
            //so that we can compare with k
            oddCharLen++;
        }
    }

    return oddCharLen <= k; //if oddCharLen is less then
    //the k we can find the ans true, other wise false;
    //suppose odd=1, k=2, ofc we can form the 2 palindrome string. 
};