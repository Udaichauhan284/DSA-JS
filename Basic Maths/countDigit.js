function countDigit(n){
  // let x = n;
  // let count = 0;
  // while(x!==0){
  //   x = Math.floor(x/10)
  //   count++;
  // }
  // console.log(count);

  // Approach 2, convert number to String and return length
  // let digit = n.toString();
  // return digit.length;

  //Approach 3. use log10(n) and then upper bound + 1
  let digit = Math.floor(Math.log10(n) + 1);
  return digit;
}
let num = 123454321
console.log(countDigit(num));