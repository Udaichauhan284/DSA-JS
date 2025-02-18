/* 2375. Construct Smallest Number From DI String
18 Feb 25, Leetcode POTD, String

Input: pattern = "IIIDIDDD"
Output: "123549876"
Explanation:
At indices 0, 1, 2, and 4 we must have that num[i] < num[i+1].
At indices 3, 5, 6, and 7 we must have that num[i] > num[i+1].
Some possible values of num are "245639871", "135749862", and "123849765".
It can be proven that "123549876" is the smallest possible num that meets the conditions.
Note that "123414321" is not possible because the digit '1' is used more than once.
*/

/*In this, we can use the stack, and follow the pattern
and in for loop, we check for i==n and "I"
TC: O(n),SC: O(n)
*/
var smallestNumber = function(pattern) {
    let len = pattern.length;
    let result = "";
    let stack = [];

    for(let i=0; i<=len; i++){
        stack.push(i+1);

        if(i===len || pattern[i] === "I"){
            while(stack.length > 0){
                result += stack.pop();
            }
        }
    }
    return result;
};

