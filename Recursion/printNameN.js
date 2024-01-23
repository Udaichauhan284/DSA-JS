function printNameN(i,n){
  if(i>n) return;
  console.log("Udai");
  printNameN(i+1,n);
}
let number = 5
printNameN(1,number);