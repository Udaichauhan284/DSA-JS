/*2914 Minimum Number of Chnages to make Binary String Beautiful
05 nov 2024, Leetcode POTD, String

Input: s = "1001"
Output: 2
Explanation: We change s[1] to 1 and s[3] to 0 to get string "1100".
It can be seen that the string "1100" is beautiful because we can partition it into "11|00".
It can be proven that 2 is the minimum number of changes needed to make the string beautiful.
*/

/*In this we can divide string into any number 
of substring, so we will divide it even times
as given in question of len 2, it will easy to
check for 0 and 1. TTC: O(n), SC: O(1)
*/
var minChanges = function(s) {
    let len = s.length;
    let changes = 0;
    //for loop and we move i+2 pointer
    for(let i=0; i<len; i+=2){
        if(s[i] !== s[i+1]){
            //measn no equal string
            //need to chnage 1to0 or 0to1
            changes++;
        }
    }
    return changes;
};