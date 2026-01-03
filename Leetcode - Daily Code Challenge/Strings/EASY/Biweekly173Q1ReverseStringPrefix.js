/* Biweekly Contest 173
q1. Reverse String Prefix
Input: s = "abcd", k = 2

Output: "bacd"

Explanation:​​​​​​​

The first k = 2 characters "ab" are reversed to "ba". The final resulting string is "bacd".


*/

var reversePrefix = function(s, k) {
    let len = s.length;
    if(len === k){
        return s.split('').reverse().join('');
    }
    let sArr = s.split('');
    let i = 0;
    let j = k-1;
    while(i < j){
        [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
        i++;
        j--;
    }
    return sArr.join('');
};