const palindrome = (x) => {
  let num = x;
  let reverse = 0;
  while(num!==0){
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  if(x === reverse){
    return true;
  }
  return false;
}
console.log(palindrome(123));