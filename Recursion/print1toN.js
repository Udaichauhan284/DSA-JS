//A2Z - basic recursion print 1 to N.
function printOneToN(i,n){
  if(i>n) return;
  console.log(i);
  printOneToN(i+1,n);
}
const num = 9
printOneToN(1,num);