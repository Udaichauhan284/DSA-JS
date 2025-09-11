/* 2785. Sort Vowels in a String
11 Sept 2025, leetcode potd, medium
Input: s = "lEetcOde"
Output: "lEOtcede"
Explanation: 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places.
*/

//TC: O(k + nlogn) ~ O(nlogn), SC: O(n)
var sortVowels = function(s) {
   const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);

    // collect vowels only
    let vowelArr = [];
    for (let ch of s) {
        if (vowels.has(ch)) {
            vowelArr.push(ch);
        }
    }

    // sort vowels by charCode, O(nlogn)
    vowelArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

    // rebuild string
    let result = "";
    let j = 0;
    for (let ch of s) { //O(k)
        if (vowels.has(ch)) {
            result += vowelArr[j++];
        } else {
            result += ch;
        }
    }

    return result;
};

/*Method2, we use the counting sort, we will maintain the
count map of vowel and in a string we have sorted vowel
string "AEIOUaeiou"
TC: O(n+n) ~ O(2n) ~ O(n) , SC: O(n)
*/
var sortVowels = function(s) {
    let map = new Map(); //maintain freq of vowels
    for(let ch of s){ //O(n)
        if(isVowel(ch)){
            map.set(ch, (map.get(ch) || 0)+1);
        }
    }
    //we know sorted string of vowel
    let sortedVowel = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']; //SC: O(n)
    let j = 0; //pointer for sortedVowel
    let result = "";
    for(let ch of s){ //O(n)
        if(isVowel(ch)){
            while(j < sortedVowel.length && (!map.has(sortedVowel[j])) || map.get(sortedVowel[j]) === 0){
                j++; //i dont get that vowel in sorted vowel, 
                //so move pointer
            }
            result += sortedVowel[j];             // place smallest available vowel
            map.set(sortedVowel[j], map.get(sortedVowel[j]) - 1); // decrease count
        }else{
            result += ch;
        }
    }
    return result;
};
function isVowel(ch){
    let newCh = ch.toLowerCase();
    if(newCh === 'a' || newCh === 'e' || newCh === 'i' || newCh === 'o' || newCh === 'u'){
        return true;
    }
    return false;
}