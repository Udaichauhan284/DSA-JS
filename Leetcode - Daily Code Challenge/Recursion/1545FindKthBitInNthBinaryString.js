/*1545 FInd Kth Bit in Nth Binary String
19 Oct 2024, Leetcode POTD, string, Recursion

S1 = "0"
Si = Si - 1 + "1" + reverse(invert(Si - 1)) for i > 1

For example, the first four strings in the above sequence are:

S1 = "0"
S2 = "011"
S3 = "0111001"
S4 = "011100110110001"

Example 1:

Input: n = 3, k = 1
Output: "0"
Explanation: S3 is "0111001".
The 1st bit is "0".

*/

/*IN this we use recursion, basic we see the k and then 
look into the originalString Sn-1 string, k < len/2
then i will look into the originalone n-1, if is === to 
len/2 measn k if middle, and in middle there will be '1'.
if k > len/2, in this case we know we are reversing the
originalString, so 1st is 7th bit in reversestring,
so originalString index (len - (k-1)). TC:O(n),SC:O(n)
*/
var findKthBit = function(n, k) {
  let len = (1<<n)-1; //left shift used in Pow(2,n)
  if(n === 1){
      return '0'; //given in question S1="0"
  }
  //now main logic
  if(k < Math.ceil(len/2)){
      //measn look into original string Sn-1
      return findKthBit(n-1, k);
  }else if(k === Math.ceil(len/2)){
      //measn we are at middle
      return "1";
  }else{
      //means k is bigger then middle
      let ch = findKthBit(n-1,(len-(k-1)));
      //look for char in originalstring len-(k-1)
      return ch === "0" ? "1" : "0"; //handling the
      //invert case
  }
};