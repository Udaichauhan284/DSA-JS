// Print number from N to 1.
const print = (n) => {
  if(n===1){
    console.log(1);
    return;
  }
  console.log(n);
  return print(n-1);
}
print(5); // o/p 5,4,3,2,1

//Print number from 1 to N.
const print1 = (n) => {
  if(n===1){
    console.log(1);
    return;
  }
  print1(n-1);
  console.log(n);
}
print1(5); // o/p : 1,2,3,4,5

//Print even number from N to 1.
const printEven = (n) => {
  if(n===2){
    console.log(2);
    return;
  }

  console.log(n);
  return printEven(n-2);
}
printEven(8);

//Print even number from 1 to n. only using 1 argument
const printEven1 = (n) => {
  if(n===2){
    console.log(2);
    return;
  }

  printEven1(n-2);
  console.log(n);
}
console.log("Even Number From 1 to N");
printEven1(10);