/* 
Input: n1 = 4, n2 = 6

Output: 12

Explanation: 4 * 3 = 12, 6 * 2 = 12.

12 is the lowest integer that is divisible both 4 and 6.
*/
const lcm = (n1, n2) => {
  //in this we need to run the loop of max one, and inside loop we need to multiple multiple that n with i
  let max = Math.max(n1, n2);
  let lcm = 0;
  for(let i=1; i<=max; i++){
    let mul = max * i;
    if(mul % n1 === 9 && mul % n2 === 0){
      lcm = mul;
      break;
    } 
  }
  return lcm;
}