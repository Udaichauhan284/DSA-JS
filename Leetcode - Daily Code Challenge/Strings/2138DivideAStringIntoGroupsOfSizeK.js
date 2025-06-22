/* 2138. Divide A String Into Groups of Size K
22 June 2025, Leetcode POTD, EASY

Input: s = "abcdefghi", k = 3, fill = "x"
Output: ["abc","def","ghi"]
Explanation:
The first 3 characters "abc" form the first group.
The next 3 characters "def" form the second group.
The last 3 characters "ghi" form the third group.
Since all groups can be completely filled by characters from the string, we do not need to use fill.
Thus, the groups formed are "abc", "def", and "ghi".
*/

//TC: O(n), SC: O(1)
const divideString = (s,k,fill) => {
    let len = s.length;
    let result = [];
    let rem = len % k; //to see if s len is multiple of k, so it will easily divide by k
    if(rem !== 0){
        //means it not mulitple of k, so fill with fill vals
        s += fill.repeat(k-rem);
    }
    for(let i=0; i<len; i+=k){
        result.add(s.slice(i,i+k));
    }
    return result;
}