//A2Z Basic Recursion N to 1
function printNToOne(i,n){
  if(i<1){ return; }
  console.log(i);
  printNToOne(i-1,n);
}
const num = 9;
printNToOne(num, num);