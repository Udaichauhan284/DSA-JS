/* Check the number is even or odd.
n = 5, output - odd, 101 & 001 ==> 1 odd
n = 6, output - even. 110 & 001 ==> 0 even
*/
function checkIsEvenOrOdd(num){
  if((num & 1) === 0){
    return "EVEN";
  }else{
    return "ODD";
  }
}
console.log(checkIsEvenOrOdd(5)); //ODD
console.log(checkIsEvenOrOdd(6)); //EVEN