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




/*21 July 2025, Leetcode POTD
in this first we push the first char in
result array, and then in loop we check
new char is same as result previous one
then we increase the freq and if freq is
less then 3 we push into result,
else if next char is not equal to result
prev means that is new char, we push into
result and make freq = 1;
TC: O(n), SC: O(1)
*/
var makeFancyString = function(s) {
    let len = s.length;
    let result = [];
    result.push(s[0]);
    let freq = 1;
    for(let i=1; i<len; i++){
        if(s[i] === result[result.length-1]){
            //checking the curr char with result prev one
            freq++; //increase the freq 
            if(freq < 3){
                //now check the freq is less 3, push in result
                result.push(s[i]);
            }
        }else{
            result.push(s[i]);
            freq = 1;
        }
    }
    return result.join('');
};