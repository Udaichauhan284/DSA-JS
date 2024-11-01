/* 1957 Delete Characters To make Fancy String
1st Nov 2024, Leetcode POTD
Input: s = "leeetcode"
Output: "leetcode"
Explanation:
Remove an 'e' from the first group of 'e's to create "leetcode".
No three consecutive characters are equal, so return "leetcode".
*/

/*In this we count first push the first elem, then
we move the loop from 1 and then count the freq of
char if that is less than 3 we push in result string
TC: O(n), SC: O(1)
*/
var makeFancyString = function (s) {
    let sArr = s.split('');
    let result = [];
    result.push(sArr[0]);
    let freq = 1;
    for (let i = 1; i < sArr.length; i++) {
        //here check the curr char with result back
        //char
        if (sArr[i] === result[result.length - 1]) {
            freq++;
            if (freq < 3) {
                result.push(s[i]);
            }
        }else{
            result.push(s[i]);
            freq = 1; //new char
        }
    }
    return result.join('');
};