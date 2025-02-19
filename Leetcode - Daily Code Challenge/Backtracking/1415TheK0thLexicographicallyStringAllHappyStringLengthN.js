/*1415. The k-th Lexicographical String All Happy Strings length n
19 Feb 25, Leetcode POTD, String, Backtracking

Input: n = 1, k = 3
Output: "c"
Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".
*/


/*In Method One, we use the Backtracking, we will 
take the string array and result array and start
exxplore from a to c and do,explore and undo
TC: O(3 * 2^(n-1)), SC: O(3*2^(n-1));
*/
var getHappyString = function(n, k) {
    let result = [];
    solve(n,[],result);
    if(result.length < k){
        return ""; //k len is bigger then result
    }
    return result[k-1]; // one based index
};
function solve(n,curr,result){
    if(curr.length === n){
        result.push(curr.join(""));
        return;
    }
    
    for(let ch of ["a","b","c"]){
        if(curr.length > 0 && curr[curr.length-1] === ch){
            continue;
        }

        curr.push(ch); // DO
        solve(n,curr,result); //explore
        curr.pop(); //UNDO
    }
}