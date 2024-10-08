/* 1963. Minimum Number of Swaps to make the String Balanced
08 Oct 2024, Leetcode POTD, String, Stack

Input: s = "][]["
Output: 1
Explanation: You can make the string balanced by swapping index 0 with index 3.
The resulting string is "[[]]".
*/

/*See the pattern, we have even num of open [ and even 
num of ] ones. so if we remove the balance one, we always
get the something like ]]][[[, so check the open bracket
3. in this 3+1/2 =2 swap we need, by /2 because if we do
one swap we will get two pair balanced. thats why we are
dividing by 2. for seeing the count of open or close 
brakcet use stack. TC: O(n), SC: O(n)
*/

const minSwaps = (s) => {
  let stack = [];
  for(let ch of s){
    if(ch === "["){
      stack.push(ch);
    }else if(stack.length !== 0){
      //means in stack there is open bracket and that will join with close one 
      //and make it balance
      stack.pop();
    }
  }
  return Math.floor((stack.length + 1)/2);
}

//OPtimal Method. we can use variable for increasing the size and decreasing the size. TC: O(n), SC: O(1)
const minSwaps1 = (s) => {
  let size = 0;
  for(let ch of s){
    if(ch === "["){
      size++; //measn we pushing in stack
    }else if(size > 0){
      size--; //measn we have someone in stack to make it balance, as size > 0, size--
    }
  }
  return Math.floor((size+1)/2);
}