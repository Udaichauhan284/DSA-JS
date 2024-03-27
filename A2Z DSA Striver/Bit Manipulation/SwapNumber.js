function swap(a,b){
  // let temp = a;
  // a=b;
  // b=temp;
  
  // a = a+b;
  // b = a-b;
  // a = a-b;
  
  //use of XOR same number of XOR will be zero
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  
  console.log(a,b);
}
let a = 5;
let b = 6;
console.log("a = " + a + " b = " + b);
swap(a,b);