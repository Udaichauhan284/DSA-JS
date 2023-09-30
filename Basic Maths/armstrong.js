function armstrong(n){
  let num = n;
  let count = 0;
  let temp = num;
  while(temp!==0){
    temp = Math.floor(temp/10);
    count++;
  }
  let sumofPower = 0;
  while(num!==0){
    let digit = num % 10;
    sumofPower+= Math.pow(digit,count);
    num = Math.floor(num/10);
  }
  if(sumofPower === n){
    return "Yes it is Armstrong";
  }
  return "No it is not";
}
console.log(armstrong(154));