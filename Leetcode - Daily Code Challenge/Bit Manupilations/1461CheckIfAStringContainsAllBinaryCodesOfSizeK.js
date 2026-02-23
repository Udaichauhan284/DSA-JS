/* 1461. Check if a String Contains All Binary Codes of Size K
23 Feb 2026, leetcode potd, medium
Input: s = "00110110", k = 2
Output: true
Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.

*/

/*In this we need to the k len codes, in binary
so if in binaryformat k=2, how many codes we will have
2^k, means 4(00,01,10,11) we will take the sets and store
it.
TC: O(n*k), n is len of s and k will be substring
SC: O(2^k * k) 2^k will be in set and of how much size k size
*/
var hasAllCodes = function(s, k) {
    let len = s.length;
    let set = new Set();
    let codes = 1<<k; //2^k
    for(let i=k; i<=len; i++){
        let subStr = s.substr(i-k, k);
        if(!set.has(subStr)){
            set.add(subStr);
            codes--;
        }
        if(codes === 0){
            return true;
        }
    }
    return false;
};