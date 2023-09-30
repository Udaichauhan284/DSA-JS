function reverseNum(n){
  let reverseN = 0;
  let num = n;
  while(num!==0){
    let lastDigit = Math.floor(num % 10);
    reverseN = reverseN * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  console.log(reverseN);
}
reverseNum(123);