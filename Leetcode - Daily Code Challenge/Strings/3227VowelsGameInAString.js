/* 3227. Vowels Game in a String
12 Sept 2025, leetcode potd, medium
Input: s = "leetcoder"

Output: true

Explanation:
Alice can win the game as follows:

Alice plays first, she can delete the underlined substring in s = "leetcoder" which contains 3 vowels. The resulting string is s = "der".
Bob plays second, he can delete the underlined substring in s = "der" which contains 0 vowels. The resulting string is s = "er".
Alice plays third, she can delete the whole string s = "er" which contains 1 vowel.
Bob plays fourth, since the string is empty, there is no valid play for Bob. So Alice wins the game.
*/
//TC: O(n), SC: O(1)
var doesAliceWin = function(s) {
    for(let ch of s){
        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            return true;
        }
    }
    return false;
};