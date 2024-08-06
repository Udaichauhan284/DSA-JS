/* 3016 Minimum Number of Pushes To Type Word II
06 August 2024, Leetcode POTD
Input: word = "abcde"
Output: 5
Explanation: The remapped keypad given in the image provides the minimum cost.
"a" -> one push on key 2
"b" -> one push on key 3
"c" -> one push on key 4
"d" -> one push on key 5
"e" -> one push on key 6
Total cost is 1 + 1 + 1 + 1 + 1 = 5.
It can be shown that no other mapping can provide a lower cost.

*/

/*In this we can use Method 2 of 3014, as ch is repeating
so first place put the high freq ch, so that we find the min
of press of key, so first count the freq of ch of word.
sort the freq in descending order, now find the freq and press
in for-loop of 0to26
TC: O(n)+O(26lgo26)+O(26) ~ O(n), SC: O(26)~ O(1)
*/
const minimumPushes = (word) => {
  let result = 0;
  let freqArr = Array(26).fill(0); // as we need freq for each char in word
  for(let ch of word){
    let currCh = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    freqArr[currCh]++;
  }
  //sort the freqArr
  freqArr.sort((a,b) => b-a);
  //now find the freq and press
  for(let i=0; i<26; i++){
    let freq = freqArr[i];
    let press = Math.floor(i/8)+1;
    result += (freq * press);
  }
  return result;
} 