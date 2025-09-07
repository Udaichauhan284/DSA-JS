/*1304. Find N unique Integers Sum up to Zero
07 Sept 2025, Leetcode EASY
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
*/

/*Method-1, for finding the number whos sum
is zero, we can put the elem and negative of 
same elem and increment i by +2, we already
fill i and adjacent i+1 with elem and -elem
respectively, and in loop we will check till
i+1 < n
TC: O(n), SC: O(n), if consider result arr
*/
var sumZero = function(n) {
    let result = new Array(n).fill(0);
    let elem = 1;
    let i = 0;
    while(i+1 < n){
        result[i] = elem;
        result[i+1] = elem*-1;
        elem++; //increase the elem
        i+=2; //increase the pointer
    }
    return result;
};

/*Method2, we can use the two pointer, i will start put + 
elem from starting and j will start putting - elem from 
end so this will give the sum of 0
TC: O(n), SC: O(n) if we consider the result  or O(1) 
*/
var sumZero = function(n) {
    let result = Array(n).fill(0);
    let i=0,j=n-1;
    let elem = 1;
    while(i < j){
        result[i] = elem;
        result[j] = elem*-1;
        i++;
        j--;
        elem++;
    }
    return result;
};